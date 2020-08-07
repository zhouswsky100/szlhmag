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


