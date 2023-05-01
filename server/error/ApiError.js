class ApiError extends Error{ //расширять Error
    constructor(status, message) {
super(); // вызываем родительский конструктор
//присваиваем то, что получаем параметрами
this.status = status
this.message = message
    }
    static badRequest(message) {
        return new ApiError(404,message)
    }
    static internal(message) {
        return new ApiError(500,message)
    }
    static forbidden(message) {
        return new ApiError(403,message)
    }
}
module.exports = ApiError