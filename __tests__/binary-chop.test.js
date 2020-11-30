const binary = require('../binary');

describe('A binary chop kata', function() {
    it('should return -1 when the array does not contain the target', function () {
        const target = 1;
        const array = [];
        const result = binary(target, array)
        expect(result).toBe(-1);
    });
    it('should return -1 when the array does not contain the target', function () {
        const target = 1;
        const array = [2];
        const result = binary(target, array)
        expect(result).toBe(-1);
    });
    it('should return -1 when the array does not contain the target', function () {
        const target = 1;
        const array = [2,3,4];
        const result = binary(target, array)
        expect(result).toBe(-1);
    });
    it('should return the index when the array does contain the target', function () {
        const target = 1;
        const array = [1];
        const result = binary(target, array)
        expect(result).toBe(0);
    });
    it('should return the index when the array does contain the target', function () {
        const target = 1;
        const array = [2,3,4,1];
        const result = binary(target, array)
        expect(result).toBe(3);
    });
    it('should return the index when the array does contain the target', function () {
        const target = 2;
        const array = [1,2,3,4];
        const result = binary(target, array)
        expect(result).toBe(1);
    });
});