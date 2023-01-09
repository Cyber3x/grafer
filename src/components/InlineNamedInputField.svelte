<script lang="ts">
    export let value: number;
    export let name: string;
</script>

<div class="input-field">
    <p>{name}</p>
    <input type="number" bind:value />
</div>

<style>
    .input-field {
        display: flex;
    }

    p {
        color: whitesmoke;
        flex: 1;
        text-align: center;
    }

    input {
        flex: 4;
    }
</style>
