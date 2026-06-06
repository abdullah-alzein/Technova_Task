import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './components/UserCard'
import Parent from './components/Parent'
import Api from './Api'
import ThemeContext, { ThemeProvider } from './components/ThemeContext'
import MainContent from './MainContent'
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import ContextProvider from './context/GlobalContext';
function App() {
//   const [count, setCount] = useState(0)

//   const Name="Abdullah Alzein";
//   const Age=20;

 

  return (
    <>
    <ContextProvider>
      <Header/>
       <Routes>
        <Route path="/" element={<WatchList/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/add" element={<Add/>}/>
       </Routes>

    </ContextProvider>

   {/* <ThemeProvider>
        <MainContent />
    </ThemeProvider>   */}
      {/* <Api /> */}
      {/* <Parent /> */}
     {/* <UserCard Name={Name} Age={Age}/>
     ////////technove///// */}
     
    </>
  )
}

export default App
