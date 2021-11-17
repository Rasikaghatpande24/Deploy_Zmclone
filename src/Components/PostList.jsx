import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import PostEdit from './PostEdit';
import axios from 'axios';
import PostCreate from './PostCreate';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'antiquewhite',
        border: '1px solid brown'
    },
};

class PostList extends React.Component {
    constructor() {
        super();
        this.state= {
            editModal: false,
            adminrestput: [],
            addadminrest:[],
            createModal: false,
           // restId:[]
        }
    }
 
    handleEdit = () => {
        //const {restId} = this.state;
        axios({
            url: `http://localhost:6503/api/adminrestput`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({adminrestput: res.data.putrestaurant, editModal: true })
            })
            .catch()
            
    }

    handleCreate = () => {
        // axios({
        //     url:'http://loclhost:6503/api/addRestaurantadminlist',
        //     method: "GET",
        //     headers: {'Content-Type': 'aaplication/json'}
        // })
        // .then(res => {
        //     this.setState({addadminrest : res.data.restaurant, createModal: true})
        // })
        // .catch()
        this.setState({createModal:true})
        
    }

    CloseEditModal=() => {
        this.setState({editModal: false})
    }

    CloseCreateModal=() => {
        this.setState({createModal: false})
    }


    // handleClose = () => this.setState({editModal: false})

    render() {
        const {editModal, adminrestput,addadminrest, createModal} = this.state;
        const { AdminRestData } = this.props;
        return (
            <div className="row">

                <div className="col-sm-4 col-md-4 col-lg-4 filter-options">
                    <div className="filter-heading">Data </div>
                    <span className="glyphicon glyphicon-chevron-down toggle-span" data-toggle="collapse"
                        data-target="#filter"></span>
                    <div id="filter" className="collapse show">
                        <div className="Select-Location">Restaurant List</div>
                        
                            {AdminRestData.map((item, index) => {
                                return (
                                    <div>
                                       <h4 className="items"> {item.name} </h4>
                                        <button className="btn-order" onClick={this.handleEdit}>Edit</button>
                                    </div>
                                )
                            })}
                           <br/>
                           <br/>

                        <button className="btn-order" onClick= {this.handleCreate}>Create</button>
                    </div>
                </div>
                <Modal 
                isOpen={editModal} 
                style={customStyles}>
                    <div>
                    <div style={{ float: 'right' }} className="fas fa-times" onClick={this.CloseEditModal}></div>
                   
                     <PostEdit adminrestput = {adminrestput}/> 
                    </div>
                </Modal>


                <Modal
                isOpen={createModal}
                style={customStyles}
                >
                    <div>
                    <div style={{ float: 'right' }} className="fas fa-times" onClick={this.CloseCreateModal}></div>
                    <PostCreate/>
                    </div>

                </Modal>
            </div>
        )
    }
}



export default withRouter(PostList);