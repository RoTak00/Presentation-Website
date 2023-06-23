import { Route, Routes } from "react-router-dom";

import HomeScreen from "./App/HomeScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />

    </Routes>
  );
};

export default AppRouter;
