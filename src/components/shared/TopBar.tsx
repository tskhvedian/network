import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section>
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <div className="flex flex-row items-center gap-3">
            <img src="/assets/images/logo.svg" className="h-10" />
            <span className="text-3xl font-extrabold	">Network</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
