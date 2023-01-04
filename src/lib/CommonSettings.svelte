<script lang="ts">
    import {
        nodeDiameter,
        numberOfNodes,
        graphRadius,
        nodeFillColor,
        mainCanvasHeight,
        nodeStrokeColor,
    } from "../components/stores";
    import SettingsField from "./SettingsField.svelte";
</script>

<div class="main">
    <SettingsField>
        <p slot="lable">Number of nodes</p>
        <input
            slot="input"
            type="number"
            bind:value={$numberOfNodes}
            min="1"
            step="1"
            max="500"
        />
    </SettingsField>
    <SettingsField>
        <p slot="lable">Graph radius</p>
        <input
            slot="input"
            type="range"
            bind:value={$graphRadius}
            min="100"
            max={$mainCanvasHeight / 2 - $nodeDiameter / 2}
        />
    </SettingsField>
    <SettingsField>
        // TODO: create a SettingsGroup which has a title and many fields, can
        be collapsed
        <p slot="lable">Node diameter</p>
        <input
            slot="input"
            type="range"
            bind:value={$nodeDiameter}
            min="10"
            max="100"
        />
    </SettingsField>
    <SettingsField>
        <p slot="lable">Nodes fill color</p>
        <input slot="input" type="text" bind:value={$nodeFillColor} />
    </SettingsField>

    <SettingsField>
        <p slot="lable">Node stroke color</p>
        <input slot="input" type="text" bind:value={$nodeStrokeColor} />
    </SettingsField>
</div>

<style>
    .main {
        z-index: 10;
        flex: 1;
        background-color: rgb(40, 40, 40);
        padding: 1em;
    }

    p {
        color: whitesmoke;
        margin-bottom: 0.5em;
    }
</style>
