import React, {FC} from 'react';
import MoviesList from "@/Components/MoviesList/MoviesList";

type Props = {

    params: Promise<{ slug: string }>

    searchParams: Promise<{ page?: string }>

}

const MoviesPage = async ({params,searchParams } : Props) => {

    const {slug} = await params;

    const page = (await searchParams).page ? parseInt((await searchParams).page) : 1;


    return (
        <div>
            <MoviesList currentPage={page} path="/movies" id_and_keyword={slug}/>
        </div>
    );
};

export default MoviesPage;