import React, { useState } from "react";
import data from "./data";
import image from "../images/icon-remove.svg";

const ListData = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const handleSkillClick = (skill) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((eachSkill) => eachSkill !== skill)
      : [...selectedSkills, skill];

    const updatedFilteredData = data.filter((newData) => {
      return updatedSkills.every((selectedSkill) =>
        [
          newData.role,
          newData.level,
          ...newData.languages,
          ...newData.tools,
        ].includes(selectedSkill)
      );
    });

    setSelectedSkills(updatedSkills);
    setFilteredData(updatedFilteredData);
  };

  const handleClearAll = () => {
    setSelectedSkills([]);
    setFilteredData(data);
  };

  return (
    <div className="main-content">
      {selectedSkills.length > 0 && (
        <div className="main-filter-container">
          <div className="list-filter-container">
            <div className="skills-container">
              {selectedSkills.map((selectedSkill) => (
                <span key={selectedSkill} className="selected-skills">
                  <span className="selected-skill">{`${selectedSkill}`}</span>
                  <span
                    className="remove-skill"
                    onClick={() => handleSkillClick(selectedSkill)}
                  >
                    <img src={image} alt="remove icon" />
                  </span>
                </span>
              ))}
            </div>
            <span className="clear-skills" onClick={handleClearAll}>
              Clear
            </span>
          </div>
        </div>
      )}
      <div className="list-container">
        {filteredData.map((fetchedData) => (
          <div
            className="job-container"
            key={fetchedData.id}
            title={fetchedData.company}
          >
            <div className="job-details">
              <span className="company-image">
                <img src={fetchedData.logo} alt={fetchedData.company} />
              </span>
              <div className="company-details">
                <span className="company-name">
                  {fetchedData.company}
                  {fetchedData.new && <span className="new">NEW!</span>}
                  {fetchedData.featured && (
                    <span className="featured">FEATURED</span>
                  )}
                </span>
                <div className="employee-position">{fetchedData.position}</div>
                <div className="employee-details">
                  {fetchedData.postedAt} • {fetchedData.contract} •{" "}
                  {fetchedData.location}
                </div>
              </div>
            </div>
            <div className="employee-skill">
              <button
                className="skill selected"
                onClick={() => handleSkillClick(fetchedData.role)}
              >
                {fetchedData.role}
              </button>
              <button
                className="skill selected"
                onClick={() => handleSkillClick(fetchedData.level)}
              >
                {fetchedData.level}
              </button>
              {fetchedData.languages.map((languages, index) => (
                <button
                  key={index}
                  className="skill selected"
                  onClick={() => handleSkillClick(languages)}
                >
                  {languages}
                </button>
              ))}

              {fetchedData.tools.map((tool, index) => (
                <button
                  key={index}
                  className="skill selected"
                  onClick={() => handleSkillClick(tool)}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListData;
