import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject } from './projectHelper'

export default function Project () {
  const { id } = useParams()
  const project = useSelector(state => state.project)
  const user = useSelector(state => state.user)

  useEffect(() => {
    user.id && getProject(id, user)
  }, [id, user])

  const {
    projectTitle,
    category,
    description,
    seeking,
    purpose,
    teamEstablished,
    started,
    skillType,
    skillDescription
  } = project

  return (
    <>
      <section className='flex-container column-9 centre-flex'>

        <div className='column-9'>
          <article>
            <h2>{projectTitle}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{seeking}</p>
            <p>{purpose}</p>
            <p>{teamEstablished}</p>
            <p>{started}</p>
            <p>{skillType}</p>
            <p>{skillDescription}</p>
          </article>
        </div>

      </section>
    </>
  )
}
