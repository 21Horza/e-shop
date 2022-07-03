import "./styles/DarkTheme.css"
import "./styles/Global.module.css"
import AppRouter from "./routes/AppRouter"
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <div className="app dark">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
