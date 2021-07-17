import React, { useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ReactPlayer from 'react-player'
import { Meteor } from 'meteor/meteor'

function Dashboard () {
  const [inputLink, setInputLink] = React.useState("");
  const [vidLen, setVidLen] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [vidTitle, setVidTitle] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [validVid, setValidVid] = React.useState(false);
  const history = useHistory();

  ref = player => {
    this.player = player
  }

  const generateLink = () => {
    // load link and show modal
    if (ReactPlayer.canPlay(inputLink)) {
      sessionStorage.setItem("inputLink", inputLink)
      const generateBody = {
        "inputUrl" : inputLink,
        "vidTitle" : vidTitle,
        "vidLen" : vidLen,
        "course" : course
      }
      
      const generatedLink = Meteor.call('links/generate', generateBody)
      sessionStorage.setItem("generatedLink", generatedLink)
      setLoading(true)
      // link to generate
      setTimeout(function(){ 
        setLoading(false) 
        history.push('/Teacher/generate')
      }, 2000);
    }

  }

  useEffect(() => {
    if (ReactPlayer.canPlay(inputLink)) {
      setValidVid(true)
    }
    else {
      setValidVid(false)
    }
  }, [inputLink])
  const handleDuration = (duration) => {
    setVidLen(duration)
  }

  return (
    <div>
      <div>
        <div>
          Generate Video Link For Student
        </div>
        <div>
          <label htmlFor = "inputLink">
            Input Link:
          </label>
          <input
            type="text"
            id="inputLink"
            onChange = {e => setInputLink(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "vidTitle">
            Video Title:
          </label>
          <input
            type="text"
            id="vidTitle"
            onChange = {e => setVidTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "course">
            Course:
          </label>
          <input
            type="text"
            id="course"
            onChange = {e => setCourse(e.target.value)}
          />
        </div>
        <button onClick = {generateLink}>
          Generate Link
        </button>
        {
          loading &&
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        }
        {
          validVid &&
          <div>
            <br></br>
            <div>Preview:</div>
            <ReactPlayer
            url={inputLink}
            controls
            onDuration={handleDuration}
            />  
          </div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
