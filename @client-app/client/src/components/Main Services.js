import React from 'react';



const MainServices = () => {
  return (
    <section className='section section-icons grey lighten-4 center'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <div className='card-panel'>
            <img src="https://icons-for-free.com/iconfiles/png/512/gps+green+location+map+marker+navigation+icon-1320196713756035798.png" width="90" height="90" />
              <h4>Activites Free Search!</h4>
              <p>Search in the map all the activites you woud like to!</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
            <img src="https://gfo-eng.com/images/shop_icon_green.png" width="90" height="90" />
              <h4>Travel Shop</h4>
              <p>You can easily make a booking on our site!</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
            <img src="https://cdn3.iconfinder.com/data/icons/hotel-and-restaurant-volume-3-2/48/123-512.png" width="90" height="90" />
              <h4>Fly Cheap</h4>
              <p>We provide the best and cost effiecent tickets!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export { MainServices };