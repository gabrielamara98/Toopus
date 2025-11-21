import CardItem from "../components/CardItem";

function Card({ item, onConnectionChange }) {
  return <CardItem items={item} onConnectionChange={onConnectionChange} />;
}

export default Card