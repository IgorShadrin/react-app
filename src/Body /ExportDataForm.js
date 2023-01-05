import { Button, Form } from "react-bootstrap";
import {getWeather, getForecast} from '../services/apiService';

function ExportDataForm() {
  const extensionType = ["xml", "json", "html"];
  const endpoints = ["Current", "Forecast"];

  const handleSubmit = (event) => {
    event.preventDefault();
    window
      .open()
      .document.write(`You ${event.target.extension.value} choose extension`);
    const endpoint = event.target.endpoint.value;
    
    if (!endpoint) {
      alert("Please choose endpoint");
      return;
    }

    const get = endpoint === 'Current' ? getWeather : getForecast; 
    get({

    })
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Export type</Form.Label>
        <Form.Group className="my-4">
          <Form.Label>Type of extension:</Form.Label>
          {extensionType.map((extension) => (
            <Form.Check
              type="radio"
              id={extension}
              label={extension}
              key={extension}
              name="extension"
              value={extension}
              defaultChecked={extension === "json"}
            />
          ))}
        </Form.Group>
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label>Endpoint</Form.Label>
        {endpoints.map((endpoint) => (
          <Form.Check
            key={endpoint}
            name="endpoint"
            value={endpoint}
            type="radio"
            lable={endpoint}
          />
        ))}
      </Form.Group>

      <Button className="w-100" variant="primary" type="submit">
        Export
      </Button>
    </Form>
  );
}

export default ExportDataForm;
