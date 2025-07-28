import {IGenresModel} from "@/Models/IGenres";


export interface IMovieInfoModel{
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    adult: boolean,
    backdrop_path: string,
    origin_country: string[],
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    spoken_languages: string[],
    homepage: string,
    title: string,
    status: string,
    video: boolean,
    genres: IGenresModel[],
    vote_average: number,
    vote_count: number

}