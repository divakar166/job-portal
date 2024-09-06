import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthProvider from './context/AuthContext';
import { DeveloperVerify, Login, Register } from './components/Auth';
import { HomePage, JobsPage, NotFoundPage} from './pages';
import { DeveloperProfile } from './components/Developer';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/developer/verify/:token" element={<DeveloperVerify />} />
        <Route path="/developer/profile" element={<DeveloperProfile />} />
      </Route>,
    ),
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
