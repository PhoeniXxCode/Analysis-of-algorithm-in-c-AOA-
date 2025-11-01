# 🎨 Bhushan Events - Visual Guide

This document describes what the website looks like and how it's organized visually.

---

## 🏠 Homepage Layout

### 1. Header (Sticky at Top)
```
┌─────────────────────────────────────────────────────────────┐
│  [B] Bhushan Events                    [+ Create Event]     │
│      Your Gateway to Amazing Experiences                     │
└─────────────────────────────────────────────────────────────┘
```
- **Left**: Logo (gradient square with "B") + Brand name + Tagline
- **Right**: Create Event button (gradient, purple to indigo)
- **Style**: White background with backdrop blur, sticky positioning

---

### 2. Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│           Discover Amazing Events                            │
│                                                               │
│   Connect with experiences that inspire, educate,            │
│              and entertain.                                  │
│                                                               │
│   [500+ Events]  [50K+ Attendees]  [100+ Cities]            │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Gradient (indigo → purple → pink)
- **Text**: White, large and bold
- **Stats**: Semi-transparent white badges

---

### 3. Search & Filter Section
```
┌─────────────────────────────────────────────────────────────┐
│  [🔍 Search events by name, description, or location...]    │
│                                                               │
│  [All] [Technology] [Music] [Business] [Art] [Sports] [Food]│
└─────────────────────────────────────────────────────────────┘
```
- **Search Bar**: Large, rounded, with border
- **Category Buttons**: Rounded pills, active state highlighted
- **Active**: Indigo gradient with shadow
- **Inactive**: White with border

---

### 4. Events Grid
```
┌─────────────────────────────────────────────────────────────┐
│  All Events                                                  │
│  6 events found                                              │
│                                                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Event 1 │  │ Event 2 │  │ Event 3 │                     │
│  │  Card   │  │  Card   │  │  Card   │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│                                                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Event 4 │  │ Event 5 │  │ Event 6 │                     │
│  │  Card   │  │  Card   │  │  Card   │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
└─────────────────────────────────────────────────────────────┘
```
- **Layout**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Spacing**: Generous gaps between cards
- **Responsive**: Adapts to screen size

---

## 🎫 Event Card Design

```
┌─────────────────────────────────────┐
│  [Almost Full]      [Technology]    │ ← Badges
│                                     │
│         [Event Image]               │ ← Image (800x600)
│                                     │
├─────────────────────────────────────┤
│  Tech Innovation Summit 2025        │ ← Title (bold)
│                                     │
│  Join industry leaders for a day    │ ← Description
│  of innovation, networking...       │   (2 lines max)
│                                     │
│  📅 Sat, Nov 15, 2025              │ ← Date
│  🕐 09:00 AM                        │ ← Time
│  📍 Mumbai Convention Center        │ ← Location
│                                     │
│  342 / 500 registered  158 spots    │ ← Capacity info
│  [████████░░] 68%                   │ ← Progress bar
│                                     │
│  [    Register Now    ]             │ ← Action button
└─────────────────────────────────────┘
```

### Card States

**Normal State**
- White background
- Subtle shadow
- Green progress bar

**Hover State**
- Lifts up slightly (-translate-y)
- Larger shadow
- Image zooms in

**Almost Full (80%+)**
- Orange "Almost Full" badge
- Orange progress bar
- Orange "spots left" text

**Sold Out**
- Red "Sold Out" badge
- Red progress bar
- Disabled button (gray)

---

## ➕ Create Event Modal

```
┌─────────────────────────────────────────────────────┐
│  Create New Event                              [×]  │ ← Header (gradient)
├─────────────────────────────────────────────────────┤
│                                                     │
│  Event Title *                                      │
│  [_________________________________]                │
│                                                     │
│  Date *              Time *                         │
│  [__________]        [__________]                   │
│                                                     │
│  Location *                                         │
│  [_________________________________]                │
│                                                     │
│  Description *                                      │
│  [_________________________________]                │
│  [_________________________________]                │
│  [_________________________________]                │
│                                                     │
│  Category *          Capacity *                     │
│  [Technology ▼]      [100_____]                     │
│                                                     │
│  Image URL                                          │
│  [_________________________________]                │
│                                                     │
│  [   Cancel   ]      [  Create Event  ]            │
└─────────────────────────────────────────────────────┘
```

### Modal Features
- **Overlay**: Dark with backdrop blur
- **Header**: Gradient background (indigo → purple)
- **Form**: Clean, organized fields
- **Buttons**: Cancel (outlined) + Create (gradient)
- **Scrollable**: If content is too tall

---

## 🦶 Footer

