import React from "react";

export default function Box(props){
    return(
        <>
            <div className="container" style={{display:'flex',flexDirection:'column',width:'20vw',height:'100%',justifyContent:'center',border:'solid grey thin',alignItems:'center',borderRadius:'20px',gap:'.5vw',float:'left',marginRight:'3vw',marginTop:'1.5vw'}}>
                <div style={{width:'100%',height:'14vw',backgroundColor:'grey',borderRadius:'20px'}}></div>
                <h3 className="place">{props.place}</h3>
            </div>
        </>
    )
}