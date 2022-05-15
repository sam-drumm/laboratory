import React, { useState } from 'react'

export default function CategoryFinder (props) {
  console.log(props)
  const [mole, setMole] = useState('')

  const skills = [
    { value: 1, label: 'Social Media' },
    { value: 2, label: 'Blockchain' },
    { value: 3, label: 'Web Development' },
    { value: 4, label: 'Machine Learning' },
    { value: 5, label: 'Copywriting' },
    { value: 6, label: 'Digital Communication' },
    { value: 7, label: 'Basic' },
    { value: 8, label: 'Database Management' },
    { value: 9, label: 'Data Analysis' },
    { value: 10, label: 'Data Mining' },
    { value: 11, label: 'Search Engine Optimization (SEO)' },
    { value: 12, label: 'Marketing Automation & EMS' },
    { value: 13, label: 'Finance' },
    { value: 14, label: 'Budgeting and Accounts' },
    { value: 15, label: 'UI and UX Design' },
    { value: 16, label: 'Visual Design' },
    { value: 17, label: 'Storytelling' },
    { value: 18, label: 'iOS Development' },
    { value: 19, label: 'Android Development' },
    { value: 20, label: 'Neural Networks' }
  ]

  skills.map((obj) => {
    if (obj.value === props.skill) {
      setMole(obj.label)
    }
  })

  console.log(mole)

  return (
    <>
      {mole}
    </>
  )
}
