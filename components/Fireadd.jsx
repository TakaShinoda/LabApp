import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

class Fireadd extends Component {

    style = {
        heigth:'7em',
        width:'350px',
        lineHeight: '1.5em'
    }

    constructor(props) {
        super(props);
        this.state = {
            msg_str:'',
            lastID: -1,
            data: []
        }
        this.getLastID();
        this.doChangeMsg = this.doChangeMsg.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeMsg(e) {
        this.setState({
            msg_str: e.target.value
        })
    }

    doAction(e) {
        this.addFireData();
        Router.push('/contact_board');
    }

    //最後のID取得
    getLastID() {
        let db = firebase.database();
        let ref = db.ref('sample/');
        let self = this;
        ref
        .orderByKey()
        .limitToLast(1)
        .on("value", snapshot => {
            let res = snapshot.val();
            for(let i in res) {
                self.setState({
                lastID: i
                });
                return;
            }
        });
    }

    addFireData() {
        if (this.state.lastID == -1) {
            return;
        }
        let id = this.state.lastID * 1 + 1;
        let db = firebase.database();
        let ref = db.ref('/sample/' + id);
        ref.set({
            ID: id,
            message: this.state.msg_str,
        });
    }

    render() {
        if(this.state.lastID == -1) {
            this.getLastID();
        }
        return (
            <div>
                <textarea style={this.style} placeholder='type message....' onChange={this.doChangeMsg} value={this.state.msg_str} />
                <button onClick={this.doAction}>
                    新規投稿
                </button>
            </div>
        );
    }
}

export default Fireadd;