import {IMovies} from "@/Models/IMovies";

const baseURl = 'https://api.themoviedb.org/3'

export const getAllMovies = async (page: string): Promise<IMovies[]>  => {
    const movies = await fetch(baseURl + `/discover/movie?page=${page}`).then(value => value.json())

    console.log(movies)

    return movies

}