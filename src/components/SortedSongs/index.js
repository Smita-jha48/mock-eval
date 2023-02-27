import React from "react";
import SongCard from "../SongCard";

import './SortedSongs.css'

function SortedSongs({ genre, songData, countLike, handleLike, bgColor }) {
   return (
      <div>
         {
            genre.map((genre) => {
               const imgsrc = require(`../../assets/Image/genre-${genre.toLowerCase()}.png`);
               return (
                  <>
                     <div className="header-genre">
                        <img src={imgsrc} alt="genre" ></img>
                        <button className="primary-button small-bold-text">{genre}</button>
                     </div>
                     <div className="card-content flex">
                        {songData.map((eachSong, index) => eachSong.genre.name === genre ? (
                           <SongCard className='each-card-content' key={eachSong.id} index={index} id={eachSong.id} data={eachSong} countLike={countLike[index]} handleLike={handleLike} bgColor={bgColor[index % 2]} />
                        ) : <></>
                        )}
                     </div>
                  </>
               )
            })
         }
      </div>

   );
}

export default SortedSongs;