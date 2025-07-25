import React, {FC} from 'react';
import MoviesList from "@/Components/MoviesList/MoviesList";

type Props = {

    params: Promise<{ slug: string }>,

    searchParams: Promise<{ page?: string }>

}

const MoviesPage:FC<Props> = async ({searchParams }) => {
    const page = (await searchParams).page ? parseInt((await searchParams).page) : 1;
    console.log(page)



    return (
        <div>
            Hello movies page {page}
            <MoviesList currentPage={page} path="/movies"/>
        </div>
    );
};

export default MoviesPage;