import { Link } from "react-router-dom";
import rocket from "../assets/icons/rocket.svg";

const Hero = () => {
    return (
        <div className=" w-full min-h-[84vh] flex items-center justify-center p-4 bg-[#003145] ">
        <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-around">
            <div className="flex justify-start items-start gap-8 w-full h-full ">
                <div className="w-3 h-[124px] bg-[#FFCE5C]  hidden md:block place-self-start "></div>
                <div className="text-white max-w-xl w-full flex flex-col justify-between items-center md:items-start gap-4 h-full ">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4 w-full text-nowrap leading-loose  ">
                    Accelerate Innovation <br /> with Global AI Challenges
                    </h1>
                    <p className="text-gray-300 mb-6 leading-relaxed ">
                    AI Challenges at DPhi simulate real-world problems. It is a great
                    place to put your AI/Data Science skills to test on diverse
                    datasets allowing you to foster learning through competitions.
                    </p>
                    <button className="bg-white text-[#0A2A3B] hover:bg-gray-200 transition-colors rounded-lg p-3 px-6 font-semibold  ">
                    <Link to="/create-hackathon">
                    Create Challenge
                    </Link>
                    </button>
                </div>
            </div>
            <div className="w-full max-w-[200px] md:max-w-[400px]">
            <img src={rocket} alt="rocketimg" className=" w-full h-full " />
            </div>
        </div>
        </div>
    );
};

export default Hero;
