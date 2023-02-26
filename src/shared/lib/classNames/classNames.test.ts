import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
});

describe('classNames', () => {
    test('with mods', () => {
        expect(classNames('someClass', { 'cls1': true }, [])).toBe('someClass cls1');
    });
});

describe('classNames', () => {
    test('with mods 2', () => {
        expect(classNames('someClass',
            {
                'hovered': true,
                'down': false,
            },
            [],
        )).toBe('someClass hovered');
    });
});

describe('classNames', () => {
    test('with mods 3 undefined', () => {
        expect(classNames('someClass',
            {
                'hovered': true,
                'down': undefined,
            },
            [],
        )).toBe('someClass hovered');
    });
});

describe('classNames', () => {
    test('with additional', () => {
        expect(classNames(
            'someClass',
            {},
            [
                'cls1',
                'cls2',
            ],
        )).toBe('someClass cls1 cls2');
    });
});