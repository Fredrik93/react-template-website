import React from 'react';

export class TestComponent extends React.Component{
    render(){

        return(
            <div>
        <h4>Fruits i like : {this.props.applesAndBanans}</h4>
        <ul>
            
        {this.props.fredrik.map((frukt) => <li>{frukt}</li>)}
        
        </ul>
            </div>
        )
    }
}