import React from 'react'

function TextInput({ id, label, ...rest }) {
  const generatedId = React.useId()
  const inputId = id || generatedId

  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  )
}