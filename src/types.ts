export interface DistrictInfo {
  Name: string;
  Nepali: string;
  Headquarters: string;
  Population2011: string;
  Area: string;
  Province: string;
  LocalBodiesType: string[];
}

export interface MetropolitanInfo {
  Name: string;
  Nepali: string;
  District: string;
  Province: string;
  Population2011: string;
  AreaKm: string;
}

export interface MunicipalityInfo {
  Name: string;
  Nepali: string;
  District: string;
  Province: string;
  Population2011: string;
  Area: string;
}

export interface ProvinceInfo {
  Provinces: string;
  Nepali: string;
  Capital: string;
  AreaKm: string;
  Population2011: string;
}

export interface RuralMunicipalityInfo {
  Name: string;
  Nepali: string;
  District: string;
  Population2011: string;
  AreaKm: string;
  Density: string;
  Province: string;
}

export interface SubMetroInfo {
  Name: string;
  Nepali: string;
  District: string;
  Province: string;
  Population2011: string;
  Area: string;
}

