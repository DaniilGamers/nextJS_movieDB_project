import {getGenres} from "@/Services/api.services";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export const GET = async () => {
    console.log('GET request route handler')

    const token = cookies().get('auth_token')?.value

    console.log(token)

    if (!token) {
        return NextResponse.json({error: 'No token found', status: 401})

    }

    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });


    const data = await res.json()


    return NextResponse.json(data);





}