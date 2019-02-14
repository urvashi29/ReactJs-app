import React, { Component } from 'react';
class CardOne extends Component {
    render() {
        return (
            <div className='div-app'>
                <p>This is {this.props.name} and my age is {this.props.age}</p>
                <form>
                    <input className='input'></input>
                </form>
            </div>
        );
    }
}

export default CardOne;
