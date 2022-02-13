import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const Userlist = () => {
  return (
    <ListGroup className="mt-5">
      <ListGroupItem className="d-flex">
        <strong>User 1</strong>
        <div className="ml-auto" style={{ marginLeft: "15rem" }}>
          <Link
            to="/edit/1"
            className=" btn btn-warning "
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        <strong>User 2</strong>
        <div className="ml-auto" style={{ marginLeft: "15rem" }}>
          <Link
            to="/edit/2"
            className=" btn btn-warning "
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        <strong>User 3</strong>
        <div className="ml-auto" style={{ marginLeft: "15rem" }}>
          <Link
            to="/edit/3"
            className=" btn btn-warning "
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Userlist;
