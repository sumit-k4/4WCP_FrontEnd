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


const SignUp = () => {

   

    const initialValues = { username: "", 
                            email: "", 
                            password: "",
                            confirmPassword:"",
                            date:"",
                            number:"",
                            company:"",
                            state:"",
                            city:"",
                            address:"",
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
        if (!values.username) {
        errors.username = "Username is required!";
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
        // } else if (values.confirmPassword.length < 8) {
        // errors.password = "Password must be more than 8 characters!";
        // } else if (values.confirmPassword.length > 20) {
        // errors.password = "Password cannot exceed more than 20 characters";
        // }
    
        if(!values.date){
            errors.date = "Date of birth is required!";
        }
        
        if(!values.number){
            errors.number = "Phone number is required!";     
        } else if (values.number.length!=10){
            errors.number = "Phone number is invalid!";     
        }

        if(!values.company){
            errors.company = "Company name is required!";     
        }

        if(!values.state){
            errors.state = "State name is required!";     
        }

        if(!values.city){
            errors.city = "City name is required!";     
        }

        if(!values.address){
            errors.address = "Address is required!";     
        }

        return errors;
    };

    return (
        <><Header /><div className='ComponentBackground' margin="0px">
                            
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 style={{marginTop:"2rem"}} className='text-center col-lg-6'>Sign Up as Advisor</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">

                                <Form.Control type="text" name='username' onChange={handleChange} value={formValues.username} placeholder="Enter Your Name" />
                                <p style={{color:"#BF3325"}}>{formErrors.username}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={handleChange} value={formValues.email} placeholder="Enter email" />
                                <p style={{color:"#BF3325"}}>{formErrors.email}</p>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            {/* onChange={getdata} */}
                                <Form.Control  name='date' type="date" onChange={handleChange} value={formValues.date}/>
                                <p style={{color:"#BF3325"}}>{formErrors.date}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="tel" name='number' onChange={handleChange} value={formValues.number}  placeholder="Phone" />
                                <p style={{color:"#BF3325"}}>{formErrors.number}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='company' onChange={handleChange} value={formValues.company} placeholder="Company" />
                                <p style={{color:"#BF3325"}}>{formErrors.company}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='state' onChange={handleChange} value={formValues.state} placeholder="State" />
                                <p style={{color:"#BF3325"}}>{formErrors.company}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='city' onChange={handleChange} value={formValues.city}  placeholder="City" />
                                <p style={{color:"#BF3325"}}>{formErrors.city}</p>

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='address' onChange={handleChange} value={formValues.address}  placeholder="Address" />
                                <p style={{color:"#BF3325"}}>{formErrors.address}</p>

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={handleChange} value={formValues.password} placeholder="Password" />
                                <p style={{color:"#BF3325"}}>{formErrors.password}</p>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='confirmPassword' onChange={handleChange} value={formValues.confirmPassword} placeholder="Confirm Password" />
                                <p style={{color:"#BF3325"}}>{formErrors.confirmPassword}</p>
                            </Form.Group>
                            {/* onClick={addData} */}
                            <Button variant="dark" className='col-lg-6'  type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already have an account? <span><NavLink to="/login/client" style={{ textDecoration: "none" }}>Sign In</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
        </div></>
    )
}

export default SignUp 