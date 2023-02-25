import makeRequest from "../makeRequest";
import { GET_SONG_LIKE } from "../../constants/apiEndPoints";


export default async function likeCount(musicData, navigate){
    const likeMapper = [];
    for(let i=0;i<musicData.length;i++) {
     const songLikeCount =  await  makeRequest(GET_SONG_LIKE(musicData[i].id), {}, navigate)
           likeMapper.push(songLikeCount.data);    
     };
       return {likeMapper, musicData};
}