import React, { Component } from 'react';

class Memberadd extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text'placeholder='名前入力:' />
                    <button>追加</button>
                </form>
            </div>
        )
    }
}

export default Memberadd;