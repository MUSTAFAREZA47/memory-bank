import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    return !posts.length ? (
        <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {posts.map((post) => (
                <Post key={post._id} post={post} setCurrentId={setCurrentId} />
            ))}
        </div>
    )
}

export default Posts
