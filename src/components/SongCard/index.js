import React, {useState, useEffect} from 'react';
import heartGrey from '../../assets/Image/heart-gray.svg';
import heartRed from '../../assets/Image/heart-red.svg';
import './SongCard.css'

function SongCard({id, index, countLike, data, handleLike}){

    return (
       <div className='card-body'>
       <img className='card-img' src={data.imageUrl} alt='song'></img>
       <div className='card-footer '>
       <div className='left-section '>
       <p className='song-name'>{data.name}</p>
       <h4>{data.artist.name}</h4>
       </div>
       <img src={countLike.like? heartRed:heartGrey} alt='heart' className='heart-img' onClick={()=>handleLike(id, index)}
        ></img>
       </div>
       <h6>{countLike.count}</h6>
       </div>
    )
}

export default SongCard;