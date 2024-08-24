import React, {useRef} from 'react'


export const LoginForm = () => {
  const nameInput = useRef();
  const handleSubmit = (e)=> {
    alert(`You entered ${nameInput.current.value}`)
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled Form Example</h1>
      <label>Username: </label>
      <input type='text' ref={nameInput} />
    </form>
  )
}
