import React from 'react'
import LogoImage from './job-logo.jpg'

import './logo.css'

class Logo extends React.Component{
    render(){
        return(
            <div className="logo-img">
                <img src={LogoImage} alt=""/>
            </div>
        )
    }
}

export default Logo