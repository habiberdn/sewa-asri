const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/APIFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No account find with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // for show the new response of postman
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('No doc found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = await Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    //if want to apply in getAllTour, never duplicate the code, use query middleware instead

    if (!doc) {
      return next(new AppError('No Tour found in that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //to allow for nested GET reviews on tour
    let filter = {}; //ragu
    if (req.params.tourId) filter = { tour: req.params.tourId };

    
    //execute
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sorting()
      .limitField()
      .pagination();
    // const doc = await features.query.explain();
    const doc = await features.query


    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: {
        data:doc,
      },
    });
  });
