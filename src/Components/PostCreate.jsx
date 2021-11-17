import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class PostCreate extends React.Component{
    constructor(){
        super();
        this.state = {
            submitrest: []
        }
    }

    
        
    handleSubmit =() =>{
        
        axios({
            url:'http://loclhost:6503/api/addRestaurantadminlist',
            method: "POST",
            headers: {'Content-Type': 'aaplication/json'}
        })
        .then(res => {
            this.setState({submitrest : res.data.restaurant})
        })
        .catch()
     }



    render(){
        // const Addadminrest = this.state;
        return(
              <div>
                 <div className="container">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Please Create the restaurant </h4>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label>Create Restaurant Name</label>
                    <input className="form-control" type="text" name="rest_name" />
                </div>
                <div className="form-group">
                    <label>Create the city name </label>
                    <input className="form-control" type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label>Create location_id </label>
                    <input className="form-control" type="text" name="phone"/>
                </div>
                <div className="form-group">
                    <label>Create city_id</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Create locality</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Create aggregate_rating</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Create rating_text</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Create min_price</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Create contact_number</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                

                <button className="btn btn-success" onClick ={this.handleSubmit} >Submit</button>
            </div>
        </div>
    </div>         
              </div>
        )
    }
}

export default withRouter(PostCreate);