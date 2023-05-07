import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

   function Forma() {
    const[formData,setFormData]=useState({
     Name:"",
     Email:"",
     Password:""
    });
    const[storageData,setStorageData]=useState([]);
    const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setFormData({
          ...formData,[name]: value
        })
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(formData.Name===""){
        alert ("Please Enter Your Name")
      } else if(formData.Email===""){
        alert("Please Enter Your Email")
      } else if(formData.Password===""){
        alert("Please Enter Your Password")
      }else{
        alert("Your Data is Saved")

        localStorage.setItem("formInputData", JSON.stringify([...storageData,formData]))
      }
    }
  return (
    <div>
        <Form className='mt-5 col-lg-6' onSubmit={handleSubmit}>
         <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
        <Form.Control value={formData.Name} name='Name' type="text" placeholder="Enter Your Name" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control value={formData.Email} name='Email' type="email" placeholder="Enter email" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
       <Form.Control value={formData.Password} name='Password' type="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>
      <Button  className="mb-3 col-lg-6" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Forma