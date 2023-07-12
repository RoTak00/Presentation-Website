import { Row } from "react-bootstrap";
import { ProjectType, RecursivePartial } from "../../Utils/Types";
import ProjectCell from "../ProjectCell";
import "./styles.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { getProjects, projectAction } from "../../Utils/API";
import useIsInViewport from "../../Utils/IsInViewport";
import useFadeIn from "../../Utils/fadeIn";

const ProjectMenu = () => {
  const [projects, setProjects] = useState<
    RecursivePartial<ProjectType>[] | null
  >([
    {
      image: "images/loading.png",
      title: "Loading...",
      description: "",
    },
    {
      image: "images/loading.png",
      title: "Loading...",
      description: "",
    },
    {
      image: "images/loading.png",
      title: "Loading...",
      description: "",
    },
    {
      image: "images/loading.png",
      title: "Loading...",
      description: "",
    },
  ]);

  const loadProjects = useCallback(async () => {
    let projects_response = await getProjects(4);

    if (projects_response.status === "error") {
      console.error(projects_response.message);
      return;
    }

    let numeric_array_projects = [];
    for (var item in projects_response.data) {
      numeric_array_projects.push(projects_response.data[item]);
    }
    setProjects(numeric_array_projects);
    setProjectsLoaded(true);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const [projectsLoaded, setProjectsLoaded] = useState<boolean>(false);

  const [modalShown, setModalShown] = useState<number | null>(null);

  const handleModalClosed = () => {
    setModalShown(null);
  };

  const handleModalOpened = (modalIndex: number) => {
    if (!projectsLoaded || !projects) return;
    setModalShown(modalIndex);

    projectAction(projects[modalIndex].id as number, "view_home");
  };

  return (
    <Row className="project-menu-row">
      {projects?.map((el, index, arr) => (
        <ProjectCell
          key={"project-" + index}
          cellIndex={index}
          cellArrayLength={arr.length}
          data={el}
          showModal={index === modalShown}
          handleModalClose={handleModalClosed}
          handleModalOpened={() => handleModalOpened(index)}
          disabled={projectsLoaded}
        />
      ))}
    </Row>
  );
};

export default ProjectMenu;
