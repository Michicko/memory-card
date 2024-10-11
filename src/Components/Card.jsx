export default function Card({ character, handleOnclick }) {
  return (
    <div className="card" onClick={() => handleOnclick(character.num)}>
      <img src={character.img} alt={character.id} />
    </div>
  );
}
