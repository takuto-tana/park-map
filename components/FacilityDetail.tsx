"use client";

import { Category } from "@/app/contents/park-item";
import { useState } from "react";
import FacilityCategoryList from "./organisms/FacilityCategoryList";

type  FacilityDetailProps = {
    categories: Category[];
};

const FacilityDetail = ({categories}: FacilityDetailProps) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenId((currentId) => (currentId === id ? null : id));
    };

    return (
        <FacilityCategoryList
         categories={categories}
         openId={openId}
         onToggle={handleToggle} />
    );
};

export default FacilityDetail;