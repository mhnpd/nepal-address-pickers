import { compact, filter, get } from 'lodash'
import { compose, curry } from 'ramda'
import Districts from './data/districts.json'
import Metropolitan from './data/metropolitan.json'
import SubMetro from './data/subMetropolitan.json'
import RuralMetro from './data/ruralMunicipalities.json'
import Municipalities from './data/municipalities.json'
import Provinces from './data/provinces.json'
import type {
  DistrictInfo,
  MunicipalityInfo,
  MetropolitanInfo,
  ProvinceInfo,
  RuralMunicipalityInfo,
  SubMetroInfo
} from './types'

// Constants
const districtsInfo: DistrictInfo[] = Districts
const metropolitanInfo: MetropolitanInfo[] = Metropolitan
const ruralMetroInfo: RuralMunicipalityInfo[] = RuralMetro
const subMetroInfo: SubMetroInfo[] = SubMetro
const municipalityInfo: MunicipalityInfo[] = Municipalities
const provincesInfo: ProvinceInfo[] = Provinces

export type LocalBodies =
  | MunicipalityInfo
  | RuralMunicipalityInfo
  | SubMetroInfo
  | MetropolitanInfo

export type RawData =
  | DistrictInfo
  | MunicipalityInfo
  | MetropolitanInfo
  | ProvinceInfo
  | RuralMunicipalityInfo
  | SubMetroInfo
  | LocalBodies

interface Option {
  label: string
  value: string
  _meta: RawData
}

export function getOptionsFromRawData(
  keys: { label: string; value: string },
  rawData: RawData[]
): Option[] {
  return rawData.map((data) => ({
    label: get(data, keys.label, 'null'),
    value: get(data, keys.value, 'null'),
    _meta: data
  }))
}

const NepaliLabel = { label: 'Nepali', value: 'Name' }
const defaultLabel = { label: 'Name', value: 'Name' }
export const getOptionInNepali = curry(getOptionsFromRawData)(NepaliLabel)
export const getOptionInEnglish = curry(getOptionsFromRawData)(defaultLabel)

/** Exports */
export function getLocalBodiesOfDistrict(districtName: string): RawData[] {
  let localBodies = []
  const filterCriteria = { "District": districtName }
  localBodies = compact([
    ...filter(metropolitanInfo, filterCriteria),
    ...filter(subMetroInfo, filterCriteria),
    ...filter(municipalityInfo, filterCriteria),
    ...filter(ruralMetroInfo, filterCriteria)
  ])
  return localBodies as LocalBodies[]
}

export function getDistrictsOfProvince(provinceName: string): DistrictInfo[] {
  return filter(districtsInfo, { "Province": provinceName })
}

export const getLocalBodiesOptionsInNepali = compose(
  getOptionInNepali,
  getLocalBodiesOfDistrict
)

export const getLocalBodiesOptionsInEnglish = compose(
  getOptionInEnglish,
  getLocalBodiesOfDistrict
)

export const Options = {
  MetropolitanOptionsInNepali: getOptionInNepali(metropolitanInfo),
  MetropolitanOptionsInEnglish: getOptionInEnglish(metropolitanInfo),
  RuralMetroOptionsInNepali: getOptionInNepali(ruralMetroInfo),
  RuralMetroOptionsInEnglish: getOptionInEnglish(ruralMetroInfo),
  SubMetroOptionsInNepali: getOptionInNepali(subMetroInfo),
  SubMetroOptionsInEnglish: getOptionInEnglish(subMetroInfo),
  MunicipalityOptionsInNepali: getOptionInNepali(municipalityInfo),
  MunicipalityOptionsInEnglish: getOptionInEnglish(municipalityInfo),
  ProvinceOptionsInNepali: getOptionInNepali(provincesInfo),
  ProvinceOptionsInEnglish: getOptionInEnglish(provincesInfo),
  DistrictsOptionInNepali: getOptionInNepali(districtsInfo),
  DistrictsOptionInEnglish: getOptionInEnglish(districtsInfo)
}
