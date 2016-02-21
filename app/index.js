import React from 'react';
import ReactDOM from 'react-dom';


class Hilsen extends React.Component {
    render(){
        return <h1>Halla , {this.props.name} </h1>;
    }

 }



ReactDOM.render(
    <Hilsen name="Asle"/>,
    document.getElementById('container')
);

