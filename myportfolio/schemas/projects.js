export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      description: "name of the project",
    },
    {
      name: "description",
      title: "Project description",
      type: "string",
      description: "describe the projects",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      description: "link for the projects",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "image for project",
    },
    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [{ type: "toolDescriptions" }],
    },
  ],
};
