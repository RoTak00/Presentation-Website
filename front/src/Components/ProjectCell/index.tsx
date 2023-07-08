import { Button, Col, Modal, Row } from "react-bootstrap";
import { ProjectType } from "../../Utils/Types";
import "./styles.css";
import { useRef, useState } from "react";
import useIsInViewport from "../../Utils/IsInViewport";
import useFadeIn from "../../Utils/fadeIn";
import { projectAction } from "../../Utils/API";

type Props = {
  data: ProjectType;
  showModal: boolean;
  handleModalClose: () => void;
  handleModalOpened: () => void;
  disabled: boolean;
  cellIndex: number;
  cellArrayLength: number;
};

const ProjectCell: React.FC<Props> = ({
  data,
  showModal,
  handleModalClose,
  handleModalOpened,
  disabled,
  cellIndex,
  cellArrayLength,
}) => {
  const cellRef = useRef(null);

  const animationDelay = `${(cellArrayLength - cellIndex + 1) * 0.2}s`;

  const tagsTSX = data.tags?.map((tag) => (
    <div className="tag">{tag.tag_name}</div>
  ));

  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Col
        xs="12"
        lg="6"
        className={`project-menu-cell`}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          animationDelay: animationDelay,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => handleModalOpened()}
        ref={cellRef}
      >
        <img src={data.image ?? ""} alt={data.title}></img>

        <div className={"project-menu-title"}>{data.title}</div>
        {data.tags ? (
          <div className={"project-menu-tags"}>{tagsTSX}</div>
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
            <img src={data.image ?? ""} alt={data.title}></img>
          </div>
        </div>
        <Modal.Body className="project-modal-description">
          <div>{data.description}</div>
        </Modal.Body>
        <Modal.Body className="project-modal-description tags">
          <div>
            {data.tags ? (
              <div className={"project-menu-tags static"}>{tagsTSX}</div>
            ) : null}
          </div>
        </Modal.Body>
        <div className="project-modal-buttons">
          {data.link ? (
            <Button
              onClick={() => {
                projectAction(data.id as number, "click_home");
                window.open(data.link);
              }}
              variant="primary"
              className="button-checkitout"
            >
              Check it out!
            </Button>
          ) : null}
          {data.link_github ? (
            <Button
              onClick={() => {
                projectAction(data.id as number, "click_home");
                window.open(data.link_github);
              }}
              variant="primary"
              className="button-checkitout"
            >
              More on GitHub!
            </Button>
          ) : null}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCell;
