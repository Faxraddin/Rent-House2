import React from "react";

export default function ForumBox(){
    return(
        <>
            <div className="container" style={{display:'flex',flexDirection:'column',width:'240px',height:'320px',border:'solid grey thin',borderRadius:'30px',float:'left',background:'grey',justifyContent:'center',alignItems:'center',margin:'0 20px 20px 0',padding:'15px'}}>
                <div style={{background:'white',width:'100%',borderRadius:'30px',height:'360px'}}></div>
                <h1 style={{fontSize:'30px',marginTop:'-5px',width:'100%',paddingTop:'15px'}}>Qiymet</h1>
                <h3 style={{fontSize:'22px',marginTop:'-15px',width:'100%'}}>1 yataq</h3>
                <h4 style={{fontSize:'18px',marginTop:'-15px',width:'100%'}}>Adres</h4>
                <button style={{width:'100%',height:'80px',background: '#4F23FF',borderRadius: '25px',color:'white',marginTop:'-15px'}}>Bax</button>
            </div>
        </>
    )
}