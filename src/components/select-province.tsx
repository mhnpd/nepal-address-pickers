import React from 'react'
import { CustomSelectProps, BaseSelect } from './select'
import { Options } from '../utils'
import { find } from 'lodash'

export interface SelectProvinceProps extends CustomSelectProps {
  /** language: en | np */
  lang?: 'en' | 'np'
}

export const SelectProvince = ({
  lang,
  value,
  defaultValue,
  ...props
}: SelectProvinceProps): React.ReactElement => {
  const getOptions = () => {
    if (lang === 'np') {
      return Options.ProvinceOptionsInNepali
    } else {
      return Options.ProvinceOptionsInEnglish
    }
  }

  const getValue = (stringValue: string) => {
    return find(Options.ProvinceOptionsInEnglish, { Name: stringValue })
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
