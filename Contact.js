import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  console.log(formData);
  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
        <br />
        <>
      <h1>  Your First Name : {formData.firstName}</h1>
      <h1>  your lastName : {formData.lastName} </h1>
        <h1 >Your NickName: {formData.nickName}</h1>
        
        
     <h1>   Your Adress: {formData.address}</h1>
      <h1>Your City: {formData.city} </h1> 
      
      <h1> your text5 : {formData.text5} </h1>  
      <h1>  Your State: {formData.state}  </h1>
        <h1> Your Zip: {formData.zip}  </h1>
        <h1>  Your Phone Number: {phone}  </h1>
        <h1> Your Email: {email}  </h1>
        
        </>
      </div>
    </Container>
  );
};
