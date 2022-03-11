import React from 'react'
import Myphoto from '../images/photo.jpg';
import { MailOutlined, LinkedinFilled  } from '@ant-design/icons';

function Info() {
  return (
    <div className="Info">
         <img src={Myphoto} alt="My photo" />
         <h3>Elia Toribio Guillén</h3>
         <p className="profession">Frontend Developer</p>
         <a href="https://eliatoribio.netlify.app/"  target="blank" className="website">eliatoribio.website</a>
        <div className="SocialMedia">
            <a href="" className="Email" target="blank"><MailOutlined /> <span>Email</span></a>
            <a href="https://www.linkedin.com/in/eliatoribio/" className="LinkedlIn" target="blank"> <LinkedinFilled />  <span>LinkedIn</span></a>
        </div>

    </div>
  )
}

export default Info