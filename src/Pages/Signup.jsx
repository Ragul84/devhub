import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AlertBox = ({ showAlert, handleCloseAlert }) =>
  showAlert && (
    <div className="fixed top-20 right-80 m-4 bg-black p-4 rounded shadow-md">
      <p className="text-white bg-black">Account Succesfully Created.<br></br> Redirecting To Login Page ......</p>
      <button
        onClick={handleCloseAlert}
        className="text-blue-800 hover:underline"
      >
        Close
      </button>
    </div>
  )
const Signup = () => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [mail, setMail] = useState()
  const [number, setNumber] = useState()
  const [role, setRole] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  const handleShowAlert = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3001/register', {
      name,
      mail,
      password,
      number,
      role,
    })
      .then((result) => {
        console.log(result)
        handleShowAlert();
        
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="signup_wrapper flex items-center justify-center xl:px-24 px-4 mb-0 md:py-14">
      <div className="bg-white  rounded shadow-md w-100 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 ">
          DevHub Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="name"
            placeholder="Phone Number"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setNumber(e.target.value)}
          />

          <select
            required
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="" disabled selected>
              Occupation
            </option>
            <option value="student">Student</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
          <div className="button_group flex">
            <button
              type="submit"
              className="flex-1 h-25 mt-6 mb-9 bg-green-500 text-white p-2 rounded hover:bg-black"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="flex-1 h-10 ml-6 mt-6 bg-blue text-white p-2 rounded hover:bg-black"
            >
              <Link to="/login">Already Have An Account ?</Link>
            </button>
          </div>
        </form>
        <AlertBox showAlert={showAlert} handleCloseAlert={handleCloseAlert} />
      </div>
    </div>
  )
}

export default Signup
