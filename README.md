# Questions

**1. Write a brief summary of what the React lifecycle is and how it works**
React Lifecycle is the process of creating a new React Component till its death.
There are 3 phases:

- Mounting
- Updating
- Unmounting

Prior to React 16.8, if we use Class style, we would define class methods like `componentDidMount`, `componentDidUpdate`, `shouldComponentUpdate`...
If we use React hooks (Available from React 16.8), we would use hooks like `useEffect`, `useMemo`, `useState`,... to access React lifecycle

**2. Write a brief summary of what Redux is and how it might be integrated into an app**
Redux is a standalone state management library, it's core pattern is based on Flux. It can be integrated to React by using libraries like `react-redux`, `redux-toolkit`, `redux-sage`, `easy-peasy`...

**3. Write a brief summary of what unit testing or smoke testing is and why it's useful**
Unit testing is the process of checking correctness of small pieces of code, can be written with libraries like Jest, Mocha,... This is a type of **automation testing**.

Smoke testing is the process of **manual testing** deployed softwares to check if it is stable or not. We should have a checklist, consists of use cases and expected behaviors, and test on QA environment. (Oftenly defined by QA/QC team)

It's helpful because we can save our efforts on verifying or detecting errors everytime the codebase is changed. Resulting in less bugs and happier clients

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
