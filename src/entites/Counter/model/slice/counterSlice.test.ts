import { CounterSchema } from 'entites/Counter';
import {
    counterReducer,
    counterActions,
} from './counterSlice';

describe('counterSlice.test', () => {
    test('return dec', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('return inc', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
