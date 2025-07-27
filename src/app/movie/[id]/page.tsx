import React from 'react';
import MovieInfo from "@/Components/movieInfo/MovieInfo";

type Props = {

    params: Promise<{ slug: string }>

}

const MovieInfoPage = async ({params}: Props) => {

    const { id } = await params



    return (
        <div>
            <MovieInfo id={id}/>
        </div>
    );
};

export default MovieInfoPage;