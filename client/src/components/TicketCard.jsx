import {
  Button, Card, CardContent, Grid, Typography,
} from '@mui/material';
import React from 'react';

export default function TicketCard({ filtredTickets }) {
  return (
    <Grid container spacing={2}>
      {filtredTickets?.map((ticket) => (
        <Grid item key={ticket?.id} md={6}>
          <Card sx={{
            mt: 2, maxWidth: 500, border: '#1976d2', borderStyle: 'solid',
          }}
          >
            <CardContent>
              <Typography sx={{ textDecoration: 'underline', textDecorationColor: '#1976d2' }} variant="h5" component="div">
                Title:
                {' '}
                {ticket?.title}
              </Typography>
              <Typography component="span" sx={{ mb: 1.5, marginTop: '5%' }}>
                Genre:
                {' '}
                {ticket.genre}
              </Typography>
              <Typography sx={{ mb: 1.5, marginTop: '2%' }}>
                Price:
                {' '}
                $
                {ticket.price}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date:
                {' '}
                {ticket?.date}
                {' '}
                Time:
                {' '}
                {ticket?.time}
              </Typography>
              <Button variant="contained">Buy a ticket!</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
