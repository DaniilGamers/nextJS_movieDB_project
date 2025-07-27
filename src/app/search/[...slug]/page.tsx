import React, {FC} from 'react';
import MoviesList from "@/Components/MoviesList/MoviesList";

type Props = {

    params: Promise<{ slug: string }>,

    searchParams: Promise<{ page?: string }>

}

const SearchMoviesPage: FC<Props> = async ({params, searchParams}) => {

    const { slug } = await params;

    const page = (await searchParams).page ? parseInt((await searchParams).page) : 1;

    console.log(page)


    return (
        <div>
            <MoviesList path="/search" currentPage={page} id_and_keyword={slug}/>
        </div>
    );
};

export default SearchMoviesPage;