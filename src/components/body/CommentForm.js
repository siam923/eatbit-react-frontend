import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { addComment } from "../../features/comment/commentSlice";
import { useNavigate } from 'react-router-dom'

function CommentForm({dishId}) {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        author: "",
        rating: "",
        comment: "",
    })
    const dispatch = useDispatch();

    const authorInput = {
            id:1,
            name: "author",
            type: "text",
            placeholder: "Author",
            errorMessage: "",
            label: "Author",
            required: true,
        }

    
    //better if handled in the parent component
    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        dispatch(
            addComment({
                ...values,
                dishId,
            })
        )
        setValues({
            author: "",
            rating: "",
            comment: "",
        })
        navigate(`/menu`)
    }

    const onChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <FormInput 
                key={authorInput.id} 
                {...authorInput} 
                value={values.author}
                onChange={onChange}
            />
            <div className="">
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating
                      </label>
                      <select
                        id="rating"
                        name="rating"
                        onChange={onChange}
                        value={values.rating}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
            </div>
            <div className="mt-1">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                      Comment
                </label>
                
                <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Your Comment"
                    onChange={onChange}
                    value={values.comment}
                    required
                />
            </div>

            <button className='w-full rounded-lg text-white cursor-pointer p-2 text-lg mt-4 mb-7 bg-purple-800'>Submit Comment</button>
            
            
        </form>
    </div>;
}

export default CommentForm;
