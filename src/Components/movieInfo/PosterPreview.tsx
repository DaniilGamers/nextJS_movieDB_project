import css from "@/Components/movieInfo/movieInfo.module.css";
import {getMovie} from "@/Services/api.services";

type Props = {
    id: string
}

const PosterPreview = async ({id} : Props) => {

    const infoMovie = await getMovie(id)

    return (
        <div>
            {infoMovie && <div><img className={css.poster} alt={''}
                                    src={'https://image.tmdb.org/t/p/w500' + infoMovie.poster_path}></img></div>}
        </div>
    );
};

export default PosterPreview;