<script>
    import Container from "./Container.svelte";
    export let value = 0;
    export let content = "FizzBuzz";
    export let locked = false;

    function handleClick() {
        value += Math.floor(Math.random() * 10);

        if (value % 15 == 0) {
            content = "FizzBuzz"
        }
        else if (value % 3 == 0) {
            content = "Fizz"
        }
        else if (value % 5 == 0) {
            content = "Buzz"
        }
        else {
            content = "Default"
        }
    }
</script>

<Container>
    <div data-testid="text-input" contenteditable bind:textContent={ content } />

    <button data-testid="lock-button" on:click={() => {locked = !locked}}>Lock</button>

    <button data-testid="wonkier-button" on:click={handleClick} disabled={locked} class="{locked ? 'locked' : content}">
        {#if content == "FizzBuzz"}
            FizzBuzz {value}
        {:else if content == "Fizz"}
            Fizz {value}
        {:else if content == "Buzz"}
            Buzz {value}
        {:else}
            {value}
        {/if}
    </button>

    {#if content.startsWith("FizzBuzz")}
        <p>FizzBuzz!</p>
    {/if}
</Container>


<style>
    [contenteditable] {
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 4px;
    }
    button {
        margin: 1em;
        transform: rotate(0deg);
        transition: transform 0.5;
    }

    .Fizz {
        background-color: red;
        color: white;
    }

    .Buzz {
        background-color: green;
        color: white;
    }

    .FizzBuzz {
        background-color: blue;
        color: white;
    }

    .locked {
        text-decoration: line-through;
    }
</style>