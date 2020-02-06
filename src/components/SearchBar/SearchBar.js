import React from 'react';

import './SearchBar.scss'

const SearchBar = props => (
  <div className="container">
  <div className="row rowdy">
  <div className="col-lg-12 col-md-12 col-mx-auto">
    <header className="navbar">
      <section className="navbar-section">
          <p
          className="top-left-text"
          >
          iTunes Music Finder
          </p>
      </section>

      <section className="nav-item nav-link text-right">
      <form 
      className="form_total"
      autoComplete="off" 
      onSubmit={props.onSearchSubmit} 
      style={{ marginBottom:"0rem" 
      }}>
      <input 
      placeholder={props.placeholderText} 
      className="form__input" 
      type="text" 
      name="onSearchSubmit" 
      spellCheck="false"
      />
      <button className="form__button"><i className="fas fa-search"></i></button>

      <a
      href="https://github.com/miklosfeczko/itunes-music-finder-reactjs"
      className="form__button"
      target="_blank"
      rel="noopener noreferrer"
      >
      <i className="fab fa-github"></i>
      </a>  
      </form>
     
      </section>
      </header>
  </div>
  </div>
  </div>
  
);

export default SearchBar;
