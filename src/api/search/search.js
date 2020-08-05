import request from '@/utils/request'

export function getInitFiscal(params) {
    return request({
        url: '/economy/fiscal/init',
        method: 'post',
        params:params
    })
}

export function getFiscal() {
    return request({
        url: '/economy/fiscal/oneUnitName',
        method: 'get'
    })
}

export function getSubjectName() {
    return request({
        url: '/economy/fiscal/oneSubjectName',
        method: 'get'
    })
}

export function getFnName() {
    return request({
        url: '/economy/fiscal//oneFnName',
        method: 'get'
    })
}

export function getNatureName() {
    return request({
        url: '/economy/fiscal//natureName',
        method: 'get'
    })
}

export function getTwoSubjectName(params) {
    return request({
        url: '/economy/fiscal/towSubjectName',
        method: 'get',
        params:params

    })
}
export function getTwoFnName(params) {
    return request({
        url: '/economy/fiscal/towFnName',
        method: 'get',
        params:params

    })
}
export function getThreeFnName(params) {
    return request({
        url: '/economy/fiscal/threeFnName',
        method: 'get',
        params:params

    })
}


export function getlistFiles(params) {
    return request({
        url: '/economy/fiscal/listFiles',
        method: 'get',
        params:params

    })
}

export function getHomeInit(params) {
    return request({
        url: '/economy/fiscal/homeInit',
        method: 'get',
        params:params

    })
}


export function getTaxInit(params) {
    return request({
        url: '/economy/fiscal/taxInit',
        method: 'get',
        params:params

    })
}

export function getFindTaxFiles(params) {
    return request({
        url: '/economy/fiscal/findTaxFiles',
        method: 'get',
        params:params

    })
}

export function getFindTaxDetail(params) {
    return request({
        url: '/economy/fiscal/queryTaxDetail',
        method: 'get',
        params:params

    })
}





