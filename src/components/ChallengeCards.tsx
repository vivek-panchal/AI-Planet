import { Clock } from "lucide-react"



interface Challenge {
  id: number;
  title: string;
  image: string;
  status: 'Upcoming' | 'Active' | 'Past';
  startTime?: string;
  endTime?: string;
  timeLeft?: {
    days: number;
    hours: number;
    mins: number;
  };
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Data Science Bootcamp - Graded Datathon",
    image: "/placeholder.svg?height=200&width=400",
    status: "Upcoming",
    startTime: "Starts in",
    timeLeft: { days: 0, hours: 15, mins: 22 }
  },
  {
    id: 2,
    title: "Data Sprint 72 - Butterfly Identification",
    image: "/placeholder.svg?height=200&width=400",
    status: "Upcoming",
    startTime: "Starts in",
    timeLeft: { days: 0, hours: 12, mins: 34 }
  },
  {
    id: 3,
    title: "Data Sprint 71 - Weather Recognition",
    image: "/placeholder.svg?height=200&width=400",
    status: "Active",
    endTime: "Ends in",
    timeLeft: { days: 1, hours: 17, mins: 10 }
  },
  {
    id: 4,
    title: "Data Sprint 70 - Airline Passenger Satisfaction",
    image: "/placeholder.svg?height=200&width=400",
    status: "Active",
    endTime: "Ends in",
    timeLeft: { days: 0, hours: 11, mins: 27 }
  },
  {
    id: 5,
    title: "Engineering Graduates Employment Outcomes",
    image: "/placeholder.svg?height=200&width=400",
    status: "Past",
    endTime: "Ended on",
    startTime: "16th May 22 09:00 PM"
  },
  {
    id: 6,
    title: "Travel Insurance Claim Prediction",
    image: "/placeholder.svg?height=200&width=400",
    status: "Past",
    endTime: "Ended on",
    startTime: "16th May 22 09:00 PM"
  }
];

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${challenge.image})` }} />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${
            challenge.status === 'Upcoming' ? 'bg-yellow-200 text-yellow-800' :
            challenge.status === 'Active' ? 'bg-green-200 text-green-800' :
            'bg-red-200 text-red-800'
          }`}>
            {challenge.status}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-1" />
          <span>{challenge.startTime || challenge.endTime}</span>
        </div>
        {challenge.timeLeft ? (
          <div className="grid grid-cols-3 gap-1 text-center mb-4">
            <div>
              <span className="block text-2xl font-bold">{challenge.timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <div>
              <span className="block text-2xl font-bold">{challenge.timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <div>
              <span className="block text-2xl font-bold">{challenge.timeLeft.mins.toString().padStart(2, '0')}</span>
              <span className="text-xs text-gray-500">Mins</span>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-600 mb-4">{challenge.startTime}</div>
        )}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white">
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default function ChallengeCards() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(challenge => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  )
}