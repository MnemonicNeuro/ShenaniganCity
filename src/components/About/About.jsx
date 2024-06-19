import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Nestled high in the rugged mountains, the crystal-clear lake reflects the towering peaks that encircle it. The water is so still that it mirrors the vibrant blue sky and the dense pine forests lining its shores. Birds flit overhead, their songs blending harmoniously with the gentle rustle of the wind through the trees. The air is crisp and cool, filled with the fresh scent of pine and earth, creating a tranquil escape from the world below.</p>
            <p>The market buzzes with activity as vendors shout out their daily specials and the aroma of street food fills the air. Stalls overflow with colorful fruits, vegetables, spices, and handmade crafts, drawing in crowds of eager shoppers. Children weave through the throng, their laughter mingling with the cacophony of haggling voices and clinking coins. Amid the chaos, there's a vibrant energy that pulses through the narrow streets, making the market a lively heartbeat of the city.</p>
            <p>The library stands as a silent sentinel of history, its towering shelves filled with dusty tomes and forgotten stories. Sunlight streams through tall, arched windows, casting a warm glow on the polished wooden floors and the rich, leather-bound books. The scent of aged paper and ink lingers in the air, inviting visitors to lose themselves in the pages of another era. In the quiet corners, time seems to slow, allowing a moment of peaceful reflection in a world that often moves too quickly.</p>
        </div>
    </div>
  )
}

export default About