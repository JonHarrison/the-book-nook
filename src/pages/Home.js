// from https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/

import { useNavigate } from "react-router";

import { Button } from "react-bootstrap";

import { useUserAuth } from "../context/userAuthContext";

import logo from '../assets/logo.png'

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(user);
  
  return (
    <>
    {user &&
      <>
     <div className="p-4 box mt-3 text-center">
        Hello {user.displayName} Welcome<br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </>
      }

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto my-5 col-lg-2 col-md-4 col-xs-12" >
              <img className="img-fluid rounded" src={logo} />
            </div>
            <div className="mx-auto col" >
              <div className='App-main-headers'>
                <h1>The Book Nook</h1>
                <h2>Your personal book library</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
