# 🌐 Energy Dashboard

A simple project built with **React** to visualize charts related to the UK's energy mix. It displays data such as energy types and their contribution percentages. The design includes a default dark mode with a toggle for light mode.

You can test it here! https://energy-dashboard-sermedina.netlify.app/

---

## 📊 Features

- Interactive charts to visualize the energy mix.
- Charts generated using **ApexCharts**.
- Dynamic data fetched from https://api.carbonintensity.org.uk/generation.
- Toggle between **dark mode** and **light mode**.
- Themes synchronized with `localStorage` to persist the interface state.

---

## 🚀 Technologies Used

- [**React**](https://reactjs.org/): Main framework for building the UI.
- [**TypeScript**](https://www.typescriptlang.org/): Used to ensure static typing and greater robustness in the code.
- [**Tailwind CSS**](https://tailwindcss.com/): Framework for fast and customizable styling.
- [**ApexCharts**](https://apexcharts.com/): Library for interactive charts.
- [**React Testing Library**]:(https://testing-library.com/docs/react-testing-library/intro/): Unit and functional testing.
- [**Jest**](https://jestjs.io/): Framework used for unit and integral tests.


---

## 🛠 Installation and Usage

Follow the steps below to clone and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/avify-takehome.git
cd avify-takehome

```
2. Install Dependencies
Ensure you have Node.js installed, then run:

```bash
npm install
```
3. Run in Development Mode
```bash
npm start
```

The project will be available at http://localhost:3000.

🧪 Run Tests
This project includes unit tests to ensure the functionality of the charts and theme toggle. To execute them:

```bash
npm test
```
🌟 Main Features

Charts
Chart Types: Includes area, bar, line and donut charts for better data representation.
Dynamic Data: Data is fetched from API https://api.carbonintensity.org.uk/generation and rendered in real-time.
Theme Toggle
Default Dark Mode.
A toggle button to switch between light and dark modes.
Theme persistence using localStorage.
Simulated Data
The energy mix includes:

Types of energy such as solar, wind, and gas.
Contribution percentage for each type.



