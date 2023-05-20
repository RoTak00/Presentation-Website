import { Col, Row } from "react-bootstrap";
import { ProjectType, lipsum } from "../../Utils/Types";
import ProjectCell from "../ProjectCell";
import "./styles.css";
import { useState } from "react";

const ProjectMenu = () => {
  const [projects] = useState<ProjectType[] | null>([
    {
      imageName: "1.jpeg",
      title: "Project 1",
      description: lipsum,
    },
    {
      imageName: "2.jpeg",
      title: "Project 2",
      description: lipsum,
    },
    {
      imageName: "3.jpeg",
      title: "Project 3",
      description: lipsum,
    },
    {
      imageName: "4.jpeg",
      title: "Project 4",
      description: lipsum,
    },
  ]);

  const [modalShown, setModalShown] = useState<number | null>(null);

  const handleModalClosed = () => {
    setModalShown(null);
  };

  const handleModalOpened = (modalIndex: number) => {
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
          />
        ))}
      </Row>
    </div>
  );
};

export default ProjectMenu;
