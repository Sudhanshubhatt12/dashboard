import "./App.css";
import Sidebar from "./component/Sidebar";
import { Routes, Route, Navigate} from "react-router-dom";
import useAuth from "./component/UseAuth";
import Loginform from "./component/Loginform";
import Mail from "./component/mail/Mail";

function RequireAuth({ children }) {
  const { authed } = useAuth();

  return authed === true ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route
          path="/Mail"
          element={
            <RequireAuth>
              <Mail />
             </RequireAuth> 
          }
        />
        <Route path="/Loginform" element={<Loginform />} />
      </Routes>
    </>
  );
}

export default App;
