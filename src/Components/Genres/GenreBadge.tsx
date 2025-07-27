
import css from "./genres.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge} from "reactstrap";
import {getGenres} from "@/Services/api.services";
import {redirect} from "next/navigation";
import Link from "next/link";

const GenreBadge = async () => {

    const data = await fetch('http://localhost:3000/movies/genres/api', { credentials: 'include' }).then(value => value.json());

    console.log(data)

    return ( <div>
            <div style={{display: "flex", justifyContent: "center", width: "100vw"}}>
                {
                    data.genres?.map((genre) => <div key={genre.id}><Link style={{textDecorationLine: "none"}} className={css.genresButton} href={`/genres/${genre.id}/?page=1`}><div><Badge color="primary" className={css.genresButton}>{genre.name}</Badge></div></Link><div></div></div>)
                }
            </div>

        </div>
    );
};

export default GenreBadge;