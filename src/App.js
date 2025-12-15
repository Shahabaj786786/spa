import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ETPOSDashboard from "./ETPOSDashboard";
import AddUser from "./components/AddUser";
import UserManagement from "./components/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ETPOSDashboard />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="users/add" element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
