import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import Navigation from './Navigation'
import TestPage from './pages/TestPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router , Switch, Route, Link,
    NavLink} from 'react-router-dom';

// function Navigation(props) {
//     return (
//         <nav className="navbar">
//         {/* <Link className="navbar-brand" to="/">Sets & Reps</Link> */}
//         <ul>
//         <li>
//             <NavLink exact to="/signout">
//                 Sign Out
//             </NavLink>
//             </li>
//         <li>
//             <NavLink exact to="/board">
//                 Boards
//             </NavLink>
//             </li>
//             <li>
//             <NavLink exact to="/">
//                 Home
//             </NavLink>
//             </li>
//         </ul>
//         </nav>
//     );
// }
    // const App = props => {
    //     return(
    //         <div>           
    //             <Router>
    //             <Navigation />
    //                 <Switch>
    //                     <Route path="/" exact component ={HomePage} /> 
    //                     <Route path="/board/:board" exact component ={BoardPage} />
    //                     <Route path="/test">
    //                       <TestPage/>
    //                       </Route>
    
    //                 </Switch>
    //             </Router>
    //         </div>
            
    //     );
    // };


const App = props => {
    return(
        <div>           
            <Router>
                <Switch>
                <Route exact path="/">
                <Navigation />
                   <HomePage/>
                </Route> 
                <Route exact path="/landing">
                <Navigation />
                       <LandingPage/>
                   
                </Route>  
                
                <Route exact path="/board/:board">
                <Navigation/>
                    <BoardPage/>
                   
                </Route>
                </Switch>
            </Router>
        </div>
        
    );
};



// <Router>
// <Navigation />
//     <Switch>
//     <Route exact path="/landing">
//            <LandingPage/>
//           </Route>  
//         <Route path="/" exact component ={HomePage} /> 
//         <Route path="/board/:board" component ={BoardPage} />
      
        
//         <Route path="/test">
        
//           <TestPage/>
//           </Route>

//     </Switch>
// </Router>

export default App;