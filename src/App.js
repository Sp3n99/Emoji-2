import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Topbar from "./components/Topbar";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
