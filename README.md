# WanderLUST - Hotel Management Project

WanderLUST is a comprehensive hotel management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides hotel owners with a platform to manage their properties and customers with the ability to view hotel listings, leave reviews, and make bookings.

## Below Here Are Some Photographs Of The Website
- Here is the main page of the website , shows the listing items (hotels) and the navbar design .Added feature -> An advanced Search Engine Bar , where you can search hotels/rooms based on your own desired requirements .

![Screenshot (281)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/cd2be17c-8b26-44bf-9658-23f16ce24081)


- When a listing item is clicked , it pop out the overall features it provide and its descripton .
 
![Screenshot (285)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/b582950c-d610-4974-8a2b-fa58a28df3bf)


- Here I have added a mapping feature using mapbox api to provide a approx near about destination of any listing item .

![Screenshot (286)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/1cb1fbc1-497d-4692-bc48-d4de20765e2b)


- Here i centralised the user to add their reviews based on their experience .

![Screenshot (287)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/577643d4-6799-4bc0-a479-59fffc8a8f51)


- Shows a page on website how the reviews of users are presented , and added feature -> The creater of the review can edit or delete their reviews if needed .

![Screenshot (288)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/552fec2b-4fa0-4407-80bc-969b2ae4aa65)


- At the end , here it is the footer which contains the owner's profiles and privacy , terms and conditions
 and company's encrypted details .
 
![Screenshot (284)](https://github.com/Ashis-Mishra07/Deploy/assets/137470813/fe3ae2e8-865b-4594-907f-cbc094fd8f02)


## Key Features

- **User Authentication and Authorization**: Secure authentication and authorization using JSON Web Tokens (JWT) and bcrypt for password hashing.

- **Hotel Listing View**: Dynamic and interactive user interface to browse through available hotels, view detailed information, including images, descriptions, amenities, and pricing.

- **Review System**: Integration of a review system allowing authenticated users to leave feedback and ratings for hotels they have stayed at.

- **Location Services**: Utilization of geolocation services to display hotel locations on a map interface, helping users make informed decisions.

- **Listing Management**: Functionality for hotel owners to add new listings, edit existing ones, and manage their properties through an intuitive dashboard.

## Technology Stack

- **MongoDB**: Database management system to store hotel listings, user information, reviews, and authentication tokens.

- **Express.js**: Backend server framework to handle HTTP requests, manage routes, and interact with the MongoDB database.

- **React.js**: Frontend library for building dynamic and responsive user interfaces, providing an engaging user experience.

- **Node.js**: Runtime environment for the backend server, enabling efficient handling of I/O operations and concurrent requests.

- **JWT Authentication**: Implementation of JSON Web Token (JWT) authentication to secure routes and validate user access based on authentication status and user roles.

## Getting Started

Follow these steps to set up and run the Wanderliust project locally:

1. **Clone the Repository**: Clone the Wanderliust repository to your local machine using the following command:

   1st : Download zip file  
   2nd : Right click on zip folder then click Extract all  
   3rd : Open Deploy folder in vscode

2. **Install Dependencies**: Navigate to the project directory and install backend and frontend dependencies:

   4th : Install all packages - Type command in terminal -> npm i

4. **Environment Variables**: Create a `.env` file in the `backend` directory and add the required environment variables, including database connection string, JWT secret, etc

   5th : Data initialize - Type command in terminal -> node init/index.js

6. **Run the Development Server**: Start the backend and frontend development servers:

    6th : Run server - Type command in terminal -> node app.js

7. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the Wanderliust application.


## Contributing

Contributions are welcome! Feel free to open issues for any bugs or feature requests. Pull requests are also appreciated.

## Acknowledgements

- This project was inspired by the need for a comprehensive hotel management system.
- Special thanks to the MERN stack community for their valuable resources and documentation.

