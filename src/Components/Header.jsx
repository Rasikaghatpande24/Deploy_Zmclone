import React from 'react';
import '../Styles/header.css';
import {withRouter} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Modal from 'react-modal';


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


class Header extends React.Component {
  constructor(){
      super();
      this.state= {
          isLoginModalIsOpen : false,
          isLoggedIn: false,
          loggedInUser: undefined
      }
  }


    handleNavigate = () => {
        this.props.history.push('/');
    }

    handleLogin = () => {
        this.setState({isLoginModalIsOpen: true })
    }

    responseGoogle = (response) => {
        this.setState({ loggedInUser: response.profileObj.name, isLoggedIn: true, isLoginModalIsOpen: false});
      }

      handleLogout = () => {
          this.setState({isLoggedIn : false, loggedInUser: undefined});
      }
   
    render() {
        const {isLoginModalIsOpen, loggedInUser, isLoggedIn} = this.state;
        return (
            <div className="header">
                <div className="header-logo"  onClick ={this.handleNavigate}>
                   <b>e!</b>
                </div>
              {isLoggedIn ? <div className="user-login">
                    <div className="login" onClick = {loggedInUser}>Login</div>
                    <div className="Signup" onClick = {this.handleLogout}>Logout</div>
                </div> :

                <div className="user-login">
                    <div className="login" onClick = {this.handleLogin}>Login</div>
                    <div className="Signup">Create an account</div>
                </div>}
                <Modal
               isOpen={isLoginModalIsOpen}
               style={customStyles}
               >
                   <div>
                   <GoogleLogin
                    clientId="193465002568-arng5o5rppf9ug7fjabeb3bd6i957mb1.apps.googleusercontent.com"
                    buttonText="Continue login process with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                   </div>

               </Modal>
          
            </div>
        )
    }
}
export default withRouter(Header);