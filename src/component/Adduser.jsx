import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Adduser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="enter your name"></Input>
      </FormGroup>
      <Button type="submit">ADD</Button>
    </Form>
  );
};
export default Adduser;
