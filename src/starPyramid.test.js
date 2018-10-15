import { starPyramid } from './starPyramid';

/*
 * The starPyramid function prints a pyramid in stars(*) in a given number of height(number of rows).
 */

describe('starPyramid', () => {
  it('prints pyramid with 4 rows', () => {
    expect(starPyramid(4)).toEqual('   *   \n  ***  \n ***** \n*******');
  });

  it('prints pyramid with 12 rows', () => {
    expect(starPyramid(3)).toEqual('  *  \n *** \n*****');
  });

  it('wrong type of input is given', () => {
    expect(starPyramid('7')).toBeUndefined();
  });
});
