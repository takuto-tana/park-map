"use client";
import { ParkItem, parkItems } from "@/app/contents/park-item";
import { useState } from "react";
import FacilityCategoryList from "./organisms/FacilityCategoryList";

type FacilityDetailProps = {
    items: ParkItem[];
};

const FacilityDetail = ({items}: FacilityDetailProps) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenId((currentId) => (currentId === id ? null : id));
    };

    return (
        <FacilityCategoryList
         items={items}
         openId={openId}
         onToggle={handleToggle} />
    );
};

export default FacilityDetail;