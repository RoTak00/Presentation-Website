import { Route, Routes } from "react-router-dom";

import HomeScreen from "./App/HomeScreen";
import ErasmusApplicationScreen from "./App/ErasmusApplicationScreen";
import ProjectsScreen from "./App/ProjectsScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />

      <Route path="projects/page/:pageParam" element={<ProjectsScreen />} />
      <Route path="projects" element={<ProjectsScreen />} />
      <Route path="esn" element={<ErasmusApplicationScreen />} />
    </Routes>
  );
};

export default AppRouter;
