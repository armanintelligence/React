import { ThemeProvider } from "./ThemeProvider.jsx";
import { useTheme } from "./theme.js";
import "./App.css";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeButton />
    </header>
  );
}

function Page() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <p>Welcome! Try switching themes.</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
