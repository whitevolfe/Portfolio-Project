import React from 'react'
import azeem from "../../assets/images/azeem-right.png"
import Button from '../UI/Button';
import "./style.css";

const Hero = () => {
  return (
    <div className='container' style={{marginTop:"70px"}}>
        <div className='flexRow justify-sb align-center'>
        <div>
            <p className='uppercase bold-500 textColor ls-1 mtb-10'>
            <span className='primaryColor'>Hello,</span>
             I am Mohamed Azeem
            </p>
            <h1 className='textColor ls-1 mtb-10'>Software Developer</h1>
            <p className='font-12 grey mtb-10'>Frontend Developer using React js.</p>
            <div className='flexRow' style={{margin:"30px 0"}}>
            <div>
            <Button lable="Hire Me" />
            </div>
            
            <div className='mlr-10'>
            <Button lable="Download CV" inverse={true} />
            </div>
            </div>
            
            
            
        </div>
        
        <div>
            <div className='azeemRightImageContainer'>
            <img src={azeem} alt='' />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero