import { Route, Routes } from "react-router-dom";
import BarberShop from "./pages/barberShop/BarberShop";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BarberShop />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
