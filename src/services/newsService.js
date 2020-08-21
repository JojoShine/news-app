import axios from "axios"
import { APPCODE } from "./config"

export async function getNewsChannels () { 
    var resp = await axios.get('http://ali-news.showapi.com/channelList', {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        }
    })
    console.log(resp.data.showapi_res_body.channelList)
    return resp.data.showapi_res_body.channelList
}

export async function getNews (channelId) { 
    var resp = await axios.get('http://ali-news.showapi.com/newsList', {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        },
        params: {
            channelId,
            needContent: 1
        }
    })
    console.log(resp.data.showapi_res_body.pagebean)
    return resp.data.showapi_res_body.pagebean
}
