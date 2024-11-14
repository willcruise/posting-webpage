"use client"

import '../styles/App.css'
import  { getIsLoggedIn }  from '../utils/currentacc.ts'
import LoginPage from "./login/page.tsx"
import MainPage from "./main/page.tsx"

const isLoggedIn = await getIsLoggedIn();

const App: React.FC = () => {
  return isLoggedIn? <MainPage/>:<LoginPage/>;
}

export default App;
