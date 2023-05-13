import React from "react";
import ForumBox from "../../components/ForumBox";
import './Forum.scss'

export default function Forum(){
    return(
        <>
            <div className="container1">
                <div className="con">

                    <div className="filters" >
                        <h3>Filters</h3>
                        <div className="filters-con">
                            <div className="fil">
                                <span>Qiymet:</span>
                                <span className="qiy">0-5000</span>
                            </div>
                            <div className="fil">
                                <span>Otaq sayi:</span>
                                <span className="qiy">0-5000</span>
                            </div>
                            <div className="fil">
                                <span>Unvan:</span>
                                <span className="qiy">yaz</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxes">
                        
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                            <ForumBox/>
                        
                    </div>

                </div>
            </div>
            <ul style={{display:'flex',listStyle:'none',gap:'1vw',justifyContent:'center'}}>
                        <li style={{display:'flex',color:'white',backgroundColor:'black',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>1</li>
                        <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>2</li>
                        <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>3</li>
                        <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>4</li>
                        <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'20px',alignItems:'center',justifyContent:'center'}}>5</li>
            </ul>
        </>
    )
}