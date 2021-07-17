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
  const [generatedLink, setGeneratedLink] = React.useState();
  const [validVid, setValidVid] = React.useState(false);
  const [previewView, setPreviewView] = React.useState(false);
  const [generateView, setGenerateView] = React.useState(true);
  const history = useHistory();

  const generateLink = () => {
    // load link and show modal
    if (ReactPlayer.canPlay(inputLink)) {
      setGenerateView(false)
      setPreviewView(false)

      sessionStorage.setItem("inputLink", inputLink)
      const generateBody = {
        "inputUrl" : inputLink,
        "vidTitle" : vidTitle,
        "vidLen" : vidLen,
        "course" : course
      }

      console.log(generateBody)
      Meteor.call('links/generate', generateBody)
      setGeneratedLink(`/theatre/0?url=${inputLink}&teacher=${Meteor.userId()}`) 
      sessionStorage.setItem("generatedLink", generatedLink)
      setLoading(true)
      // link to generate
      setTimeout(function(){ 
        setLoading(false) 
        setPreviewView(true)
      }, 2000);
    }
  }

  const previewLink = () => {
    history.push(`${generatedLink}`)
  }

  useEffect(() => {
    if (ReactPlayer.canPlay(inputLink)) {
      setValidVid(false)
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
        {
          generateView &&
          <button onClick = {generateLink}>
            Generate Link
          </button>
        }
        {
          loading &&
          <div>
            Generating Video...
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
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
        {
          previewView &&
          <div>
            <button onClick = {previewLink}>
              Preview Link
            </button>
            <div onClick = {generateLink}>
              Update Kubo Link details
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
