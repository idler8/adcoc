module.exports = function Parser(source, useRevoke = false, valueKey = 'value', labelKey = 'label', childrenKey = 'children') {
  const children = {};
  const handleNames = {};
  source.forEach(({ code, name, revoke }) => {
    if (revoke && !useRevoke) return;
    const provinceCode = code[0] + code[1];
    if (provinceCode !== '00' && !children[provinceCode]) children[provinceCode] = {};
    const cityCode = code[2] + code[3];
    if (cityCode !== '00' && !children[provinceCode][cityCode]) children[provinceCode][cityCode] = [];
    const districtCode = code[4] + code[5];
    if (districtCode !== '00') children[provinceCode][cityCode].push(districtCode);
    handleNames[code] = name;
  });
  return Object.keys(children).sort((a, b) => a * 1 > b * 1).map((provinceCode) => {
    const value = provinceCode + '0000';
    const label = handleNames[value];
    return {
      [valueKey]: value,
      [labelKey]: label,
      [childrenKey]: Object.keys(children[provinceCode]).sort((a, b) => a * 1 > b * 1).map(cityCode => {
        const value = provinceCode + cityCode + '00';
        const label = handleNames[value];
        return {
          [valueKey]: value,
          [labelKey]: label,
          [childrenKey]: children[provinceCode][cityCode].map(districtCode => {
            const value = provinceCode + cityCode + districtCode;
            const label = handleNames[value];
            return {
              [valueKey]: value,
              [labelKey]: label,
            };
          })
        };
      })
    };
  });
};