import React from 'react';
import { Link} from 'react-router-dom';

function Dashboard () {
  return (
    <div>
      <div>
        <Link to ="/Teacher">
          <button>Log out</button>
        </Link>
      </div>
      <div>
      </div>
      This is the teacher's dashboard
    </div>
  );
}

export default Dashboard;
