import React from "react";
import { showFormattedDate } from "../utils";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function NoteContent({ title, body, createdAt, onDeleteNote, onArchiveNote, id, archived }) {


  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h3 >{title}</h3>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        </Typography>
        <Typography variant="body2">
          <p className="note-item__body">{body}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={5}>
            <Button
              color="error"
              variant="contained"
              size="small"
              id={id}
              onClick={() => onDeleteNote(id)}
              aria-label="Delete Button">
              Delete
            </Button>
          </Grid>
          <Grid item md={5}>
            <Button
              color="warning"
              variant="outlined"
              size="small"
              id={id}
              onClick={() => onArchiveNote(id)}
              aria-label="Archive Button">
              {archived ? 'unArchive' : 'Archive'}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box >
      <Card variant="outlined" style={{ height: '25vw' }}>{card}</Card>
    </Box>
  );
}

export default NoteContent;
