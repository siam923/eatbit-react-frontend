import FormInput from './FormInput';
import { useState } from 'react';

function Registration() {

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    });

    const inputs = [
      {
          id:1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage: "Username should be 3-16",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true
         
      },
      {
          id:2,
          name: "email",
          type: "text",
          placeholder: "Email",
          errorMessage: "It should be a valid email",
          label: "Email",
          required: true
         
      },
      {
          id:3,
          name: "birthday",
          type: "date",
          placeholder: "BirthDay",
          label: "BirthDay",
          required: false,
         
      },
      {
          id:4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters",
          label: "Password",
          required: true
         
      },
      {
          id:5,
          name: "confirmPassword",
          type: "text",
          placeholder: "Confirm Password",
          errorMessage: "Password don't match",
          label: "Confirm Password",
          required: true
         
      }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }
    
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }


  
    return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex justify-center ">
        
        <form 
            className="shadow-lg rounded-lg bg-white px-5 self-center"
            onSubmit={handleSubmit}
        >
            <h1 className=' text-purple-800 text-center text-xl font-bold'> Register </h1>
            {inputs.map((input) => (
                <FormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]}
                onChange={onChange}
                />
            ))}
            <button className='w-full rounded-lg text-white cursor-pointer p-2 text-lg mt-4 mb-7 bg-purple-800'>Submit</button>
        </form>
    </div>
    );
    }

export default Registration;

  
