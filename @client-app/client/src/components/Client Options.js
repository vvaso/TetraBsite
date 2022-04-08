import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { deleteBooking } from '../services';
import { Materialize_Notifcations } from '../assets/scripts';
import { Dashboard } from '.';
import DownloadLink from 'react-download-link';



class ClientOptions extends Component {

  state = {
    redirect: false, 
    print : false,
    style: {
      margin: '',
      textDecoration: '',
      color: 'White',
      cursor: ''
    },
    data2 : this.props.data
  }

  componentDidMount(){
    Materialize_Notifcations();
  }

  setRedirect = () => {
    setTimeout(()=>{
      this.setState({
        redirect: true
      });
    }, 1000)
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  Receipt = () => {
    let receipt = `
=================================================
=                                               =
=         THANK YOU FOR YOUR BOOKING            =
=                                               =
=================================================
=                                               =
=   CIN : ${this.state.data2.cin1}              =
=   FIRST NAME : ${this.state.data2.firstName1} =
=   LAST NAME : ${this.state.data2.lastName2}   =
=   PHONE : ${this.state.data2.phone1}          =
=   ADDRESS : ${this.state.data2.address1}      =
=   GUESTS : ${this.state.data2.nbP}            =
=   DEPARTURE : ${this.state.data2.date_dept}   =
=   ARRIVAL : ${this.state.data2.date_fin}      =
=   TOTAL AMMOUNT :  **********************     =
=                                               =
=                                               =
================================================= 
    ` ;
    return receipt;
  }

  handleDeleteSubmit = event => {
    event.preventDefault();
    
    deleteBooking(this.state.data2.cin1)
      .then(res => {
       // console.log(res);
        console.log(res.data);
      });
  }

  
  render(){
  return (
    <div className='container'>
      <Dashboard data2={this.state.data2} />
      <br/><br/>
      <div className='row'> 
        <div className='col s4'></div>
        <div className='col s3'>   
          <button className='btn-large black' id='print'>
            <i className='material-icons right'>folder_shared</i>
            <DownloadLink 
              label='PRINT'
              style={this.state.style} 
              filename='Receipt.txt' 
              exportFile={this.Receipt} 
            />
            </button> 
        </div>

        <div className='col s3'>           
          <form onSubmit={this.handleDeleteSubmit} >
            {this.renderRedirect()}
            <button 
              id='delete'
              className='btn-large pink' 
              type='submit'
              onClick={this.setRedirect} 
            > 
              DELETE 
              <i className='material-icons right'>clear</i>
            </button>
          </form>
        </div>
        <br/><br/><br/><br/>
      </div>
      <br/><br/>
    </div>
  )}
}


export { ClientOptions };