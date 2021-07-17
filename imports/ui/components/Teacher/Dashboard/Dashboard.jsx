import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Dashboard () {
  const [inputLink, setInputLink] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const generateLink = () => {
    // load link and show modal
    localStorage.setItem("inputLink", inputLink)
    const generatedLink = inputLink // stub for now
    localStorage.setItem("generatedLink", generatedLink) 
    setLoading(true)

    // link to generate
    setTimeout(function(){ 
      setLoading(false) 
      history.push('/Teacher/generate')
    }, 2000);
  }

  return (
    <div>
      <div>
        <Link to ="/Teacher">
          <button>Log out</button>
        </Link>
      </div>
      <div>
        <div>
          Generate Video Link For Student
        </div>
        <div>
          <input
              type="text"
              id="inputLink"
              onChange = {e => setInputLink(e.target.value)}
          />
        </div>
        <button onClick = {generateLink}>
          Generate Link
        </button>
        {
          loading &&
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        }
      </div>
    </div>
  );
}

export default Dashboard;
