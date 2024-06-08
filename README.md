# Messenger Clone

Messenger Clone is a web application built with Next.js and TypeScript that replicates the features of Facebook Messenger. This project leverages modern web technologies to provide real-time messaging, authentication, and database management.

## Features

- Real-time messaging using Pusher.js
- Authentication with Next Auth
- Data storage with MongoDB
- Simplified database connection with Prisma ORM
- Modern UI components using Headless UI

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Superset of JavaScript that adds static types
- **Headless UI**: Unstyled, fully accessible UI components
- **Pusher.js**: Real-time communication and notifications
- **Next Auth**: Authentication for Next.js applications
- **MongoDB**: NoSQL database for data storage
- **Prisma ORM**: Type-safe database client

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database instance

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abeertech01/messenger-clone.git
    cd messenger-clone
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_PUSHER_APP_KEY=your_pusher_app_key
    PUSHER_APP_SECRET=your_pusher_app_secret
    MONGODB_URI=your_mongodb_uri
    NEXTAUTH_URL=your_nextauth_url
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Sign up or log in using your credentials.
2. Start messaging in real-time with other users.

## Live Demo

Check out the live project [here](https://messenger-clone-teal.vercel.app).

## Repository

The source code is available on GitHub: [Messenger Clone Repository](https://github.com/abeertech01/messenger-clone).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
