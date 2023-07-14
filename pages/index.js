import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function IndexPage() {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <div>
        Hello World.
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <button onClick={notify}>Notify !</button>
      </div>
      <ToastContainer />
    </div>
  );
}
