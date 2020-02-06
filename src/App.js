import React, { Component } from 'react';
import './App.scss';

import SearchBar from "./components/SearchBar/SearchBar";
import SongList from "./components/SongList/SongList";


class App extends Component {
  state = {
    songs: [],
    isActive: false,
    error: 'Search for Music'
  }

  
  onSearchSubmit = async (e) => {
    const musicTerm = e.target.elements.onSearchSubmit.value;
    e.preventDefault();
    const api_results = await fetch(`https://itunes.apple.com/search?term=${musicTerm}&limit=200&entity=song`);
    const data = await api_results.json();
    if (data.results.length !== 0) { // if the returned object's length is 0 then we do nothing.
    this.setState({ 
      songs: data.results,
      isActive: true,
      error: data.results[0].artistName
     });
    } else {
      this.setState({ 
        error: 'Please, enter a correct song name.'
      });
    }
    console.log(this.state.songs);
  }


  componentDidMount = () => {
    const json = localStorage.getItem("musicHistory");
    const songs = JSON.parse(json);
    this.setState({ songs });
    
    const isActive = localStorage.getItem("default_text");
    this.setState ({ isActive });
  }
  
  componentDidUpdate = () => {
    const songs = JSON.stringify(this.state.songs);
    localStorage.setItem("musicHistory", songs);

    const isActive = true;
    localStorage.setItem("default_text", isActive);
  }
  

  render() {
    
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.onSearchSubmit} placeholderText={'Search'}/>
     
        <header className="App-header">
        <div className="container">
        <div className="row">
          <h1 className="App-title col-lg-12 col-md-12">{this.state.error}</h1>
        </div>
        </div>
        </header>
        <SongList songs={this.state.songs} isActive={this.state.isActive} />

      </div>
    );
  }
}

export default App;