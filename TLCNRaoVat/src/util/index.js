import moment from 'moment'
export function numberToString(number) {
    return (number || '0').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
export function dateToString(time, format) {
    return moment(new Date(time)).format(format || 'DD/MM/YYYY');
}
export const handleBaseResponse = (callBackFinish) => ({
    successCallBack: (response) => {
        if (callBackFinish != null) {
            callBackFinish(response.data)
        };
        logObj(response.config)
    },
    errorCallBack: (error, response) => {
        if (callBackFinish != null) {
            callBackFinish()
        };
        logObj(response)
        logObj(error)
    }
})