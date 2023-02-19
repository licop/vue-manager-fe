/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
    dev:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/07aca2317968d5d1604e1f6872a3ec6a/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/07aca2317968d5d1604e1f6872a3ec6a/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/07aca2317968d5d1604e1f6872a3ec6a/api'
    }
}

export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}
