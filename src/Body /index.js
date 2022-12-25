import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { OffcanvasExample } from "./Offcanvas";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Forecast from "./Tabs/Forecast";
import Now from "./Tabs/Now";



export function Body() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShow}>
        Search
      </Button>   
      <OffcanvasExample show={show} handleClose={handleClose}   />
      <Tabs
        defaultActiveKey="now"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now />
        </Tab>
        <Tab eventKey="forecat" title="Forecast">  
          <Forecast /> 
        </Tab>
      </Tabs>
    </>
  );
}


export default Body;