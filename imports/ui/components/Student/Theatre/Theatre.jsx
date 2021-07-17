import React, { useState } from 'react';
import ReactPlayer from 'react-player'

function Theatre () {
  const [lastPosition, setLastPosition] = useState(0)

  const handleProgress = (state) => {
    if (lastPosition == 0) {
      setLastPosition(state.playedSeconds);
      return
    }

    if ((lastPosition - state.playedSeconds) > 10) {
      console.log('you dun messed up')
      console.log('flag set at ' + state.playedSeconds)
    }
    setLastPosition(state.playedSeconds);
  }

  const raiseFlag = () => {
    console.log('flag set at ' + lastPosition)
  }

  const markForReview = () => {
    console.log('review flag set at ' + lastPosition)
  }

  return (
    <div>
      Video goes here
      <ReactPlayer
        url='https://youtu.be/VUrFMjXU67I'
        controls
        onProgress={handleProgress}
      />
      <button onClick={raiseFlag}>Raise flag!</button>
      <button onClick={markForReview}>Mark for review</button>
    </div>
  );
}
export default Theatre;
