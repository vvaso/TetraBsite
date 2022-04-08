import React , { Component } from 'react';
import { Materialize_Slider } from '../assets/scripts';
import { resort1, resort2, resort3} from '../constant';



class Slider extends Component {

  componentDidMount(){
    Materialize_Slider();
  }

  
  render() {
    return (
      <section className='slider'>
        <ul className='slides'>
          <li>
            <img src={resort1} alt='first img' />
            <div className='caption left-align'>
              <h2> Take Your Dream Vacation</h2>
              <h5 className='white-text hide-on-small-only'>With the best Travel Booking Site Ever! </h5>
            </div>
          </li>      
          <li>
            <img src={resort2} alt='second img' />
            <div className='caption center-align'>
              <h2>We Work With All Budgets</h2>
            </div>
          </li>
          <li>
            <img src={resort3} 
         
         alt='third img' />
            <div className='caption left-align'>
              <h1>Group & Individual Getaways</h1>
              <h5 className='white-text text-lighten-2 hide-on-small-only'> We provide best group tours and individual! </h5>
            </div>
          </li>
        </ul>
      </section>     
    )
  }
}


export { Slider };