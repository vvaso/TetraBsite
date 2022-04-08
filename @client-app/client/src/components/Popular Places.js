import React, { Component } from 'react';
import { resort1, resort2, resort3 } from '../constant'; // img
import { Materialize_ScrollSpy } from '../assets/scripts';



class PopularPlaces extends Component {

  componentDidMount(){
    Materialize_ScrollSpy();
  }
 
  
  render(){
    return (
      <section id='popular' className='section section-popular scrollspy'>
        <div className='container'>
          <div className='row'>
            <h4 className='center'>
              <span className='black-text'>Popular</span> Places</h4>
            <div className='col s12 m4'>
              <div className='card'>
                <div className='card-image'>
                  <img src={resort1} alt=''/>
                  <span className='card-title'>Mykonos, Greece</span>
                </div>
                <div className='card-content'>
                Mykonos is an island in the Cyclades group in the Aegean Sea. It's popularly known for its summer party atmosphere. Beaches such as Paradise and Super Paradise have bars that blare thumping music.
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card'>
                <div className='card-image'>
                  <img src={resort2} alt=''/>
                  <span className='card-title'>Santorini, Greece</span>
                </div>
                <div className='card-content'>
                Santorini is one of the most famous islands in the world. The fact that you can sit in front of the caldera, enjoy local dishes, a drink while gazing at the remarkable beauty of a volcano is priceless!
                </div>
              </div>
            </div>
            <div className='col s12 m4
            '>
              <div className='card'>
                <div className='card-image'>
                  <img src={resort3} alt='' />
                  <span className='card-title'>Zakynthos, Greece</span>
                </div>
                <div className='card-content'>
                Zakynthos is a Greek island in the Ionian Sea and a famous summer resort.The harbor city of Zakynthos iscentered around waterfront Solomos Square.Popular beaches like Agios Nikolaos and Alykanas offer swimming and water sports.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}


export { PopularPlaces };