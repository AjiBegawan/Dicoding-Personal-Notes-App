import React from "react";
import NoteItem from "./NoteItem";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ListNotes({ notes, label, setNotes }) {
  return (
    <>
      <Typography component="div" >
        <Box sx={{ textAlign: 'center' }}>
          <h2>{label}</h2>
        </Box>
      </Typography>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">No {label}</p>
        ) : (
          notes.map((note) => (
            <NoteItem action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
}

