import { Button, Col, Modal, Row } from "react-bootstrap";
import { ProjectType } from "../../Utils/Types";
import "./styles.css";
import { useRef, useState } from "react";
import useIsInViewport from "../../Utils/IsInViewport";
import useFadeIn from "../../Utils/fadeIn";

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
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const cellRef = useRef(null);
  const isCellInViewport = useIsInViewport(cellRef);
  const animationClasses = useFadeIn(
    isCellInViewport,
    "toFadeIn",
    "fadingInLeft"
  );

  const animationDelay = `${(cellArrayLength - cellIndex + 1) * 0.2}s`;
  return (
    <>
      <Col
        xs="6"
        lg="3"
        className={`project-menu-cell ${animationClasses}`}
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
            <img src={data.image ?? ""} alt={data.title}></img>
          </div>
        </div>
        <Modal.Body className="project-modal-description">
          <div>{data.description}</div>
        </Modal.Body>
        <div className="project-modal-buttons">
          <Button
            href={data.link ?? "#"}
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
