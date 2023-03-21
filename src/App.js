import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicComponent from "./pages/DynamicComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DynamicComponent />} />
        <Route exact path="/:routeName" element={<DynamicComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
