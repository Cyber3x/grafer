<script lang="ts">
    export let title: string = "Settings Group";
    let expanded: boolean = true;

    const handleExpandedToggle = () => {
        expanded = !expanded;
    };
</script>

<div class="main">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header" on:click={handleExpandedToggle}>
        <input type="checkbox" bind:checked={expanded} />
        <p>
            {title}
        </p>
    </div>
    {#if expanded}
        <slot />
    {/if}
</div>

<style>
    .main {
        margin-bottom: 1em;
    }

    .header {
        display: flex;
        background-color: rgb(255, 255, 255, 0.15);
        padding: 0.5em;
    }

    .header input {
        margin-right: 0.5em;
    }

    p {
        color: gainsboro;
    }

    :last-of-type {
        margin-bottom: 0;
    }
</style>
