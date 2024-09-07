import Navbar from "../components/Navbar";
import image from "../assets/images/travelling.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section
        className=" container p-10 max-w-4xl mx-auto flex flex-col justify-center items-center"
        id="home"
      >
        <h1 className="font-bold text-5xl mb-10 text-center text-roam-darker-green">
          Plan your next adventure with ease!
        </h1>
        <i className="text-center text-xl">
          Whether it’s a family vacation, a weekend getaway, or a solo escape,
          <span className="text-roam-green"> Roam</span> is your go-to tool for
          organizing stress-free, enjoyable trips. Let's make planning fun
          again!
        </i>
        <figure className="mt-10 max-w-96">
          <img src={image} />
        </figure>
      </section>
      {/* Benefits */}
      <section className="bg-roam-green" id="benefits">
        {/* Container */}
        <div className="container mx-auto p-10 flex flex-col items-center">
          <h3 className="font-bold text-4xl text-center mb-20">Benefits</h3>
          {/* Benefit #1 */}
          <div className="flex bg-white p-5 mb-5 max-w-4xl rounded-md shadow-xl">
            <div className="flex items-center text-3xl ml-4 mr-8">
              {<FontAwesomeIcon icon={faMap} />}
            </div>
            <div>
              <h4 className="text-roam-darker-green font-bold text-2xl mb-4">
                <span className="text-roam-green">Effortless</span> Trip
                Organization
              </h4>
              <p>
                Roam helps you quickly organize your trip by creating
                easy-to-follow itineraries. You'll have all your activities,
                sights, and plans in one place, so there’s no need to stress
                over last-minute details.
              </p>
            </div>
          </div>
          {/* Benefit #2 */}
          <div className="flex bg-white p-5 mb-5 max-w-4xl rounded-md shadow-xl">
            <div className="flex items-center text-3xl ml-4 mr-8">
              {<FontAwesomeIcon icon={faDollarSign} />}
            </div>
            <div>
              <h4 className="text-roam-darker-green font-bold text-2xl mb-4">
                Stay on Budget,{" "}
                <span className="text-roam-green">Stress-Free</span>
              </h4>
              <p>
                Roam helps you manage your travel expenses, so you stay within
                your budget and avoid any financial surprises. Focus on having a
                great time, knowing your finances are under control.
              </p>
            </div>
          </div>
          {/* Benefit #3 */}
          <div className="flex bg-white p-5 mb-5 max-w-4xl rounded-md shadow-xl">
            <div className="flex items-center text-3xl ml-4 mr-8">
              {<FontAwesomeIcon icon={faListCheck} />}
            </div>
            <div>
              <h4 className="text-roam-darker-green font-bold text-2xl mb-4">
                <span className="text-roam-green">Never Forget</span> a Thing
              </h4>
              <p>
                With Roam’s packing and task checklists, you’ll always be
                prepared. Whether you’re packing for the trip or handling
                pre-trip tasks, Roam ensures nothing slips through the cracks.
              </p>
            </div>
          </div>
          {/* Benefit #4 */}
          <div className="flex bg-white p-5 mb-5 max-w-4xl rounded-md shadow-xl">
            <div className="flex items-center text-3xl ml-4 mr-8">
              {<FontAwesomeIcon icon={faFolderOpen} />}
            </div>
            <div>
              <h4 className="text-roam-darker-green font-bold text-2xl mb-4">
                Keep Everything in
                <span className="text-roam-green"> One Place</span>
              </h4>
              <p>
                Roam keeps all your important trip details organized and
                accessible. Your itineraries, budget, and packing lists are easy
                to find, so you can focus on enjoying your adventure.
              </p>
            </div>
          </div>
          {/* Benefit #5 */}
          <div className="flex bg-white p-5 mb-5 max-w-4xl rounded-md shadow-xl">
            <div className="flex items-center text-3xl ml-4 mr-8">
              {<FontAwesomeIcon icon={faPlaneDeparture} />}
            </div>
            <div>
              <h4 className="text-roam-darker-green font-bold text-2xl mb-4">
                <span className="text-roam-green">Simplified</span> Trip
                Planning
              </h4>
              <p>
                Roam takes the complexity out of trip planning, giving you more
                time to look forward to your journey. Planning doesn’t have to
                be a hassle—it’s smooth and simple with Roam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section
        className=" container p-10 max-w-4xl mx-auto flex flex-col justify-center items-center"
        id="about"
      >
        <h3 className="font-bold text-4xl text-center mb-20">
          About <span className="text-roam-green">Roam</span>
        </h3>
        {/* My Goal */}
        <h4 className="text-roam-darker-green font-bold text-3xl mb-4">
          My Goal
        </h4>
        <p>
          I believe that planning a trip should be exciting, not stressful.
          Whether it’s a family vacation or a solo adventure,{" "}
          <span className="text-roam-green">Roam</span> is here to simplify the
          process and help you create the perfect itinerary with ease.
        </p>
        {/* Who I Am */}
        <h4 className="text-roam-darker-green font-bold text-3xl mt-10 mb-4">
          Who I Am
        </h4>
        <p>
          I’m a solo developer with a passion for building practical tools. Although I’m not yet a frequent traveler, I’ve always admired the thrill of exploring new places. <span className="text-roam-green">Roam</span> is my personal project, built to help make trip planning easier for others—and maybe encourage myself to travel more along the way!
        </p>
        {/* What Roam Does */}
        <h4 className="text-roam-darker-green font-bold text-3xl mt-10 mb-4">
          What <span className="text-roam-green"> Roam </span>Does
        </h4>
        <p className="mb-10">
          <span className="text-roam-green">Roam</span> is designed to help you organize every aspect of your trip—from creating custom itineraries to tracking your travel budget. <span className="text-roam-green">Roam</span> keeps everything in one place, so you can enjoy your adventure without the hassle.
        </p>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
