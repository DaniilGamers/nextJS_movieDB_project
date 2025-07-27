import type { Metadata } from "next";
import React from "react";
import GenreBadge from "@/Components/Genres/GenreBadge";
export const metadata: Metadata = {
    title: "GenresLayout metadata",
};
type Props = { children: React.ReactNode }
const GenresLayout = ({children}: Props) => {
    return (
        <>
            <GenreBadge/>

        {children}

        </>
    );
}

export default GenresLayout;