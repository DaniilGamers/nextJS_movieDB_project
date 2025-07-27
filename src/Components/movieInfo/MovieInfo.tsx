import css from "@/Components/movieInfo/movieInfo.module.css"
import PosterPreview from "./PosterPreview";
import {getMovie} from "@/Services/api.services";
import Link from "next/link";
import StarsRatings from "@/Components/StarsRating/StarsRatings";

type Props = {
    id: string
}

const MovieInfo = async ({id}: Props) => {

    const infoMovie = await getMovie(id)

    console.log(infoMovie)



    return (
        <div>
            {
                infoMovie && <div className={css.box} key={infoMovie.id}>
                    <div className={css.InfoWholeBox}>
                        <img className={css.backgroundImage} alt={''} src={'https://image.tmdb.org/t/p/w500' + infoMovie.backdrop_path}>

                        </img>
                        <div className={css.backgroundDarkBox}>

                        </div>
                        <div className={css.TitleBox}><PosterPreview id={id}/>
                            <div className={css.box2}>

                            </div>
                            <div style={{color: "white", fontSize: 28}} className={css.boxTitleAndInfo}>{infoMovie.title} --- ({infoMovie.original_title})
                                <br/>Runtime: {infoMovie.runtime}min
                                <br/>Language: {infoMovie.origin_country}
                                <br/>Rating:<br/><StarsRatings rating={infoMovie.vote_average}/>
                            </div>
                        </div>
                        <div style={{color: "white", fontSize: 25, textAlign: "center"}} className={css.descriptionBox}>
                            <div className={css.box3}>Description
                                <br/>{infoMovie.overview}<br/>
                                <br/>Genres<br/>
                                <div  className={css.genreBoxMain}>{infoMovie.genres.map(genre =>
                                    <div key={genre.id}>
                                        <div>
                                            <Link className={css.genreButton} href={`/genres/${genre.id}?page=1`}>{genre.name}</Link>
                                        </div>
                                    </div>)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MovieInfo;