# The Book Nook

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
<br />
<br />
[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [Description](#description)
2. [Motivation](#motivation)
3. [Key Technologies and Features](#key-technologies-and-features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Tests](#tests)
7. [Future Development](#future-development)
8. [Links](#links)
9. [Website images](#website-images)
10. [License](#license)
11. [Questions](#questions)
12. [Contributors](#contributors)


## Description

The Book Nook is an e-commerce personal book library that allows users to sign up and login to search for books and add them to their own 'book nook'. This allows the user to digitise their home book shelves, enabling them to view, on the app, which books they have in their book nook (bookmark with tick icon) and which books they would love to have (heart with tick icon).

## Motivation

Our motivation was always geared towards the reader and their needs. The app enables for the cataloguing of the readers books enabling them to view their collections / libraries at the touch a virtual button. As avid readers ourselves we know how frustrating other apps can be, over-complicating their interfaces, adding way too much. Our approach use the KISS principle (nothing to do with 70’s glam rock at all) Its just “Keep It Simple Sweetie". With just the fundamental needs it keep to minimal systems usage allowing even those with slightly older technologies to keep up-to-date without having to upgrade to newer tech.

## Key Technologies and Features

The application was developed utilising the following technologies.

* Developed using HTMLv5 / CSSv3 / Javascript with the addition of
* Context API (React v18.2.0)
* emailjs v3.10.0 - EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use one of our SDK libraries to trigger an email. [emailjs documentation](https://www.emailjs.com/docs/)
* Firebase v9.17.1 - [https://firebase.google.com/](https://firebase.google.com/)
* Firestore v3.8.3 (Firebase v9.17.1) - [https://firebase.google.com/docs/firestore](https://firebase.google.com/docs/firestore)
* Fontawesome v6.3.0 - [https://fontawesome.com/](https://fontawesome.com/)
* Framer Motion v9.0.4 - This allows elements to have additional animation. With this being a new technology, we opted for an effect that occurs on hover and when an element is tapped, so we applied this to our icons in the search library area. We did this so we could experiment with new technologies but also reduce the risk of creating errors or bugs.
* Google Books API v1 - [https://developers.google.com/books](https://developers.google.com/books)
* Holderjs v2.9.9 - [http://holderjs.com/](http://holderjs.com/)
* Node.js v18.14.1
* React v18.2.0
* React-Bootstrap v2.7.2 / Bootstrap v5.2.3 - [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)
* React-router-bootstrap v0.26.2
* React-router-dom v6.8.1
* React-social-icons v5.15.0 - [https://jaketrent.github.io/react-social-icons/](https://jaketrent.github.io/react-social-icons/)

## Installation
The project is developed using React
<br />
To install firstly clone the repository from [https://github.com/JonHarrison/the-book-nook](https://github.com/JonHarrison/the-book-nook) and then
```bash
npm install
```

## Usage
Run from a console using
```bash
npm start
```

Note, you will need your own .env file containing personal access tokens for Firebase, Firestore, Google Books API and EmailJS

### .env file template

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
REACT_APP_GOOGLE_BOOKS_API_KEY=
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

## Tests

This project includes unit tests written using the Jest framework, to run the tests use
```bash
npm test
```

## Future Development
* Add additional search and filter options to the search library.
* Allow the user to add their own book that isn’t in the API (author/title).​
* Enable users to track if they have read a book and how much of the book they have read.​
* Have functionality that allows users to add/contribute to a discussion page/review page/  or to rate the book.​
* Provide a page for a blog so that users can add comments to a blog/keep a blog about their reading.​
* If a user supplies their interests, the app theme tailors for that (e.g., changes colour for adventure or sci-fi interests).​
* Add an author link to search for books by the same author​
* Google Books offers a viewer API so the book could be read through the app​
* User Framer Motion in more advanced ways​

## Links

* [Link to our deployed app](https://subtle-pixie-c9439c.netlify.app)
* [The Book Nook PowerPoint.pdf](https://github.com/JonHarrison/the-book-nook/files/10817144/The.Book.Nook.PowerPoint.pdf)

## Website images

![FireShot Capture 001 - The Book Nook - subtle-pixie-c9439c netlify app](https://user-images.githubusercontent.com/115110121/220900288-825f4b60-ed92-43ef-b3df-183b3e7e1546.png)

![FireShot Capture 002 - The Book Nook - subtle-pixie-c9439c netlify app](https://user-images.githubusercontent.com/115110121/220900316-0016ffc0-7b17-4990-9420-4c161ae0243b.png)

![FireShot Capture 003 - The Book Nook - subtle-pixie-c9439c netlify app](https://user-images.githubusercontent.com/115110121/220900390-d5651a6e-80ef-4523-9879-b1c4e6a0aff7.png)

![FireShot Capture 004 - The Book Nook - subtle-pixie-c9439c netlify app](https://user-images.githubusercontent.com/115110121/220900429-059569b6-8b97-4528-a57b-3d7a00ce1664.png)

## License

This project is licensed under the MIT License

## Questions

If you have any questions, please contact us at :

* GitHub profile : [JonHarrison](https://github.com/JonHarrison)
* Email : [******](mailto:*****)
* LinkedIn : [******]()

## Contributors

[Jon](https://github.com/JonHarrison) / 
[Jade](https://github.com/JCourtney22) / 
[Iain](https://github.com/lokiheim) / 
[Ansar](https://github.com/ansarraja)
