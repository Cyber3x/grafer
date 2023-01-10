<script lang="ts">
    export let name: string;
</script>

<div class="input-field">
    <p>{name}</p>
    <slot />
</div>

<style>
    .input-field {
        display: flex;
        margin-bottom: 0.5em;
    }

    p {
        color: whitesmoke;
        flex: 1;
        align-self: center;
    }

    .input-field :global(input) {
        flex: 1;
    }

    :last-of-type {
        margin-bottom: 0;
    }
</style>
