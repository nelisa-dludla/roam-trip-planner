import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="container mx-auto p-10">
          <div className="bg-white border-2 border-black rounded-md p-10 text-center max-w-3xl mx-auto flex flex-col shadow-lg">
            <h2 className="font-bold text-3xl mb-10">Sign In to Roam</h2>
            <h4 className="text-2xl mb-5 font-semibold">Welcome!</h4>
            <p className="text-lg mb-4">
              Sign in to continue planning your next adventure.
            </p>
            <p className="text-lg mb-32">
              No need for another account—just use your Google or Apple account
              to get started.
            </p>
            <button className="block mx-auto text-lg p-4 mb-4 bg-black text-white rounded-full shadow-lg font-bold hover:bg-slate-500">
              <FontAwesomeIcon className="mr-2" icon={faGoogle} /> Sign In With
              Google
            </button>
            <button className="block mx-auto text-lg p-4 mb-14 bg-black text-white rounded-full shadow-lg font-bold hover:bg-slate-500">
              <FontAwesomeIcon className="mr-2 text-2xl" icon={faApple} /> Sign
              In With Apple
            </button>
            <p>
              Changed your mind?{" "}
              <Link
                className="font-semibold hover:font-bold"
                to="/"
              >
                Go back to Home
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
