import { Col, Row } from "react-bootstrap";
import { ProjectType, lipsum } from "../../Utils/Types";
import ProjectCell from "../ProjectCell";
import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { getProjects } from "../../Utils/API";

const ProjectMenu = () => {
  const [projects, setProjects] = useState<ProjectType[] | null>([
    {
      imageName: "loading.png",
      title: "Loading...",
      description: "",
    },
    {
      imageName: "loading.png",
      title: "Loading...",
      description: "",
    },
    {
      imageName: "loading.png",
      title: "Loading...",
      description: "",
    },
    {
      imageName: "loading.png",
      title: "Loading...",
      description: "",
    },
  ]);

  const loadProjects = useCallback(async () => {
    let projects = await getProjects(4).then((res) => res?.data);

    if (!projects) {
      console.log("oof");
      return;
    }
    console.log(projects.data);

    let numeric_array_projects = [];
    for (var item in projects.data) {
      numeric_array_projects.push(projects.data[item]);
    }

    let outputProjects = numeric_array_projects.map((el: any) => {
      return {
        imageName: el.image,
        title: el.title,
        link_project: el.link,
        description: el.description,
      };
    });

    setProjects(outputProjects);
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
    if (!projectsLoaded) return;
    setModalShown(modalIndex);
  };

  return (
    <div>
      <Row className="project-title-row">
        <Col xs="12">
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row className="project-menu-row">
        {projects?.map((el, index) => (
          <ProjectCell
            key={"project-" + index}
            data={el}
            showModal={index === modalShown}
            handleModalClose={handleModalClosed}
            handleModalOpened={() => handleModalOpened(index)}
            disabled={projectsLoaded}
          />
        ))}
      </Row>
    </div>
  );
};

export default ProjectMenu;
