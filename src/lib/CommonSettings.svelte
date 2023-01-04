<script lang="ts">
    import { get } from "svelte/store";
    import {
        nodeDiameter,
        numberOfNodes,
        graphRadius,
        nodeFillColor,
    } from "../components/stores";
    import SettingsField from "./SettingsField.svelte";
</script>

<div class="main">
    <SettingsField>
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
        <p slot="lable">Nodes radius from center</p>
        <input
            slot="input"
            type="range"
            bind:value={$graphRadius}
            min="100"
            max={window.innerHeight / 2 - get(nodeDiameter) / 2}
        />
    </SettingsField>
    <SettingsField />
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
