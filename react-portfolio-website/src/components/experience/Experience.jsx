import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const analysis = [
  {skill: 'SQL', detail: 'Joins, CTEs, window functions'},
  {skill: 'Python (pandas)', detail: 'Cleaning, merging, aggregating'},
  {skill: 'Power BI', detail: 'DAX measures, Power Query, dashboards'},
  {skill: 'Excel', detail: 'Pivot tables, lookups, charts'},
  {skill: 'Data quality', detail: 'Validation, duplicates, cross-checks'},
]

const tools = [
  {skill: 'Git & GitHub', detail: 'Version control, project repos'},
  {skill: 'Jupyter / Colab', detail: 'Notebooks for analysis'},
  {skill: 'SQLite / PostgreSQL', detail: 'Relational databases'},
  {skill: 'EDI & testing', detail: 'Data flows between systems'},
  {skill: 'HTML, CSS, React', detail: 'Built this site'},
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {[['Data Analysis', analysis], ['Tools & Workflow', tools]].map(([heading, items]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <div className='experience__content'>
              {items.map(({skill, detail}) => (
                <article key={skill} className='experience__details'>
                  <BsCheckCircleFill className='experience__details-icon'/>
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{detail}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
