# Doctor Finder - Skye Nguyen

#### Epicodus Independent Project - Advanced JavaScript Week 2 - 10/19/2018.

## Description

As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. This is a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in _Seattle_ who can treat their medical issue.

This website uses BetterDoctorAPI.

## Test Driven Development Specs

- A user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fit the search query.
- A user should be able to to enter a name to receive a list of doctors in the Seaattle area that fit the search query.
- If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.
- If the API call results in an error, the application should return a notification that states what the error is.
- If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria.

## Obtaining API Key

Please note that you must provide your own API key to continue developing/experimenthing with this project. Here are the steps to do so:

1. Go to [https://developer.betterdoctor.com/](BetterDoctorAPI) and hit "Get a free API Key"

2. Create a .env (environment variables) file at the top level of the directory with the following content:

    `API_KEY = [YOUR-KEY-GOES-HERE]`
3. Add the .env file to you .gitignore to protect your API Key.

4. Setup the dotenv dependency in your project:
   `npm install dotenv-webpack --save-dev`

5. Add this to your webpack.config.js: 
>
    ...
    const Dotenv = require('dotenv-webpack');

    module.exports = {
    ...
        plugins: [
            ...
            new Dotenv()
        ],
        ...
        }
    };
6. To access environmental variables in our application:
    `process.env.API_KEY`

## Setup/Installation Requirements

1. Clone this repository:

```
    $ git clone https://github.com/sn31/doctor-app.git
```

2. Change into the work directory:

```
    $ cd doctor-app
```

3. Install dependencies:

```
    $ npm install
```

4. To build the program:

```
    $ npm run build
```

5. To start the development server on localhost:8080:

```
    $ npm run start
```

6. To run the tests using Karmin on localhost:9876:

```
    $ npm test
```

## Known Bugs

## Support and contact details

Please contact us at skye@dames.es for more information and/or feedback.

## Technologies Used

- JavaScript
- npm
- Karmin & Jasmine
- BetterDoctorAPI
- Git
- GitHub

### License: MIT

#### Copyright (c) 2018 Skye Nguyen
