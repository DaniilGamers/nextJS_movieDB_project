
import css from "./genres.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge} from "reactstrap";
import {getGenres} from "@/Services/api.services";
import Link from "next/link";

const GenreBadge = async () => {

    const genres = await getGenres();

    console.log(genres.genres)

    return ( <div>
            <div style={{display: "flex", justifyContent: "center", width: "100vw"}}>
                {
                   genres.genres.map((genre) => <div key={genre.id}><Link style={{textDecorationLine: "none"}} className={css.genresButton} href={`/genres/${genre.id}/?page=1`}><div><Badge color="secondary" className={css.genresButton}>{genre.name}</Badge></div></Link><div></div></div>)
                }
            </div>

        </div>
    );
};

export default GenreBadge;