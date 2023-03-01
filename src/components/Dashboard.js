import React,{Fragment, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import DashboardNavbar from './DashboardNavbar';
import {Clients} from './ClientList';
import { Link ,useNavigate} from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';




const Dashboard = () =>{


    let history = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history('/login/advisor')
        }
    },[])
    const handleDelete = (id)=>{
        // if(window.confirm("Are you sure you want this client?") == true){
        //     axios.delete("Delete URL")
        //     .then((result)=>{
        //         if(result.status===200){
        //             toast.success("Client has been deleted")
        //         }
        //     })
        //     .catch((error)=>{
        //         toast.error(error)
        //     })
        // }


        var index = Clients.map(function(e){
            return e.id
        }).indexOf(id);

        Clients.splice(index,1);
        history('/login/advisor/dashboard')
    }

    const handleEdit=(proposed_, pending_, netInvestment_, marketValue_, inceptionDate_)=>{
        localStorage.setItem('proposed',proposed_);
        localStorage.setItem('pending',pending_);
        localStorage.setItem('netInvestment',netInvestment_);
        localStorage.setItem('marketValue',marketValue_);
        localStorage.setItem('inceptionDate',inceptionDate_);

    }

    return(   
        <><DashboardNavbar /><Fragment>
            <Container>
                <h2 style={{ marginBottom: "10px", marginTop: "20px" }}>Welcome, Advisor</h2>
                <Button variant="dark" href="/login/advisor/dashboard" style={{ marginBottom: "30px", marginRight: "20px" }}>Client List</Button>
                <Button variant="dark" style={{ marginBottom: "30px",marginRight: "" }}>Investments</Button>
                {/* <Button  variant="danger" style={{ marginBottom: "30px", marginLeft:"600px" }}>Sign Out</Button> */}


                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>Client ID</th>
                            <th>Client Name</th>
                            <th>Proposed</th>
                            <th>Pending</th>
                            <th>Net Investment</th>
                            <th>Market Value</th>
                            <th>Inception Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Clients && Clients.length>0
                            ?
                            Clients.map((item) =>{
                                return(
                                    <tr>
                                        <td> {item.clientId}</td>
                                    
                                        <td> {item.clientName}</td>
                                    
                                        <td> {item.proposed}</td>
                                    
                                        <td> {item.pending}</td>
                                    
                                        <td> {item.netInvestment}</td>
                                    
                                        <td> {item.marketValue}</td>
                                    
                                        <td> {item.inceptionDate}</td>

                                        <td>
                                            <Link to="/login/advisor/dashboard/editclient">
                                                <Button variant="" onClick={()=>handleEdit(item.clientId,item.proposed,item.pending,item.netInvestment,item.marketValue,item.inceptionDate)}><MdEdit/></Button>
                                            </Link>
                                            &nbsp;
                                            <Button variant="" onClick={()=>handleDelete(item.clientId)}><MdDelete/></Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                        {/* <tr>
                            <td>1</td>
                            <td><Button variant='link' style={{textDecoration:"none", padding:"0"}}>Mark Wahlberg</Button></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><Button variant='link' style={{textDecoration:"none", padding:"0"}}>Jack Smith</Button></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><Button variant='link' style={{textDecoration:"none", padding:"0"}}>Ryan Gosling</Button></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><Button variant='link' style={{textDecoration:"none", padding:"0"}}>John Stones</Button></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr> */}
                    </tbody>
                </Table>
                <Button href='/login/advisor/dashboard/addnewclient' variant="dark" style={{ marginTop: "30px"}} > Add New Client +</Button>
            </Container>
        </Fragment></>
    )
}

export default Dashboard;