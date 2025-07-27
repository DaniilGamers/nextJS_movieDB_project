import {getAllMovies, getAllMoviesByGenres, getAllMoviesByKeyword} from "@/Services/api.services";
import css from './MovieList.module.css';
import Link from "next/link";
import StarsRatings from "@/Components/StarsRating/StarsRatings";
import Pagination from "@/Components/Pagination/Pagination";

type Props = {
    path: string
    currentPage: number
    id_and_keyword: string
}

const MoviesList = async ({path, currentPage, id_and_keyword}: Props) => {


    const movies: any[] = []

    const page = `${currentPage}`

    const result = `${id_and_keyword}`

    const totalPages = []

    const basePath = []

    if (path.startsWith('/movies')){
        const data = await getAllMovies(page)

        movies.push(...data.results)

        totalPages.push(data.total_pages)

        const path = '/movies'

        basePath.push(path)

    }else if (path.startsWith('/genres')){
        const data = await getAllMoviesByGenres(page,result)

        movies.push(...data.results)

        totalPages.push(data.total_pages)

        const path = `/genres/${result}`

        basePath.push(path)

    }else if (path.startsWith('/search')){
        const data = await getAllMoviesByKeyword(page, result)
        movies.push(...data.results)

        totalPages.push(data.total_pages)

        const path = `/search/${result}`

        basePath.push(path)

    }

    return (

        <div>

            <Pagination basePath={`${basePath}`} currentPage={currentPage} total_pages={`${totalPages}`}/>

            {
                movies.map((movie) => (<div className={css.listBoxMain} key={movie.id}>
                    <div className={css.listBox}>
                        <div className={css.movieList}><Link style={{cursor: "pointer"}} className={css.movieList}
                                                             href={`/movie/${movie.id}`}>
                            <br/>
                            <img alt={''} className={css.Posters} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}>

                            </img>
                            <h3 className={css.DescriptionBox}>{movie.title}<br/>Release
                                date: {movie.release_date}<br/>Languages: {movie.original_language}<br/>Description:<br/>{movie.overview}<br/>Ratings:<br/><br/><StarsRatings rating={movie.vote_average}/></h3><br/></Link></div>
                    </div>
                </div>))
            }

            <Pagination basePath={`${basePath}`} currentPage={currentPage} total_pages={`${totalPages}`}/>

        </div>

    );
};

export default MoviesList;