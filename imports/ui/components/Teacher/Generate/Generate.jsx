import React from 'react';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ReactPlayer from 'react-player'
import { Meteor } from 'meteor/meteor'
import Navbar from '../Navbar/Navbar';
import './generate.css';

function Generate () {
  const [inputLink, setInputLink] = React.useState("");
  const [vidLen, setVidLen] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [vidTitle, setVidTitle] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [generatedLink, setGeneratedLink] = React.useState();
  // const [validVid, setValidVid] = React.useState(false);
  const [previewView, setPreviewView] = React.useState(false);
  const [generateView, setGenerateView] = React.useState(true);
  const history = useHistory();

  const generateLink = () => {
    // load link and show loading bar
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

  return (
    <div class="container">
      <Navbar/>
      <section>
        <div class="header">
            <div class="row justify-content-center">
              <img src="/assets/file-icon.png" class="file-icon"/>
            </div>
        </div>
      </section>
      <section>
        <div class="row justify-content-center">
          <h1>
            Generate Video Link For Student
          </h1>
        </div>
        <div class="row">
          


          <div class="col-12">

            <form class="form justify-content-center">
              
              <div class="row justify-content-center">
                <div class="form-group long">
                <label htmlFor = "inputLink">
                    Input Link
                  </label>
                  <input
                    type="text"
                    id="inputLink"
                    class="form-control"
                    onChange = {e => setInputLink(e.target.value)}
                  />
                </div>
              </div>
            
              <div class="row justify-content-center">
                <div class="form-group long">
                  <label htmlFor = "vidTitle">
                    Video Title
                  </label>
                  <input
                    type="text"
                    id="vidTitle"
                    onChange = {e => setVidTitle(e.target.value)}
                    class="form-control"
                  />
                </div>                           
              </div>

              <div class="row justify-content-center">
                <div class="form-group long">
                    <label htmlFor = "course">
                      Course
                    </label>
                    <input
                      type="text"
                      id="course"
                      onChange = {e => setCourse(e.target.value)}
                      class="form-control"
                    />
                </div>
              </div>
              
            </form>          
          </div>
        
          <div class="col-12">
            <div class="row justify-content-center">
              {
                generateView &&
                <button 
                  class="btn btn-lg"
                  onClick = {generateLink
                }>                                   
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
                previewView &&
                <div>
                  <button 
                    class="btn btn-lg btn-primary"
                    onClick = {previewLink}
                  >
                    Preview Link
                  </button>
                  <div onClick = {generateLink}>
                    <h5 class = "underline">
                      Update Kubo Link details
                    </h5>
                  </div>
                </div>
              }
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Generate;
