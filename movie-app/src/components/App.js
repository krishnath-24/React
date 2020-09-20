import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';
import '../../src/index.css';

import {switchTabs} from '../actions';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    // make api call
    // dispatch an action

    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));

    console.log(store.getState());


  }

  /**
   * function to check if the current movie is favourite or not
   * @param {movie} movie  - the movie that use clicks the favourite button of
   * @return {boolean} - true or false respectively
   */
  isMovieFavourite = (movie) => {

    const { favourites } = this.props.store.getState();

    return favourites.indexOf(movie) !== -1;
  }

  /**
   * function to handle tab switch
   */

  handleTabSwitch = () => {
    const { store } = this.props;

    store.dispatch(switchTabs())
  }

  render() {

    console.log(this.props.store);

    const { list, favourites, moviesTab } = this.props.store.getState();
    const moviesList = moviesTab ? list : favourites;

    console.log('newState', this.props.store.getState())

    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div onClick={this.handleTabSwitch} className={moviesTab ? 'tab active-tab' : 'tab'}>Movies</div>
            <div onClick={this.handleTabSwitch} className={!moviesTab ? 'tab active-tab' : 'tab'}>Favourites</div>
          </div>

          <div className="list">
            {
              moviesList.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  key={'movies-' + index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}

                />
              ))
              
            }
            {
              moviesList.length === 0 ? (
                <h2 className='no-movies'>{moviesTab ? 'Sorry ! could not find any movies' : 'Uhh Ohh! you have no favourites'}</h2>
              ) : (
                null
              )
            }
          </div>


        </div>
      </div>
    );
  }
}

export default App;
