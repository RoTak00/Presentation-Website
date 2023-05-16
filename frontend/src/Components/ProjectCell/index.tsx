import { Button, Col, Modal, Row } from "react-bootstrap";
import { ProjectType } from "../../Utils/Types";
import "./styles.css";
import { useState } from "react";

type Props = {
  data: ProjectType;
  showModal: boolean;
  handleModalClose: () => void;
  handleModalOpened: () => void;
};

const getImageSrc = (name: string) => {
  return "/images/" + name;
};

const ProjectCell: React.FC<Props> = ({
  data,
  showModal,
  handleModalClose,
  handleModalOpened,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <Col
        xs="6"
        lg="3"
        className="project-menu-cell"
        style={{ paddingLeft: 0, paddingRight: 0 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => handleModalOpened()}
      >
        <img src={getImageSrc(data.imageName ?? "")} alt={data.title}></img>

        {isHovering ? (
          <div className="project-menu-hover">Find out more!</div>
        ) : null}
      </Col>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="xl"
        centered
        className="project-modal"
      >
        <Row className="nogutter">
          <Col xs="12" className="project-modal-title">
            <h2>{data.title}</h2>

            <div onClick={handleModalClose} className="button-close">
              X
            </div>
          </Col>
        </Row>
        <div className="project-modal-image-wrapper">
          <div>
            <img
              src={getImageSrc(data.wideImageName ?? data.imageName ?? "")}
              alt={data.title}
            ></img>
          </div>
        </div>
        <Modal.Body className="project-modal-description">
          <div>{data.description}</div>
        </Modal.Body>
        <hr />
        <div className="project-modal-buttons">
          <Button
            href="#"
            target="_blank"
            variant="primary"
            className="button-checkitout"
          >
            Check it out!
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCell;
