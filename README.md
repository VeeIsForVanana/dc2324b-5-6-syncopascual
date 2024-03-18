# Assignment 5+6: Wonkier Button

Edit the `src/routes/WonkierButton.svelte` component and a `src/routesContainer.svelte` component that have the following behaviors below.
Note that `wonkier-button`, `lock-button`, and `text-input`, `container` refers to the HTML elements with the said `data-testid`.

### For the `WonkierButton.svelte`
1. Modify the `Container.svelte` component such that `container` can have children.

1. The `wonkier-button` must have the same behavior as the `WonkyButton` from Assignment #1+2 but also changes the class of the button:
    - The text inside the `wonkier-button` must always depend on the latest `value`.
    - The `value` must have a default value of `0`.
    - If the `value` is divisible by 3, the text content must be `Fizz {value}` and the class must be `Fizz`.
    - If the `value` is divisible by 5, the text content must be `Buzz {value}` and the class must be `Buzz`.
    - If the `value` is divisible by 3 and 5, the text must be `FizzBuzz {value}` and the class must be `FizzBuzz`.
    - Otherwise, the text must be `{value}` and the class must be `Default`.
    - Whenever the button is clicked, the `value` is incremented by a random integer from `[0,10)`.

1. The `wonkier-button`'s class must also changed to the text content of `text-input`.
    - For example, when the text on the `wonkier-button` is `Fizz 3`, typing `Buzz` on `text-input` will change the `wonkier-button`'s text to `Buzz 3` and its class to `Buzz`.
    - Another example, when the text on the `wonkier-button` is `Fizz 3`, typing `Default` on `text-input` will change the `wonkier-button`'s text to `3` and its class to `Default`.

1. Clicking the `lock-button` will change the `wonkier-button`'s class to `locked` and disable `wonkier-button`.
    - The `lock-button` must not affect the `wonkier-button`'s text.
    - Clicking the `lock-button` again will "unlock" the `wonkier-button` and allow changes to the `wonkier-button`'s class. 

1. The `WonkierButton.svelte` component must render an additional element `<p>FizzBuzz!</p>` inside the `<Container>` tag when the `wonkier-button`'s text starts with `FizzBuzz`. 
   
> [!IMPORTANT]
> Please only edit the `src/routes/WonkierButton.svelte` and `src/routes/Container.svelte` files.
