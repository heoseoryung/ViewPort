import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import OdogPage from "./pages/OdogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CSPage from "./pages/CSPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserModifyPage from "./pages/UserModifyPage";
import WishListPage from "./pages/WishListPage";
import UserCouponPage from "./pages/UserCouponPage";
import UserAddressPage from "./pages/UserAddressPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/list" element={<StorePage />} />
          <Route path="/product/list/odog" element={<OdogPage />} />
          <Route path="/product/detail/:id" element={<ProductDetailPage />} />
          <Route path="/order/list" element={<OrderPage />} />

          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/profile/modify" element={<UserModifyPage />} />
          <Route path="/profile/wishlist" element={<WishListPage />} />
          <Route path="/profile/coupons" element={<UserCouponPage />} />
          <Route path="/profile/address" element={<UserAddressPage />} />

          <Route path="/cs" element={<CSPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