```
┌─────────────────────────────────────────────────────────────┐
│  [B] Bhushan Events                                          │
│  Your premier destination for discovering and managing       │
│  amazing events...                                           │
│  📘 🐦 📷 💼                                                 │
│                                                               │
│  Quick Links        Support                                  │
│  • About Us         • Help Center                            │
│  • Browse Events    • Terms of Service                       │
│  • Create Event     • Privacy Policy                         │
│  • Contact          • FAQ                                    │
│                                                               │
│  © 2025 Bhushan Events. All rights reserved.                │
│  Made with ❤️ for amazing experiences.                      │
└─────────────────────────────────────────────────────────────┘
```
- **Background**: Dark slate (900)
- **Text**: White and gray
- **Layout**: 4 columns on desktop, stacked on mobile

---

## 🎨 Color Palette

### Primary Colors
- **Indigo 600**: `#4F46E5` - Main brand color
- **Purple 600**: `#9333EA` - Secondary brand color
- **Pink 600**: `#DB2777` - Accent color

### Neutral Colors
- **Slate 50**: `#F8FAFC` - Light background
- **Slate 200**: `#E2E8F0` - Borders
- **Slate 600**: `#475569` - Secondary text
- **Slate 800**: `#1E293B` - Primary text
- **Slate 900**: `#0F172A` - Footer background

### Status Colors
- **Green 500**: `#22C55E` - Available
- **Orange 500**: `#F97316` - Almost full
- **Red 500**: `#EF4444` - Sold out

### Category Colors
- **Blue**: Technology
- **Purple**: Music
- **Green**: Business
- **Pink**: Art
- **Orange**: Sports
- **Yellow**: Food

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```
┌─────────┐
│ Header  │
├─────────┤
│  Hero   │
├─────────┤
│ Search  │
├─────────┤
│ Filters │
├─────────┤
│ Event 1 │
├─────────┤
│ Event 2 │
├─────────┤
│ Event 3 │
├─────────┤
│ Footer  │
└─────────┘
```
- 1 column layout
- Stacked elements
- Full-width cards

### Tablet (768px - 1024px)
```
┌─────────────────┐
│     Header      │
├─────────────────┤
│      Hero       │
├─────────────────┤
│  Search/Filter  │
├─────────────────┤
│ Event 1│Event 2 │
├─────────────────┤
│ Event 3│Event 4 │
├─────────────────┤
│     Footer      │
└─────────────────┘
```
- 2 column layout
- Side-by-side cards

### Desktop (> 1024px)
```
┌───────────────────────────┐
│         Header            │
├───────────────────────────┤
│          Hero             │
├───────────────────────────┤
│    Search & Filters       │
├───────────────────────────┤
│ Event 1│Event 2│Event 3  │
├───────────────────────────┤
│ Event 4│Event 5│Event 6  │
├───────────────────────────┤
│         Footer            │
└───────────────────────────┘
```
- 3 column layout
- Maximum width: 1280px
- Centered content

---

## ✨ Animations & Transitions

### Hover Effects
- **Cards**: Lift up + shadow increase
- **Buttons**: Scale up + shadow
- **Images**: Zoom in (scale 110%)
- **Links**: Color change

### Transitions
- **Duration**: 300ms (standard)
- **Easing**: Default ease
- **Properties**: transform, shadow, colors

### Loading States
- **Progress bars**: Smooth width animation
- **Buttons**: Disabled state with opacity

---

## 🎯 Visual Hierarchy

### Typography Scale
1. **Hero Title**: 5xl (48px) - Bold
2. **Section Titles**: 3xl (30px) - Bold
3. **Card Titles**: xl (20px) - Bold
4. **Body Text**: base (16px) - Regular
5. **Small Text**: sm (14px) - Regular
6. **Tiny Text**: xs (12px) - Regular

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px

### Border Radius
- **sm**: 8px (buttons)
- **md**: 12px (inputs)
- **lg**: 16px (cards)
- **xl**: 20px (modal)
- **2xl**: 24px (large cards)
- **full**: 9999px (pills)

---

## 🖼️ Image Guidelines

### Event Images
- **Size**: 800x600px (4:3 ratio)
- **Format**: JPG or PNG
- **Source**: Unsplash (configured)
- **Optimization**: Next.js Image component

### Logo
- **Size**: 40x40px
- **Style**: Gradient square with letter
- **Colors**: Indigo to purple gradient

---

## 🎭 Empty States

### No Events Found
```
┌─────────────────────────────┐
│                             │
│           🔍                │
│                             │
│     No events found         │
│                             │
│  Try adjusting your search  │
│   or filter criteria        │
│                             │
└─────────────────────────────┘
```
- Centered layout
- Large emoji icon
- Helpful message

---

## 💡 Visual Best Practices Used

✅ **Consistent spacing** using Tailwind scale  
✅ **Clear visual hierarchy** with typography  
✅ **Accessible colors** with good contrast  
✅ **Smooth animations** for better UX  
✅ **Responsive images** with optimization  
✅ **Loading states** for user feedback  
✅ **Empty states** for edge cases  
✅ **Hover effects** on interactive elements  
✅ **Focus states** for keyboard navigation  
✅ **Status indicators** with colors and badges  

---

**This visual guide helps you understand the design system and layout of Bhushan Events!**
