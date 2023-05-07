import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    const[formData,setFormData]=useState({
        Email:"",
        Password:""
       });
       const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setFormData({
          ...formData,[name]: value
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
         if(formData.Email===""){
          alert("Please Enter Your Email")
        } else if(formData.Password===""){
          alert("Please Enter Your Password")
        }else{
          alert("Your Data is Saved")
  
          
        }
      }
  return (
    <div className='d-flex justify-content-between'>
    <h1 className='head'>Please Login</h1>
    <div className='left mt-8 col-lg-6 '>
        <Form className='mt-5 col-lg-6' onSubmit={handleSubmit}>
         
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
    <div className='right'>
      <img src='./Login.png' width={500} alt='Login_LOGO'/>
    </div>
    </div>

  )
}

export default Login