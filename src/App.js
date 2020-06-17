import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom'
import Routes from './router/index'
import LayoutBasic from './components/menu/menu';
import { Switch } from 'react-router-dom';
import loadable from './router/loadable'
const login = loadable(()=>import('../src/views/login/login'))
function App () {
    return ( 
        <Router>
            <Switch>
                <Route path="/login" component={login}/>
                <LayoutBasic>
                    <Routes/>
                </LayoutBasic>
            </Switch>

        </Router>
    );
}
 
export default App;