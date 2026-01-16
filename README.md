# Car Marketplace UI

A React component built with Tailwind CSS that replicates a modern car marketplace mobile application interface.

## Features

- Responsive mobile-first design
- Price filter pills
- Brand filtering
- Swipeable car listings
- Action buttons (like, share, call)
- Bottom navigation bar
- Clean, modern UI with Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## Project Structure

```
.
├── App.jsx                 # Main App component
├── CarMarketplace.jsx      # Car marketplace UI component
├── main.jsx                # Entry point
├── index.html              # HTML template
├── index.css               # Global styles with Tailwind directives
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## Usage

The main component is `CarMarketplace.jsx` which can be imported and used in any React application:

```jsx
import CarMarketplace from './CarMarketplace';

function App() {
  return <CarMarketplace />;
}
```

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **lucide-react** - Icon library

## Customization

You can customize the component by:
- Modifying colors in the Tailwind classes
- Adding state management for interactive features
- Connecting to a backend API for real car data
- Adding routing for navigation between pages

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```
