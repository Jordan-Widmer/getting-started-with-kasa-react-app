import { Routes, Route } from "react-router-dom";
import Wellcome from "../Pages/Wellcome";
import RegardsTo from "../Pages/RegardsTo";
import NotFound from "../Pages/NotFound";
import Appartment from "../Pages/Appartment";

const router = (
  <Routes>
    <Route path="/" element={<Wellcome />} exact />
    <Route path="/regardsto" element={<RegardsTo />} exact />
    <Route path="/appartment/:id" element={<Appartment />} exact />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default router;
