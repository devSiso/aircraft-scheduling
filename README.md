# Front End Technical Assessment
A take home assessment designed for Front End developers

** Test Result README is right below asssessment's one; **

## Aircraft scheduling
Your group of friends have founded a very successful airline and now struggle to optimise utilisation of those expensive aircrafts across the hundreds of routes you have opened.

Your COO friend has slight control issues and doesn’t want a computer to do the scheduling unsupervised. So she asked you to design an intuitive and easy to use web app so she can do it herself in her spare time.

Those are the high level requirements:
* The app shows a list of all our aircrafts to choose from.
* The app shows a list of all the flights the airline plan to operate that day, their origin, destination, departure time and arrival time.
* The purpose of the app is to allow the user to view and edit the daily rotation for each aircraft:
    * The rotation is the list of flights, in order, an individual aircraft will operate during that day.
    * Flights must be chosen by the user from our list of flights (right sidebar on the wireframe).
    * The app lets the user edit the rotation freely but enforces the following rules:
		* All aircrafts must be on the ground at midnight.
		* The turnaround time (minimum time between the end of a flight and the beginning of the next one) is always 20min for our airline.
		* Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much!
* We operate one type of aircraft.
* As per aviation practice, all times are UTC (GMT), the app makes no use of local time. Airports are displayed using their four letter code.
* Utilisation: The app must display for each aircraft its utilisation in percent, i.e. the time the aircraft is on scheduled service per 24 hours (as opposed to sitting idle on the apron costing us money).
* Aircraft timeline: for the selected aircraft, a horizontal bar shows a period of 24 hours, scheduled service in green, turnaround time in purple, idle time in grey.

![image](https://user-images.githubusercontent.com/152380/51271642-fc120c80-19bf-11e9-8d08-468588aa6635.png)

### Usability goals
The app should make easy for the user to:
* Quickly create a correct rotation for an aircraft.
* Optimise the utilisation by seeing clearly if and when the selected aircraft is under-used.

### Simplification
A number of simplifications should be introduced for this initial implementation:
* Only one day worth of schedule can be entered (“tomorrow”).
* Only one aircraft is considered.
* Pushing the finished schedule to the back-end is not to be supported.
 
### Technical aspect
* Data is available in JSON format from the following REST end points:
	* Aircrafts: https://recruiting-assessment.alphasights.com/api/aircrafts and e.g. https://recruiting-assessment.alphasights.com/api/aircrafts/AS1001
	* Flights: https://recruiting-assessment.alphasights.com/api/flights and e.g. https://recruiting-assessment.alphasights.com/api/flights/AS1001
	
Departure/arrival times are expressed in _number of seconds past midnight_. For your convenience if needed, a readable version (as a string) is also provided by the API.

Please note while the use of the API is recommended, please feel free to get started using the attached two json files if it avoids spending too much time integrating the API.

### Getting started
In order to help you get started quickly, you can **optionally** use one of the following templates:

* React: use `yarn create react-app myname-aircraft-scheduling` (see https://facebook.github.io/create-react-app/) or use the template at https://github.com/alphasights/basic-app-react.
* EmberJS: use `ember new myname-aircraft-scheduling` (see https://guides.emberjs.com/release/getting-started/quick-start/).

Those templates, and their choice of tooling, are completely optional though and by no mean a recommendation, please feel to use whatever tool/language/framework you prefer!

### Evaluation
Your app will be evaluated with the following criteria, by decreasing level of importance:
* Functionality: the app fulfils the requirements, with no major bug.
* Maintainability: the code is clear and easy to work with.
* Usability: the user will be able to easily interact with the app, with minimal or no instruction.
* Visual design: the app is reasonably pleasing to the eye.

# Aircraft Scheduling (AlphaFlights)

To demonstrate my proficiency with **React** and its libraries, I intentionally added complexity to this application to ensure scalability.

For data management, I utilized **Redux** and **Redux Persist** to persist rotations and flights. I opted for the latest version of **Redux Toolkit** to create the entire data structure. I assumed that a flight is a unique entity, so if it's attached to a rotation, it will be removed from the flight list component and saved with Redux Persist as well. I also assumed that each aircraft has its own rotation.

This is a **single-page application**, and the layout is on the HomePage. However, I implemented **React Router** to create a scalable router structure. Currently, there are only Home, Documentation, and a generic Error page that renders if you access any invalid route.

To handle date formatting, I used **date-fns**. I imported fonts from **@fontsource**. I believed that the most crucial aspect of the assessment was the interpretation, logic, and code decisions. Therefore, I used **MaterialUI + styled-components** to build a visually appealing layout with less effort. However, it's not mobile-first, nor does it have a different layout for mobile/tablet. I only included the basics to keep the layout adaptable on different devices.

To demonstrate different ways to write styles, I did not follow a specific pattern. You'll find inline **CSS in JS**, **styled components** (in styles.js files), and **tag/class selectors** (using **BEMCSS**, inside styled components).

To handle errors when attaching a flight to a rotation, I implemented a **snackbar**. I kept the validation layer inside the flight card component as the rules were specific.

I used the provided boilerplate. For HTTP requests handling, I used the **JavaScript native fetch API**. I structured it using **JavaScript classes**, first creating an abstract class for API and extending it to create specific services.

I used a single file export for important folders like components to keep imports similar to **MaterialUI**. I chose not to use **TypeScript** or write **tests** due to concerns about the time required to deliver the assessment.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
