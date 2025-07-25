'use client'

import React, {FormEvent} from 'react';
import css from './search.module.css'
import {redirect} from "next/navigation";

const Search = () => {

    const handleChange = (e: FormEvent<HTMLInputElement>)=>{
        e.preventDefault()

        const input = e.target as HTMLInputElement;
        const result = input.value

        if (result === ''){

            redirect(`/movies/search`)

        }else{

            redirect(`/movies/search/${result}?page=1`)

            return


        }


    }

    return (
        <div className={css.searchBoxMain}>

            <p>Search</p>

            <form>

                <label>

                    <input className={css.inputBox} placeholder={'Type here to search for movies'} name={'keyword'} type={"search"} onChange={handleChange}/>

                </label>

            </form>
        </div>
    );
};

export default Search;