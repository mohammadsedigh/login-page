import { useState } from "react";
import "./assets/css/style.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Carousel from "./components/Carousel";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className={toggle && "sign-up-mode"}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <LoginForm toggle={toggle} setToggle={setToggle} />

            <SignUpForm toggle={toggle} setToggle={setToggle} />
          </div>

          <Carousel />
        </div>
      </div>
    </main>
  );
}

export default App;
