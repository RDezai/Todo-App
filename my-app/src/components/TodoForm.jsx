import React, {useState} from 'react'
import { FormControl, Container, TextField, Button } from '@mui/material';


export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth={true}>
            <TextField label="meine Todos" required={true} value={text} onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" color="primary" style={{marginTop: 5}} type="submit">Add</Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
}
