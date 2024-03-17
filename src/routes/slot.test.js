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

it('should render the correct number of container children based on fizzbuzz', async () => {
    render(WonkierButton);
    const button = screen.getByTestId('wonkier-button');
    const container = screen.getByTestId('container');
    expect(container.children.length).toStrictEqual(4);

    await fireEvent.click(button);
    expect(container.children.length).toStrictEqual(3);
});
