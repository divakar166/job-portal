import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import { CompanyLoginPage, DeveloperLoginPage } from "./components/Login";
import { CompanyRegisterPage, DevRegisterPage } from "./components/Register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/company/login" element={<CompanyLoginPage />} />
        <Route path="/auth/dev/login" element={<DeveloperLoginPage />} />
        <Route
          path="/auth/company/register"
          element={<CompanyRegisterPage />}
        />
        <Route path="/auth/dev/register" element={<DevRegisterPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
