class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //1) Filtering 127.0.0.1:3000/api/v1/tours?difficulty[gt]=easy&page=1&sort=1&limit=10
    //3dot means will take all the field out of the object
    const queryObj = { ...this.queryString };
    const exField = ['page', 'sort', 'limit', 'fields'];
    exField.forEach((el) => delete queryObj[el]);
    //2).Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sorting() {
    //3).Sorting 127.0.0.1:3000/api/v1/tours?sort=-price,-ratingAverage
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy); //ascending, - to descending
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitField() {
    //4). Limiting field 127.0.0.1:3000/api/v1/tours?fields=name,duration,price,difficulty
    if (this.queryString.fields) {
      //happen for client to not see much data
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v'); //-   means excluding the field
    }
    return this; //return all object
  }

  pagination() {
    const page = this.queryString.page * 1 || 1; //2 
    const limit = this.queryString.limit * 1 || 100; //5
    const skip = (page - 1) * limit;
    // page 1 1-10, page 2 11-20,page 3 21-30

    this.query = this.query.skip(skip).limit(limit); // limit = limit the amount result ex : 10 result/page
    /* skip = the amount of result that should be skipped before query the data
        because we cant to get second page, we have to skip 10 doc
      */
    return this;
  }
}

module.exports = APIFeatures;
