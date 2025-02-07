import { useState } from "react";

const [usernameInput, setUsernameInput] = useState("");
const [passwordInput, setPasswordInput] = useState("");
const [error, setError] = useState(null);



const SignUpForm = () => {
  return(
    <>
    <h2>Sign Up</h2>

    <form>
      Username: <input
      placeholder="username"
      onChange= {(event) =>{ setUsernameInput(event.target.value) }}
      />

       Password: <input
      placeholder="password"
      onChange= { (event) => { setPasswordInput(event.target.value) }}
      />
    </form>
    <button>Submit</button>
    </>
  )
}

export default SignUpForm