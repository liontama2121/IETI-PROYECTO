import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

function LoginGooglePage() {
  const clientID = "379715222533-s4e88a28g1fh66e7qhrado1lg8ad2hpv.apps.googleusercontent.com"
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false); 

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
    console.log(response)
    console.log(response.profileObj)
  }
  const onFailure = (response) => {
    console.log("Something went wrong");
  }
  const handleLogout  = () => {
    setUser({}); 
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="center">
      <h1>Login with Google</h1>
    
      <div className='btn'>

        <GoogleLogin 
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />

      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} />
        <h3>{user.name}</h3>
  
      </div>



    </div>
  );
}

export default LoginGooglePage;