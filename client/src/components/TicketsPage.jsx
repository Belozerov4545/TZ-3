import React, { useState, useEffect } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import MOCK_DATA from '../JSON/MOCK_DATA.json';
import TicketCard from './TicketCard';

export default function TicketsPage() {
  const [tickets, setTickets] = useState(MOCK_DATA || []);
  const [value, setValue] = useState('');
  const [Genre, setGenre] = useState('');
  const [Price, setPrice] = useState(0);
  const [Date, setDate] = useState('');

  const filtredTickets = tickets
    .filter((ticket) => ticket.time.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || ticket.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || ticket.date.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || ticket.price.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  || ticket.genre.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

  const selectedTickets = tickets
    .filter((ticket) => ticket.genre.toLocaleLowerCase().includes(Genre.toLocaleLowerCase())
    || ticket.price.toLocaleLowerCase().includes(toString(Price).toLocaleLowerCase())
    || ticket.date.toLocaleLowerCase().includes(Date.toLocaleLowerCase()));

  const genres = tickets.map((ticket) => ticket.genre);
  const uniqGenres = Array.from(new Set(genres));
  const dates = tickets.map((ticket) => ticket.date);
  const uniqDates = Array.from(new Set(dates)).sort((a, b) => a - b);
  const prices = tickets.map((ticket) => ticket.price);
  // eslint-disable-next-line max-len
  const uniqPrices = Array.from(new Set(prices)).map((el) => parseInt(el, 10)).sort((a, b) => a - b);

  const genreChange = (event) => {
    setGenre(event.target.value);
  };
  const priceChange = (event) => {
    setPrice(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
  };
  useEffect(() => {
    setTickets(selectedTickets);
  }, [selectedTickets]);
  return (
    <Box>
      <Box
        className="searchForm"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          variant="standard"
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Select genre</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            defaultValue=""
            value={Genre || ''}
            label="genre"
            onChange={genreChange}
          >
            {uniqGenres?.map((genre, i) => <MenuItem key={i} value={genre}>{`${genre}`}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Select price</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            defaultValue=""
            value={Price || ''}
            label="price"
            onChange={priceChange}
          >
            {uniqPrices?.map((price, i) => <MenuItem key={i} value={price}>{`${price}.00 $`}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Select date</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            defaultValue=""
            value={Date || ''}
            label="date"
            onChange={dateChange}
          >
            {uniqDates?.map((date, i) => <MenuItem key={i} value={date}>{`${date}`}</MenuItem>)}
          </Select>
        </FormControl>
        <Button sx={{ m: 1, minWidth: 200, minHeight: 55 }} variant="contained">Clear</Button>
      </Box>
      <TicketCard filtredTickets={filtredTickets} />
    </Box>
  );
}
