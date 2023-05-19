# Pokedex

A pretty crusty Pokedex.

## Get up and running

This was bootstrapped with Create React App, the original README for which is at the bottom of this document.

Simply `npm install` in the project root directory, and then `npm start`.

## Using the Pokedex

Type into the search input the name of the Pokemon for which you are searching. When a valid Pokemon name is entered, you are treated to info about them such as their abilities, weight, species, and an adorable image.

The search input will suggest names as you type. The more you type, the more accurate the suggestions. If you wish, you can mouse-click or keyboard navigate to a suggestion + hit Enter.

When you find a pokemon, it is added the top of the Previously Searched list, which you find at the bottom of the page. This list is capped at 50 entries, but this is an arbitary limit.

I hope this Pokedex leads to you dominating your battles and brings you wild wealth and good fortune. 

## Implementation Notes

If given more time, here are some items I would address:

* Lack of test coverage. 
* [Redux Toolkit](https://redux-toolkit.js.org/) is not something I was familiar with, and I didn't think it was prudent to try and learn it's patterns while getting this project done in time. The Toolkit looks fantastic, far more declarative and producing more readable code. The Pokedex implementation uses Redux patterns that are rote by comparison. Assuming further development of state-heavy features, migrating to Toolkit would be worthwhile.
* I employed a couple `any`s when setting up the Redux store, intending to return and setup some generic-oriented solution, but did not. It's in `index.tsx`. 
* Related to the top two bullets, Redux `createStore` is deprecated in favor of Redux Toolkit's implementation, so I'd like to get that out of there (again in `index.tsx`).
* While pokemon data is stored in Redux, it is fetched in the Component. Intention was to move to thunks after the fact, but did not get to it. Again, looking at the advantages of Redux toolkit (which among other things helps you with loading states), it makes sense to convert that first.
* All pokemon names are pre-loaded with a single request at startup, this is so the app can provide suggestions as you type. The [<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) element was used here because it's fast and cheap and required almost zero config. It's ugly (especially on Chrome) and not a great UX, so next step would be some thing like React Select, or something custom if the market demands it.
* Search text is not trimmed, so while `      pikachu` will not find Pikachu (although Pikachu will come up as a search suggestion which can be clicked). Trimming the input is an easy improvement.
* The app is running in React Strict Mode for better warning/error feedback, a side effect is that the app mounts twice. It's not visibly noticeable, but I'd like to get it running for a production environment.
* Saved searches, which are at the bottom of the page, should be better positioned. Ideally these could be in they're own group in the search suggestion dropdown.
* Finally, yes, it's completely un-styled and could use some visual structure and shine.

## Regarding Concurrency 

While the search (more of a filter, really) only really gets to work which the user enter's a valid Pokemon name, each keystroke in the search field potentiates actions that block higher-priority renders. UI'm aware of two methods available, `useDeferredValue` and `startTransition`, the idea being that used around search input state updates will ensure deference to higher-priority updates. I will come clean here, I'm unequipt to go into the detailed differences of each approach.

-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
