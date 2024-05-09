import { Link } from "react-router-dom";
import loho from "../Images/loho.png";
const Logsig = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="lg:flex h-screen">
        <div
          className="col-md-7 h-[60%] lg:h-screen"
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "blue",
            marginTop: "5px",
          }}
        >
          <img src={loho} alt="loho" className="w-60" />
          <h1 className="font-bold text-3xl text-center">
            Thynk <br /> Unlimited
          </h1>
          <p>Get better yourself</p>
        </div>
        <div className="h-[40%] lg:h-screen col-md-5 h-">
          <div className="bg-cyan-500 h-full flex justify-center flex-col items-center space-y-4">
            <Link to="/login">
              <button className="btn btn-primary px-10 py-1">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-primary px-10 py-1">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logsig;
