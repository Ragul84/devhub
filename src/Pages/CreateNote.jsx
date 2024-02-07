import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:1234/api/notes', {
      title,
      content,
      category,
    })
      .then((response) => {
        console.log('Server response:', response.data)
        navigate('/mynotes')
      })
      .catch((error) => {
        console.error('Axios request error:', error)
      })
  }
  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-600 font-semibold"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-600 font-semibold"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote
