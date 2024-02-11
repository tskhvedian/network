import { Link } from "react-router-dom";
import Logo from "./Logo";

const LeftSidebar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 ">
        <Link to="/" className="flex gap-3 items-center">
          <Logo />
        </Link>
      </div>
    </nav>
  );
};

export default LeftSidebar;
