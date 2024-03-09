import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.tvmaze.com/shows';

export const fetchAllShows = createAsyncThunk('getshows/', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch shows');
  }
});

const showsSlice = createSlice({
  name: 'shows',
  initialState: {
    shows: [],
    isLoading: true,
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shows = action.payload;

        const genresSet = new Set();
        action.payload.forEach((show) => {
          show.genres.forEach((genre) => genresSet.add(genre));
        });
        state.categories = ['All', ...Array.from(genresSet)];
      })
      .addCase(fetchAllShows.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default showsSlice.reducer;
