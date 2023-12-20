import React from "react";
import FormInputNotes from './FormInputNote'
import ListNotes from "./ListNotes";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Body({ allNotes, archiveNotes, setNotes }) {

   return (
      <div className="note-app__body">
         <FormInputNotes setNotes={setNotes} />
         <Box sx={{ width: 'auto', bgcolor: 'background.paper', my: 3, mx: 2 }}>
            <Divider variant="middle" />
         </Box>
         <ListNotes
            label="Notes"
            notes={allNotes}
            setNotes={setNotes}
         />
         <Box sx={{ width: 'auto', bgcolor: 'background.paper', my: 3, mx: 2 }}>
            <Divider variant="middle" />
         </Box>
         <ListNotes
            label="Archived Notes"
            notes={archiveNotes}
            setNotes={setNotes}
         />
      </div>
   )
}