import React, { useState } from 'react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'

const skills = [
  { value: 'socialMedia', label: 'Social Media' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'webDevelopment', label: 'Web Development' },
  { value: 'machineLearning', label: 'Machine Learning' },
  { value: 'copyWriting', label: 'Copywriting' },
  { value: 'digitalCommunication', label: 'Digital Communication' },
  { value: 'dataMining', label: 'Data Mining' },
  { value: 'databaseManagement', label: 'Database Management' },
  { value: 'dataAnalysis', label: 'Data Analysis' },
  { value: 'dataMining', label: 'Data Mining' },
  { value: 'SEO', label: 'Search Engine Optimization (SEO)' },
  { value: 'marketingAutomation', label: 'Marketing Automation & EMS' },
  { value: 'finance', label: 'Finance' },
  { value: 'budget', label: 'Budgeting and Accounts' },
  { value: 'UI', label: 'UI and UX Design' },
  { value: 'design', label: 'Visual Design' },
  { value: 'story', label: 'Storytelling' },
  { value: 'iOS', label: 'iOS Development' },
  { value: 'android', label: 'Android Development' }

]

export default function Category (props) {
  const [pickerItems, setPickerItems] = useState(skills)

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item])
    props.setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      props.setSelectedItems(selectedItems)
    }
  }

  return (
    <CUIAutoComplete
      label={"Choose some skills you're looking for"}
      placeholder="Type a skill"
      onCreateItem={handleCreateItem}
      items={pickerItems}
      selectedItems={props.selectedItems}
      onSelectedItemsChange={(changes) =>
        handleSelectedItemsChange(changes.selectedItems)
      }
    />
  )
}
