<script lang="ts">
    import { get } from "svelte/store";
    import { GConsole } from "../../Stores/stores";
    import { isConsoleOpen } from "../../Stores/UIStore";

    const toggleOpen = () => {
        isConsoleOpen.update((isOpen) => !isOpen);
    };
</script>

<div class="main" class:open={$isConsoleOpen}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header">
        <div class="toggle" on:click={toggleOpen}>
            <input type="checkbox" bind:checked={$isConsoleOpen} />
            <p>Console</p>
        </div>

        <button class="clear-output" on:click={() => GConsole.clear()}
            >Clear output</button
        >
    </div>

    {#if $isConsoleOpen}
        <div class="content">
            {#each $GConsole as line}
                <p class="line">> {line}</p>
            {/each}
        </div>
    {/if}
</div>

<style>
    .main {
        z-index: 10;
        /* grid-area: console; */
        grid-column-start: 1;
        grid-column-end: span 2;
        grid-row-start: 5;
        grid-row-end: 4;
        display: flex;
        flex-direction: column;

        background-color: #505050;
    }

    .open {
        grid-row-end: 3;
        height: 100%;
    }

    .header {
        background-color: rgb(255, 255, 255, 0.15);
        color: whitesmoke;
        font-size: large;
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    .header input {
        margin-right: 0.5em;
        border: none;
    }

    .header .clear-output {
        background-color: rgb(116, 255, 123, 0.75);
        border: none;
        padding: 0.7em;
        cursor: pointer;
    }

    .header .clear-output:hover {
        background-color: rgb(116, 255, 123);
    }

    .header .toggle {
        padding-left: 0.5em;
        align-items: center;
        display: flex;
        flex: 1;
    }

    .content {
        color: whitesmoke;
        padding: 0.5em;
        line-height: 1.5em;
        flex: 9;
        overflow: scroll;
    }
</style>
