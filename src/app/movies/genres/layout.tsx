import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "GenresLayout metadata",
};
type Props = { children: React.ReactNode }
const GenresLayout = ({children}: Props) => {
    return (
        <>

        {children}

        </>
    );
}

export default GenresLayout;