**PROJECT DESCRIPTION**

In this project I developed a Full-Stack AI-Integrate Challenge Platform that generates coding challenges.
Each challenge is personalized and has a difficulty setting.
Users can log-into their account where it will appear their history of the challenges.
The login is protected by Clerk, that also links the user sessions and the data persistence tracking the challenges.

---

**ABOUT THE PROJECT**

By implementing an AI pipeline in the project, I did not need to build a database, as ChatGPT would just geneerate it dynamically. There is asynchronous communication between third-party services and the server that I created, using Clerk and OpenAI, through the webhooks.

In the frontend, I created a directory-based component structure, as well as, implementing the authentication status by protecting the routes at a granular level.

---

**TECH STACK:**

*In the backend:*

FastAPI,

Uvicorn to run the FastAPI,

SQLAlchemy,

Python-Dotenv for managing the environment variables.
  
*In the frontend:*

React (Vite) for the User Interface,

Clerk React SDK that manages the authentication and the UI for sign-in/sign-up,

Tailwind CSS for the layout.

---

**FEATURES & SECURITY:**

Full-Stack Auth - Session managed using Clerk on client and server.
  
Database - The data storage for the number of challenges, the difficulty chose, the answer given and the correction.
  
The API keys that were stored in the .env files were excluded from version control in PyCharm using the .gitignore
  
CORSMiddleware - By using this I ensured that the API only accepts the requests from the frontend domains.

---

**PROJECT FILES EXPLANATION:**

*BACKEND:*

ai_generator.py - Contains the logic to communicate with OpenAI API to generate the challenges

webhooks.py - sync file with Clerk Authentication keeping it linked

challenge.py - Handles the challenges like the answers and the difficulty setting.

app.py - Used as the main

utils.py - Contains reusable code bits

server.py - This is the entry point of the API and enables CORSMiddleware, integrates Clerk, and connects with React from the Frontend

models.py - It uses SQLAlchemy ORM to define the challenges

database.py - Connects python code to the SQL database

.env - Contains the Clerk Security Key. This file was excluded from GitHub for security reasons.

pyproject.toml - Here I list the libraries required to run the backend.

*FRONTEND:*

ClerkProviderWithRoutes.jsx - Protects the navigation by wrapping it.

AuthenticationPage.jsx - UI for login and sign-up

ChallengeGenerator.jsx - Interface where users interact wih the challenge

MCQChallenge.jsx - Displays the Multiple Choice Questions

HistoryPanel.jsx - Shows the user's past attemps and challenges

Layout.jsx - Contains the navigation bar and footer through the different pages

api.js - Fetch configuration that make requests to server.py
  
main.jsx - Wraps the entire app in the ClerkProvider
  
App.jsx - I use the Clerk UI components using the <SignedIn> and <SignedOut>

---

**CHALLENGES PROGRESS AND EVOLUTION:**

Firstly, for setting up the environment, I used uv for installing libraries like Clerk and SQLAlchemy, and making it  align to the Python Interpreter in PyCharm.

For Clerk I splitted the credentials, using the Publishable Key in the frontend and keeping the Secret Key in the backend.

In the backend logic, I experienced failing in Uvicorn, because it was looking for main.py instead of the name of my file: server.py.

Finally, I added to the .gitignore file all the data is not going to leak on GitHub.
