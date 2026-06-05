type TitleTextProps = {
    text: string;
};

const TitleText = ({text}: TitleTextProps ) => {
    return <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>;
};

export default TitleText;