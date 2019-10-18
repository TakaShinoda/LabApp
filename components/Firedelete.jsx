import React, { Component } from 'react';
import firebase from 'firebase';
import Router from 'next/router';
import 'firebase/storage';

class Firedelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_str: '',
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        alert('hoge');
        this.setState({
            id_str: e.target.value
        })
    }

    doAction(e) {
        this.deleteFireData();
        Router.push('/contact_board');
    }

    deleteFireData() {
        let id = this.state.id_str;
        let db = firebase.database();
        let ref = db.ref('sample/' + id);
        ref.remove();
    }

    render() {
        return (
            <div>
                <p>削除する項目のID入力</p>
                <p>※現在未入力のままボタンクリックNG</p>
                <input type='text' placeholder='delete ID:' onChange={this.doChange} value={this.state.id_str} />
                <button onClick={this.doAction}>
                    削除
                </button>
            </div>
        );
    }
}

export default Firedelete;