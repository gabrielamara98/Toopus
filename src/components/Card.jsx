import dadosPerfil from "../data/usersDetail.json"
import CardItem from "../components/CardItem"

function Card() {
  return (
    <>
      {dadosPerfil.map((items) => (
        <CardItem key={items.id} items={items} />
      ))}
    </>
  )
}

export default Card