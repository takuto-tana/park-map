type SubTitleTextProps = {
    text: string;
};

const SubTitleText = ({text}: SubTitleTextProps) => {
    return <p className="text-xl mt-2">{text}</p>
};

export default SubTitleText;