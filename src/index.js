import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Badge from './badge.jsx';
import Users from './friends.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Badge user={{
                    name: 'Tyler McGinnis',
                    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
                    username: 'tylermcginnis'
                }} />

                <h1>Friends</h1>
                <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />
            </div>
        );
    }
}

//Entry point of first Component.
//param 1: Component
//param 2: Dom element content should be rendered too.
ReactDOM.render(<App />, document.getElementById('root'));
