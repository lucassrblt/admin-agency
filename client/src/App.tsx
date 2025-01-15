import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./views/Dashboard";
import Connexion from "./views/Connexion";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import GlobalLayout from "./layout/GlobalLayout";
import { AlertProvider } from "./context/AlertContext";
import Edit from "./views/Edit";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route
              path="/connexion"
              element={<GlobalLayout children={<Connexion />} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/annonce" element={<Edit />} />
            <Route path="/annonce/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default App;
