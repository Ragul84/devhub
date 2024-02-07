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
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [emailId, setEmailId] = useState()
  const [mobileNo, setMobileNo] = useState()
  const [country, setCountry] = useState()
  const [state, setState] = useState()
  const [regionCode, setRegionCode] = useState(
    
  )
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
    Axios.post('http://localhost:8081/signup', {
      firstName,
      lastName,
      emailId,
      password,
      mobileNo,
      country,
      state,
      regionCode
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
        <form className='flex flex-col w-96 p-1' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setFirstName(e.target.value)}
          />
           <input
            type="text"
            placeholder="Last Name"
            className="w-25 p-2 mb-2 border rounded"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setEmailId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="name"
            placeholder="Region Code"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setRegionCode(e.target.value)}
          />
          <input
            type="name"
            placeholder="Phone Number"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setMobileNo(e.target.value)}
          />
             <input
            type="name"
            placeholder="Country"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setCountry(e.target.value)}
          />
            <input
            type="name"
            placeholder="State"
            className="w-50 p-2 mb-2 border rounded"
            onChange={(e) => setState(e.target.value)}
          />
           { /* <select
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
  </select> */}
          <div className="button_group flex">
            <button
              type="submit"
              className="flex-1 h-100 mt-6 mb-9 bg-green-500 text-white p-2 rounded hover:bg-black"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="flex-1 text-sm h-10 ml-6 mt-6 p-0 bg-blue text-white p-2 rounded hover:bg-black"
            >
              <Link to="/login">Already Have An Account?</Link>
            </button>
          </div>
        </form>
        <AlertBox showAlert={showAlert} handleCloseAlert={handleCloseAlert} />
      </div>
    </div>
  )
}

export default Signup
