<script>
    import Container from "./Container.svelte";
</script>

<Container>
    <div data-testid="text-input" contenteditable />

    <button data-testid="lock-button"> </button>

    <button data-testid="wonkier-button"> </button>

    <!--
        <p>FizzBuzz!</p> 

        should be rendered when the text inside the wonkier-button starts with FizzBuzz
    -->
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