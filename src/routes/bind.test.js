import { afterEach, beforeEach, expect, it } from 'vitest';
import { fireEvent, getByRole, render, screen } from '@testing-library/svelte';
import WonkierButton from './WonkierButton.svelte';

const original = Math.random;
beforeEach(() => {
    Math.random = () => 0.1;
});
afterEach(() => {
    Math.random = original;
});

/** @param {number} n */
function* range(n) {
    for (let i = 0; i < n; ++i) yield i;
}

it('should render the correct fizzbuzz when the text content of div is changed', async () => {
    render(WonkierButton);
    const button = screen.getByTestId('wonkier-button');
    const div = screen.getByTestId('text-input');

    expect(button.textContent).toStrictEqual('FizzBuzz 0');

    await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('Fizz 3');

    await fireEvent.input(div, { target: { textContent: "Buzz" } });
    expect(button.textContent).toStrictEqual('Buzz 3');

    for (const _ of range(2)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('Buzz 5');

    await fireEvent.input(div, { target: { textContent: "FizzBuzz" } });
    expect(button.textContent).toStrictEqual('FizzBuzz 5');

    for (const _ of range(10)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('FizzBuzz 15');

    await fireEvent.input(div, { target: { textContent: "Fizz" } });
    expect(button.textContent).toStrictEqual('Fizz 15');
});
