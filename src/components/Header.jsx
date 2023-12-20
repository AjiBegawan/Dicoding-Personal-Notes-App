import React from "react";
import InputData from './InputData'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Header({ search, setQuery }) {
   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar component="nav">
            <Toolbar>
               <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  Notes App
               </Typography>
               <InputData
                  value={search}
                  onChange={setQuery}
                  type="search"
                  id="search_note"
                  name="search_note"
                  placeholder="Search..."
               />
            </Toolbar>
         </AppBar>
         <Box sx={{ p: 3 }}></Box>
      </Box>
   );
}

