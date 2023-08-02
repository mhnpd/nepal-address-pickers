export interface DistrictInfo {
  Name: string
  Nepali: string
  Headquarters: string
  Population_2011: string
  Area_km2: number | string
  Province: string
  LocalBodiesType: string[]
}

export interface MetropolitanInfo {
  Name: string
  Nepali: string
  District: string
  Province: string
  Population_2011: string
  Area_km2: number | string
}

export interface MunicipalityInfo {
  Name: string
  Nepali: string
  District: string
  Province: string
  Population_2011: string
  Area_km2: number | string
}

export interface ProvinceInfo {
  Provinces: string
  Nepali: string
  Capital: string
  Area_km2: number | string
  Population_2011: string
}

export interface RuralMunicipalityInfo {
  Name: string
  Nepali: string
  District: string
  Population_2011: string
  Area_km2: number | string
  Density: string
  Province: string
}

export interface SubMetroInfo {
  Name: string
  Nepali: string
  District: string
  Province: string
  Population_2011: string
  Area_km2: number | string
}

export type PossibleKeys =
  | keyof DistrictInfo
  | keyof MunicipalityInfo
  | keyof MetropolitanInfo
  | keyof ProvinceInfo
  | keyof RuralMunicipalityInfo
