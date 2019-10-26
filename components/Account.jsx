//ログインログアウトの処理

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

class Account extends Component {
    constructor(props) {
        super(props);
        this.login_check = this.login_check.bind(this);
    }

    //ログイン処理
    login() {

    }

    //ログアウト処理
    logout() {

    }

    login_check() {
        if(this.props.login == false) {
            this.login();
        } else {
            this.logout();
        }
    }

    render() {
        return (
            <p className='login'>
                <span className='account' onClick={this.login_check}>
                    LOGINED: {this.props.username} さん
                </span>
            </p>
        );
    }
}

Account = connect((state)=>state)(Account);
export default Account;