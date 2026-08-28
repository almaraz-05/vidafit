import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div>
        <Header />

        <Outlet />

        <BottomNav />

      </div>
  )
}

export default App;
