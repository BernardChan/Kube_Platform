import React from 'react';
import { Link} from 'react-router-dom';


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
      <br></br>
      <div>
        <Link to ="/Teacher/Dashboard">
          <button> Return to Dashboard </button>
        </Link>
      </div>
    </div>
  );
}

export default Generate;
