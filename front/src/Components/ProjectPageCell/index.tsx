import { useRef } from "react";
import useIsInViewport from "../../Utils/IsInViewport";
import { ProjectType } from "../../Utils/Types";
import "./styles.scss";
import useFadeIn from "../../Utils/fadeIn";
import useMediaQuery from "../../Utils/MediaQuery";
import { projectAction } from "../../Utils/API";

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

  const tagAnimationClasses = useFadeIn(
    isIntersecting,
    "fadeIn",
    "fadingInNormal"
  );

  const tagsTSX = isIntersecting ? project.tags?.map((tag, index) => (
    <div className={"tag " + tagAnimationClasses} style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}>{tag.tag_name}</div>
  )) : null;

  const isSmallScreen = useMediaQuery("(max-width: 992px)");
  console.log(isSmallScreen);
  let projectImage = (
    <div className={"project-page-image " + animationClasses} style={!isIntersecting ? { opacity: 0 } : {}}>
      <img src={project.image ?? ""} alt={project.title} />
      {project.tags ? (<div className={"project-tags big "}>{tagsTSX}</div>) : null}
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
            onClick={(e) => {
              e.preventDefault();
              projectAction(project.id as number, "click_page");
              window.open(project.link_github, "_blank");
            }}

          >
            More on GitHub!
          </a>
        ) : null}
        {project.link ? (
          <a onClick={(e) => {
            e.preventDefault();
            projectAction(project.id as number, "click_page");
            window.open(project.link, "_blank");
          }} >
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
