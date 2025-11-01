# 🚀 Quick Start Guide - Bhushan Events

## Start the Application

```bash
cd bhushan-events
npm run dev
```

Then open http://localhost:3000 in your browser.

## What You'll See

### 🏠 Homepage
- **Header**: "Bhushan Events" branding with "Create Event" button
- **Hero Section**: Beautiful gradient banner with event statistics
- **Search Bar**: Search events by name, description, or location
- **Category Filters**: Filter by Technology, Music, Business, Art, Sports, Food
- **Event Grid**: 6 sample events displayed in a responsive grid
- **Footer**: Links and social media icons

### 🎫 Sample Events Included
1. **Tech Innovation Summit 2025** - Technology event in Mumbai
2. **Music Festival Extravaganza** - Music event in Pune
3. **Business Leadership Workshop** - Business event in Delhi
4. **Art & Culture Exhibition** - Art event in Bangalore
5. **Fitness & Wellness Bootcamp** - Sports event in Goa
6. **Food & Wine Festival** - Food event in Hyderabad

## Key Features to Try

### ✅ Browse Events
- Scroll through the event cards
- See capacity indicators and registration counts
- Notice the "Almost Full" and "Sold Out" badges

### 🔍 Search Events
- Type in the search bar to filter events
- Try searching: "Tech", "Music", "Mumbai", "Festival"

### 🏷️ Filter by Category
- Click category buttons to filter events
- Click "All" to see all events again

### ➕ Create New Event
1. Click "Create Event" button in header
2. Fill in the form:
   - Event Title
   - Date & Time
   - Location
   - Description
   - Category (dropdown)
   - Capacity (number)
   - Image URL (optional)
3. Click "Create Event" to add it
4. Your new event appears at the top of the list!

### 📝 Register for Events
- Click "Register Now" on any event card
- Watch the registration count increase
- Progress bar updates in real-time
- Button becomes disabled when event is full

## 🎨 Design Highlights

- **Modern Gradients**: Indigo to purple color scheme
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Clean Typography**: Easy to read and professional
- **Visual Feedback**: Progress bars, badges, and status indicators

## 📱 Responsive Design

The website automatically adapts to:
- 📱 Mobile phones (single column)
- 📱 Tablets (2 columns)
- 💻 Desktops (3 columns)

## 🛠️ Customization Tips

### Change Brand Name
Edit `components/Header.tsx` and `components/Footer.tsx`

### Add More Events
Edit the `initialEvents` array in `app/page.tsx`

### Change Colors
Modify gradient classes in components (e.g., `from-indigo-600 to-purple-600`)

### Add New Categories
Update the `categories` array in `app/page.tsx` and add colors in `EventCard.tsx`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000
# Then run again
npm run dev
```

### Build Errors
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

## 📦 Production Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎉 Enjoy!

Your event management website is ready to use. Customize it, add more features, and make it your own!

---

**Need Help?** Check the main README.md for detailed documentation.
