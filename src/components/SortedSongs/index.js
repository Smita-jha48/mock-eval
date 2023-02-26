import React from "react";
import SongCard from "../SongCard";
import GenreWiseSongs from "../GenreWiseSongs";

import './SortedSongs.css'

function SortedSongs({filteredsongs, countLike, handleLike, bgColor}){
    let genres = Object.keys(filteredsongs);
    return (
         <div>
        {genres.map((genre)=> {
         const genreimg = require(`../../assets/Image/genre-${genre.toLowerCase()}.png`)
           return <GenreWiseSongs key={genre} genre={genre} data={filteredsongs[genre]} countLike={countLike} handleLike={handleLike} bgColor={bgColor} imgsrc={genreimg}   />
        })}
       </div>
      
    );
}

export default SortedSongs;