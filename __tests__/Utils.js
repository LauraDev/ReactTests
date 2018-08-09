import {hasEvenNumber, hasSpace} from '../Utils/index'

it('Check utils hasEvenNumber method', () => {
    expect(hasEvenNumber([1,3,5,7,11,12])).toBe(true)
});

it('Check utils hasSpace method', () => {
    expect(hasSpace('Hello Word')).toBe(true)
});