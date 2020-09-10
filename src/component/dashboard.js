import React, {Component} from 'react';
import './style/dashboard.css';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.onShow = this.onShow.bind(this);
        this.state = {
            userName: ''
        }
    }
    onShow(){
        return this.props.location.state.username
    }

    render(){
        return(
            <div className="textbox">
            <h1>
                Welcome, {this.onShow()}
            </h1>
            <Link to="/">
            <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Back to login
            </button>
            </Link>
            </div>
            
        )
    }
}