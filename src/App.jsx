import { useState,useEffect } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Nav from './Components/navbar'
import Rside from './Components/rightsidebar'
import Postfr from './Components/Postfr'
function App() {
  const [username, setUsername] = useState('');

  
  const setUserName = () => {
    const storedUsername = sessionStorage.getItem('username');

    if (!storedUsername) {
      const inputUsername = prompt('Enter your name:');
      
      if (inputUsername !== '') {
        setUsername(inputUsername);
        sessionStorage.setItem('username', inputUsername);
      }
      else{
        const inputUsername = prompt('Nigga enter your fucking name:');
      }
      
    } else {
      
      setUsername(storedUsername);
    }
  };
  // useEffect(() => {
  //   setUserName();
  // }, []);
  return (
    <>
      <div className='container'>
      <Sidebar />  
      <Nav />
      <Rside />
      </div>
        
    </>
  )
}

export default App
