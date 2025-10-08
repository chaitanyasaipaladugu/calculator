# Calculator (React + Redux Toolkit)

Simple calculator with input, basic operations, and a history of evaluated expressions. Built with React, Redux Toolkit, and Create React App.

## Features

- Digits and operators: `0–9`, `.`, `+`, `-`, `*`, `/`
- Evaluate expression with `=`
- Edit helpers: `DEL` (backspace) and `CLEAR`
- Calculation history list stored in Redux state

## Tech Stack

- React
- Redux Toolkit + React Redux
- Create React App (react-scripts)

## Getting Started

Requirements: Node.js (LTS recommended) and npm.

1. Install dependencies

```bash
cd calculator
npm install
# If you see missing peer deps for Redux tooling:
npm install @reduxjs/toolkit react-redux
```

2. Start the dev server

```bash
npm start
```

Then open `http://localhost:3000`.

## Scripts

- `npm start`: run development server
- `npm run build`: production build to `build/`
- `npm test`: run tests (if any)
- `npm run eject`: expose CRA config (irreversible)

## Project Structure

```
calculator/
  src/
    components/
      Calculator.js      # UI and interactions
      HistoryList.js     # Displays calculation history
    redux/
      CalculatorSlice.js # Redux slice (state + reducers)
      store.js           # Store configuration
    App.js               # App composition
    index.js             # Entry with Provider
```

## State Shape

```js
// state.calculator
{
  display: string,
  history: string[] // e.g. ["1+2=3", "3*4=12"]
}
```

Reducers (actions): `appendValue`, `deleteLast`, `clearDisplay`, `calculateResult`.

## How It Works

- UI dispatches `appendValue` for button presses; `=` triggers `calculateResult`.
- `calculateResult` evaluates the expression and appends a "expr=result" entry to history.
- `HistoryList` reads `state.calculator.history` and renders items.

Note: Expression evaluation currently uses `eval` on the UI-generated string. Inputs are constrained to calculator buttons.

## Troubleshooting

- Blank screen or crash:
  - Open browser devtools console and read the error.
  - Ensure `index.js` wraps `<App />` with `<Provider store={store}>`.
  - Ensure `HistoryList` selects `state.calculator.history`.
  - Install missing dependencies: `npm install @reduxjs/toolkit react-redux`.
  - Restart dev server after dependency changes.

## License

MIT
