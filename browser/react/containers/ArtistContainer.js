import React, {Component} from 'react';
// import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux';
import {toggleSong} from '../action-creators/player';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
// 	console.log('children: ', this.props.children);
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children.props.children} />
//     );
//   }

// }

export default connect(
	(state, ownProps) => {
		return Object.assign({}, {
			selectedArtist: state.artists.selected,
			currentSong: state.player.currentSong,
			isPlaying: state.player.isPlaying,
			children: ownProps.children.props.children
		});
	},
	dispatch => {
		return {
			toggleOne: function(song, list) {
				dispatch(toggleSong(song, list));
			}
		};
	}
)(Artist);

// still need to handle this part: children={this.props.children.props.children}
