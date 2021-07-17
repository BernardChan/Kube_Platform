import React, { useState } from 'react';

function Survey (props) {
  const [videoSurveyText, setVideoSurveyText] = useState('')
  const [email, setEmail] = useState('')
  const videoID = props.match.params.videoID
  const teacherID = props.match.params.teacherID

  const handleSurvey = (event) => {
    setVideoSurveyText(event.target.value)
  }

  const submitSurvey = () => {
    console.log(videoID + " survey:")
    console.log(teacherID + " is the teacher:")
    console.log(videoSurveyText)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const submitEmail = () => {
    console.log(email)
  }

  return (
    <div>
      <h1>Survey</h1>
      <textarea
        id="videoSurvey"
        name="videoSurvey"
        onChange={handleSurvey}
      />
      <button onClick={submitSurvey}>Submit</button>
      Send timestamps for review
      Enter your email
      <input
        type="text"
        onChange={handleEmail}
      />
      <button onClick={submitEmail}>Submit</button>
    </div>
  );
}

export default Survey;
