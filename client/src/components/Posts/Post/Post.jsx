import React from 'react'
import { useDispatch } from 'react-redux'
import { ThumbsUp, Trash2, MoreHorizontal } from 'lucide-react'
import moment from 'moment'
import { likePost, deletePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={
                        post.selectedFile ||
                        'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                    }
                    alt={post.title}
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-md">
                    <p className="text-sm font-semibold">{post.creator}</p>
                    <p className="text-xs">
                        {moment(post.createdAt).fromNow()}
                    </p>
                </div>
                <button
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizontal size={16} />
                </button>
            </div>

            <div className="p-4">
                <p className="text-xs text-gray-500">
                    {post.tags.map((tag) => `#${tag} `)}
                </p>
                <h2 className="text-lg font-bold text-gray-800">
                    {post.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{post.message}</p>
            </div>

            <div className="flex justify-between items-center p-4 border-t">
                <button
                    className="flex items-center text-blue-500 hover:text-blue-600"
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <ThumbsUp size={16} className="mr-1" /> Like{' '}
                    {post.likeCount}
                </button>
                <button
                    className="flex items-center text-red-500 hover:text-red-600"
                    onClick={() => dispatch(deletePost(post._id))}
                >
                    <Trash2 size={16} className="mr-1" /> Delete
                </button>
            </div>
        </div>
    )
}

export default Post
