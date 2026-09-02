import BottomNav from "./components/BottomNav";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div>
        

        <Outlet />

        <BottomNav />

      </div>
  )
}

export default App;
