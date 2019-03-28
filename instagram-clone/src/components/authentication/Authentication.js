import React, { Component } from 'react';

const withAuthenticate = PostPage => LogInPage =>  
    class extends React.Component {

        render() {
            if (window.localStorage.currentUser) {
                return <PostPage currentUser={window.localStorage.currentUser}/>;
            } else {
                return <LogInPage />;
            }
        }
    };

export default withAuthenticate;

