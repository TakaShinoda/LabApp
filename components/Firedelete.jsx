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
        this.setState({
            id_str: e.target.value
        })
    }

    doAction() {
        let result = confirm('本当に削除してよろしいでしょうか？');
        if(result) {
            this.deleteFireData();
        }
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
                <p>削除する項目のID入力(半角数字)</p>
                <form onSubmit={this.doAction}>
                    <input type='text' placeholder='delete ID:' onChange={this.doChange} value={this.state.id_str} required pattern='[0-9]+' />
                    <input type='submit' value='削除' />
                </form>
            </div>
        );
    }
}

export default Firedelete;