import React, { useState } from "react";
import {Button,Form} from 'react-bootstrap'
import {Clients} from './ClientList';
import { Link ,useNavigate} from 'react-router-dom';
import {v4 as uuid} from "uuid";
import { Modal } from "react-bootstrap";
import DashboardNavbar from "./DashboardNavbar";



export const AddNewClient = (props) => {

    const [clientName,setName] = useState("");
    const [proposed,setProposed] = useState("");
    const [pending,setPending] = useState("");
    const [netInvestment,setNetInevstment] = useState("");
    const [marketValue,setMarketValue] = useState("");
    const [inceptionDate,setInceptionDate] = useState("");

    let history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const ids = uuid();
        let clientId = ids.slice(0,8);
        var a= clientId
        var b=clientName
        var c=proposed
        var d=pending
        var e=netInvestment
        var f=marketValue
        var g=inceptionDate


        Clients.push({ 
            clientId: a ,
            clientName: b,
            proposed:c,
            pending: d,
            netInvestment: e,
            marketValue:f,
            inceptionDate: g});
        
        history('/login/advisor/dashboard');
    }


    return (
        // <Modal
        // {...props}
        // size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //         Add New Client
        //         </Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
            // <Modal
            // {...props}
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            // centered
            // >
            //     <Modal.Header closeButton>
            //         <Modal.Title id="contained-modal-title-vcenter">
            //         Add New Client
            //         </Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            <><DashboardNavbar /><div className="border-right">

                <h2 className="text-center" style={{  marginTop: "5rem" }}>Add New Client</h2>
                <Form className="d-grid gap 2" style={{ marginBottom: "15rem", marginLeft: "15rem", marginRight: "15rem", }}>
                    <Form.Group size="sm" className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Client name" required onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProposed">
                        <Form.Control type="text" placeholder="Enter proposed amount" required onChange={(e) => setProposed(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPending">
                        <Form.Control type="text" placeholder="Enter pending amount" required onChange={(e) => setPending(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNetInvesment">
                        <Form.Control type="text" placeholder="Enter invesment amount" required onChange={(e) => setNetInevstment(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMarketValue">
                        <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setMarketValue(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formInceptionDate">
                        <Form.Control type="date" placeholder="Enter inception date" required onChange={(e) => setInceptionDate(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Button variant="dark" size="sm" onClick={(e) => handleSubmit(e)} type="submit">Create</Button>

                </Form>
            </div></>
            // </Modal.Body>

            // <Modal.Footer>
                // <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        //     </Modal.Footer>
        // </Modal>
   
    )
}

