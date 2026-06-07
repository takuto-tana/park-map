type FacilityDescriptionProps = {
    description: string;
    images: string[];
};

const FacilityDescription = ({
    description,
    images,
}: FacilityDescriptionProps) => {
    return (
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p>{description}</p>
            <div>
                {images.map((image) => (
                    <img
                     key={image}
                     src={image}
                     alt={description}
                     className="w-full rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default FacilityDescription;