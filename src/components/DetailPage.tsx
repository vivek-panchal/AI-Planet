import tick from '../assets/icons/tick.svg'
import carbonskilllevelbasic from '../assets/icons/carbon_skill-level-basic.svg'
import { Link, useParams } from 'react-router-dom';

const events = [
    {
        id: 1,
        image: 'src/assets/cardimage/1.png',
        status: 'Upcoming',
        title: 'Data Science Bootcamp - Graded Datathon',
        startTime: new Date(Date.now() + 15 * 60 * 1000 + 22 * 1000),
        difficulty: 'Medium',
        description: 'A comprehensive bootcamp that covers all major aspects of data science. Participants will work through a graded datathon as part of their learning journey.',
    },
    {
        id: 2,
        image: 'src/assets/cardimage/2.png',
        status: 'Upcoming',
        title: 'Data Sprint 72 - Butterfly Identification',
        startTime: new Date(Date.now() + 12 * 60 * 1000 + 34 * 1000),
        difficulty: 'Easy',
        description: 'Identify the class to which each butterfly belongs. This challenge focuses on building a model using computer vision techniques.',
    },
    {
        id: 3,
        image: 'src/assets/cardimage/3.png',
        status: 'Active',
        title: 'Data Sprint 71 - Weather Recognition',
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
        endTime: new Date(Date.now() + 1 * 60 * 60 * 1000 + 17 * 60 * 1000 + 10 * 1000),
        difficulty: 'Hard',
        description: 'Build a model that can recognize different types of weather conditions from images. This challenge is designed for advanced participants.',
    },
    {
        id: 4,
        image: 'src/assets/cardimage/4.png',
        status: 'Active',
        title: 'Data Sprint 70 - Airline Passenger Satisfaction',
        startTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
        endTime: new Date(Date.now() + 11 * 60 * 1000 + 27 * 1000),
        difficulty: 'Medium',
        description: 'Predict the satisfaction level of airline passengers based on various factors. This challenge involves building a classification model.',
    },
    {
        id: 5,
        image: 'src/assets/cardimage/5.png',
        status: 'Past',
        title: 'Engineering Graduates Employment Outcomes',
        endTime: new Date('2022-05-16T21:00:00'),
        difficulty: 'Medium',
        description: 'Analyze the employment outcomes of engineering graduates. This challenge involves working with structured data to predict employment status.',
    },
    {
        id: 6,
        image: 'src/assets/cardimage/6.png',
        status: 'Past',
        title: 'Travel Insurance Claim Prediction',
        endTime: new Date('2022-05-16T21:00:00'),
        difficulty: 'Hard',
        description: 'Build a model to predict whether a travel insurance claim will be approved based on historical data. This challenge is for experienced data scientists.',
    },
];




export default function DetailPage() {
    const { id } = useParams<{ id: string }>();
    const event = events.find((event) => event.id === parseInt(id as string));

    if (!event) {
        return <div>Event not found</div>;
    }
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-start items-center ">
            <header className="bg-[#003145] w-full flex flex-col justify-between items-start p-6">
                <div className="container  w-full max-w-[1280px]  mx-auto text-white flex flex-col justify-between items-start gap-4 py-12  ">
                    <div className="flex items-center space-x-2">
                        <div className="bg-yellow-500 text-black text-sm font-semibold py-2 px-4 rounded-md flex justify-center items-center gap-2 ">
                            {/* <ClockIcon className="inline-block mr-1" /> */}
                            <img src={tick} alt="tick" />
                            Starts on {event.startTime?.toLocaleString()} (India Standard Time)
                        </div>
                    </div>
                    <h1 className="mt-4 text-4xl  font-bold">{event.title}</h1>
                    <p className="mt-2 text-lg font-medium text-wrap max-w-2xl ">{event.description}</p>
                    <div className="mt-2 flex items-center justify-center gap-2 bg-[#F8F9FD] rounded-md px-4 py-2 ">
                        {/* <SignalIcon className="mr-1" /> */}
                        <img src={carbonskilllevelbasic} alt="skill" />
                        <span className=' text-black '>{event.difficulty}</span>
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-6 bg-white shadow-md rounded-md ">
                <div className="flex justify-between items-center border-b pb-2 flex-wrap-reverse  w-full  md:px-24 mb-4">
                    <div className="flex space-x-4">
                        <button className="text-black border-b-4 border-green-600 font-bold px-2 pb-1">Overview</button>
                    </div>
                    <div className="flex space-x-2">
                        <button className="text-white font-semibold  bg-[#44924C] py-3 px-6 rounded-md">
                            <Link to={`/edit-hackathon`}>
                            Edit
                            </Link>
                            </button>
                        <button className="text-[#DC1414] font-semibold border-2 border-red-600 py-3 px-6 rounded-md">Delete</button>
                    </div>
                </div>
                <div className="space-y-4 max-w-2xl w-full md:px-24 ">
                    <p className=' text-[#64607D] font-medium text-lg text-left w-full '>
                    {event.description}
                    </p>
                </div>
            </main>
        </div>
    )
}
