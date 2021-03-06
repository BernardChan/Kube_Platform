import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './theatre.css';
import Navbar from '../../Teacher/Navbar/Navbar';

function Theatre (props) {
  const [lastPosition, setLastPosition] = useState(0)
  const [videoURL, setVideoURL] = useState('https://youtu.be/VUrFMjXU67I')
  const teacherID = props.match.params.teacherID

  var reviewItems = []

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

    if (sessionStorage.getItem(teacherID).length == 0 || sessionStorage.getItem(teacherID) == null) {
      reviewItems = []
      sessionStorage.setItem(teacherID, JSON.stringify(reviewItems))
    } else {
      console.log(sessionStorage.getItem(teacherID))
      reviewItems = JSON.parse(sessionStorage.getItem(teacherID))
    }


    if (reviewItems.length == 0) {
      reviewItems = [lastPosition]
    } else {
      reviewItems.push(lastPosition)
    }

    sessionStorage.setItem(teacherID, JSON.stringify(reviewItems))
  }

  return (
    <div class="container">
      {Meteor.user() === undefined &&
        <Navbar/>
      }
      <section>
        <div class="row">
          <div class="col-12">
            <h2>
              Intro to Mobile Applications            
            </h2>
            <h6>
              COMP0000
            </h6>
          </div>

          {(Meteor.user() !== undefined) && 
            <div class="col-12">          
              <div class="preview">
                <span class="label label-info">Preview</span>
                <Link to="/Teacher/Generate">
                  <span id="back">&nbsp;&nbsp;&nbsp; Back to Video Settings</span>
                  
                </Link>
              </div>
            </div>
          }

          <div class="col-12">

          <ReactPlayer
            url={videoURL}
            controls
            onProgress={handleProgress}
            />
          </div>

        </div>
        <div class="row">
          {(Meteor.user() !== undefined) ?
              <>
              <div class="col-12">
                <button 
                  onClick={raiseFlag}
                  class="btn btn-warning"
                >
                  Flag section
                </button>

                <button 
                  onClick={markForReview}
                  class="btn btn-info"
                >
                  Mark for review
                </button>
              </div>
              </> :
              <button 
                onClick={() => { navigator.clipboard.writeText(window.location.href) }}
                class="btn btn-lg btn-primary"
                >
                  Copy Kube URL
                </button>
            }
        </div>
    </section>
  </div>
  );
}
export default Theatre;
