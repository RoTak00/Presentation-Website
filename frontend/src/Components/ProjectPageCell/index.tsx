import { useRef } from "react";
import useIsInViewport from "../../Utils/IsInViewport";
import { ProjectType } from "../../Utils/Types";
import "./styles.scss";
import useFadeIn from "../../Utils/fadeIn";
import useMediaQuery from "../../Utils/MediaQuery";

type Props = {
  project: ProjectType;
  index: number;
};
const ProjectPageCell: React.FC<Props> = ({ project, index }) => {
  const projectRef = useRef(null);
  const isIntersecting = useIsInViewport(projectRef);
  const animationClasses = useFadeIn(
    isIntersecting,
    "slideIn",
    index % 2 === 0 ? "left" : "right"
  );

  const isSmallScreen = useMediaQuery("(max-width: 992px)");
  console.log(isSmallScreen);
  let projectImage = (
    <div className={"project-page-image " + animationClasses}>
      <img src={project.image ?? ""} alt={project.title} />
    </div>
  );
  let projectInfo = (
    <div
      className="project-page-info"
      ref={projectRef}
      key={"project-" + index}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="links">
        {project.link_github ? (
          <a
            href={project.link_github}
            target="_blank"
            rel="nofollow noreferrer"
          >
            More on GitHub!
          </a>
        ) : null}
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            Check it out!
          </a>
        ) : null}
      </div>
    </div>
  );

  return (
    <div key={`project-${index}`} className="project-page-cell container">
      {index % 2 === 0 || isSmallScreen ? projectImage : projectInfo}

      {index % 2 === 0 || isSmallScreen ? projectInfo : projectImage}
    </div>
  );
};

export default ProjectPageCell;
