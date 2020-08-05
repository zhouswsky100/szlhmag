import request from '@/utils/request'
import {tansParams} from "@/utils/ruike";
import service from "@/utils/request";
/*
* 系统文件管理
*/

// 获取文件列表
export function getFileList(params) {
  return request({
    url: 'file/tsfile/init',
    method: 'get',
    params: params
  })
}

// 获取分类列表
export function getTypeList() {
  return request({
    url: 'file/tsfile/initType',
    method: 'get',
  })
}


// 删除文件
export function delFiles(tsfId) {
  return request({
    url: 'file/tsfile/deleteFile/' + tsfId,
    method: 'delete'
  })
}

/*
* 法规政策
*/

export function getLawsFiles(params) {
  return request({
    url: 'file/laws/init',
    method: 'get',
    params: params
  })
}

/*
* 预警
*/

export function getAlert(params) {
  return request({
    url: 'alert/alert/init',
    method: 'get',
    params: params
  })
}
/*
* 预览pdf
*/

export function viewPdf(id) {
  return request({
    url: 'file/tsfile/downloadFile?tsfId=' + id,
    method: 'post',
    responseType: 'blob'
  }).then((data) => {
    const content = data
    const blob = new Blob([content], {
            type: 'application/pdf;chartset=UTF-8'
          })
    const file = URL.createObjectURL(blob)
    const elink = document.createElement('a')
    // elink.download = cell.tsfName
    elink.style.display = 'none'
    elink.target = "__blank"
    const url = URL.createObjectURL(blob)
    elink.href = file
    document.body.appendChild(elink)
    elink.click()
    // URL.revokeObjectURL(elink.href)
    // document.body.removeChild(elink)

    // if ('download' in document.createElement('a')) {
    //   const elink = document.createElement('a')
    //   // elink.download = cell.tsfName
    //   elink.style.display = 'none'
    //   elink.href = URL.createObjectURL(blob)
    //   document.body.appendChild(elink)
    //   console.log(elink);
    //   elink.click()
    //   URL.revokeObjectURL(elink.href)
    //   document.body.removeChild(elink)
    // } else {
    //   navigator.msSaveBlob(blob, cell.tsfName)
    // }
  }).catch((r) => {
    console.error(r)
  })
}

export function test(id) {
  return request({
    url: 'file/tsfile/downloadFile?tsfId=' + id,
    method: 'post',
    responseType: 'blob'
  })
}

/*
* 上传文件
*/
export function uploadFile(params) {
  return request({
    url: 'file/tsfile/uploadFile?tsfType=' + params,
    method: 'post'
  })
}

/*
* 排序
*/
export function editFileId(record) {
  return request({
    url: 'file/tsfile/editFileId',
    method: 'post',
    data: record
  })
}
// [
//       {
//         "createtime": "2020-07-07T09:40:33.136Z",
//         "suffixName": "string",
//         "tbaId": 0,
//         "tbaName": "string",
//         "tsfExplain": "string",
//         "tsfId": 0,
//         "tsfMd5": "string",
//         "tsfName": "string",
//         "tsfPeriod": "string",
//         "tsfSize": 0,
//         "tsfSort": 0,
//         "tsfType": 0,
//         "tsfUnit": "string",
//         "tsfUrl": "string",
//         "tsftName": "string",
//         "updatetime": "2020-07-07T09:40:33.136Z",
//         "userId": 0
//       }
//     ]
