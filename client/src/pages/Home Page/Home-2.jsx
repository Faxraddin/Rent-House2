import React from "react";
import Box from "../../components/HomeBox";
import './Home.scss'
import { NavLink } from "react-router-dom";

export default function Home2(){
    return(
        <>
            <div className="container" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{width:'75%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4vw 0 4vw 0',flexDirection:'column',gap:'3vw'}}>

                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        <ui style={{display:'flex',listStyle:'none',gap:'4vw',alignItems:'center',fontSize:'1vw',color:'white'}}>
                            <NavLink activeClassName='active1' style={{display:'flex',background: '#302D3F',borderRadius:'50px',width:'200px',height:'30px',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw',fontSize:'20px',textDecoration:'none'}}>All</NavLink>
                            <NavLink activeClassName='active1' style={{display:'flex',backgroundColor:'#F0F0F0',borderRadius:'50px',width:'200px',height:'30px',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw',fontSize:'20px',textDecoration:'none'}}>Building</NavLink>
                            <NavLink activeClassName='active1' style={{display:'flex',backgroundColor:'#F0F0F0',borderRadius:'50px',width:'200px',height:'30px',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw',fontSize:'20px',textDecoration:'none'}}>With Garden</NavLink>
                        </ui>
                        <button style={{fontSize:'18px',borderRadius:'50px',background:'none',border:'2px solid #AEAEAE',padding:'.7vw 1vw .7vw 1vw',width:'15vw'}}>Search</button>
                    </div>
                    <div style={{width:'100%',gap:'10%'}}>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                    </div>
                        <ul style={{display:'flex',listStyle:'none',gap:'1vw'}}>
                            <li style={{display:'flex',color:'white',backgroundColor:'black',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>1</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>2</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>3</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>4</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>5</li>
                        </ul>
                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}