import React from "react";
import door from "../Images/door.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBell,
  faUser,
  faEllipsisVertical,
  faBars,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="pl-4 pr-4 pt-3 lg:h-screen lg:relative">
      <div className="flex justify-between">
        <h1 className="text-2xl text-blue-600">Dashboard</h1>
        <div></div>
        <div className="text-center flex justify-end lg:block hidden">
          <FontAwesomeIcon icon={faHouse} className="text-2xl" />
          <p>Home</p>
        </div>
        <div className="text-center lg:block hidden">
          <FontAwesomeIcon icon={faBook} className="text-2xl" />
          <p>Classes</p>
        </div>
        <div className="text-center lg:block hidden">
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
          <p>Mails</p>
        </div>
        <div className="text-center lg:block hidden">
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
          <p>Profile</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="text-3xl text-blue-600"
          />
        </div>
      </div>
      <div className="flex justify-between bg-blue-600 px-6 text-white  rounded-lg mt-3">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl">Upgrade to VIP</h1>
          <p>
            Become a vip member to <br />
            get your private classes
          </p>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/e6a928_b33373e0fce64033a1000488e5628778~mv2.png/v1/fill/w_458,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/r%2Bl%20resources%201.png"
            alt="imgae"
            className="h-[140px] w-[200px] "
          />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div className="">
          <input
            className="bg-gray-200 h-8	w-[70vw]"
            type="search"
            placeholder="Subjects classes etc"
          />
        </div>
        <div className="">
          <FontAwesomeIcon icon={faBars} className="text-4xl" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div>
          <div>
            <img
              src="https://media.licdn.com/dms/image/D5612AQE3jFpiAxDlpw/article-cover_image-shrink_720_1280/0/1713365193774?e=2147483647&v=beta&t=N4T3E_lw09oBqQgZDLHf1w3mRw9hCR-yYwLxI3oAZKk"
              alt="img1"
            />
          </div>
          <div className="flex justify-center align-center space-x-4 my-8">
            <div>
              <h1 className="font-bold">English Class</h1>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-xl" />
                <p> +50 members</p>
              </div>
            </div>
            <div>
              <Link to="/english">
                <img src={door} alt="door" className="w-[30px] h-[40px]" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://6sense.com/wp-content/uploads/elementor/thumbs/B2B-marketing-and-sales-Featured-Image-q14nsdh5w1gs0ceyegnp8akf0lwlktilame2ynr5ew.png"
              alt="img1"
            />
          </div>
          <div className="flex justify-center align-center space-x-4 my-8">
            <div>
              <h1 className="font-bold">Math Class</h1>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-xl" />
                <p> +50 members</p>
              </div>
            </div>
            <div>
              <Link to="/mathx">
                <img src={door} alt="door" className="w-[30px] h-[40px]" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://cograder.com/img/cover_ai_grading.webp"
              alt="img3"
            />
          </div>
          <div className="flex justify-center align-center space-x-4 my-8">
            <div>
              <h1 className="font-bold">Design Class</h1>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-xl" />
                <p> +50 members</p>
              </div>
            </div>
            <div>
              <Link to="/design">
                <img src={door} alt="door" className="w-[30px] h-[40px]" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://chisellabs.com/glossary/wp-content/uploads/2021/06/Iterative-Testing.jpg"
              alt="img1"
            />
          </div>
          <div className="flex justify-center align-center space-x-4 my-8">
            <div>
              <h1 className="font-bold">Finance Class</h1>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-xl" />
                <p> +50 members</p>
              </div>
            </div>
            <div>
              <Link to="/finance">
                <img src={door} alt="door" className="w-[30px] h-[40px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 flex justify-between w-screen mb-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faHouse} className="text-2xl" />
          <p>Home</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faBook} className="text-2xl" />
          <p>Classes</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
          <p>Mails</p>
        </div>
        <div className="text-center mr-4">
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
