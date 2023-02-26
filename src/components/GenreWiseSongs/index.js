import React from "react";
import './GenreWiseSongs.css';
import SongCard from "../SongCard";
import genrerock from '../../assets/Image/genre-rock.png';


function GenreWiseSongs({genre,data,countLike,handleLike,bgColor,imgsrc}){
    return(
        <div>
            <div className="header-genre">
            <img src={imgsrc} alt="genre" ></img>
            <button className="primary-button small-bold-text">{genre}</button>
            </div>
            <div className='card-content flex'>
            {data.map((eachSong, index) => {
                  return <SongCard className='each-card-content' key={eachSong.id} index={index} id={eachSong.id} data={eachSong} countLike={countLike[index]} handleLike={handleLike} bgColor={bgColor[index % 2]}/>
            })}
            </div>
        </div>
    )
}

export default GenreWiseSongs;