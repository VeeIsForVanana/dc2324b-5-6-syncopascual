import { afterEach, beforeEach, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
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

it('should render the correct fizzbuzz classes when the text content of div is changed', async () => {
    render(WonkierButton);
    const button = screen.getByTestId('wonkier-button');
    const div = screen.getByTestId('text-input');
    const lock = screen.getByTestId('lock-button');

    expect(button.textContent).toStrictEqual('FizzBuzz 0');

    await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('Fizz 3');
    expect(button.className.split(" ")[0]).toStrictEqual('Fizz');

    await fireEvent.click(lock);
    expect(button.className.split(" ")[0]).toStrictEqual('locked');

    await fireEvent.input(div, { target: { textContent: "Buzz" } });
    expect(button.textContent).toStrictEqual('Buzz 3');
    expect(button.className.split(" ")[0]).toStrictEqual('locked');

    await fireEvent.click(lock);
    expect(button.className.split(" ")[0]).toStrictEqual('Buzz');

    await fireEvent.input(div, { target: { textContent: "Buzz" } });
    expect(button.textContent).toStrictEqual('Buzz 3');
    expect(button.className.split(" ")[0]).toStrictEqual('Buzz');

    await fireEvent.input(div, { target: { textContent: "FizzBuzz" } });
    expect(button.textContent).toStrictEqual('FizzBuzz 3');
    expect(button.className.split(" ")[0]).toStrictEqual('FizzBuzz');

    await fireEvent.input(div, { target: { textContent: "Default" } });
    expect(button.textContent).toStrictEqual('3');
    expect(button.className.split(" ")[0]).toStrictEqual('Default');

});
