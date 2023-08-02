import {get} from "lodash"
import type {
  DistrictInfo,
  MunicipalityInfo,
  MetropolitanInfo,
  ProvinceInfo,
  RuralMunicipalityInfo,
} from './types'

type RawData =
  | DistrictInfo
  | MunicipalityInfo
  | MetropolitanInfo
  | ProvinceInfo
  | RuralMunicipalityInfo

interface Option {
  label: string;
  value: string;
  _meta: RawData;
}

export function getOptionsFromRawData(
  rawData: RawData[],
  keys: {label: string, value: string}
): Option[] {
  return rawData.map(data=>({
    label: get(data, keys.label, 'null') as string,
    value: get(data, keys.value, 'null') as string,
    _meta: data
  }))
}
