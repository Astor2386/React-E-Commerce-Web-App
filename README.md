# React E-Commerce Web App

A TypeScript-powered e-commerce web application built with React, Redux Toolkit for state management, React Query for server-side data fetching, and Bootstrap for responsive UI.
This app simulates an online store using the FakeStoreAPI, allowing users to browse products, manage a shopping cart, and simulate checkouts.

## Features
- **Product Catalog**:
  - **Product Listing**: Displays all products with title, price, category, description, rating, and image, fetched using React Query from the FakeStoreAPI.
  - **Category Navigation**: Includes a dynamic dropdown to filter products by category, populated and updated via React Query.
  - **Add to Cart**: Allows users to add products to their shopping cart with a single click from the product listing.

- **Shopping Cart**:
  - **Cart Management**: View and manage cart items, including title, image, quantity, and price, with options to remove items.
  - **Real-Time Totals**: Displays the total number of items and total price, updated dynamically as items are added or removed.
  - **Persistence**: Stores cart data in `sessionStorage` for continuity across page reloads.
  - **Checkout**: Simulates a checkout process by clearing the cart and `sessionStorage`, with visual feedback.

- **Responsive Design**: Utilizes Bootstrap for a mobile-friendly and visually appealing interface.

## Setup Instructions

1. Clone the Repository
```Command Prompt
git clone <(https://github.com/Astor2386/React-E-Commerce-Web-App.git)>
cd e-commerce-app

2. Install Dependencies
This installs React, TypeScript, Redux Toolkit, React Query, Axios, React Bootstrap, and other dependencies listed in package.json.

3. Run the Application
''' Command Prompt
npm run dev
--------
Open http://localhost:5173 in your browser to access the app.

The Vite development server will automatically reload on code changes.
---------

Installation
The project uses Vite as the build tool, with all dependencies managed via package.json, so the install above will take care of all that.

No additional configuration is required beyond the setup steps.
The app relies on the FakeStoreAPI (https://fakestoreapi.com/) for product data, which requires no setup.

Usage
Browse Products:
Upon loading, the home page displays a list of products.

Use the category dropdown to filter products by category (e.g., "electronics", "jewelery").

Add to Cart:
Click the "Add to Cart" button on any product to add it to your shopping cart.

The cart updates instantly, and the total items/price reflect the change.

Manage Cart:
Navigate to the shopping cart section to view added items.

Click "Remove" to delete an item from the cart.

The total items and price update in Real-Time.

Checkout:
Click "Checkout" to simulate a purchase.

The cart clears, sessionStorage is reset, and a success message appears.

Double check:
Reload the page to verify that the cart persists via sessionStorage.

Clear the cart manually or via checkout to start fresh.

Tech Stack
React: Frontend framework for building the UI.

TypeScript: Adds static typing for enhanced development experience.

Redux Toolkit: Manages shopping cart state with actions, reducers, and slices.

React Query: Handles server-side data fetching and caching from FakeStoreAPI.

Axios: Facilitates HTTP requests to the API.

React Bootstrap: Provides responsive and styled UI components.

Vite: Fast build tool for development and production.

CSS: Custom styles in App.css for layout and design.

Project Structure:

e-commerce-app/
* src/
* components/          # Reusable UI components (e.g., ProductList, ShoppingCart)
* redux/              # Redux store and slices (e.g., store.ts, cartSlice.ts)
* types/              # TypeScript interfaces (e.g., types.ts)
* App.tsx             # Main app component
* main.tsx            # Entry point with Redux and React Query providers
* App.css             # Global styles
* package.json            # Dependencies and scripts
* tsconfig.json           # TypeScript configuration
* vite.config.ts          # Vite configuration

----------------------------------------------
Components: Encapsulate UI logic and interact with Redux/React Query.

Redux: Manages cart state with a centralized store and slice.

Types: Defines TypeScript interfaces for data structures.

Special Notes:
- ReadMe was removed from the Root file, and placed in the repository.
- Everything should update in real time as you click purchase and remove, as far as products and the math calculations.
- All dependencies will be installed with the npm install command via the package.json
- App will link to (https://fakestoreapi.com/) for product data, which requires no local setup.
- Enjoy! -Tony Adreani


 






