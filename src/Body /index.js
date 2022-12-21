import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { OffcanvasExample } from "./Offcanvas";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export function Body() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShow}>
        Search
      </Button>   
      <OffcanvasExample show={show} handleClose={handleClose}> /</OffcanvasExample>
      <Tabs
        defaultActiveKey="now"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <TimeSelector id="now" />
          <Map />
        </Tab>
        <Tab eventKey="forecat" title="Forecast">
          <TimeSelector id="forecast" />
          <Map />
        </Tab>
        <Map />
      </Tabs>
    </>
  );
}

export default Body;