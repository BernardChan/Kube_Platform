import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

function Theatre (props) {
  const [lastPosition, setLastPosition] = useState(0)
  const [videoURL, setVideoURL] = useState('https://youtu.be/VUrFMjXU67I')
  const teacherID = props.match.params.teacherID

  useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search)
    const url = searchParams.get('url')
    if (ReactPlayer.canPlay(url)) {
      setVideoURL(url)
    } else {
      console.log('couldn\'t play url :(')
    }
  }, [])

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
    console.log(teacherID + " flag:")
    console.log('flag set at ' + lastPosition)
  }

  const markForReview = () => {
    console.log(teacherID + " flag:")
    console.log('review flag set at ' + lastPosition)
  }

  return (
    <div>
      Video goes here
      {(Meteor.user() !== undefined) && <p>Preview</p>}
      <ReactPlayer
        url={videoURL}
        controls
        onProgress={handleProgress}
      />
      {(Meteor.user() !== undefined) ?
        <>
          <button onClick={raiseFlag}>Raise flag!</button>
          <button onClick={markForReview}>Mark for review</button>
        </> :
        <button onClick={() => { navigator.clipboard.writeText(window.location.href) }}>Copy Kube URL</button>
      }

    </div>
  );
}
export default Theatre;
