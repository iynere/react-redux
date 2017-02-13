import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { connect } from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

const LyricsContainer = class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, value) {
    const stateChange = {};
    stateChange[`${type}Query`] = value;
    this.setState(stateChange);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.handleSubmit(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}
export default connect(
  (state, ownProps) => ({
    text: state.lyrics.text,
    artistQuery: ownProps.artistQuery,
    songQuery: ownProps.songQuery
  }),
  (dispatch, ownProps) => {
    console.log(ownProps);
    return {
      handleSubmit: (artist, song) => {
        dispatch(searchLyrics(artist, song));
      }
      // handleChange: (type, value) => {
      //   dispatch(ownProps.handleChange(type, value));
      // }
    };
  }
)(LyricsContainer);

