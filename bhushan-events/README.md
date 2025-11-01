# 🎉 Bhushan Events - Event Management Platform

A modern, beautiful event management website built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Browse Events**: Explore a wide variety of events across different categories
- **Search & Filter**: Find events by name, description, location, or category
- **Create Events**: Easy-to-use modal for creating new events
- **Event Registration**: Register for events with real-time capacity tracking
- **Responsive Design**: Beautiful UI that works on all devices
- **Category System**: Events organized by Technology, Music, Business, Art, Sports, and Food
- **Visual Feedback**: Progress bars showing event capacity and registration status
- **Modern UI**: Gradient backgrounds, smooth animations, and polished design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd bhushan-events
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
bhushan-events/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with event management logic
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header with branding
│   ├── Hero.tsx            # Hero section with stats
│   ├── EventCard.tsx       # Individual event card component
│   ├── CreateEventModal.tsx # Modal for creating new events
│   └── Footer.tsx          # Footer with links and info
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## 🎨 Features Breakdown

### Event Browsing
- Grid layout displaying all events
- Beautiful card design with images
- Category badges with color coding
- Capacity indicators and progress bars

### Search & Filter
- Real-time search across event titles, descriptions, and locations
- Category filtering with visual feedback
- Results counter

### Event Creation
- Modal-based form for creating events
- All necessary fields: title, date, time, location, description, category, capacity
- Image URL support for event visuals
- Form validation

### Event Registration
- One-click registration system
- Real-time capacity tracking
- Visual indicators for "Almost Full" and "Sold Out" events
- Disabled registration for full events

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **ESLint** - Code linting

## 🎯 Usage

### Creating an Event
1. Click the "Create Event" button in the header
2. Fill in all required fields
3. Click "Create Event" to add it to the list

### Registering for an Event
1. Browse or search for events
2. Click "Register Now" on any event card
3. Registration count updates automatically

### Filtering Events
1. Use the search bar to find specific events
2. Click category buttons to filter by type
3. Click "All" to see all events

## 🌈 Customization

### Adding New Categories
Edit the `categories` array in `app/page.tsx` and add corresponding colors in `EventCard.tsx`

### Changing Theme Colors
Modify the gradient colors in components or update Tailwind configuration

### Adding More Features
- User authentication
- Event details page
- Payment integration
- Email notifications
- Calendar integration
- Social sharing

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

---

Made with ❤️ for Bhushan - Your Gateway to Amazing Experiences!
