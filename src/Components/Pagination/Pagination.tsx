'use client'

import React from 'react';
import css from '@/Components/MoviesList/MovieList.module.css'
import {redirect} from "next/navigation";

type Props = {

    currentPage: number;
    basePath: string;
    total_pages: string;

}

const PaginationComponent = ({ currentPage, basePath, total_pages }: Props) => {

    const PageHandler = (newPage: number) => {

        String(newPage)

        redirect(`${basePath}?page=${newPage}`)

    }

    return (
        <div className={css.PageButtonsBox}>
            <button className={css.PageButtonBox} onClick={() => PageHandler(currentPage - 1)} disabled={currentPage <= 1}><h2>prev</h2>
            </button>

            <button className={css.PageNumberBox} disabled={true}>{currentPage}</button>

            <button className={css.PageButtonBox} onClick={() => PageHandler(currentPage + 1)} disabled={currentPage >= total_pages}><h2>next</h2>
            </button>
        </div>
    );
};

export default PaginationComponent;