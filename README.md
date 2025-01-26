# JusPay Assessment Project

## Project Description
This project is a web application created based on a Figma design provided by JusPay. The application includes two primary pages: the **Home Page** and the **Order List Page**. The Home Page features various interactive data visualizations, including bar graphs, pie charts, line charts, and world maps. The Order List Page displays a table of orders with features such as search, sorting, and pagination. Additionally, the layout incorporates a sidebar, notification bar, and header, all supporting dark and light themes for improved user experience.

## Technologies Used
- **ReactJS**: A JavaScript library for building user interfaces, used for creating reusable components and managing the app's state.
- **Vite**: A fast and modern build tool that improves the development and production build process.
- **Tailwind CSS**: A utility-first CSS framework used to style the app quickly and maintain a responsive layout.
- **React Router DOM**: For routing between the Home Page and Order List Page.
- **Framer Motion**: For smooth animations and transitions to enhance the user experience.
- **Recharts**: For creating interactive and customizable charts like bar graphs, line charts, and pie charts.
- **React-JVectorMap**: For adding interactive vector maps (used in the "Revenue by Location" section on the Home Page).

## Libraries Used
- **@react-jvectormap/core**: Provides the core functionality for the interactive map in the "Revenue by Location" section.
- **@react-jvectormap/world**: A library to render a world map with data-driven features.
- **clsx**: For conditionally applying CSS class names.
- **lucide-react and react icons**: A library for lightweight, customizable icons.
- **framer-motion**: Implements smooth and fluid animations throughout the app.
- **recharts**: A charting library for visualizing data in an interactive and responsive way.
- **react-router-dom**: Manages the navigation between different pages in the app.

## Project Setup

### 1. Clone the Repository
Clone this repository to your local machine using Git:
```bash
git clone https://github.com/DevWithGouse/juspay_assessment.git
```

### 2. Install Dependencies
Navigate to the project directory and install all the required dependencies:
```bash
cd juspay
npm install
```

### 3. Run the Application Locally
To run the development server, use the following command:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### 4. Build the Project for Production
To build the project for production:
```bash
npm run build
```

### 5. Preview the Production Build Locally
To preview the production build locally:
```bash
npm run preview
```

## Features and Functionality
- **Responsive Design**: The application adapts to different screen sizes, ensuring an optimal experience on all devices.
- **Data Visualizations**: The Home Page features interactive charts such as a bar graph, pie chart, and line chart, providing real-time insights into revenue and sales.
- **Interactive World Map**: Displays revenue by location using the React-JVectorMap library.
- **Order List Table**: The Order List Page features a table with sortable columns (Order ID, User, Project, etc.) and supports pagination, search, and sorting.
- **Dark and Light Themes**: Users can toggle between dark and light modes, making the app more user-friendly.
- **Navigation**: The sidebar offers access to various sections like Favorites, Recently, Order List, Dashboards, Projects, and more.

## Design Decisions
- **ReactJS and Vite**: React was chosen for its component-based architecture, making it easy to build a scalable and reusable app. Vite was selected for its fast development and build times, significantly improving the development workflow.
- **Tailwind CSS**: Tailwind CSS was used for its flexibility and ease of customizing styles, ensuring the app is responsive and visually appealing.
- **Framer Motion**: Smooth animations were added using Framer Motion to make the user experience more interactive and engaging.
- **React-JVectorMap**: A map was included to provide an interactive way to display geographic data, giving users a dynamic view of revenue by location.

## Challenges Faced
- **Responsive Layout**: Designing the application to be fully responsive was challenging, especially with the large number of components and visualizations. Tailwind CSS helped overcome this challenge with its responsive utilities.
- **Data Handling for Visualizations**: Ensuring the charts and maps performed well with dynamic data was a challenge, especially for larger datasets. Optimizations like lazy loading and performance tuning were implemented to mitigate this.
- **UI Animations**: Adding smooth animations without affecting performance required careful consideration of animation libraries, with Framer Motion being an optimal choice.



## Deployment
The project is deployed on [Vercel](https://vercel.com/). You can access the live version here:

[Live Demo](https://juspay-assessment.vercel.app/)

### Deployment Process:
1. Sign up or log in to [Vercel](https://vercel.com/).
2. Connect your GitHub repository to Vercel, and the platform will automatically deploy the app.
3. After deployment, Vercel provides a URL for your live application.

---
