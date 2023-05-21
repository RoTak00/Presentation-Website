type CarouselImageType = {
  imageName?: string;
  title: string;
  description?: string;
  imagePosition?: "top" | "center" | "bottom";
};

type ProjectType = {
  imageName?: string;
  wideImageName?: string;
  title: string;
  description?: string;
  link_github?: string;
  link_project?: string;
  imagePosition?: "top" | "center" | "bottom";
};

// create the UserMessageType
type UserMessageType = {
  message: string;
  name: string;
  email: string;
};

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta, lorem eu scelerisque ullamcorper, nisi felis pulvinar nisl, in accumsan dolor velit eget lectus. Cras ac feugiat lorem. Nullam facilisis vitae magna nec fringilla. Cras tellus elit, hendrerit quis velit non, pellentesque semper nisi. Aliquam accumsan malesuada nulla quis auctor. Praesent egestas eu ligula ac suscipit. Suspendisse gravida tellus ac ante luctus consequat. Aliquam libero dui, consequat a lacinia vel, consequat at turpis. Integer vitae magna in velit tincidunt maximus. Ut mattis scelerisque massa eget auctor. Donec tincidunt ipsum at lacus consequat consectetur. Proin eu risus interdum, rhoncus lectus sit amet, fringilla nisi. Integer vestibulum nisl in ligula maximus, nec tincidunt erat dictum. Sed neque nulla, fringilla convallis libero at, vestibulum posuere mauris. ";

export type { CarouselImageType, ProjectType, UserMessageType };
export { lipsum };
