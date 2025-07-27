import {IMovies} from "@/Models/IMovies";
import {IGenresListModel} from "@/Models/IGetGenres";
import {IGenresModel} from "@/Models/IGenres";
import {cookies} from "next/headers";

const baseURl = 'https://api.themoviedb.org/3'

export const getAllMovies = async (response: Response, page: string): Promise<IMovies[]>  => {

    const token = response.headers.get('Authorization')

    console.log(token)

    const movies = await fetch(baseURl + `/discover/movie?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(value => value.json())


    return movies

}

export const getGenres = async ()  => {

    const genres = await fetch('https://api.themoviedb.org/3/genre/movie/list');


    return genres

}