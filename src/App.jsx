import React, { useState} from 'react'
import ProductDetails from './assets/components/ProductDetails'

//import User from './assets/components/User';
export default function App() {

  // const [users,setUsers] = useState([
  //  {'id':'1','name':'Hussam','email':'Hussam@gmail.com'},
  //  {'id':'2','name':'ahmad','email':'ahmad@gmail.com'},
  //  {'id':'3','name':'Mohammad','email':'Mohammad@gmail.com'},
   // {'id':'4','name':'Smaier','email':'Smaier@gmail.com'},
 // ]);

// {
  // users.map(user=>
     // <User name={user.name} email={user.email}/>
   // )
// }





  
  const [counter, setCounter] = useState(0);

  const  Increment= ()=>{
    setCounter(counter + 1);

  }

  return (
    <>
     
       
     
      <div className="container">
        <div className="row">
          <h1>Counter  Is  {counter} </h1>
          <button class="btn btn-outline-success"  onClick={ Increment }>Increment</button>
          <div id="liveAlertPlaceholder">
          </div>
           
        </div>

        <div className="div">
      <ProductDetails />
      </div>
      </div>
    </>
  )
}
