// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FaBeer } from "react-icons/fa";
function App() {

  const data = [
    {
      title:"Free",
      price:"$0", 
      // flag : [0],
      detail:[
        {name:"single-user",enabled:true },
        {name:"5GB Storage",enabled:true },
        {name:"Unlimited Public Projects",enabled:true },
        {name:"Community Access",enabled:true },
        {name:"Unlimited Private Projects",enabled:false },
        {name:"Dedicated Phone Support",enabled:false },
        {name:"Free Subdomain",enabled:false },
        {name:"Monthly Status Reports",enabled:false },
      ]
    },
    {
      title:"PLUS",
      price:"$9",
      detail:[
        {name:"single-user",enabled:true },
        {name:"5GB Storage",enabled:true },
        {name:"Unlimited Public Projects",enabled:true },
        {name:"Community Access",enabled:true },
        {name:"Unlimited Private Projects",enabled:true },
        {name:"Dedicated Phone Support",enabled:true },
        {name:"Free Subdomain",enabled:false },
        {name:"Monthly Status Reports",enabled:false },
      ]
    },
    {
      title:"PRO",
      price:"$49",
      detail:[
        {name:"single-user",enabled:true },
        {name:"5GB Storage",enabled:true },
        {name:"Unlimited Public Projects",enabled:true },
        {name:"Community Access",enabled:true },
        {name:"Unlimited Private Projects",enabled:true },
        {name:"Dedicated Phone Support",enabled:true },
        {name:"Free Subdomain",enabled:true },
        {name:"Monthly Status Reports",enabled:true },
      ]
    }
   
  ];


  return (
    <div className="App">
      {data.map((card, index)=>(
        <Card
        key = {index}
       content = {card}
       detail = {card.detail}
        />
      ))}
   
    </div> 
  );
}



export default App;

function Card({content,detail}){
  // const [show] = useState(true)
  return(
    
        <div className='pricing py-5'>
        <div className='card'>
      <div className='card-body'>
      <h5 className="card-title text-muted text-uppercase text-center">{content.title}</h5>
      <h4 className="card-price text-center">{content.price}<span style={{fontSize:"0.8rem"}}>/month</span></h4>
      <hr/>
    
      <ul className="fa-ul">
            {detail.map((item, index) => {
              return (
                <li key={index} className={!item.enabled ? "text-muted" : ""}>
                  <span className="fa-li">
                    <i className={item.enabled ? "fas fa-check" : 'fas fa-times'}></i>
                  </span>
                  {item.name}
                </li>
              );
            })}
          </ul>

     {/* <ul class="fa-ul">
     <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{detail}</strong></li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li><span className="fa-li"><i className="fas fa-check"></i></span>{detail}</li>
     <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{detail}</li>
   </ul> */}
            <button class="btn">Button</button>
            
      </div>
    </div>
    </div>
  )
}
