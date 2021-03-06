import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'
import {TestComponent} from './components/testComponent'
let user = {
    naming:"Anna",
    hobbies: ["Sports"]
},user2 = {
    fruitsFromUser:["Apple","Banana","Pear"],
    hobbies: ["Sports"]
};
function App() {
   
    return (
        //this creates a wrapper, so we dont need a div to wrap all my components.  
        <React.Fragment>
            <NavigationBar />
            <Jumbotron />
            <TestComponent fredrik={user2.fruitsFromUser}/>
            <Layout>
        <cardTest />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NoMatch} />


                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
}

export default App;
