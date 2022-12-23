

import { Button, Form } from "react-bootstrap";

function ExportDataForm() {
  const extensionType = ["xml", "json", "html"];

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open().document.write(`You ${event.target.extension.value} choose extension`);

  };
  return (
    <Form onSubmit={handleSubmit}>
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

      <Button className="w-100" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ExportDataForm; 