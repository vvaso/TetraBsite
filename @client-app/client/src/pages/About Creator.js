import React from 'react';
import { ChatBotLogo as MyPhoto } from '../constant';



const AboutCreator = () => {

  let myStyle = {
    fontFamily: "'Times New Roman', Times, serif"
  }

  return (          
    <div className='container'>  
      <br/><br/><br/><br/><br/>
      <div className='container'>
        <div className='col s12 m8 offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s2'>
                <img src={MyPhoto} alt='' className='circle responsive-img' /> 
              </div>
              <div className='col s10'>
                <span className='black-text'>
                  <h5 style={myStyle}> 
                    &nbsp; Our Team  Name is <b className='teal-text'>TetraByte</b>.We are a team of 4 members studying Computer Science 2nd Year at 
                    University of Derby. Our goal is to make the best Team Project we could this year and present it!
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  )
}


export { AboutCreator }; 