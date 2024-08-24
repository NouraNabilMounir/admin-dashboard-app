import React, {useState} from 'react'


export const LoginControlled = () => {
  const [nameInput, setNameInput] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e)=> {
    alert(`You entered ${nameInput}`)
    e.preventDefault();
  };
  const handleChange = (e) => {
    setNameInput(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>controlled Form Example</h1>
      <label>Username: </label>
      <input type='text' value={nameInput} onChange={handleChange}/>
      <label>Password: </label>
      <input type='password' value={password} onChange={handlePasswordChange}/>
    </form>
  )
}
