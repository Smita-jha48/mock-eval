import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import makeRequest from '../../utils/makeRequest'
import {GET_SONG_DATA, GET_SONG_LIKE, UPDATE_SONG_DATA } from '../../constants/apiEndPoints'
import sortIcon from '../../assets/Image/icon-genre.svg'
import gridIcon from '../../assets/Image/icon-grid.svg'
import SongCard from '../SongCard'
import SortedSongs from '../SortedSongs';
import likeCount from '../../utils/LikeCountMapper';
import cardBackgroundColor from '../../constants/cardColor';
import './AllSongs.css';

function AllSongs() {
    const [songData, setSongData] = useState([]);
    const [countLike,setCountLike] = useState([]);
    const [clicked,setClicked] = useState(false);
    const [genre,setGenre] = useState([]);
    const [sortdata, setSortdata] = useState();
    const navigate = useNavigate();

    useEffect( () => {
        makeRequest(GET_SONG_DATA, {}, navigate)
        .then((response) =>{
         return likeCount(response.data,navigate);
        })
        .then((response)=>{
          
          setCountLike(response.likeMapper);
          setSongData(response.musicData);
          setGenre(response.uniqueGenre);
        })
     }, []);
      const handleLike = async(id, index) =>{
        try {
              const data = await makeRequest(UPDATE_SONG_DATA(id), {
                data: {
                  like: !countLike[index].like
                }
              })
              const newLikeCount = [...countLike];
              
              newLikeCount[index] = {...data.data}
              setCountLike(newLikeCount);
            }
            catch(e){ }
          }

      const handleSort = (clicked) =>{

         if(clicked === true)
          {
             let obj = {}
              genre.forEach((uniqueGenre)=>{
              let filtered_fruits = songData.filter((Genre) =>
              Genre.genre.name === uniqueGenre);
              obj[uniqueGenre] = filtered_fruits;
              
            })
             setSortdata(obj);
            }
            setClicked(clicked);
          }
     
    return (
        <div className='container-card'>
                <div className='top-bar flex'>
                <h1 className='logo-content'>{clicked?'Genres':'all songs'}</h1>
                <img className='logo-img flex' src={clicked? gridIcon:sortIcon} alt='sort icon' onClick={()=>handleSort(!clicked)}></img>
                </div>
                { clicked === true ? (
                <SortedSongs filteredsongs={sortdata} countLike={countLike} handleLike={handleLike} bgColor={cardBackgroundColor} />) 
                :( <div className='card-content flex'>
                {songData.map((eachSong, index) => {
                  return <SongCard className='each-card-content' key={eachSong.id} index={index} id={eachSong.id} data={eachSong} countLike={countLike[index]} handleLike={handleLike} bgColor={cardBackgroundColor[index % 2]}/>
                })}
                </div>
                )}
        </div>
    )
}

export default AllSongs;