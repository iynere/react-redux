// // OLD

// import React, {Component} from 'react';
// import AUDIO from '../audio';
// import store from '../store';
// import {previous, next, setProgress, toggleSong} from '../action-creators/player';
// import Player from '../components/Player';
// import { connect } from 'react-redux';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().player;
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {

//     AUDIO.addEventListener('ended', this.next);
//     AUDIO.addEventListener('timeupdate', () => {
//       store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
//     });

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().player);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   next() {
//     store.dispatch(next());
//   }

//   prev() {
//     store.dispatch(previous());
//   }

//   toggle() {
//     store.dispatch(
//       toggleSong(this.state.currentSong, this.state.currentSongList)
//     );
//   }

//   render() {
//     return <Player
//       {...this.state}
//       next={this.next}
//       prev={this.prev}
//       toggle={this.toggle}
//     />;
//   }

// }

// NEW

import React, {Component} from 'react';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

const PlayerContainer = class extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		AUDIO.addEventListener('ended', this.props.next);
		AUDIO.addEventListener('timeupdate', () => {this.props.getProgress(AUDIO.currentTime, AUDIO.duration)});
	}

	render() {
		console.log(this.props);
		return <Player
			{...this.props}
		/>;
	}
};

const mapStateToProps = state => ({
	currentSong: state.player.currentSong,
	currentSongList: state.player.currentSongList,
	isPlaying: state.player.isPlaying,
  progress: state.player.progress
});

const mapDispatchToProps = dispatch => ({
	toggle: (song, list) => {
		dispatch(toggleSong(song, list));
	},
	next: () => {
		dispatch(next());
	},
	previous: () => {
		dispatch(previous());
	},
	getProgress: (currentTime, duration) => {
    dispatch(setProgress(currentTime / duration));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
