import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS
} from '../constants';

import {convertSong} from '../utils';

const initialPlaylistsState = {
  selected: {},
  list: [],
  songs: []
};

export default function (state = initialPlaylistsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = newState.selected.songs.map(convertSong);
      break;

    case RECEIVE_SONGS:
      newState.songs = action.songs;
      break;

    default:
      return state;

  }

  return newState;

}