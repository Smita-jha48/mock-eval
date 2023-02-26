import React, {useState, useEffect} from 'react';
import heartGrey from '../../assets/Image/heart-gray.svg';
import heartRed from '../../assets/Image/heart-red.svg';
import './SongCard.css'

function SongCard({id, index, countLike, data, handleLike, bgColor}){

    return (
       <div className='card-body ' style={{ backgroundColor: bgColor }}>
       <img className='card-img' src={data.imageUrl} alt='song'></img>
       <div className='card-footer '>
       <div className='left-section '>
       <p className='song-name'>{data.name}</p>
       <h4>{data.artist.name}</h4>
       </div>
       <div className='heart-count'>
       <img src={countLike.like? heartRed:heartGrey} alt='heart' className='heart-img' onClick={()=>handleLike(id, index)}></img>
       <h6 className='count'>{countLike.count}</h6>
       </div>
       </div>
       </div>
    )
}

export default SongCard;