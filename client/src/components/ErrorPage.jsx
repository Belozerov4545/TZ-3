import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();
  return (
    <Card sx={{ maxWidth: 700, maxHeight: 900, margin: '2%' }}>
      <CardMedia
        component="img"
        image="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
        alt="error 404"
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          Error 404
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Упс... по адресу
          {' '}
          {location.pathname}
          {' '}
          ничего нет! Пожалуйста вернитесь обратно.
        </Typography>
      </CardContent>
    </Card>
  );
}
