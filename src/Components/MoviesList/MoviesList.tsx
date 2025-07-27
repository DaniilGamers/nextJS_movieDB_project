import React, {FC} from 'react';
import {getAllMovies} from "@/Services/api.services";
import css from './MovieList.module.css';
import {redirect} from "next/navigation";

type Props = {
    path: string
    currentPage: string
}

const MoviesList:FC<Props> = async ({path, currentPage}) => {

    let {movies} = []

    if (path.startsWith('/movies')){
        movies = await getAllMovies(currentPage)
    }


    return (
        <div>
            {/*{*/}
            {/*    movies.map((movie) => (<div className={css.listBoxMain} key={movie.id}><div  className={css.listBox}><div className={css.movieList}><div style={{cursor: "pointer"}} className={css.movieList} onClick={() => {redirect('/movie/' + movie.id.toString())}}><br/><img alt={''} className={css.Posters} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img><h3 className={css.DescriptionBox}>{movie.title}<br/>Release date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/><StarsRating rating={movie.vote_average}/><br/></h3><br/></div></div></div></div>))*/}
            {/*}*/}
        </div>
    );
};

export default MoviesList;