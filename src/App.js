
import './App.css';
import React from 'react';
import Cardlister from './Cards/Cardlister';
import Database from './Database-site/Database';
import About from './Home-page/About'
import Serchbox from './Serchbar/Serchbox';
import Home from './Home-page/Home';
import {Route,Routes} from 'react-router-dom';
import Signup from './Home-page/siginup';
import Navbar  from './Navbar/Navbar';
import Sigin from './Home-page/Sigin';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      Data:Database,
      Serchfilde: ''
    }
    
         
  }
  onchanegserchbox=(event)=>{
    return this.setState({Serchfilde:event.target.value});

  }
  render(){
    const showingCardchnger = this.state.Data.filter(ino=>{
      return ino.User.toLowerCase().includes(this.state.Serchfilde.toLowerCase());
    })
    return(
      <div>
        
        <Navbar />
        <Serchbox  getterchnge = {this.onchanegserchbox}  />

        <Routes>
          
          <Route path='/' element ={<Cardlister Data = {showingCardchnger} />} />
          <Route path='/Home' element ={<Home/>} />
          
          <Route path='/Products'
           element ={<Cardlister Data = {showingCardchnger} />} />
           <Route path='/Siginin' element = {<Sigin/>} />
           <Route path='Signup' element= {<Signup/>} />
           <Route path='About' element= {<About/>} />

        </Routes>

        {/* <Cardlister Data = {showingCardchnger} /> */}
      </div>
    )
  }
}
export default App;
