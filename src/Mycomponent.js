

/* import React from 'react'
import { First } from './Demo';
import MyContext from './MyContext';
// Props Drilling
class App extends React.Component
{
    constructor()
    {
      super() 
      this.state = {
          title : "Good Morning",
          num : 125
      }
    }
    render()
    {     
      return <div>
          <h1>App Component : {this.state.title} , {this.state.num}</h1> 
          <button onClick={()=>this.setState({title:'Good Afternoon',num:200})}>Change</button>
          <hr/>  
          <MyContext.Provider value={{title:this.state.title,
                                      num:this.state.num}}>
              <First/>
          </MyContext.Provider>
      </div>
    }
}

export default App;


 */



/* import React from 'react'

export default class Demo extends React.Component
{
    constructor(props)
    {
        super(props)
        //this.props.data = "Vikas"
    }
    render()
    {
        return <div>
            <h2>Demo Component</h2>
            <b>{this.props.data}</b>
            <br/>
            <button onClick={()=>this.props.fun('Aman 12')}>Change</button>
        </div>
    }
}
 */