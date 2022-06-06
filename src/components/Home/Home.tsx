import React from 'react'
import { useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import './Home.scss'

const Home = () => {
  const message = useSelector((state: any) => state.message.value);

  return (
    <div className="homeContainer">
      <div className="welcomeBox mb-5 p-2">
        <div className="h5 font-monospace">{message}</div>
        <div className="font-monospace">A template website showcasing commonly used React patterns, concepts, and tools. Bootstraped with Create React App </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12 mb-2">
          <div className="h5">Features: </div>
          <ul className="list-group">
            <li className="list-group-item">Configured routes and navigation using React Router</li>
            <li className="list-group-item">Developed with Typescript and Sass</li>
            <li className="list-group-item">Styled with Bootstrap and React Bootstrap Components</li>
            <li className="list-group-item">Configured redux store and reducers using Redux Toolkit, including multiple examples</li>
          </ul>
        </div>
        <div className="col-lg-6 col-12">
          <div className="row justify-content-evenly">
            <div className="image react-logo"></div>
            <div className="image create-logo"></div>
            <div className="image react-router-logo"></div>
            <div className="image ts-logo"></div>
            <div className="image sass-logo"></div>
            <div className="image bootstrap-logo"></div>
            <div className="image bootstrap-react-logo"></div>
            <div className="image redux-logo"></div>
          </div>
        </div>
      </div>
      <div className="timerContainer">
        <Timer />
      </div>
    </div>
  )
}

export default Home;