import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Secure = () => {
  const [text, setText] = useState('InitialText')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:8081/home')
        const { data } = response
        setText(data)
        console.log(response)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <h1 className='p-5' >{text}</h1>
    </>
  )
}

export default Secure
