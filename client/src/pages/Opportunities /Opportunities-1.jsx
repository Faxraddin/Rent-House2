import React,{useEffect,useState} from "react";
import EditProfile from "../../components/EditProfile";
import axios from 'axios';

export default function Opportunities1(){
  const [update,setUpdate] = useState(false)
  const userId = localStorage.getItem('id');

  const [age, setAge] = useState('');
  const [interest, setInterest] = useState('');
  const [region, setRegion] = useState('');
  const [work, setWork] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/users/${userId}`);
        const userData = response.data;

        setInterest(userData.interest);
        setRegion(userData.region);
        setWork(userData.work);
        setAbout(userData.about);
        setAge(userData.age);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);
  
    return(
        <>
            <div className="container-op">

                <div className="container-opp">

                    <div className="f-s">
                        <div style={{display:'flex',gap:'1vw',alignItems:'center'}}>
                            <div style={{display:'flex',backgroundColor:'grey',borderRadius:'50%',height:'10vw',width:'10vw'}}></div>
                            <h1 >Ad/Soyad</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',backgroundColor:'grey',borderRadius:'50%',height:'3vw',width:'3vw'}}></div>
                    </div>

                    {update && <EditProfile></EditProfile>}

                    <div className="s-s">
                        <div style={{fontSize:'1.3vw',listStyle:'none',background:'whitesmoke',padding:'1.5vw',borderRadius:'20px',width:'25%',height:'9vw'}}>
                            <input className="s-s-input" placeholder="yas" value={age} name="age" onChange={(e) => setAge(e.target.value)}/>
                            <input className="s-s-input" value={region} name="region"   placeholder="region" onChange={(e) => setRegion(e.target.value)}/>
                            <input className="s-s-input" placeholder="work" value={work}  name="work" onChange={(e) => setWork(e.target.value)}/>
                            <input className="s-s-input" placeholder="interest" value={interest} name="interest" onChange={(e) => setInterest(e.target.value)}/>
                        </div>
                        <div style={{fontSize:'1vw',listStyle:'none',background:'whitesmoke',padding:'1.5vw',borderRadius:'20px',width:'50%',height:'100%',wordBreak:'break-word'}}>
                            <h3>About</h3>
                            <textarea className="textarea-a" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button onClick={() => setUpdate(true)}>Update</button>

                </div>
            
            </div>
        </>
    )
}