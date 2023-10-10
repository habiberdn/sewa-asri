class AppError extends Error {
    constructor(message,statusCode){
        super(message) //call the parent constructor
        // wont declare this.message cause when we pass message into it, gonna be a message properly 
        //message the only one parameter that build-in error accept 
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? "fail" : "error"
        this.isOperasional = true 

        Error.captureStackTrace(this,this.constructor)
        //when constructor is called,then the func isnt appear in the stack trace and not polute it 
    }
}

module.exports = AppError