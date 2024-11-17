
import { cookies } from "next/headers" 
import "../../styles/mainstyles.css"
import React from 'react';

import LoginPage from "../login/page.tsx"
import MainPage from "./mainpage.tsx"

export default async function Page(){
  const cookieStore = await cookies()
  const id = cookieStore.has('id');

  return id? <MainPage/>:<LoginPage/>;
}