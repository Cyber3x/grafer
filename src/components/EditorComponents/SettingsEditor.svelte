<script lang="ts">
    import {
        nodeDiameter,
        numberOfNodes,
        graphRadius,
        nodeFillColor,
        mainCanvasHeight,
        nodeStrokeColor,
        paramA,
        paramB,
        paramC,
    } from "../../Stores/stores";
    import InlineNamedInputField from "../InlineNamedInputField.svelte";
    import SettingsField from "../SettingsField.svelte";
    import SettingsGroup from "../SettingsGroup.svelte";
</script>

<div class="main">
    <SettingsGroup title="Common settings">
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
            <input slot="input" type="color" bind:value={$nodeFillColor} />
        </SettingsField>

        <SettingsField>
            <p slot="lable">Node stroke color</p>
            <input slot="input" type="color" bind:value={$nodeStrokeColor} />
        </SettingsField>
    </SettingsGroup>

    <SettingsGroup title="Labos 3">
        <InlineNamedInputField name="N" bind:value={$numberOfNodes} />
        <InlineNamedInputField name="A" bind:value={$paramA} />
        <InlineNamedInputField name="B" bind:value={$paramB} />
        <InlineNamedInputField name="C" bind:value={$paramC} />
    </SettingsGroup>
</div>

<style>
    .main {
        grid-area: settings-editor;
        background-color: rgb(40, 40, 40);
        padding: 1em;
    }

    p {
        color: whitesmoke;
        margin-bottom: 0.5em;
    }
</style>
