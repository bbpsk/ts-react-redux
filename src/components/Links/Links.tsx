import React from "react";

const Links = () => {
  const links = [
    {
      text: "Create React App with Typescript",
      link: "https://create-react-app.dev/docs/adding-typescript/",
    },
    {
      text: "React Router Quick Start",
      link: "https://reactrouter.com/docs/en/v6/getting-started/overview",
    },
    {
      text: "Redux Toolkit Quick Start",
      link: "https://redux-toolkit.js.org/tutorials/quick-start",
    },
    {
      text: "Bootstrap Quick Start",
      link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
    },
    {
      text: "React Bootstrap Quick Start",
      link: "https://react-bootstrap.github.io/getting-started/introduction/",
    },
    {
      text: "Date-fns Docs",
      link: "https://date-fns.org/docs/Getting-Started",
    },
    {
      text: "Sass Docs",
      link: "https://sass-lang.com/documentation/",
    },
    {
      text: "React Testing Library Example",
      link: "https://testing-library.com/docs/react-testing-library/example-intro",
    },
    {
      text: "Jest Docs",
      link: "https://jestjs.io/docs/getting-started",
    },
    {
      text: "React i18next Step by Step Guide",
      link: "https://react.i18next.com/latest/using-with-hooks",
    },
  ];

  return (
    <div className="linksContainer">
      <div className="h5 font-monospace">Links</div>
      <div className="py-2 font-monospace">
        Below, you will find some helpful links to documentation that was
        referenced in the making of this website
      </div>
      <ul className="mt-4">
        {links.map((link, idx) => (
          <li key={idx} className="my-2">
            <a target="_blank" rel="noopener noreferrer" href={link.link}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
