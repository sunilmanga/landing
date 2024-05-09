import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
const Finance = () => {
  return (
    <div className="px-4 pt-3">
      <div className="row">
        <div className="col-1">
          <Link to="/home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <div className="col-5 text-start">
          <h1 className="font-bold">Join to Finance Class? Apply now!</h1>
          <p className="mt-3">
            Finance is a broad term that describes
            <br /> activities associated with banking,
            <br /> leverage or debt, credit, capital
            <br /> markets, money, and investments.
          </p>
        </div>
      </div>
      <div className="row my-20">
        <div className="col-1"></div>
        <div className="col-5">
          <img
            src="https://chisellabs.com/glossary/wp-content/uploads/2021/06/Iterative-Testing.jpg"
            alt="imh"
            className="w-[30vw] h-[30vh]"
          />
        </div>
        <div className="col-5 flex flex-col">
          <div className="flex mb-3">
            <FontAwesomeIcon icon={faCheck} />
            <p className="pl-3">Available for Everyone</p>
          </div>
          <div className="flex mb-3">
            <FontAwesomeIcon icon={faCheck} />
            <p className="pl-3">Easy to Understand</p>
          </div>
          <div className="flex mb-3">
            <FontAwesomeIcon icon={faCheck} />
            <p className="pl-3">Video call Group call Available </p>
          </div>
          <button className="btn btn-primary">Upgrade Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Finance;
