import { Navigate, Route, Routes } from "react-router-dom";

import IndexScreen from "./IndexScreen";
import AboutScreen from "./AboutScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexScreen />} />
      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
};

export default AppRouter;
