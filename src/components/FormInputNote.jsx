import React from "react";
import { useState } from "react";
import InputData from './InputData'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function FormInputNote({ setNotes }) {
   const [title, setTittle] = useState("");
   const [body, setBody] = useState("");

   const onSubmitEventHandler = (event) => {
      event.preventDefault();
      const timestamp = new Date().toISOString();

      setNotes((notes) => [
         ...notes,
         {
            id: timestamp,
            title: title,
            body: body,
            archived: false,
            createdAt: timestamp,
         },
      ]);
   }

   return (
      <div className="note-input">
         <Typography component="div">
            <Box sx={{ textAlign: 'center' }}><h2>New Notes</h2></Box>
         </Typography>
         <h3 >Title</h3>
         <form onSubmit={onSubmitEventHandler}>
            <InputData
               value={title}
               onChange={setTittle}
               id="title"
               name="title"
               type="text"
               placeholder="Title"
               required
            />
            <p className="note-input__title__char-limit">
               {title.length} of 50 max characters.
            </p>

            <h3>Note</h3>
            <InputData
               value={body}
               onChange={setBody}
               id="body"
               name="body"
               type="textarea"
               placeholder="Your Notes"
               required
            />
            <br></br>

            <Box Align='center'>
               <Button color="primary" variant="contained" type="submit">
                  Save
               </Button>
            </Box>

         </form>
      </div>
   )

}