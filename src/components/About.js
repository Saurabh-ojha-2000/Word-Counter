import React  from 'react'

export default function About(props) {

// const[mystyle,setMystyle]=useState({
//   color:'black',
//   backgroundColor:'white'
// })

let mystyle= {
  color : props.mode==='dark'?'white':'#042743',
  backgroundColor : props.mode==='dark'?'rgb(27 100 159)':'white',
}

return (
          <div className="main-box"> 
          <h1 className="heading"style={mystyle}> About Us</h1>
          <div>
           <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Analayze Your Text
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                  <strong>This is the first item's accordion body.</strong>            
                 </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Free To Use
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                  <strong>This is the second item's accordion body.</strong> 
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Browser compitable
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> 
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
)
}