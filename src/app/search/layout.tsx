import type { Metadata } from "next";
import React from "react";
import Search from "@/Components/Search/Search";
export const metadata: Metadata = {
    title: "SearchLayout metadata",
};
type Props = {
    children: React.ReactNode
}
const SearchLayout = ({children}: Props) => {

    return (
        <>
            <Search/>

        {children}

        </>
    );
}

export default SearchLayout;