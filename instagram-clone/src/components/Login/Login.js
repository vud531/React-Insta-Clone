import React, { Component } from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
    }

    render() {
        console.log(this)
        return (
            <form onSubmit={this.login}>
                <input 
                // className='username'
                name='username'
                value={this.state.username} 
                onChange={this.onChange}/>
                <input type='password'
                name='password'
                value={this.state.password} 
                onChange={this.onChange}/>
                <input type="submit" value="log in" /> 
            </form>
        )
    }

    onChange = e => {
        console.log(this);
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    login = () => {
        const myStorage = window.localStorage;
        myStorage.setItem('currentUser', JSON.stringify({ 
            username: this.state.username,
            logedIn: true,
            likedPosts: ["0"], 
        }));
        // this.setState({currentUser: Storage.currentUser})
        window.location.reload();
    }
}

export default Login;