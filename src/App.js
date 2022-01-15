import React from 'react'
import About from './About';
import Contact from './Contact';
import Home from './Home';

import {Link , BrowserRouter , Routes , Route} from 'react-router-dom'

class App extends React.Component
{
    constructor()
    {
      super()   
    }
    render()
    {     
      return <div>
         <h1>App Component</h1>
        
        <BrowserRouter>

            <Link to="/"> <b>Home</b>  </Link> &nbsp;
            <Link to="/about"> <b>About</b>  </Link>  &nbsp;
            <Link to="/contact"> <b>Contact</b> </Link>  &nbsp;
            <hr/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            
         </BrowserRouter>
      </div>
    }
}

export default App;




/* import React from 'react'
import Demo from './Mycomponent';

class App extends React.Component
{
    constructor()
    {
      super()      
      this.state = {
          name : "Aman Deep"
      }
    }

    changeName = (name)=>{
      this.setState({name:name})
    }

    render()
    {     
      return <div>
          <h1>App Component</h1>   
          <b>{this.state.name}</b>

          <br/>
          <input type='text' placeholder='Name' 
          onChange={(event)=>this.setState({name:event.target.value})}
          value={this.state.name}/>

          <br/>
          <Demo data={this.state.name} fun={this.changeName}/>
      </div>
    }
}

export default App; */