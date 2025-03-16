import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    })

    const post = useSelector((state) =>
        currentId
            ? state.posts.find((message) => message._id === currentId)
            : null,
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const clear = () => {
        setCurrentId(0)
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (currentId === 0) {
            dispatch(createPost(postData))
        } else {
            dispatch(updatePost(currentId, postData))
        }
        clear()
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Creator"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <textarea
                    placeholder="Message"
                    rows="4"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(','),
                        })
                    }
                />
                <div className="border p-2 rounded-md">
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
                    onClick={clear}
                >
                    Clear
                </button>
            </form>
        </div>
    )
}

export default Form
