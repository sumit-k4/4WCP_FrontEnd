import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SignImg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import "./Background.css";
import Header from './Header';


const AdvisorLogin = () => {

    const initialValues = { 
                            email: "", 
                            password: ""
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
        }

        if (!values.password) {
        errors.password = "Password is required!";
        } 

    }

    // const history = useNavigate();

    // const [inpval, setInpval] = useState({
    //     email: "",
    //     password: ""
    // })

    // const [data, setData] = useState([]);
    // console.log(inpval);

    // const getdata = (e) => {
    //     // console.log(e.target.value);


    //     const { value, name } = e.target;
    //     // console.log(value,name);


    //     setInpval(() => {
    //         return {
    //             ...inpval,
    //             [name]: value
    //         }
    //     })

    // }

    // const addData = (e) => {
    //     e.preventDefault();

    //     const getuserArr = localStorage.getItem("useryoutube");
    //     console.log(getuserArr);

    //     const { email, password } = inpval;
    //     if (email === "") {
    //         toast.error('email field is requred', {
    //             position: "top-center",
    //         });
    //     } else if (!email.includes("@")) {
    //         toast.error('plz enter valid email addres', {
    //             position: "top-center",
    //         });
    //     } else if (password === "") {
    //         toast.error('password field is requred', {
    //             position: "top-center",
    //         });
    //     } else if (password.length < 8) {
    //         toast.error('password length greater eight', {
    //             position: "top-center",
    //         });
    //     } else {

    //         if (getuserArr && getuserArr.length) {
    //             const userdata = JSON.parse(getuserArr);
    //             const userlogin = userdata.filter((el, k) => {
    //                 return el.email === email && el.password === password
    //             });

    //             if (userlogin.length === 0) {
    //                 alert("invalid details")
    //             } else {
    //                 console.log("user login succesfulyy");

    //                 localStorage.setItem("user_login", JSON.stringify(userlogin))

    //                 history("/details")
    //             }
    //         }
    //     }

    // }

    return (
        <><Header /><div className='ComponentBackground'>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3  style={{marginTop:"2rem"}} className='text-center col-lg-6'>Sign In as Advisor</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={handleChange} value={formValues.email}  placeholder="Enter email" />
                                <p style={{color:"#BF3325"}}>{formErrors.email}</p>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={handleChange} value={formValues.password} placeholder="Password" />
                                <p style={{color:"#BF3325"}}>{formErrors.password}</p>
                            </Form.Group>
                            <Button  href="/login/advisor/dashboard" variant="dark" className='col-lg-6' type="submit">
                                Log In
                            </Button>
                        </Form>
                        <p className=" text-right"> <Link to="/login/client/forgotpassword" style={{ textDecoration: "none" }}>Forgot Password?</Link></p>
                        <p className='mt-3'>Don't have an account? <span><NavLink to="/signup" style={{ textDecoration: "none" }}> Sign Up</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </div></>
    )
}

export default AdvisorLogin