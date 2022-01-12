import React from 'react'



const Cards = ({ results }) => {
    let display;
     //console.log(results)
    if (results) {
         display = results.map(( X) => {
               let {id, name, image, location, status } = X;
               return ( 
            
               <div key={id} className="conten">
                 
                   <div className="borde">
                   {(()=>{
                    if(status==="dead"){
                      return(
                        <div className= "style-btn bg-danger">{status}</div>
                      )
                    }
                    else if(status==="Alive"){
                      return(
                        <div className= "style-btn bg-success">{status}</div>
                      )
                    } 
                    else{
                      return(
                        <div className= "style-btn bg-secondary">{status}</div>
                      )
                    }
            
                  })()}
                  
                     <img src={image} alt="" className="img-fluid" />
                      <div className="content">
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="">
                          <div className="fs-6">Last location</div>
                           <div className="fs-5">{location.name}</div>
                        </div>
                      </div>

                   
                   </div>                 
                  
               </div>
            );
        });
    } else {
      display=  "No Characters Found:/";
    }

    return <> {display}</>
    
};

export default Cards;
