import request from '@/utils/request'
/*
* 分析图标数据
*/

// 获取龙华地图
export function getLhMap(params) {
  return request({
    url: '/moke/longhua.json',
    method: 'get',
    params: params,
    flg:true


  })
}

