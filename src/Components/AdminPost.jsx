import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';

class AdminPost extends React.Component{
    constructor() {
        super();
        this.state = {
            AdminRest : []
        };

    }
    componentDidMount() {
        axios({
            url: 'https://zmclone-backend.herokuapp.com/api/adminrest',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({ AdminRest : res.data.restaurant })
            })
            .catch()
}

render() {
    const { AdminRest} = this.state;
    return (
        <div>
            
            <PostList AdminRestData ={AdminRest} />
            {/* <PostCreate />
        <PostEdit />  */}
            
        </div>
    )
}

}


export default AdminPost;
