'use client'

import dynamic from "next/dynamic";

const StarsRatings = dynamic(() => import("@/Components/StarsRating/StarsRating"), {
    ssr: false
});

export default StarsRatings;

