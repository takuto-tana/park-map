type FacilityToggleButtonProps = {
    name: string;
    isOpen: boolean;
    onClick: () => void;
};

const FacilityToggleButton = ({
    name,
    isOpen,
    onClick,
}: FacilityToggleButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left font-bold hover:bg-gray-100 transition-colors"
        >
            <span>{name}</span>
            <span>{isOpen ? "-" : "+"}</span>
        </button>
    );
};

export default FacilityToggleButton;