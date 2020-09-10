import React, {Component} from 'react'
import '../App.css'
import Popup from './popup'

export default class LoginPage extends Component{
    constructor(props){
        super(props)
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.state = {
            username : '',
            password : '',
            showPopup: false
        }
    }

    onUsernameChange = (e) =>{
        this.setState({
            username: e.target.value
        })
    }
    onPasswordChange = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const user ={
            username: this.state.username,
            password: this.state.password
        }
        if(user.password.match('P@SSW0RD')){
            this.props.history.push('/dashboard',user)
            console.log(user);
        }else{
            this.togglePopup()
            console.log("Error please type 'P@SSW0RD' into password field")
        }
        this.setState({
            username: '',
            password:''
        })
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  


    render(){
        return(
        <div className="login-box">
        <h2>Login</h2>
        <form 
        onSubmit={this.onSubmit}
        >
            <div class="user-box"> 
                <input 
                type="text" 
                className="username" 
                id="username" 
                value={this.state.username}
                required
                onChange={this.onUsernameChange}
                ></input>
                <label for="username">Username</label>
            </div>
            <div class="user-box">
                <input 
                type="password" 
                className="password" 
                id="password" 
                value={this.state.password}
                required
                onChange={this.onPasswordChange}
                >
                </input>
                <label for="password">Password</label>
            </div>
            <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
            </button>
        </form>
        <div class="popup-box">
            {this.state.showPopup ? 
            <Popup  
                text="Please type 'P@SSW0RD' into password field" 
                closePopup={this.togglePopup}
                /> : null  
            }  
        </div>
    </div>
    )
    }

}