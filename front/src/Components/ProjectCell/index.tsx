import { Button, Col, Modal, Row } from "react-bootstrap";
import { ProjectType, RecursivePartial } from "../../Utils/Types";
import "./styles.css";
import { useRef, useState } from "react";
import useIsInViewport from "../../Utils/IsInViewport";
import useFadeIn from "../../Utils/fadeIn";
import { projectAction } from "../../Utils/API";

type Props = {
  data: RecursivePartial<ProjectType>;
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
  const tagsTSX = data.tags?.map((tag, index) => (
    <div className="tag" key={data.id + "-" + index}>
      {tag.tag_name}
    </div>
  ));

  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Col
        xs="12"
        xl="6"
        className={`project-menu-cell`}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => handleModalOpened()}
      >
        <img src={data.image ?? ""} alt={data.title}></img>

        <div className={"project-menu-info"}>
          <div className={"title"}>{data.title}</div>
          <div className={"description" + (showModal ? " " : " closed")}>
            {data.description}
          </div>
        </div>

        {data.tags ? (
          <div className={"project-menu-tags"}>{tagsTSX}</div>
        ) : null}
      </Col>
    </>
  );
};

export default ProjectCell;
