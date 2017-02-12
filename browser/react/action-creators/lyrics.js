import {SET_LYRICS} from '../constants';
import axios from 'axios';

export const setLyrics = lyric => ({
  type: SET_LYRICS,
  lyric
});

export const searchLyrics = (artist, song) => {
  return dispatch => {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      })
  };
};