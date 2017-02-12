import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';

export default class extends Component {

  constructor() {

    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState().lyrics);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().lyrics);
    });
  }

  handleChange(type, value) {
    const stateChange = {};
    stateChange[`${type}Query`] = value;
    this.setState(stateChange);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
    );
  }

}