import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import About from "./About"
import ContactMe from "./ContactMe"
import Portfolio from "./Portfolio";

const Navbar = () => {
    return ( 
        <Router>
            
        <nav>
            <img className="navImage" src="/images/antzack2.png"></img>
            {/* <h1 className="navLink"><Link to="/">About Me</Link></h1> */}
            <h1 className="navLink"><Link to="/portfolio">Portfolio</Link></h1>
            <h1 className="navLink"><Link to="/">Contact Me </Link></h1>
        </nav>
        <Switch>
        
    
        
        <Route path="/portfolio" component = {Portfolio}/>
        <Route path="/" component = {ContactMe}/>
        {/* <Route path="/" component = {About}/> */}
        
        </Switch>
        </Router>
     );
}
  
export default Navbar;