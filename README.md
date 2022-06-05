# Getting Started with Create React App

Restaurant App
## Available Scripts

In the project directory, you can run:

### `npm start`


## Learning Notes

### Use ref example to controle form
```javascript
import { useRef, useState } from 'react';

function Registration() {
  const usernameRef =useRef()

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(usernameRef)
  }

  return <div className="border-2 border-red-500 h-screen flex justify-center ">
      <form 
          className="border-2 border-green-500 self-center"
          onSubmit={handleSubmit}
        >
          <FormInput placeholder="Username" refer={usernameRef}/>
          <button>Submit</button>
      </form>
  </div>;
}

function FormInput(props) {
    return <div>
        <label>Username</label>
        <input 
          className="p-15 m-10" 
          placeholder={props.placeholder}
          ref={props.refer}}
      />
    </div>;
  }
  
```

### FormData example for controling 

```JavaScript
function FormInput(props) {
  return <div>
      <label>Username</label>
      <input 
        name={props.name}
        placeholder={props.placeholder}
        className="p-15 m-5" 
        
    />
  </div>;
}


function Registration() {

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)
      console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className="border-2 border-red-500 h-screen flex justify-center ">
      <form 
          className="border-2 border-green-500 self-center"
          onSubmit={handleSubmit}
        >
          <FormInput name="username" placeholder="Username"/>
          <FormInput name="password" placeholder="Password"/>

          <button>Submit</button>
      </form>
  </div>
  );
}

```


