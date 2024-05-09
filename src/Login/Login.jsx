import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const dataobj = { Email: "", Password: "" };
  const [data, setData] = useState(dataobj);
  const history = useNavigate();

  const changedata = useRef("");
  const chngepass = useRef("");
  const submitform = () => {
    setData({
      Email: changedata.current.value,
      Password: chngepass.current.value,
    });
    if (chngepass.current.value.length > 6) {
      console.log(history);
      history("/home");
    }
  };
  return (
    <div className="bg-slate-700 h-screen lg:flex text-neutral-300">
      <div className="lg:w-[30%] h-[30%] lg:bg-slate-700">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>&nbsp;&nbsp;back</span>
        </Link>
      </div>

      <div className="lg:w-[70%] h-[70%] flex justify-center flex-col lg:mr-40 lg:mt-20">
        <div className="text-center">
          <h1 className="text-3xl">Login</h1>
          <p>Sign in to continue</p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                ref={changedata}
                className="form-control rounded-2xl mt-2	"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="password">Password</label>
              <input
                ref={chngepass}
                className="form-control rounded-2xl mt-2"
                id="password"
                type="password"
                placeholder="password"
                required
                maxLength={25}
              />
            </div>

            <div className="flex flex-col mb-2">
              <button
                type="submit"
                onClick={submitform}
                className="btn btn-primary rounded-2xl"
              >
                Login
              </button>
            </div>
            <Link to="/forgot">
              <h1 className="text-red-300">Forgot Password</h1>
            </Link>
            <p className="text-center">Already Have Account?</p>
            <p className="text-center">Login!</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
