import React from 'react';

/* TODO: Translate the below class component to a functional component! */
// class Color extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
//     }
// }

const Color = (props) => {
    return <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button>
}

export default Color;