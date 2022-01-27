import { Button, List, ListItem, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import Container from "@material-ui/core/Container";

export const ListAdd = ({formData, setForm, navigation}) => {
   
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
  const handleClick1 = () =>{
    if(text1 === 'Item 1'){
      setText1('');
    }else  {
        setText1("Item 1"); 
    }
  } 
  const handleClick2 = () =>{
    if(text2 === 'Item 2'){
      setText2('');
    }else  {
        setText2("Item 2"); 
    }
  } 
  const handleClick3 = () =>{
    if(text3 === 'Item 3'){
      setText3('');
    }else  {
        setText3("Item 3"); 
    }
  } 
  const handleClick4 = () =>{
    if(text4 === 'Item 4'){
      setText4('');
    }else  {
        setText4("Item 4"); 
    }
  } 
  const handleClick5 = () =>{
    if(text5 === 'Item 5'){
      setText5('');
    }else  {
        setText5("Item 5"); 
    }
  } 


    return (
        <>
        
         <Container maxWidth="xs">
        <h2>Amit Mandaliya</h2>
        <List>
             <ListItem id="list"><Button className='Add' onClick={handleClick1}>Add</Button> Item 1</ListItem>
             <ListItem id="list"><Button className='Add' onClick={handleClick2}>Add</Button> Item 2</ListItem>
             <ListItem id="list"><Button className='Add' onClick={handleClick3}>Add</Button> Item 3</ListItem>
             <ListItem id="list"><Button className='Add' onClick={handleClick4}>Add</Button> Item 4</ListItem>
             <ListItem id="list"><Button className='Add' onClick={handleClick5}>Add</Button> Item 5</ListItem>
            
        </List>

        
       <TextareaAutosize value={text1}>
       
       </TextareaAutosize><br />
       <TextareaAutosize value={text2}>
       
       </TextareaAutosize><br />
       <TextareaAutosize value={text3}>
       
       </TextareaAutosize><br />
       <TextareaAutosize value={text4}>
       
       </TextareaAutosize><br />
       <TextareaAutosize value={text5}>
       
       </TextareaAutosize>
       <h1>  Your First Name : {formData.firstName} </h1>
      <h1>  your lastName : {formData.lastName}</h1>
       <h1> Your NickName: {formData.nickName}</h1>
       
 <h1> Your Adress:   {formData.address}</h1> 

<h1> Your City:   {formData.city}</h1> 

<h1> Your State:   {formData.state}</h1> 
<h1> Your Zip Code:   {formData.zip}</h1> 
<h1> Your text1: {text1}</h1>
       
       <h1> Your text2:   {text2}</h1> 
      
      <h1> Your text3:   {text3}</h1> 
      
      <h1> Your text4:   {text4}</h1> 
      <h1> Your text5:   {text5}</h1> 
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

       </Container>
        </>
    )
}
