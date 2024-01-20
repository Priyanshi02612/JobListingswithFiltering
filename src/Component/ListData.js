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
                <img className="image" src={fetchedData.image} alt={fetchedData.name}/>
                <div className="details">
                  <a className="Name">{fetchedData.name} {fetchedData.new && <a className="new">New!</a>} {fetchedData.featured && <a className="featured">Featured</a>}</a>
                  <a className="Role">{fetchedData.role}</a>
                  <a className="Info">{fetchedData.info}</a>
                </div>
              </div>
              <div className="line-between-divs"></div>
              {fetchedData.skill.map((skill, index) => (
                  <div key={index} className="right">
                    <a href="" className="skill">
                      {skill}
                    </a>
                  </div>
              ))}
            </div>
        ))}
      </div>
  )
}
