import React, { useEffect, useState } from 'react'
import MainScreen from '../Components/MainScreen'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MyNotes = () => {
  const [notes, setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
    }
  }

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get('http://localhost:1234/api/notes/')
      setNotes(data)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <MainScreen className="" title="Welcome Back User.....">
        <Link to="/createnote">
          <button className="bg-green-500  rounded p-2 text-white hover:text-white hover:bg-black">
            Create New Note
          </button>
        </Link>
        {notes.map((note) => (
          <div className="notes_page" key={note}>
            <div className="card  shadow-lg rounded">
              <div className="card-header">
                <div
                  className="bg-black text-white w-28 text-center
                   text-xs rounded mb-3 p-3"
                >
                  {note.category}
                </div>
                <div className="card-title flex-1 font-bold text-xl mb-2">
                  {note.title}
                </div>
              </div>
              <div className="card-body text-wrap">
                <blockquote className="blockquote p-3 ">
                  <p className="mb-3">{note.content}</p>
                  <footer className="blockquote-footer text-xs">
                    Created On - date
                  </footer>
                </blockquote>
                <Link to={`/note/${note._id}`}>
                  <button className="bg-yellow-500 m-3 p-2 w-20  rounded p-2 text-white hover:text-white hover:bg-black">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteHandler(note._id)}
                  className="bg-red-500  rounded p-2 text-white hover:text-white hover:bg-black"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </MainScreen>
    </>
  )
}

export default MyNotes
