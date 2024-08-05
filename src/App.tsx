import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Layout from "./Layout";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from "./pages/LoginPage";
import { ForgotPasswordPage } from "./pages/ForgotPassword";
import { ResetPasswordPage } from "./pages/ResetPassword";
import { OnboardingPage } from "./pages/Onboarding";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { AboutPage } from './pages/AboutPage';
import { CleanEnergyPage } from './pages/CleanEnergyPage';
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { OrderHistoryPage } from "./pages/OrderHistoryPage";
import { OrderTrackingPage } from "./pages/OrderTrackingPage";
import { CartPage } from "./pages/CartPage";
import ProfileManagement from "./pages/ProfileManagement/index.tsx";
import PersonalInfo from "./pages/ProfileManagement/PersonalInfo.tsx";
import Credentials from "./pages/ProfileManagement/Credentials.tsx";
import FarmDetails from "./pages/ProfileManagement/FarmDetails.tsx";
import Notifications from "./pages/ProfileManagement/Notifications.tsx";
import AdminDashboard from "./pages/AdminDashboard/index.tsx";
import Dashboard from "./pages/AdminDashboard/Dashboard.tsx";
import Products from "./pages/AdminDashboard/Products.tsx";
import AdminOrderPage from "./pages/AdminDashboard/Order.tsx";
import AdminDeliveryPage from "./pages/AdminDashboard/Delivery.tsx";
import Content from "./pages/AdminDashboard/Content.tsx";
import Status from "./pages/AdminDashboard/Status.tsx";
import Users from "./pages/AdminDashboard/Users.tsx";

import FarmerDashboard from "./pages/FarmerDashboard/index.tsx";
import FarmerDashboardIndex from "./pages/FarmerDashboard/Dashboard.tsx";
import FarmerOrderPage from "./pages/FarmerDashboard/Order.tsx";
import FarmerDeliveryPage from "./pages/FarmerDashboard/Delivery.tsx";
import FarmerProducts from "./pages/FarmerDashboard/Products.tsx";

import DriverDashboard from "./pages/DriverDashboard/index.tsx";
import DriverDashboardPage from "./pages/DriverDashboard/Dashboard.tsx";

import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@mui/material/styles';
import MaterialUiTheme from "./Theme.ts";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:post_id" element={<BlogPostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="clean-energy" element={<CleanEnergyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="order-history" element={<OrderHistoryPage />} />
          <Route path="order-tracking" element={<OrderTrackingPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
        
        <Route element={<ProtectedRoute roles={['customer', 'admin']} />}>
          <Route path="profile-management" element={<ProfileManagement />}>
            <Route path="" element={<PersonalInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="credentials" element={<Credentials />} />
            <Route path="farm-details" element={<FarmDetails />} />
            <Route path="notification" element={<Notifications />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute roles={['customer', 'admin']} />}>
          <Route path="admin-dashboard/" element={<AdminDashboard />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<AdminOrderPage />} />
            <Route path="delivery" element={<AdminDeliveryPage />} />
            <Route path="contents" element={<Content />} />
            <Route path="status" element={<Status />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute roles={['customer', 'admin']} />}>
          <Route path="farmer-dashboard/" element={<FarmerDashboard />}>
            <Route path="" element={<FarmerDashboardIndex />} />
            <Route path="dashboard" element={<FarmerDashboardIndex />} />
            <Route path="products" element={<FarmerProducts />} />
            <Route path="orders" element={<FarmerOrderPage />} />
            <Route path="delivery" element={<FarmerDeliveryPage />} />

          </Route>
        </Route>

        <Route element={<ProtectedRoute roles={['customer', 'admin']} />}>
          <Route path="driver-dashboard/" element={<DriverDashboard />}>
            <Route path="" element={<FarmerDashboardIndex />} />
            <Route path="dashboard" element={<DriverDashboardPage />} />
          </Route>
        </Route>

        <Route path="signup/:user_type" element={<SignUpPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="resetpassword" element={<ResetPasswordPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
