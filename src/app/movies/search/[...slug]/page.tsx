import React, {FC} from 'react';

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
            Keyword = {slug} and page = {page}
        </div>
    );
};

export default SearchMoviesPage;