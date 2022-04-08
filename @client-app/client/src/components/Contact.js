import React from 'react';


const Information = () => {
  return (
    <div className='card-panel teal white-text center'>
      <i className='material-icons'>email</i>
      <h5>Contact Us For Booking</h5>
      <p>Hello you can contact us freely in this contact form!</p>
    </div>     
  )
};


const Map = () => { 
  return (
    <div>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48454.260340042936!2d22.911007885914692!3d40.62125236028019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9!2sThessaloniki!5e0!3m2!1sen!2sgr!4v1645713882239!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' width='510' height='200' frameBorder='0' title='myMap'  allowFullScreen />
    </div> 
  )
};


export { Information , Map };