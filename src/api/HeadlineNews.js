const API_PROXY = 'https://bird.ioliu.cn/v1/?url=120.76.205.241:8000'
import axios from 'axios'
import {commonParams} from "./config";

// 获取头条新闻接口的方法
export function HeadlineNews(catid) {
  const url = '/news/toutiao';
  const data = Object.assign({}, commonParams, {
    catid
  })
  return axios.get(API_PROXY + url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
