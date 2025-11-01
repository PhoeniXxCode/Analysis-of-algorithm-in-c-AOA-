import { Event } from "@/app/page";
import Image from "next/image";

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  const availableSpots = event.capacity - event.registered;
  const percentageFilled = (event.registered / event.capacity) * 100;
  const isAlmostFull = percentageFilled >= 80;
  const isFull = availableSpots === 0;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Technology: "bg-blue-100 text-blue-700 border-blue-200",
      Music: "bg-purple-100 text-purple-700 border-purple-200",
      Business: "bg-green-100 text-green-700 border-green-200",
      Art: "bg-pink-100 text-pink-700 border-pink-200",
      Sports: "bg-orange-100 text-orange-700 border-orange-200",
      Food: "bg-yellow-100 text-yellow-700 border-yellow-200"
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        {isAlmostFull && !isFull && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Almost Full!
          </div>
        )}
        {isFull && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sold Out
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
          {event.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-2 text-sm">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-slate-700">
            <span className="text-lg mr-2">📅</span>
            <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center text-slate-700">
            <span className="text-lg mr-2">🕐</span>
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-slate-700">
            <span className="text-lg mr-2">📍</span>
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-600">
              {event.registered} / {event.capacity} registered
            </span>
            <span className={`font-semibold ${isFull ? 'text-red-600' : isAlmostFull ? 'text-orange-600' : 'text-green-600'}`}>
              {availableSpots} spots left
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isFull ? 'bg-red-500' : isAlmostFull ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${percentageFilled}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={() => onRegister(event.id)}
          disabled={isFull}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
            isFull
              ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
          }`}
        >
          {isFull ? 'Event Full' : 'Register Now'}
        </button>
      </div>
    </div>
  );
}
