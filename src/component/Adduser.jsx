import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Adduser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="enter your name"></Input>
      </FormGroup>
      <Button type="submit" style={{ margin: "0.5rem 1rem" }}>
        Add
      </Button>
      <Link to="/" className="btn btn-danger ">
        Remove
      </Link>
    </Form>
  );
};
export default Adduser;
