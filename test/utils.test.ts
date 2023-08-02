import { getOptionsFromRawData } from '../src/utils';
import districts from "../src/data/districts.json"
import { DistrictInfo } from '../src/types'


describe('getOptionsFromRawData', () => {
  const rawData = districts as unknown as DistrictInfo[]

  it('should extract options correctly', () => {
    const keys = { label:'Nepali', value: 'Name' };
    const options = getOptionsFromRawData(rawData, keys);

    const expectedOptions = rawData.map(data => ({
      label: data.Nepali,
      value: data.Name,
      _meta: data
    }));

    expect(options).toEqual(expectedOptions);
  });

  it('should handle missing properties', () => {
    const keys = { label: 'NonExistentLabel', value: 'NonExistentValue' };
    const options = getOptionsFromRawData(rawData, keys);

    const expectedOptions = rawData.map(data => ({
      label: 'null', // Since properties don't exist, we expect 'null' as label and value
      value: 'null',
      _meta: data
    }));

    expect(options).toEqual(expectedOptions);
  });
});
