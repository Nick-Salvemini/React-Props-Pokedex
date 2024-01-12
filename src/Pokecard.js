import "./Pokecard.css"

const Pokecard = ({ name, type, exp, id }) => (
    <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`Pokemon ${id}`} />
        <h3 className="Pokecard-data">Type:{type}</h3>
        <h3 className="Pokecard-data">EXP:{exp}</h3>
    </div>
)

export default Pokecard