export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "company you worked for",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "position title",
    },
    {
      name: "beginAt",
      title: "Starts at",
      type: "datetime",
      description: "When does the employment start?",
    },
    {
      name: "endAt",
      title: "Ends at",
      type: "datetime",
      description: "When does the employment end?",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "jobDescriptions" }],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "projectDescriptions" }],
    },
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "jobTitle",
    },
  },
  orderings: [
    {
      title: "Start Date, New",
      name: "startDateDesc",
      by: [{ field: "beginAt", direction: "desc" }],
    },
    {
      title: "Start Date, Old",
      name: "startDateAsc",
      by: [{ field: "beginAt", direction: "asc" }],
    },
  ],
};
