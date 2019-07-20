import service from './request'
const baseUrl = ''
const apis = {
    sendMessage: params => {
        return service({
            url: `${baseUrl}/sendMessage`,
            method: 'get',
            params: params
        })
    }
}
export default apis
