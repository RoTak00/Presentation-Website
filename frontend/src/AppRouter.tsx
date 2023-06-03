import { Route, Routes } from "react-router-dom";

import HomeScreen from "./App/HomeScreen";
import ErasmusApplicationScreen from "./App/ErasmusApplicationScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="esn" element={<ErasmusApplicationScreen />} />
    </Routes>
  );
};

export default AppRouter;
