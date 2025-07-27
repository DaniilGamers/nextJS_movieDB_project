import {IPaginatedPageModel} from "@/Models/IPage";

export interface IMovieListPageModel<T>{
    page: IPaginatedPageModel | null;
    results: T[];
    total_pages: number;
    total_results: number;
}