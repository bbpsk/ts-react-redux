import React from 'react'

const Links = () => {
  return (
    <div className='linksContainer'>
      <div className="font-monospace">Below, you will find some helpful links to documentation 
        that was referenced in the making of this website</div>
      <ul className="mt-4">
        <li className="my-2">
          <a target="_blank" rel="noopener noreferrer" href="https://create-react-app.dev/docs/adding-typescript/">Create React App with Typescript</a>
        </li>
        <li className="my-2">
          <a target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/docs/en/v6/getting-started/overview">React Router Quick Start</a>
        </li>
        <li className="my-2">
          <a target="_blank" rel="noopener noreferrer" href="https://redux-toolkit.js.org/tutorials/quick-start">Redux Toolkit Quick Start</a>
        </li>
        <li className="my-2">
          <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">Bootstrap Quick Start</a>
        </li>
        <li className="my-2">
          <a target="_blank" rel="noopener noreferrer" href="https://react-bootstrap.github.io/getting-started/introduction/">React Bootstrap Quick Start</a>
        </li>
      </ul>
    </div>
  )
}

export default Links;