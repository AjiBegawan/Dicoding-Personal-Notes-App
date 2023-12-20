import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
   return (
      <Box
         sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "primary.main",
            paddingTop: "0.7rem",
            paddingBottom: "0.7rem",
         }}
      >
         <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
               <Grid item xs={12}>
                  <Typography color="whitesmoke" variant="h6">
                     Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography color="whitesmoke" variant="subtitle1">
                     {`${new Date().getFullYear()} | Indiarto Aji Begawan`}
                  </Typography>
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
}
