import React,{ useState } from 'react'
import './App.css'

function App() {
   const [user, setUser] = useState("")
  const [gender, setGender] = useState("")
  const [avatar, setavatar] = useState(null)
  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  }
  const selectGender = (e) =>{
    setGender(e.target.value)
  }
  const submitHandler = (e) =>{
   e.preventDefault()
   console.log("submitted")
   console.log(setGender(e))
  }
  return (
    <>
    <form onSubmit={submitHandler} encType='multipart/form-data' className='p-10 text-2xl flex gap-2 items-center' >
      <input type="file" name="avatar" onChange={handleFileChange} />
      <input  className='border-2 p-4 rounded-md' name='user' onChange={(e)=> setUser(e.target.value)} type="text" value={user} placeholder='username' />
      <input type="radio" name="gender" defaultValue="others" checked={gender ==="others"} onChange={selectGender} /> others
      <input type="radio" name="gender" defaultValue="Male" checked={gender ==="Male" } onChange={(e)=> setGender(e.target.value)} /> Male
      <input type="radio" name="gender" defaultValue="Female" checked={gender ==="Female" } onChange={(e)=> setGender(e.target.value)} /> Female
      <button className='border-2 w-fit p-4 rounded-md'>Submit</button>
    </form>
    </>
  )
}

export default App
