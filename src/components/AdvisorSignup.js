import React, { useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SignImg'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Background.css";
import Header from './Header';
import axios from 'axios';


const SignUp = () => {

   

    const initialValues = { roleId: 2,
                            firstName: "", 
                            lastName:"",
                            email: "",
                            phone:"", 
                            company:"",
                            address:"",
                            city:"",
                            state:"",
                            password: "",
                            confirmPassword:"",
                            // date:"",    
                        };


    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

            const url = "https://localhost:7278/api/user/register";
            let config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept':'text/plain'
                }
            }
            if (Object.keys(formErrors).length === 0 && isSubmit){
                axios.post(url,formValues,config).then((result)=>{
                    console.log(result.formValues);
                }).catch((err)=>{
                    alert(err);
                })
            }
    };
    

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        }

    }, [formErrors]);

        const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
        errors.firstName = "First name is required!";
       
        } 
        if (!values.lastName) {
            errors.lastName = "Last name is required!";
           
            } 

        if (!values.email) {
        errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
        errors.password = "Password is required!";
        } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters!";
        } else if (values.password.length > 20) {
        errors.password = "Password cannot exceed more than 20 characters";
        }

        if (values.confirmPassword!==values.password) {
        errors.confirmPassword = "Password didn't match!";
        }
        
        // if(!values.date){
        //     errors.date = "Date of birth is required!";
        // }
        
        if(!values.phone){
            errors.phone = "Phone number is required!";     
        } else if (values.phone.length!=10){
            errors.phone = "Phone number is invalid!";     
        }


        return errors;
    };

    return (
        <><Header /><div className='ComponentBackground' margin="0px">
                            
                <section className='d-flex justify-content-between'>
                    <div className=" middle_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 style={{marginTop:"2rem"}} className='text-center col-lg-6'>Sign Up as Advisor</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicFirstName">

                                <Form.Control type="text" name='firstName' onChange={handleChange} value={formValues.firstName} placeholder="Enter Your First Name" />
                                <p style={{color:"#BF3325"}}>{formErrors.firstName}</p>
                            </Form.Group>
                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicLastName">

                                <Form.Control type="text" name='lastName' onChange={handleChange} value={formValues.lastName} placeholder="Enter Your Last Name" />
                                <p style={{color:"#BF3325"}}>{formErrors.lastName}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={handleChange} value={formValues.email} placeholder="Enter email" />
                                <p style={{color:"#BF3325"}}>{formErrors.email}</p>
                            </Form.Group>

                            {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            onChange={getdata}
                                <Form.Control  name='date' type="date" onChange={handleChange} value={formValues.date}/>
                                <p style={{color:"#BF3325"}}>{formErrors.date}</p>
                            </Form.Group> */}

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPhone">

                                <Form.Control type="tel" name='phone' onChange={handleChange} value={formValues.phone}  placeholder="Phone" />
                                <p style={{color:"#BF3325"}}>{formErrors.phone}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicCompany">

                                <Form.Control type="text" name='company' onChange={handleChange} value={formValues.company} placeholder="Company" />
                                <p style={{color:"#BF3325"}}>{formErrors.company}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicState">

                                <Form.Control type="text" name='state' onChange={handleChange} value={formValues.state} placeholder="State" />
                                <p style={{color:"#BF3325"}}>{formErrors.company}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicCity">

                                <Form.Control type="text" name='city' onChange={handleChange} value={formValues.city}  placeholder="City" />
                                <p style={{color:"#BF3325"}}>{formErrors.city}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicAddress">

                                <Form.Control type="text" name='address' onChange={handleChange} value={formValues.address}  placeholder="Address" />
                                <p style={{color:"#BF3325"}}>{formErrors.address}</p>

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={handleChange} value={formValues.password} placeholder="Password" />
                                <p style={{color:"#BF3325"}}>{formErrors.password}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicConfirmPassword">

                                <Form.Control type="password" name='confirmPassword' onChange={handleChange} value={formValues.confirmPassword} placeholder="Confirm Password" />
                                <p style={{color:"#BF3325"}}>{formErrors.confirmPassword}</p>
                            </Form.Group>
                            {/* onClick={addData} */}
                            <Button variant="dark" className='col-lg-6'  type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already have an account? <span><NavLink to="/login/advisor" style={{ textDecoration: "none" }}>Sign In</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
        </div></>
    )
}

export default SignUp 