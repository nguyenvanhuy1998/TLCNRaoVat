export function numberToString(number) {
    return (number || '0').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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