# Aircraft Scheduling (AlphaFlights)

To demonstrate my proficiency with **React** and its libraries, I intentionally added complexity to this application to ensure scalability.

For data management, I utilized **Redux** and **Redux Persist** to persist rotations and flights. I opted for the latest version of **Redux Toolkit** to create the entire data structure. I assumed that a flight is a unique entity, so if it's attached to a rotation, it will be removed from the flight list component and saved with Redux Persist as well. I also assumed that each aircraft has its own rotation.

This is a **single-page application**, and the layout is on the HomePage. However, I implemented **React Router** to create a scalable router structure. Currently, there are only Home, Documentation, and a generic Error page that renders if you access any invalid route.

To handle date formatting, I used **date-fns**. I imported fonts from **@fontsource**. I believed that the most crucial aspect of the assessment was the interpretation, logic, and code decisions. Therefore, I used **MaterialUI + styled-components** to build a visually appealing layout with less effort. However, it's not mobile-first, nor does it have a different layout for mobile/tablet. I only included the basics to keep the layout adaptable on different devices.

To demonstrate different ways to write styles, I did not follow a specific pattern. You'll find inline **CSS in JS**, **styled components** (in styles.js files), and **tag/class selectors** (using **BEMCSS**, inside styled components).

To handle errors when attaching a flight to a rotation, I implemented a **snackbar**. I kept the validation layer inside the flight card component as the rules were specific.

I used the provided boilerplate. For HTTP requests handling, I used the **JavaScript native fetch API**. I structured it using **JavaScript classes**, first creating an abstract class for API and extending it to create specific services.

I used a single file export for important folders like components to keep imports similar to **MaterialUI**. I chose not to use **TypeScript** or write **tests** due to concerns about the time required to deliver the assessment.

## Instalation

Running project locally:

```bash
    node 12+

  npm install
  npm run start
```