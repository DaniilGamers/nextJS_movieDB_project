import {NextRequest, NextResponse} from "next/server";

export const middleware = (request: NextRequest) => {


    const response= NextResponse.next()

    if (!request.cookies.get('auth_token')){

        response.cookies.set('auth_token', 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjkzMjQ2ODE1ODBhZjcyMjM4NWJhOWJmNzIzY2NmNyIsInN1YiI6IjY2NmQ3OWFlMzMwZjg5NzFlZjMwYTJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ma2rYHvmut9EVdHvzfyYm8LuBwu6ctIeAKR5pQPsgfw', {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'lax',
        });

    }



    return response;

}

export const config = {
    matcher: ['/movies/:path*', '/api/:path*']
}