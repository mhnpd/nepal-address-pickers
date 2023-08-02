import React from 'react'
import { CustomSelectProps, BaseSelect } from './select'
import { Options, getDistrictsOfProvince, getOptionInEnglish, getOptionInNepali } from '../utils'
import { find } from 'lodash'
import { compose } from 'ramda'

export interface SelectDistrictProps extends CustomSelectProps {
  /** language: en | np */
  lang?: 'en' | 'np'
  /** Province: limit the district to certain province */
  province?: string
}

export const SelectDistrict = ({
  lang,
  province,
  value,
  defaultValue,
  ...props
}: SelectDistrictProps): React.ReactElement => {
  const getOptions = () => {
    console.log(province)
    if (province && lang == 'np') {
      return compose(getOptionInNepali, getDistrictsOfProvince)(province)
    } else if (province && lang == 'en') {
      return compose(getOptionInEnglish, getDistrictsOfProvince)(province)
    } else if (!province && lang == 'np') {
      return Options.DistrictsOptionInNepali
    } else if (!province && lang === 'en') {
      return Options.DistrictsOptionInEnglish
    } else {
      return Options.DistrictsOptionInEnglish
    }
  }

  const getValue = (stringValue: string) => {
    return find(Options.DistrictsOptionInEnglish, { Name: stringValue })
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
