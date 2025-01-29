import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./views/Dashboard";
import Connexion from "./views/Connexion";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { AlertProvider } from "./context/AlertContext";
import Edit from "./views/Edit";
import AdminLayout from "./layout/AdminLayout";
import Profile from "./views/Profile";
import AuthLayout from "./layout/AuthLayout";
import Company from "./views/get-started/Company";
import { LandingPage } from "./views/LandingPage";
import RequireAuth from "@/middleware/RequireAuth";
import AdminAccount from "./views/get-started/AdminAccount";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route
              path="/"
              element={<AuthLayout children={<LandingPage />} />}
            />
            <Route
              path="/connexion"
              element={<AuthLayout children={<Connexion />} />}
            />
            <Route path="get-started">
              <Route
                path="company"
                element={<AuthLayout children={<Company />} />}
              />
              <Route
                path="admin"
                element={<AuthLayout children={<AdminAccount />} />}
              />
            </Route>

            {/* All routes that require authentication */}
            <Route element={<RequireAuth />}>
              <Route
                path="/dashboard"
                element={<AdminLayout children={<Dashboard />} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/annonce"
                element={<AdminLayout children={<Edit />} />}
              />
              <Route
                path="/annonce/:id"
                element={<AdminLayout children={<Edit />} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default App;
