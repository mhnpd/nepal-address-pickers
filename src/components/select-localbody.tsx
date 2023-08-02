import React from 'react'
import { CustomSelectProps, BaseSelect } from './select'
import { getLocalBodiesOfDistrict, getLocalBodiesOptionsInEnglish } from '../utils'
import { find } from 'lodash'

export interface SelectLocalBodyProps extends CustomSelectProps {
  /** language: en | np */
  lang?: 'en' | 'np'
  /** pass a valid district string (required)*/
  district: string,
}

export const SelectLocalBody = ({
  lang = 'en',
  value,
  district,
  defaultValue,
  ...props
}: SelectLocalBodyProps): React.ReactElement => {
  const getOptions = () => {
    console.log(district)
    if (district && lang == 'en') {
      return getLocalBodiesOptionsInEnglish(district)
    } else if (district && lang == 'np') {
      return getLocalBodiesOptionsInEnglish(district)
    } 
    throw new Error("District is required props in SelectLocalBody component.")
  }

  const getValue = (stringValue: string) => {
    return find(getLocalBodiesOfDistrict(district), { Name: stringValue })
  }

  return (
    <BaseSelect
      {...props}
      options={getOptions()}
      value={getValue(value)}
      defaultValue={getValue(defaultValue)}
    />
  )
}
