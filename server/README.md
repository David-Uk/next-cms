Backend
=======

### Requirements

To setup the backend, you need the following

*   Node.js 16 and above. Download [here](https://nodejs.org/en/download/)
*   MongoDB. Get installer [here](https://www.mongodb.com/try/download/community) or get cloud service [here](https://www.mongodb.com/atlas/database)
*   Sendgrid Email API key. Get [here](https://sendgrid.com/)
*   Git. Download [here](https://git-scm.com/download/)
*   Code editor e.g. VS Code. Download [here](https://code.visualstudio.com/download)
*   A CLI tool e.g. bash, zsh(Linux and Mac), powershell, cmd (Windows)

### How to run the app

To use this app, first install all the requirements.  
Navigate to the root folder of the app  
Then open a terminal window in the directory of the app  
Run npm install to install all dependencies  
Setup a .env file in the root folder and fill in the following information  

*   DATABASE=link to mongodb database url
*   JWT\_SECRET=any random string of characters
*   SENDGRID\_KEY=api key from sendgrid
*   EMAIL\_FROM=email sender address

After setting this up, run npm start to start the app