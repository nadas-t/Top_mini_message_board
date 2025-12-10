# Mini Message Board

A simple message board application built with Node.js and Express as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) curriculum.

## Description

This project is a basic CRUD application that allows users to post and view messages on a message board. It demonstrates fundamental concepts of server-side web development including routing, templating with EJS, and handling form submissions.

## Features

- View all messages on the home page
- Add new messages with username and text
- View individual message details
- Timestamps for each message
- Clean and simple user interface

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nadas-t/Top_mini_message_board.git
cd Top_mini_message_board
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## Project Structure

```
Top_mini_message_board/
├── app.js              # Main application file
├── package.json        # Project dependencies
├── controllers/        # Controller logic
├── errors/            # Error handling
├── public/            # Static files (CSS, images)
├── routes/            # Route definitions
│   └── index.js       # Main routes
└── views/             # EJS templates
    ├── form.ejs       # Form template
    ├── index.ejs      # Home page
    ├── message.ejs    # Individual message view
    └── new.ejs        # New message page
```

## Usage

1. **View Messages**: The home page displays all posted messages
2. **Add New Message**: Click the "Add New Message" button to post a new message
3. **View Message Details**: Click "View Message" on any message to see its details

## Learning Outcomes

This project helped practice:

- Setting up an Express.js server
- Creating and using routes
- Rendering dynamic content with EJS templates
- Handling GET and POST requests
- Working with form data
- URL parameters for individual resource views

## Acknowledgments

- Project from [The Odin Project](https://www.theodinproject.com/)
- Lesson: [Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)
