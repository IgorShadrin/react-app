import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import SearchForm from "./SearchForm";

export function OffcanvasExample(props) {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
