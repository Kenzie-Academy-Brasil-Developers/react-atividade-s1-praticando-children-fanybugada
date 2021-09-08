import logo from "./logo.svg";
import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <CenteredCard children="Children 1"></CenteredCard>
      <CenteredCard children="Children 2"></CenteredCard>
      <CenteredCard children="Children 3"></CenteredCard>
    </div>
  );
}

export default App;
