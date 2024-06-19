import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}> 
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jennifer Gergun</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Nestled high in the rugged mountains, the crystal-clear lake reflects the towering peaks that encircle it. The water is so still that it mirrors the vibrant blue sky and the dense pine forests lining its shores. Birds flit overhead, their songs blending harmoniously with the gentle rustle of the wind through the trees. The air is crisp and cool, filled with the fresh scent of pine and earth, creating a tranquil escape from the world below.                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jeffrey Bozos</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Nestled high in the rugged mountains, the crystal-clear lake reflects the towering peaks that encircle it. The water is so still that it mirrors the vibrant blue sky and the dense pine forests lining its shores. Birds flit overhead, their songs blending harmoniously with the gentle rustle of the wind through the trees. The air is crisp and cool, filled with the fresh scent of pine and earth, creating a tranquil escape from the world below.                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Blaze Yernga</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Nestled high in the rugged mountains, the crystal-clear lake reflects the towering peaks that encircle it. The water is so still that it mirrors the vibrant blue sky and the dense pine forests lining its shores. Birds flit overhead, their songs blending harmoniously with the gentle rustle of the wind through the trees. The air is crisp and cool, filled with the fresh scent of pine and earth, creating a tranquil escape from the world below.                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Squilliam</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Nestled high in the rugged mountains, the crystal-clear lake reflects the towering peaks that encircle it. The water is so still that it mirrors the vibrant blue sky and the dense pine forests lining its shores. Birds flit overhead, their songs blending harmoniously with the gentle rustle of the wind through the trees. The air is crisp and cool, filled with the fresh scent of pine and earth, creating a tranquil escape from the world below.                        </p>
                    </div>
                </li>
                </ul>
        </div>
    </div>
  )
}

export default Testimonials