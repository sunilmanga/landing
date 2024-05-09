import { Route, Routes, BrowserRouter } from "react-router-dom";
import Logsig from "./LoginSignup/Logsig";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Forgot from "./Forgot/Forgot";
import Home from "./Home/Home";
import Finance from "./Finance/Finance";
import Mathx from "./Mathx/Mathx";
import English from "./English/English";
import Design from "./Design/Design";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logsig />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/finance" element={<Finance />} />\
          <Route path="/mathx" element={<Mathx />} />
          <Route path="/english" element={<English />} />{" "}
          <Route path="/design" element={<Design />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
