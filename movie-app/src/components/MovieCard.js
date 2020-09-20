import React from 'react';
import { addFavourite, removeFavourite } from '../actions'

class MovieCard extends React.Component {

    handleFavoriteClick = () => {

        this.props.dispatch(addFavourite(this.props.movie));
    }

    handleUnFavoriteClick = () => {
        this.props.dispatch(removeFavourite(this.props.movie));
    }


    render() {

        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        { !isFavourite ?
                            <button onClick={this.handleFavoriteClick} className="favourite-btn">Favourite</button> :
                            <button onClick={this.handleUnFavoriteClick} className="unfavourite-btn">UnFavourite</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
