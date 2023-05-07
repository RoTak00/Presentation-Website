import { Col } from "react-bootstrap";
import { ProjectType } from "../../Utils/Types";
import "./styles.css";

type Props = {
  data: ProjectType;
};

const getImageSrc = (name: string) => {
  return "/images/" + name;
};

const ProjectCell: React.FC<Props> = ({ data }) => {
  return (
    <Col
      xs="6"
      lg="3"
      className="project-menu-cell"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <img src={getImageSrc(data.imageName ?? "")} alt={data.title}></img>
    </Col>
  );
};

export default ProjectCell;
