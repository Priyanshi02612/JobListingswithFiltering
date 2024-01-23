import React, { useState } from 'react';
import image from '../images/icon-remove.svg';

function Search({ data, handleFilter }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const uniqueSkills = Array.from(new Set(data.flatMap((item) => item.skill)));

  const handleSkillClick = (skill) => {
    const updatedSkills = selectedSkills.includes(skill) ? selectedSkills.filter((s) => s !== skill) : [...selectedSkills, skill];
    setSelectedSkills(updatedSkills);
    handleFilter(updatedSkills);
  };

  const handleClearClick = () => {
    setSelectedSkills([]);
    handleFilter([]);
  };

  return (
      <div className="search-container">
        <div className="search">
          {uniqueSkills.map((skill) => (
              <span key={skill} className={`skills ${selectedSkills.includes(skill) ? 'selected' : ''}`} onClick={() => handleSkillClick(skill)}>
                {skill} {selectedSkills.includes(skill) && <img src={image} alt="remove icon" className="cross" />}
              </span>
          ))}
        </div>
          <span className="clear" onClick={handleClearClick}>
            Clear
          </span>
      </div>
  );
}

export default Search;
