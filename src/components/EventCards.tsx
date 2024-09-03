import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
// import image1 from '../assets/cardimage/1.png'
// import image2 from '../assets/cardimage/2.png'
// import image3 from '../assets/cardimage/3.png'
// import image4 from '../assets/cardimage/4.png'
// import image5 from '../assets/cardimage/5.png'
// import image6 from '../assets/cardimage/6.png'
import clock from '../assets/icons/clock.png'


import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Hackathon } from '@/redux/hackathonsSlice'


// interface Event {
//   id: number
//   image: string
//   status: 'Upcoming' | 'Active' | 'Past'
//   title: string
//   startTime?: Date
//   endTime?: Date
// }


const statusColors: Record<'Upcoming' | 'Active' | 'Past', string> = {
  Upcoming: 'bg-yellow-200 text-yellow-800',
  Active: 'bg-green-200 text-green-800',
  Past: 'bg-red-200 text-red-800',
};


function formatTime(time: number) {
  return time.toString().padStart(2, '0')
}

function Timer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className="font-bold text-lg ">
      {formatTime(days)} : {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
    </div>
  )
}

function getImageSrc(image: string | File | undefined): string | undefined {
  if (typeof image === 'string') {
    return image;
  } else if (image instanceof File) {
    return URL.createObjectURL(image);
  }
  return undefined;
}


export default function EventCards() {

  const { hackathons, filter } = useSelector((state: RootState) => state.hackathons);

  const filteredEvents = hackathons.filter(event => {
    const matchesLevel = filter.level.length === 0 || filter.level.includes(event.level);
    const matchesStatus = filter.status.length === 0 || filter.status.includes(event.status);
    const matchesSearch = event.name.toLowerCase().includes(filter.search.toLowerCase());
    return matchesLevel && matchesStatus && matchesSearch;
  });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full ">
        {filteredEvents.map((event:Hackathon) => (
            <Card key={event.id} className=" overflow-hidden">
            <CardHeader className="p-0">
                <img
                src={getImageSrc(event.image)}
                alt={event.name}
                className="w-full h-48 object-cover"
                />
            </CardHeader>
            <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[event.status as 'Upcoming' | 'Active' | 'Past']}`}>
                  {event.status}
                </span>

                </div>
                <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                {event.status === 'Upcoming' && event.startDate && (
                <div className="text-sm text-[#4F4F4F] ">
                    Starts in
                    <Timer targetDate={event.startDate} />
                    <div className="text-xs font-semibold text-[#4F4F4F] flex justify-center items-center gap-4 mt-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Mins</span>
                    <span>Secs</span>
                    </div>
                </div>
                )}
                {event.status === 'Active' && event.endDate && (
                <div className="text-sm text-gray-600">
                    Ends in
                    <Timer targetDate={event.endDate} />
                    <div className="text-xs font-semibold text-[#4F4F4F] flex justify-center items-center gap-4 mt-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Mins</span>
                    <span>Secs</span>
                    </div>
                </div>
                )}
                {event.status === 'Past' && event.endDate && (
                <div className="text-sm text-[#4F4F4F] ">
                    Ended on
                    <div className="font-bold text-lg ">
                    {event.endDate.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit',
                    })}
                    {' '}
                    {event.endDate.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                    </div>
                </div>
                )}
            </CardContent>
            <CardFooter>
                
                    <Button className=" mx-auto bg-[#44924C] hover:bg-[#397c3f] text-white py-4 px-2 ">
                    <Link to={`/details/${event.id}`} className='  flex justify-center items-center gap-4  ' >
                    <img src={clock} alt="icon" />
                    Participate Now
                    </Link>
                    </Button>
                
            </CardFooter>
            </Card>
        ))}
        </div>
    )
}