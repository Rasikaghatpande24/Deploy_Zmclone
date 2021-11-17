import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import Modal from 'react-modal';

class PostEdit extends React.Component{
    constructor(){
        super();
        this.state = {
         restadd : []
        }
    }
//   componentDidMount(){
//       axios({
//           url: 'http://localhost:6503/api/adminrestput',
//           method: 'PUT',
//           headers: {'Content-Type': 'application/json'}
//       })
//       .then(res =>{
//           this.setState({adminrestput : res.data.restaurant})
//       })
//       .catch()
//   }

  render(){
    const {adminrestput} = this.props;
    // const {restadd}= this.state;
    
    return (
        

         <div className="container">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Please Edit the restaurant </h4>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label> Edit Restaurant Name</label>
                    <input className="form-control" type="text" value={adminrestput.name} name="rest_name" />
                </div>
                <div className="form-group">
                    <label>Edit the city name </label>
                    <input className="form-control" type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label>Edit location_id </label>
                    <input className="form-control" type="text" name="phone"/>
                </div>
                <div className="form-group">
                    <label>Edit city_id</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Edit locality</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Edit aggregate_rating</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Edit rating_text</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Edit min_price</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                <div className="form-group">
                    <label>Edit contact_number</label>
                    <input className="form-control" type="text" name="address"/>
                </div>
                

                <button className="btn btn-success" >Submit</button>
            </div>
        </div>
    </div>
    )

  }
}

export default withRouter(PostEdit);