import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroeById } from './../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate()
  
  const heroe = useMemo(() => getHeroeById ( id ), [id]);

  const onNavigate = () => {
    navigate(-1);
  }

  if ( !heroe ) {
    return <Navigate to="/marvel"/>
  }


  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={heroe.superhero} 
          className='img-thumbnail'
        />
      </div>
      <div className="col-8">
        <h3> {heroe.superhero} </h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alet ego: </b> {heroe.alter_ego} </li>
          <li className='list-group-item'> <b>First appereance: </b> {heroe.first_appearance} </li>
          <li className='list-group-item'> <b>Publisher: </b> {heroe.publisher} </li>
        </ul>
        <h5 className='mt-3'> Characters </h5>
        <p>{ heroe.characters }</p>

        <button 
          className='btn btn-outline-info'
          onClick={onNavigate}
        >Back</button>

      </div>
    
    </div>

    
  )
}
