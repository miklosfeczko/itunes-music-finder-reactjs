import React from 'react';
import './SongList.scss'

import { Link } from "react-router-dom";

const SongList = props => (
  <div className="container">
    <div className="row">
    { props.songs && props.songs.map((song) => {
      return (
        <div key={song.trackId} className="col-xs-12 col-md-4 col-lg-3" style={{ marginBottom:"1rem"}}>
          <hr/>
          <div className="songitems__box">
            <img 
              className="songitems__box-img" 
              src={song.artworkUrl100.replace('100x100', '1200x1200')} // replace the default resolution of the images 
              alt={song.artistName}/>
              <div className="songitems__text">
                <h5 className="songitems__title">
                  { song.artistName && song.artistName.length < 20 ? `${song.artistName}` : `${song.artistName && song.artistName.substring(0, 25)}...` }
                </h5>
                <p className="songitems__subtitle"> <span>
                  { song.trackName  && song.trackName.length < 30 ? `${song.trackName}` : `${song.trackName && song.trackName.substring(0, 25)}...` }
                </span></p>
              </div>
              <br/>
              <button className="songitems_buttons">
                <Link
                  style={{ textDecoration: 'none' }} 
                  to={{ 
                    pathname: `/song/${song.trackId}`,
                    state: { song: song.trackId }
                }}>More info</Link>
              </button>
          </div>
        </div>
      ); 
    }) 
    } { props.isActive === null && <div className="col-xs-12 col-md-12 col-lg-12 text-right">
    <div className="default_text">
    <div className="emoji">
    <span
    role="img"
    aria-label="pointing up"
    >
    ☝️
    </span>
    </div>
    Use the search bar above
    </div> 
    </div>
    }
     
    </div>
  </div>
);

export default SongList;