import React from 'react';

export default function (props) {

  const artistChange = e => {
    props.handleChange('artist', e.target.value);
  };

  const songChange = e => {
    props.handleChange('song', e.target.value);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{props.text || 'Search above!'}</pre>
        <button onClick={props.handleSubmit}>Search for Lyrics</button>
      </form>
    </div>
  );

}