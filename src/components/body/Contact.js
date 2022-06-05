import { useState } from 'react';
import FormInput from './FormInput';


function Contact() {
  document.title = 'Contact';

  const [values, setValues] = useState({
    firstname: "",
    email: "",
    telnum: "",
});
  const [contact, setContact] = useState('')
  const [agree, setAgree] = useState(true)
  // const {}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  const inputs = [
    {
        id:1,
        name: "firstname",
        type: "text",
        placeholder: "First Name",
        errorMessage: "Name should be atleast 3 letters",
        label: "First Name",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true
       
    },
    {
        id:2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email",
        label: "Email",
        pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
       
    },
    {
        id:3,
        name: "telnum",
        type: "text",
        placeholder: "phone",
        label: "Phone",
        required: false,
       
    },
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  const onClick = (e) => {
    setAgree(!agree)
  }

  return <div className=' justify-center bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl  flex flex-col sm:flex-row '>
   
    <div className='flex flex-col items-center justify-center sm:w-1/2 sm:h-full  self-center'>
      <h1 className='p-10 text-white text-left font-bold text-5xl'>We are exited to hear from you</h1>
    </div>

    <div className='flex flex-col rounded-lg m-20  sm:w-3/4 shadow-lg bg-white md:w-1/2 justify-center self-center'>
      <form 
        className="py-10 self-center px-5 "
        onSubmit={handleSubmit}
      >
        <h1 className='pb-4 text-purple-800 text-center text-xl font-bold '> Send us your Feedback </h1>
        {inputs.map((input) => (
            <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange={onChange}
            />
        ))}
        <label className="mb-5 block">
          <span className="text-gray-700">Contact</span>
          <textarea
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-purple-400"
            placeholder="John Appleseed"
            rows={8}
          />
        </label>
        <label>
          <input onChange={onClick} type="checkbox" name="agree" checked={agree}/>
          <span className='pl-1'>May we contact you?</span>
        </label>
        <button className='w-full rounded-lg text-white cursor-pointer p-2 text-lg mt-4 mb-7 bg-purple-800'>Submit</button>
      </form>
    </div>
  </div>;
}

export default Contact;
