

class ExpressError extends Error {
    constructor(msg, status){
        super();
        this.msg = msg;
        this.status = status;
        console.log(this.stack)
        // the stack is called on every error from the parent error class and is jst here

    }
}

module.export = ExpressError;













