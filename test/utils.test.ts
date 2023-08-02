import {
  getOptionsFromRawData,
  getDistrictsOfProvince,
  getLocalBodiesOfDistrict,
  LocalBodies
} from '../src/utils'
import districts from '../src/data/districts.json'
import { DistrictInfo } from '../src/types'

describe('getOptionsFromRawData', () => {
  const rawData = districts as unknown as DistrictInfo[]

  it('should extract options correctly', () => {
    const keys = { label: 'Nepali', value: 'Name' }
    const options = getOptionsFromRawData(keys, rawData)

    const expectedOptions = rawData.map((data) => ({
      label: data.Nepali,
      value: data.Name,
      _meta: data
    }))

    expect(options).toEqual(expectedOptions)
  })

  it('should handle missing properties', () => {
    const keys = { label: 'NonExistentLabel', value: 'NonExistentValue' }
    const options = getOptionsFromRawData(keys, rawData)

    const expectedOptions = rawData.map((data) => ({
      label: 'null', // Since properties don't exist, we expect 'null' as label and value
      value: 'null',
      _meta: data
    }))

    expect(options).toEqual(expectedOptions)
  })
})

describe('getDistrictsOfProvince', () => {
  it('should return districts of the specified province', () => {
    const provinceName = 'Province No. 1'
    const districts = getDistrictsOfProvince(provinceName)

    districts.forEach((district) => {
      expect(district.Province).toBe(provinceName)
    })
  })

  it('should return an empty array for non-existent province', () => {
    const provinceName = 'NonExistentProvince'
    const districts = getDistrictsOfProvince(provinceName)

    expect(districts).toEqual([])
  })
})

describe('getLocalBodiesOfDistrict', () => {
  it('should return local bodies of the specified district', () => {
    const districtName = 'Parbat'
    const localBodies = getLocalBodiesOfDistrict(districtName)
    localBodies.forEach((localBody) => {
      expect((localBody as LocalBodies).District ).toBe(districtName)
    })
  })

  it('should return an empty array for non-existent district', () => {
    const districtName = 'NonExistentDistrict'
    const localBodies = getLocalBodiesOfDistrict(districtName)
    expect(localBodies).toEqual([])
  })
})
