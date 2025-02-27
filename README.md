# investment-app

Simulates the development of an investment over time based on user-provided parameters, practice essentials and signals

## Project Structure

```
src/app
│
├── header/ # responsible for application header
│ ├── header.component.css
│ ├── header.component.html
│ └── header.component.ts
│
├── investment-results/ # responsible for results display
│ ├── investment-results.component.css
│ ├── investment-results.component.html
│ └── investment-results.component.ts
│
├── user-input/ # responsible for handling user input data
│ ├── user-input.component.css
│ ├── user-input.component.html
│ ├── user-input.component.ts
│ └── user-input.module.ts
│
├── app.component.html # Template that orchestrates components
├── app.component.ts # Root component logic
├── app.module.ts # Root module of Angular application
│
├── investment-input.model.ts # Model for input data
├── investment.service.ts # Service for investment calculator logic
│
├── index.html # Landing page
├── main.ts # Boostrap Angular
│
└── styles.css # Global styles
```

## Installation

Use the package manager [npm](https://www.npmjs.com/) and start app

```gitbash
npm install
```

## Usage

```gitbash
npm start
```

1. Open in your browser http://localhost:4200/
2. Input data
3. Press "CALCULATE" button

## License

[MIT](https://choosealicense.com/licenses/mit/)

<p align="center">
  <img src="https://i.imgur.com/WJKi0EV.png" alt="Practice - calculator - app"/>
</p>
