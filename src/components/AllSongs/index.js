import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import makeRequest from '../../utils/makeRequest'
import {GET_SONG_DATA, GET_SONG_LIKE, UPDATE_SONG_DATA } from '../../constants/apiEndPoints'
import sortIcon from '../../assets/Image/icon-genre.svg'
import SongCard from '../SongCard'
import likeCount from '../../utils/LikeCountMapper';
import './AllSongs.css';

function AllSongs() {
    const [songData, setSongData] = useState([]);
    const [countLike,setCountLike] = useState([]);
    const [clicked,setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
       
        makeRequest(GET_SONG_DATA, {}, navigate)
        .then((response) =>{
         return likeCount(response.data,navigate);
        })
        .then((response)=>{
          
          setCountLike(response.likeMapper);
          setSongData(response.musicData);
        })
     }, []);
      const handleLike = async(id, index) =>{
        try {
              await makeRequest(UPDATE_SONG_DATA(id), {
                data: {
                  count: countLike.count+1,
                  like: !countLike.like
                }
              })
              const newLikeCount = [...countLike];
              newLikeCount[index] = {like: !newLikeCount[index].like, count: newLikeCount[index].count+1 }
              setCountLike(newLikeCount);
            }
            catch(e){ }
      }

      const handleSort = (clicked) =>{
        setClicked(!clicked);
          if(clicked === false)
          {
            
            const key = 'genre.name';
            function groupBy(key) {
              return function group(songData) {
                return songData.reduce((acc, obj) => {
                  const property = obj[key];
                  acc[property] = acc[property] || [];
                  acc[property].push(obj);
                  return acc;
                }, {});
              };
            }
            
            const groupByYear = groupBy(key);
            console.log(groupByYear(songData));
            
            
          }
      }
     
    return (
        <div className='container-card'>
                <div className='top-bar flex'>
                <h1 className='logo-content'>all songs</h1>
                <img className='logo-img flex'src={sortIcon} alt='sort icon' onClick={()=>handleSort(clicked)}></img>
                </div>
                <div className='card-content flex'>
                {songData.map((eachSong, index) => {
                  return <SongCard className='each-card-content' key={eachSong.id} index={index} id={eachSong.id} data={eachSong} countLike={countLike[index]} handleLike={handleLike}/>
                })}
                </div>
        </div>
    )
}

export default AllSongs;