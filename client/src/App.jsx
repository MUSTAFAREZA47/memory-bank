import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { getPosts } from './actions/posts'
import memories from './images/memories.png'

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mb-6">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                    Memories
                </h1>
                <img src={memories} alt="icon" className="h-16 mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <Posts setCurrentId={setCurrentId} />
                </div>
                <div>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
        </div>
    )
}

export default App
