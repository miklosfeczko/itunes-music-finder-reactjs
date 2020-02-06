import React from 'react';
import './Song.scss'

class Recipe extends React.Component {
  state = {
    activeSong: [],
    play: false,
    loading: true
  }

  handleBackBtn = () => {
    this.props.history.push("/");
    console.log(this.props.history, "History");
  };
  
  componentDidMount = async () => {
    const title = this.props.location.state.song;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${title}&limit=25&entity=song`);
    
    const res = await req.json();
    this.setState({ activeSong: res.results[0] });
    console.log(this.state.activeSong);
  }

  render() {
    const loading = this.state;
    const song = this.state.activeSong;
    const audio = new Audio(song.previewUrl);

    if(!song.previewUrl && loading) {
      return (
        <div>
            <div>
              <div className="loading-indicator">
                <div className="circle"/> 
                <div className="circle circle-2" />
                <div className="circle circle-3" />
              </div>
            </div>
        </div>
      );
    }

    
    return (
    <div className="main">
      <div className="ui">
          <div className="ui-toolbar">
          </div>
          
          <div className="ui-cover">
          <img className="active-song__img" src={song.artworkUrl100.replace('100x100', '1200x1200')} alt={song.artistName}/>
              <div className="ui-cover-title">
                  <p className="active-song__artistname">{ song.artistName } { song.trackName }</p>
                  <p className="active-song__trackname">Genre: { song.primaryGenreName }</p>
                  <p className="active-song__trackname">Release date: { song.releaseDate.slice(0, 10)}</p>
              </div>
          </div>
          
          <div className="ui-actions">
          </div>
          
         
          
          <div className="ui-controls">    
              <button className="ui-play" onClick={() => audio.play()}> <i className="fas fa-play"></i></button>
              <button className="ui-play" onClick={() => audio.pause()}><i className="fas fa-pause"></i></button>
              <button onClick={() => {
                this.handleBackBtn();
                audio.pause()
              }
              } className="ui-play"><i className="fas fa-arrow-left"></i></button>
          </div>
      </div>
  </div>
  

     /* <div className="container">
        <div className="row">
        { this.state.activeSong && this.state.activeSong.length !== 0 &&
        <div className="col-xs-12 col-md-6 col-lg-6">
          <div className="active-song">
            <img className="active-song__img" src={song.artworkUrl100.replace('100x100', '1200x1200')} alt={song.artistName}/>
            <h3 className="active-song__title">{ song.artistName }</h3>
            <h4 className="active-song__publisher">
              Publisher: <span>{ song.artistName }</span>
            </h4>
            <p className="active-song__website">Website: 
              <span><a href={song.artistId}>{song.artistId}</a></span>
            </p>
            <button className="active-song__button">
              <Link to="/">Go Home</Link>
            </button>
            <button onClick={() => audio.play()}>Play</button>
            <button onClick={() => audio.pause()}>Pause</button>
            </div>

          </div>
        }
      </div>
      </div> */
    );
  }
};

export default Recipe;
