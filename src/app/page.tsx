
import { cookies } from "next/headers"
import '../styles/App.css'

import LoginPage from "./login/page.tsx"
import MainPage from "./main/page.tsx"

const cookieStore = await cookies()
const id = cookieStore.has('id');

const App: React.FC = () => {
  return id? <MainPage/>:<LoginPage/>;
}

export default App;
