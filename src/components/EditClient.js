import React, { useState,useEffect} from "react";
import {Button,Form} from 'react-bootstrap'
import {Clients} from './ClientList';
import { Link ,useNavigate} from 'react-router-dom';
import {v4 as uuid} from "uuid";
import { Modal } from "react-bootstrap";
import DashboardNavbar from "./DashboardNavbar";



const EditClient = () => {
   
    const [_proposed,setProposed] = useState("");
    const [_pending,setPending] = useState("");
    const [_netInvestment,setNetInevstment] = useState("");
    const [_marketValue,setMarketValue] = useState("");
    const [_inceptionDate,setInceptionDate] = useState("");

    let history = useNavigate();
    var index = Clients.map(function(e){
        return e._proposed
    }).indexOf(_proposed);

    const handleSubmit =(e)=>{
        e.preventDefault();

        var c=_proposed
        var d=_pending
        var e=_netInvestment
        var f=_marketValue
        var g=_inceptionDate

        let a = Clients[index]
        a.proposed=c;
        a.pending=d;
        a.netInvestment=e;
        a.marketValue=f;
        a.inceptionDate=g;


        
        history('/login/advisor/dashboard');
    }

    useEffect(()=>{
        setProposed(localStorage.getItem('proposed'))
        setPending(localStorage.getItem('pending'))
        setNetInevstment(localStorage.getItem('netInvestment'))
        setMarketValue(localStorage.getItem('marketValue'))
        setInceptionDate(localStorage.getItem('inceptionDate'))

    },[])


    return (
        <><DashboardNavbar /><div className="border-right">

        <h2 className="text-center" style={{  marginTop: "5rem" }}>Edit Client Details</h2>
        <Form className="d-grid gap 2" style={{ marginBottom: "15rem", marginLeft: "15rem", marginRight: "15rem", }}>
            

            <Form.Group className="mb-3" controlId="formProposed">
                <Form.Control  type="text" placeholder="Enter new proposed amount" required onChange={(e) => setProposed(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPending">
                <Form.Control type="text" placeholder="Enter new pending amount" required onChange={(e) => setPending(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNetInvesment">
                <Form.Control type="text" placeholder="Enter new invesment amount" required onChange={(e) => setNetInevstment(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMarketValue">
                <Form.Control type="text" placeholder="Enter new market value" required onChange={(e) => setMarketValue(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formInceptionDate">
                <Form.Control type="date" placeholder="Enter inception date" required onChange={(e) => setInceptionDate(e.target.value)}></Form.Control>
            </Form.Group>

            <Button variant="dark" size="sm" onClick={(e) => handleSubmit(e)} type="submit">Update</Button>

        </Form>
    </div></>

    )
}

export default EditClient