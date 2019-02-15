import React, { Component } from 'react';
class CardTwo extends Component {
    render() {
        return (
            <div className='div-app'>
                <p>This is {this.props.name} and the age is {this.props.age} and I am {this.props.profession}!</p>
                <form>
                    <input className='input'></input>
                </form>
            </div>
        );
    }
}

export default CardTwo;
