import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import { Container } from './styles';

export default function Home() {
  const submitForm = (e) => {
    e.preventDefault();
    alert('teste');
  };

  return (
    <Form onSubmit={(e) => submitForm(e)}>
      <FormGroup>
        <Label for="orderDescription">Order description</Label>
        <Input type="text" name="orderDescription" id="orderDescription" placeholder="What do you want to order?" />
      </FormGroup>
      <FormGroup>
        <Label for="deliveryAddress">Delivery address</Label>
        <Input type="text" name="deliveryAddress" id="deliveryAddress" placeholder="Where should we send the order to?" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
