import { ICard } from "../basic/Interface";

const Card = ({ title, name, description, image }: ICard) => {
  return (
    <div>
      <div>{title}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{image}</div>
    </div>
  );
};

export default Card;
