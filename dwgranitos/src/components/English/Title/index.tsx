import "./styles.css";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="titleAbout">{title}</h1>;
};

export default Title;
