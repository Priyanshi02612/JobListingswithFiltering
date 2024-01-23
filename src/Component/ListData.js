import React, { useState, useEffect } from 'react'
import data from './data'
import Search from './Search'

export default function ListData() {
  const [ filteredData, setFilteredData ] = useState(data)
  const [ selectedSkills, setSelectedSkills ] = useState([])

  const handleFilter = (selectedSkills) => {
    setSelectedSkills(selectedSkills)

    const newData = data.filter((item) => {
      return (
          selectedSkills.length === 0 ||
          selectedSkills.every((skill) => item.skill.includes(skill))
      )
    })

    setFilteredData(newData)
  }

  useEffect(() => {
    console.log('Filtered Data:', filteredData)
  }, [ filteredData ])

  return (
      <div className="main">
        <Search data={data} handleFilter={handleFilter}/>
        {filteredData.map((fetchedData) => (
            <div className="container" key={fetchedData.id}>
              <div className="left">
                <span className="image"><img src={fetchedData.image} alt={fetchedData.name}/></span>
                <div className="details">
                  <span className="Name">{fetchedData.name} {fetchedData.new && <span className="new">New!</span>} {fetchedData.featured && <span className="featured">Featured</span>}</span>
                  <div className="Role">{fetchedData.role}</div>
                  <div className="Info">{fetchedData.info}</div>
                </div>
              </div>
              <div className="right">
              {fetchedData.skill.map((skill, index) => (
                  <span key={index} className="skill">
                      {skill}
                  </span>
              ))}
              </div>
            </div>
        ))}
      </div>
  )
}
