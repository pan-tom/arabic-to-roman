/* works for numbers from 1 to 2999 */

const romanMap = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'XL',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
};

const toRoman = arabic => {
    if(Object.keys(romanMap).includes(`${arabic}`)) {
        return romanMap[arabic];
    }
    if(arabic > 0 && arabic < 3000) {
        const secondaryPart = parseInt(arabic.toString().slice(1));
        const primaryPart = arabic - secondaryPart;
        return toRoman(primaryPart) + toRoman(secondaryPart);
    }
    return null;
};

export default toRoman;
