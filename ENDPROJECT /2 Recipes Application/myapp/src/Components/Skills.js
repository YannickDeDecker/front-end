import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Skills.css";

const skills = () => {
  return (
    <div className="skills-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="designer">60%</h1>
            <h2>Grafisch Vormgever</h2>
            <ul>
              <li>InDesign</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>XD</li>
            </ul>
          </div>
          <div className="col-md-4">
            <PieChart
              className="pieChart"
              data={[
                { title: "One", value: 40, color: "#fbbe88" },
                { title: "Two", value: 60, color: "#569E78" },
              ]}
            />
          </div>
          <div className="col-md-4">
            <h1 className="webdesigner">40%</h1>
            <h2>Front-End Developer</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
