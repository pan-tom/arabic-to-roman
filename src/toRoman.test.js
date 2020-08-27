import toRoman from './toRoman';

describe('toRoman()', () => {
    it.each([
        [0, null],
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],
        [20, 'XX'],
        [30, 'XXX'],
        [35, 'XXXV'],
        [137, 'CXXXVII'],
        [1500, 'MD'],
        [1721, 'MDCCXXI'],
        [2019, 'MMXIX'],
        [2020, 'MMXX'],
        [2999, 'MMCMXCIX'],
        [3000, null],
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman);
    });
});
