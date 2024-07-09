import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Candidates from "./admin/Candidates";
import ProtectedRoute from "./lib/Protected-Route";
import AuthProvider from "./providers/AuthProvider";
import Dashboard from "./admin/dashboard";
import AdminLayout from "./layout/adminLayout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
          </Route>

          {/* Admin layout -> private routes */}
          <Route path="/" element={<AdminLayout />}>
            <Route
              path="/admin"
              element={<ProtectedRoute allowedRoles={["company"]} />}
            >
              <Route path="candidates" element={<Candidates />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
