import React from "react"
import TextInput from "../TextInput"
import LinkButton from "../LinkButton"
import InputWrapper from "../InputWrapper"
import SelectInput from "../SelectInput"
import { MetadataContext } from "../MetadataProvider"

import { SCHEMA_ATTRIBUTES } from "../../constants"

function MetadataControls() {
  const {
    name,
    setName,
    tag,
    setTag,
    sectionClass,
    setSectionClass,
    limit,
    setLimit,
  } = React.useContext(MetadataContext)

  return (
    <>
      <InputWrapper>
        <TextInput
          label={SCHEMA_ATTRIBUTES.name.label}
          infoLink={SCHEMA_ATTRIBUTES.name.docLink}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Section name'
          required
        />
        <SelectInput
          label={SCHEMA_ATTRIBUTES.tag.label}
          infoLink={SCHEMA_ATTRIBUTES.tag.docLink}
          acceptedValues={SCHEMA_ATTRIBUTES.tag.acceptedValues}
          value={tag}
          onValueChange={setTag}
          placeholder='Select an HTML tag'
        />
        <TextInput
          label={SCHEMA_ATTRIBUTES.sectionClass.label}
          infoLink={SCHEMA_ATTRIBUTES.sectionClass.docLink}
          value={sectionClass}
          onChange={(e) => setSectionClass(e.target.value)}
          placeholder='section-name'
        />
        <TextInput
          label={SCHEMA_ATTRIBUTES.limit.label}
          infoLink={SCHEMA_ATTRIBUTES.limit.docLink}
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          type='number'
          placeholder={1}
        />
      </InputWrapper>
      <LinkButton>Test button</LinkButton>
    </>
  )
}

export default MetadataControls
