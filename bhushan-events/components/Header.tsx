interface HeaderProps {
  onCreateEvent: () => void;
}

export default function Header({ onCreateEvent }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bhushan Events
              </h1>
              <p className="text-xs text-slate-500">Your Gateway to Amazing Experiences</p>
            </div>
          </div>
          
          <button
            onClick={onCreateEvent}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span className="text-xl">+</span>
            <span>Create Event</span>
          </button>
        </div>
      </div>
    </header>
  );
}
