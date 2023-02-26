import makeRequest from "../makeRequest";
import { GET_SONG_LIKE } from "../../constants/apiEndPoints";


export default async function likeCount(musicData, navigate){
    const likeMapper = [];
    let genreSet = new Set();
    let uniqueGenre = [];
    for(let i=0;i<musicData.length;i++) {
      genreSet.add(musicData[i].genre.name)
     const songLikeCount =  await  makeRequest(GET_SONG_LIKE(musicData[i].id), {}, navigate)
           likeMapper.push(songLikeCount.data);    
     };
     uniqueGenre = [...genreSet]
    return {likeMapper, musicData, uniqueGenre};
}