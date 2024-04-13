import React from 'react'
import { Link } from 'react-router-dom';



export const Crew = (props) => {


    const link = "/edit" + props.crewid
    const shadowColor = "0px -5px 7px "+props.color;

    function getStats(){
      let path = 'detail/' + props.crewid;
      window.location.href=path;
    }

  return (
    <div className='one--crew' style={{boxShadow: shadowColor}} onClick={getStats}>
        <img className='one--crew--pic' src='https://preview.redd.it/suw3y95f0kx51.png?auto=webp&s=191f9e31aefcbf182fe3128743c058d54112d84f'></img>
        <p>Name of Crewmate: <span className='one--crew--att'>{props.name}</span></p>
        <p>Speed of Crewmate: <span className='one--crew--att'>{props.speed}</span></p>
        <p>Color of Crewmate: <span className='one--crew--att'>{props.color}</span></p>
        <Link to={link} className='one--crew--button'>edit Crewmate</Link>
    </div>
  )
}
