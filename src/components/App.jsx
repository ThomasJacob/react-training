import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function(){
                            return (<p>Not Found</p>)
                        }}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;