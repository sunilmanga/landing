import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="bg-slate-700 h-screen row text-neutral-300	">
      <div className="lg:w-[30%] h-[30%] lg:bg-slate-700">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>&nbsp;&nbsp;back</span>
        </Link>
      </div>
      <div className="col-6 flex justify-center flex-col">
        <div className="text-center">
          <h1 className="text-3xl">Forgot Password</h1>
        </div>
        <div>
          <form>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                className="form-control rounded-2xl mt-2	"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col my-3">
              <button className="btn btn-primary rounded-2xl">Submit</button>
            </div>

            <p className="text-center">Already Have Account?</p>
            <p className="text-center">Login!</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
