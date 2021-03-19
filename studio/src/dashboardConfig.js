export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60541ad072dadb6a6acc55f7",
                  title: "Sanity Studio",
                  name: "blog-studio-vp39g9w7",
                  apiId: "fc140021-7f89-446a-a25f-d8ddaca66af9",
                },
                {
                  buildHookId: "60541ad133ebf666690e86a6",
                  title: "Blog Website",
                  name: "blog-web-y8kq618s",
                  apiId: "68835fb2-d8d3-4a6a-ac80-d3997f4d5483",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rossobrien/blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blog-web-y8kq618s.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
