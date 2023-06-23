
import { GalleryPostType} from "../../Utils/Types";
import GalleryPost from "../GalleryPost";
import "./styles.css";
import { useMemo,useState } from "react";

const GalleryMenu = () => {
  const [galleryPosts,] = useState<GalleryPostType[] | null>([
    {
      images: [],
      title: "Loading...",
      description: "",
    },
    {
        images: [],
        title: "Loading...",
        description: "",
      },
      {
        images: [],
        title: "Loading...",
        description: "",
      },
        
  ]);
/*
  const loadProjects = useCallback(async () => {
    let projects = await getProjects(4).then((res) => res?.data);

    if (!projects) {
      console.log("ERROR. CANNOT LOAD PROJECTS");
      return;
    }
    console.log(projects.data);

    let numeric_array_projects = [];
    for (var item in projects.data) {
      numeric_array_projects.push(projects.data[item]);
    }

    setProjects(numeric_array_projects);
    setProjectsLoaded(true);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const [projectsLoaded, setProjectsLoaded] = useState<boolean>(false);

  */

  const outputPosts = useMemo(()=>
  {
    if(galleryPosts === null)
    return <div></div>;

    return galleryPosts.map((post, index)=>
  {
    return <GalleryPost post={post}/>;
  })
}, [galleryPosts]);

  return (
    <div>
        {outputPosts}
    </div>
  );
};

export default GalleryMenu;
