import React from "react";
import 'tachyons';
import './navbarstyle.css';
import logo from './ROG.png'
import {Link,} from 'react-router-dom';
//import Serchbox from "../Serchbar/Serchbox";
 class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClassActive : false
        }
           };
    
           toggleClass = () => {
            this.setState({ isClassActive: 
                !this.state.isClassActive });
        }
        
        
    render(){
        
/* let humbergernav = document.querySelector('.humbergernav');
let navbar = document.querySelector('.nav_bar');
humbergernav.addEventListener('click',()=>navbar.classList.toggle('active'));
 */
        return(
            <header>
                <div className="logo" >
                        <img src={logo} alt="rog" />

                </div>
                <div className="humbergernav" onClick={this.toggleClass} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={this.state.isClassActive? 'nav_bar active' : 'nav_bar' }   >
                <ul>

                    <li> 
                        <Link to="/Home" className="active" >Home</Link>
                    </li>
                    <li> 
                        <Link to="/Products">Products</Link>
                    </li>
                    <li> 
                        <Link to="/Siginin"  >Signin</Link>
                    </li>
                    <li> 
                        <Link to="/Signup"  >Signup</Link>
                    </li>
                    <li> 
                        <Link to="/About"  >About</Link>
                    </li>
                    
                </ul>
          
                </nav>
            </header>
        )
    }
}
export default Navbar;