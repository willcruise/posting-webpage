'use client'
 
import { useRouter } from 'next/navigation'
 
export default function SignUp() {
  const router = useRouter()
 
  return (
    <button type = "login" onClick={() => router.push('./signup/signup.html')}> Sign in 
    </button>
  )
}


export default function Login(){
  return(
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <!-- React -->
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

      <!-- Babel Script -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

      <script src = 'login.js'></script>

      <link rel="stylesheet" href="login.css">

      <title>Sign in</title>

    </head>
    <body>
      <div class = 'loginbox'>
        <div id = 'loginsitename'>
          <p style = 'font-size: 40px;'>posting</p>
        </div>
        <br>
        <div id = 'logininputs'>
          <div>
            <p>Sign in</p>
          </div>
          <div>
            <label for = 'id'>id</label>
            <br>
            <input id = 'loginid' type = 'email' name = 'id' placeholder = 'email' pattern = 'email'></input>
          </div>
          <div id = 'inputs'>
            <label for = 'password'>password</label>
            <br>
            <input type = 'password' name = 'password' minlength = '8' placeholder = 'password' pattern = 'password'></input>
          </div>
        </div>
        <div class = 'loginbuttons'>
          <br>
          <button id = 'login'>Sign in</button>
          <br>
          <br>
          <SignUp />
        </div>
      </div>
    </body>

    </html>
  );
}
