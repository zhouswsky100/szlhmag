import request from '@/utils/request'
import {tansParams} from "@/utils/ruike";
import service from "@/utils/request";

// 预决算 预算列表
export function getBudgetfinal(params) {
  return request({
    url: '/budgetfinal/budget/init',
    method: 'get',
    params: params
  })
}


// 预决算 执行列表
export function getPerformfinal(params) {
  return request({
    url: '/budgetfinal/perform/init',
    method: 'get',
    params: params
  })
}

// 预决算 执行列表
export function getAccounts(params) {
  return request({
    url: '/budgetfinal/finalAccounts/init',
    method: 'get',
    params: params
  })
}

// 预决算 一般公共预算族谱图下点击“本级支出合计”弹出子级部门
export function queryBudgetGGYSByHTB(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSByHTB',
    method: 'get',
    params: params
  })
}

// 预决算 一查询税收收入或非税收收入下的子项和右侧弹窗
export function queryBudgetGGYSByNDTR(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSByNDTR',
    method: 'get',
    params: params
  })
}

// 预决算 转移性支出明细
export function queryBudgetGGYSByOID(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSByOID',
    method: 'get',
    params: params
  })
}

// 预决算 族谱图
export function toGGYSMapPage(params) {
  return request({
    url: '/budgetfinal/budget/toGGYSMapPage',
    method: 'get',
    params: params
  })
}

// 预决算 族谱图
export function toCKJMapPage(params) {
  return request({
    url: '/budgetfinal/budget/toCKJMapPage',
    method: 'get',
    params: params
  })
}
//点击本级收入合计显示侧边三件套
export function queryBudgetGGYSTax(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSTax',
    method: 'get',
    params: params
  })
}

//点击左侧“转移性收入”圆圈弹出右侧栏
export function queryBudgetGGYSByTID(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSByTID',
    method: 'get',
    params: params
  })
}
//右侧弹出框点击“说明”标题数据
export function querySubjectLevel(params) {
  return request({
    url: '/budgetfinal/budget/querySubjectLevel',
    method: 'get',
    params: params
  })
}


//本级收入合计->非税收入->点击子项弹出右边侧边栏
export function queryBudgetGGYSSSByChild(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSSSByChild',
    method: 'get',
    params: params
  })
}

export function queryBudgetToDeptMapPage(params) {
  return request({
    url: '/budgetfinal/budget/toDeptMapPage',
    method: 'get',
    params: params
  })
}

export function queryDeptBudgetZCByOne(params) {
  return request({
    url: '/budgetfinal/budget/queryDeptBudgetZCByOne',
    method: 'get',
    params: params
  })
}

export function queryDeptBudgetF0(params) {
  return request({
    url: '/budgetfinal/budget/queryDeptBudgetF0',
    method: 'get',
    params: params
  })
}

export function queryDeptBudgetZCTablesByOne(params) {
  return request({
    url: '/budgetfinal/budget/queryDeptBudgetZCTablesByOne',
    method: 'get',
    params: params
  })
}

export function queryDeptBudgetZCBySecond(params) {
  return request({
    url: '/budgetfinal/budget/queryDeptBudgetZCBySecond',
    method: 'get',
    params: params
  })
}

export function queryDeptBudgetZC(params) {
  return request({
    url: '/budgetfinal/budget/queryDeptBudgetZC',
    method: 'get',
    params: params
  })
}

export function querytoGYZBMapPage(params) {
  return request({
    url: '/budgetfinal/budget/toGYZBMapPage',
    method: 'get',
    params: params
  })
}
export function queryBudgetGYZBZCByHTB(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGYZBZCByHTB',
    method: 'get',
    params: params
  })
}

export function querytoZFXJJMapPage(params) {
  return request({
    url: '/budgetfinal/budget/toZFXJJMapPage',
    method: 'get',
    params: params
  })
}
export function queryBudgetZFXJJSRByHTB(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetZFXJJSRByHTB',
    method: 'get',
    params: params
  })
}

export function queryBudgetGGYSByZYXSRByChild(params) {
  return request({
    url: '/budgetfinal/budget/queryBudgetGGYSByZYXSRByChild',
    method: 'get',
    params: params
  })
}


//监测预警
export function singleAlert(params) {
  return request({
    url: '/alert/alert/singleAlert',
    method: 'get',
    params: params
  })
}


