const { binary, chop } = require('../binary');

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
    it('should return the index when the array does contain the target', function () {
        const target = 4;
        const array = [1,'a',2,'b',3,true,4,false];
        const result = binary(target, array)
        expect(result).toBe(6);
    });
});
describe('the chop', function() {
    it('should chop an array with an even amount of items into two of equal length', function() {
        const result = chop([0,1]);
        expect(result[0]).toHaveLength(1);
        expect(result[0][0]).toBe(0);
        expect(result[1]).toHaveLength(1);
        expect(result[1][0]).toBe(1);
    });
    it('should chop an array with an even amount of items into two of equal length', function() {
        const result = chop([0,1,2,3,4,5,6,7,8,9]);
        expect(result[0]).toHaveLength(5);
        expect(result[0][0]).toBe(0);
        expect(result[1]).toHaveLength(5);
        expect(result[1][0]).toBe(5);
    });
    it('should chop an array with an odd amount of items into two, the first containing one item more', function() {
        const result = chop([0,1,2]);
        expect(result[0]).toHaveLength(1);
        expect(result[0][0]).toBe(0);
        expect(result[1]).toHaveLength(2);
        expect(result[1][0]).toBe(1);
        expect(result[1][1]).toBe(2);
    });
    it('should chop an array with an odd amount of items into two, the first containing one item more', function() {
        const result = chop([0,1,2,3,4,5,6,7,8,9,10]);
        expect(result[0]).toHaveLength(5);
        expect(result[1]).toHaveLength(6);
    });
    it('should handle an array of length 1', function() {
        const result = chop([0]);
        expect(result[0]).toHaveLength(1);
        expect(result[1]).toHaveLength(0);
    });
});
