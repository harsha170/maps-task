import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import '../App.css';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';

const Body = (props) => {

    const [location,setLocation] = useState("");
    const [latitude,setLatitude] = useState("");
    const [longitude,setLongitude] = useState("");

    const handleLocation= (e) =>{
        setLocation(e.target.value)
    }
    const handleLatitude = (e) =>{
        setLatitude(e.target.value)
    }
    const handleLongitude = (e) =>{
        setLongitude(e.target.value)
    }
    const handleInputs = () => {

    }

    return(
        <>
        <div className="head">
        <Table>
                <tbody>
                <tr>
                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="loc">Location</Form.Label>
                            <Form.Control type="text" placeholder="Location" value= {location} onChange={handleLocation} />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="loc">Latitude:</Form.Label>
                            <Form.Control type="text" placeholder="Latitude" value= {latitude} onChange={handleLatitude} />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <Form>
                        <Form.Group>
                            <Form.Label className="loc">Longitude:</Form.Label>
                            <Form.Control type="text" placeholder="Longitude" value= {longitude} onChange={handleLongitude} />
                        </Form.Group>
                        </Form>
                    </td>

                    <td>
                        <br/>
                        <Button  className="btn" variant="info" onClick = {() => handleInputs({location,latitude,longitude})}>Submit</Button>
                        
                    </td>
                </tr>
                </tbody>
            </Table>

                <div className="head1">
                    <div className="container">
                        <h4>All Coordinates</h4>
                        <Button className="route">Show Route</Button>
                    </div>
                </div>

                {/* <div className="map">World</div> */}


        </div>
        </>
    )
}

export default Body