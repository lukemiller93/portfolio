export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [/* "create" */ "update" /* "delete" */, "publish"],
  fields: [
    { name: "title", type: "string", title: "Site Title" },
    {
      name: "description",
      type: "text",
      title: "Site Description",
      description: "Describe your portfolio for search engines and social media"
    },
    {
      name: "keywords",
      type: "array",
      title: "Site Keywords",
      description: "Add keywords that describe your portfolio",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    },
    {
      name: "author",
      type: "reference",
      description: "Publish an author and set a reference to them here.",
      title: "Author",
      to: [{ type: "person" }]
    }
  ]
};
