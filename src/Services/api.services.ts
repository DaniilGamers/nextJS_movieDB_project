import {IMovies} from "@/Models/IMovies";
import {IGenresListModel} from "@/Models/IGetGenres";
import {IGenresModel} from "@/Models/IGenres";
import {cookies} from "next/headers";
import {IMovieListPageModel} from "@/Models/IMoviesPage";
import {IMovieInfoModel} from "@/Models/IMovieInfo";

const baseURl = 'https://api.themoviedb.org/3'


export const getAllMovies = async (page: string): Promise<IMovieListPageModel<IMovies>>  => {

    const token = (await cookies()).get('auth_token')?.value

    const movies = await fetch(baseURl + `/discover/movie?page=${page}`, {
        headers: {
            Authorization: `Bearer ` + token,
        }
    })
        .then(value => value.json())


    return movies

}

export const getMovie = async (id: string): Promise<IMovieInfoModel>  => {

    const token = (await cookies()).get('auth_token')?.value

    const movie = await fetch(baseURl + `/movie/${id}`, {
        headers: {
            Authorization: `Bearer ` + token,
        }
    })
        .then(value => value.json())


    return movie

}


export const getGenres = async (): Promise<IGenresListModel<IGenresModel>>  => {

    const token = (await cookies()).get('auth_token')?.value

    const genres = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
            Authorization: 'Bearer ' + token
        },
        credentials: 'include',
    }).then(value => value.json());


    return genres

}

export const getAllMoviesByGenres = async (page: string, genreId: string): Promise<IMovieListPageModel<IMovies>>  => {

    const token = (await cookies()).get('auth_token')?.value

    const movies = await fetch(baseURl + `/discover/movie?with_genres=${genreId}&page=${page}`, {
        headers: {
            Authorization: `Bearer ` + token,
        }
    })
        .then(value => value.json())


    return movies

}

export const getAllMoviesByKeyword = async (page: string, keyword: string): Promise<IMovieListPageModel<IMovies>>  => {

    const token = (await cookies()).get('auth_token')?.value

    const movies = await fetch(baseURl + `/search/movie?query=${keyword}&page=${page}`, {
        headers: {
            Authorization: `Bearer ` + token,
        }
    })
        .then(value => value.json())


    return movies

}