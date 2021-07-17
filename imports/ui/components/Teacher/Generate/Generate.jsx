import React from 'react';

function Generate () {
  return (
    <div>
      <div>
        Your Inputted Link: {localStorage.getItem("inputLink")}
      </div>
      <br></br>
      <div>
        Preview your video:
      </div>
      <div>
        {localStorage.getItem("generatedLink")}
      </div>
    </div>
  );
}

export default Generate;
