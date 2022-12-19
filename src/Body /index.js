import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import OffcanvasExample from "./Offcanvas";

function Body() {
  return (
    <>
    <OffcanvasExample></OffcanvasExample>

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
