import React from "react";
import './Home.scss'

export default function Home1(){
    return(
        <>
            <div className="container" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'lightgray'}}>
                <div className={'Home1'}>

                    <div style={{color:'white'}}>
                        <h2 className="text" h2>Lorem ipsum <br></br> dolor sit amet <br></br> consectutar <br></br> adipsing elit</h2>
                    </div>

                    <div className='search' style={{display:'flex'}}>
                        <div className="choice">
                            <div className="choice-con">
                                <div className="c">
                                    <h3>Mekan</h3>
                                    <span style={{position:'relative',top:'-1vw'}}>Rayon</span>
                                </div>
                                
                            </div> 
                        </div>
                        <div className="choice">
                            <div  className="choice-con" style={{borderLeft: 'solid thin lightgrey'}}>
                                <div >
                                    <h3 >Eve koc</h3>
                                    <span style={{position:'relative',top:'-1vw'}}>sec</span>
                                </div>
                            </div>
                        </div>
                        <div className="choice">
                            <div  className="choice-con" style={{borderLeft: 'solid thin lightgrey'}}>
                                <div>
                                    <h3>Muddet</h3>
                                    <span style={{position:'relative',top:'-1vw'}}>sec</span>
                                </div> 
                            </div>
                        </div>
                        <button>Start</button>
                    </div>

                </div>
            </div>
        </>
    )
}