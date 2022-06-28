import defaultSource from '../source/index.json';
export function getHandle(source) {
  const handleChildren = {};
  const handleValues = {};
  source.forEach((res) => {
    const code = res.code;
    const provinceCode = code[0] + code[1];
    if (provinceCode !== '00' && !handleChildren[provinceCode]) handleChildren[provinceCode] = {};
    const cityCode = code[2] + code[3];
    if (cityCode !== '00' && !handleChildren[provinceCode][cityCode]) handleChildren[provinceCode][cityCode] = {};
    const districtCode = code[4] + code[5];
    if (districtCode !== '00') handleChildren[provinceCode][cityCode][districtCode] = 1;
    handleValues[code] = res;
  });
  return [ handleChildren, handleValues ];
}
export function getParser(options, handleValues) {
  const { revokeKey = 'disabled', valueKey = 'value', labelKey = 'label', childrenKey = 'children', slice = 2 } = options;
  const forEach = (children, prefix, suffix) => {
    const nextSuffix = suffix.slice(slice);
    return Object.keys(children).sort((a, b) => a * 1 > b * 1).map((code) => {
      const value = prefix + code + suffix;
      const values = handleValues[value];
      const response = { [valueKey]: value };
      if (suffix) response[childrenKey] = forEach(children[code], prefix + code, nextSuffix);
      if (values) {
        response[labelKey] = values.name || '市辖区';
        if (revokeKey && values.revoke) response[revokeKey] = true;
      }
      return response;
    });
  };
  return forEach;
}
export default function Parser(source = defaultSource, options = {}) {
  const [ handleChildren, handleValues ] = getHandle(source);
  const forEach = getParser(options, handleValues);
  return forEach(handleChildren, '', '0000');
}