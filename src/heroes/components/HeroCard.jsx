import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {
  // if (alter_ego === characters) return <></>

  return alter_ego === characters ? <></> : <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImageUrl = `/heroes/${id}.jpg`

  // const characterByHero = <p>{characters}</p>

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4 '>
            <img className='card-img' src={heroImageUrl} alt={superhero} />
          </div>

          <div className='col-8'>
            <div className='card-body'>
              <div className='card-title'>{superhero}</div>
              <p className='card-text'>{alter_ego}</p>

              {/* {alter_ego !== characters && characterByHero} */}

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
