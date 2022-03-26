import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* home  */}

      <Home />
    </div>
  );
}

export default App;
