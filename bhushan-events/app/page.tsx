"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import CreateEventModal from "@/components/CreateEventModal";
import Footer from "@/components/Footer";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  capacity: number;
  registered: number;
  image: string;
}

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Summit 2025",
    date: "2025-11-15",
    time: "09:00 AM",
    location: "Mumbai Convention Center",
    description: "Join industry leaders for a day of innovation, networking, and insights into the future of technology.",
    category: "Technology",
    capacity: 500,
    registered: 342,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "Music Festival Extravaganza",
    date: "2025-12-01",
    time: "06:00 PM",
    location: "Pune Open Grounds",
    description: "Experience an unforgettable evening with live performances from top artists across multiple genres.",
    category: "Music",
    capacity: 2000,
    registered: 1856,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Business Leadership Workshop",
    date: "2025-11-20",
    time: "10:00 AM",
    location: "Delhi Business Hub",
    description: "Develop essential leadership skills and strategies to excel in today's competitive business environment.",
    category: "Business",
    capacity: 150,
    registered: 98,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "Art & Culture Exhibition",
    date: "2025-11-25",
    time: "11:00 AM",
    location: "Bangalore Art Gallery",
    description: "Explore contemporary art from emerging and established artists in an immersive gallery experience.",
    category: "Art",
    capacity: 300,
    registered: 187,
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    title: "Fitness & Wellness Bootcamp",
    date: "2025-11-18",
    time: "07:00 AM",
    location: "Goa Beach Resort",
    description: "Transform your health with expert trainers, nutrition workshops, and wellness activities by the beach.",
    category: "Sports",
    capacity: 100,
    registered: 76,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    title: "Food & Wine Festival",
    date: "2025-12-05",
    time: "05:00 PM",
    location: "Hyderabad Food Court",
    description: "Savor exquisite cuisines and premium wines from renowned chefs and sommeliers around the world.",
    category: "Food",
    capacity: 400,
    registered: 312,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
  }
];

export default function Home() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Technology", "Music", "Business", "Art", "Sports", "Food"];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateEvent = (newEvent: Omit<Event, "id">) => {
    const event: Event = {
      ...newEvent,
      id: Date.now().toString()
    };
    setEvents([event, ...events]);
    setIsModalOpen(false);
  };

  const handleRegister = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId && event.registered < event.capacity
        ? { ...event, registered: event.registered + 1 }
        : event
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header onCreateEvent={() => setIsModalOpen(true)} />
      
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search events by name, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors text-slate-800 placeholder-slate-400 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border-2 border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {selectedCategory === "All" ? "All Events" : `${selectedCategory} Events`}
          </h2>
          <p className="text-slate-600 mb-8">
            {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
          </p>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No events found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      <Footer />

      {isModalOpen && (
        <CreateEventModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateEvent}
        />
      )}
    </div>
  );
}
