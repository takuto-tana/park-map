"use client";

import { useState } from "react";

type FacilityDescriptionProps = {
    description: string;
    images: string[];
};

const FacilityDescription = ({
    description,
    images,
}: FacilityDescriptionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentImage = images[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((index) => 
            index === 0 ? images.length -1 : index - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((index) => 
            index === images.length - 1 ? 0 : index + 1
     );
    };
    return (
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="text-base leading-relaxed text-gray-700">
                {description}
            </p>

            <div className="mt-4">
                <img
                 src={currentImage}
                 alt={description}
                 className="h-64 w-full rounded-lg object-cover shadow-md"
                />

                {images.length > 1 && (
                    <div className="mt-3 flex justify-center gap-4">
                        <button
                         type="button"
                         onClick={handlePrev}
                         className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                        >
                            前へ
                        </button>

                        <span>
                            {currentIndex + 1} / {images.length}
                        </span>

                        <button
                         type="button"
                         onClick={handleNext}
                         className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                         >
                            次へ
                         </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FacilityDescription;