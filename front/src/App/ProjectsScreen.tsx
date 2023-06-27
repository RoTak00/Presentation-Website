import { useParams } from "react-router-dom";
import ContactIcons from "../Components/ContactIcons";
import CustomFooter from "../Components/Footer";
import NavigationBar from "../Components/Navigation";

import "./styles/ProjectsScreen.css";
import { useCallback, useEffect, useState } from "react";
import { getProjectsPaginated, projectAction } from "../Utils/API";
import { ProjectType } from "../Utils/Types";
import ProjectPageCell from "../Components/ProjectPageCell";
import PageCell from "../Components/PageCell";
import { generatePaginationNumbers } from "../Utils/Helpers";

const ProjectsScreen = () => {
  let { pageParam } = useParams();
  let page = parseInt(pageParam ?? "1");

  const [projectsLoaded, setProjectsLoaded] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [pages, setPages] = useState<null | number>(null);
  const [paginationNumbers, setPaginationNumbers] = useState<null | number[]>(
    null
  );

  const loadProjects = useCallback(async () => {
    let projects = await getProjectsPaginated(4, page);
    if (!projects) {
      console.log("ERROR. CANNOT LOAD PROJECTS");
      return;
    }
    console.log(projects.data);
    setProjects(projects.data.data);
    setPages(projects.data.pages);
    setProjectsLoaded(true);
    setPaginationNumbers(generatePaginationNumbers(page, projects.data.pages));

    for (let project of projects.data.data)
    {
      projectAction(project.id as number, "view_page");
    }
    
  }, [page]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <div
      style={{
        backgroundImage: `url(/images/background.png)`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <NavigationBar />
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-title-description">
        <p>Check out my latest projects, whether they're tech or not!</p>
      </div>
      <div>
        {projectsLoaded && projects ? (
          <div>
            {projects.map((pr, index) => (
              <ProjectPageCell
                project={pr}
                index={index}
                key={"project-" + index}
              />
            ))}
          </div>
        ) : null}
      </div>

      {projectsLoaded && paginationNumbers && pages && pages > 1 ? (
        <div className="pagination">
          {paginationNumbers.map((val, index, arr) => {
            let separationClass = "";
            if (index < pages && arr[index + 1] - arr[index] > 1)
              separationClass = "addMarginRight";

            return (
              <PageCell
                key={"page-cell-" + val}
                linkBase="/projects/page/"
                pageNo={val}
                extraClassName={separationClass}
                disabled={val === page}
              />
            );
          })}
        </div>
      ) : null}

      <ContactIcons />
      <CustomFooter />
    </div>
  );
};

export default ProjectsScreen;
