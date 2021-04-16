function _getStatusMessage(status) {
    let message = ''
    switch (status) {
        case 200:
            message = 'All good'
            break
        case 400:
            message = 'Just bad'
            break
        case 404:
            message = 'What? Who?'
            break
        case 503:
            message = 'No one got time for this...'
            break
        default:
            message = 'Oops!'
            break
    }
    return message
}

function _getResponseErrorMessage(error) {
    if (error.response && error.response.data) return error.response.data.message
    if (error.response && error.response.statusText) return error.response.statusText
    return error.message;
}

export class ResponseWrapper {
    constructor(response, data = {}, message) {
        this.data = data
        this.status = response.statusOrCallback
        this.statusMessage = _getStatusMessage(this.status)
        this.message = message || null
    }
}
export class ErrorWrapper extends Error {
    constructor(error, message) {
        super()
        this.code = error.response ? error.response.data.code : false
        this.status = error.response ? error.response.status : false
        this.statusMessage = _getStatusMessage(this.status)
        this.message = message || _getResponseErrorMessage(error)
    }
}