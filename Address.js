 
import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;
  console.log(formData);
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Zip"
        name="zip"
        type="number"
        value={zip}
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
        <br/>
        <>
      <h1>  Your First Name : {formData.firstName} </h1>
      <h1>  your lastName : {formData.lastName}</h1>
       <h1> Your NickName: {formData.nickName}</h1>
       
 <h1> Your Adress:   {address}</h1> 

<h1> Your City:   {city}</h1> 

<h1> Your State:   {state}</h1> 
<h1> Your Zip Code:   {zip}</h1> 
        
        
        </>
      </div>
     
    </Container>
    
  );
  
 
  
 
};


