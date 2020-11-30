const binary = require('../binary');

describe('A binary chop kata', function() {
    it('should return -1 when the array does not contain the target', function () {
        const target = 1;
        const array = [];
        const result = binary(target, array)
        expect(result).toBe(-1);
    });
});