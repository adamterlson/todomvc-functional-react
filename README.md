# Functional React App Design

[See my presentation](https://slides.com/adamterlson/thinking-functionally-in-react) which includes diagrams for how the codebase is put together.  Pretty diagrams.

## To start:
```
npm install
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Presentational Component Guidelines
* Start low
* Don't make any feature available you're not presently using.
* Style with props.  Imagine an API where you had to pass in special deep objects!  Also knowing which component to apply particular style attributes to would be practically impossible.
* Keep props flat
* Don't change a prop name if you don't have to.
* Unless combining multiple components together, don't stop props from flowing downward
* Don't introduce semantics.  If you do, use schema.org.

## HOC guidelines
* Attach HOC's at the lowest level possible
* Write them to be "prop agnostic" meaning they can operate on "onChange" or "onMyEvent" based on options passed into them
* Leverage propType validations if they require certain props to be available.
* Do not modify UI by wrapping your component with some other presentation.  Instead, define a render method in your presentational component and modify it in the HOC

## Connected guidelines
* Name your connected components via the presentational component: "ButtonSendMessage".  This makes searching for things really easy (e.g. CMD+P "button" will reveal the presentation for button and all features using a button)
* Use compose.  It makes things much easier to read.
* Remember propTypes yourself.  Eslint won't remind you
