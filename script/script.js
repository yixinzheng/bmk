/**
 * Created by Administrator on 2018/8/28.
 */
// var apiHost = 'http://rap2api.taobao.org/app/mock/84859'
var apiHost = 'http://106.37.196.133:8000'

axios.interceptors.request.use(
    config => {
        if (sessionStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'Token ' + `${sessionStorage.token}`
        } else {
            if (location.href.indexOf('login') < 0 && location.href.indexOf('regist') < 0) {//判断在登录/注册页中
                alert('登录已过期,请重新登录!')
                location.href = '/html/login.html'
            }
        }
        return config
    },
    err => {
        return Promise.reject(err)
    })
