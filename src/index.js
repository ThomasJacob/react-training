import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(<div>Hello React App</div>);
    }
}

//Entry point of first Component.
//param 1: Component
//param 2: Dom element content should be rendered too.
ReactDOM.render(<App/>, document.getElementById('root'));
