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
        showNodesIds,
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
                max={$mainCanvasHeight * 2}
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
        <InlineNamedInputField name="Nodes fill color">
            <input type="color" bind:value={$nodeFillColor} />
        </InlineNamedInputField>

        <InlineNamedInputField name="Node stroke color">
            <input type="color" bind:value={$nodeStrokeColor} />
        </InlineNamedInputField>

        <InlineNamedInputField name="Show nodes id">
            <input type="checkbox" bind:checked={$showNodesIds} />
        </InlineNamedInputField>
    </SettingsGroup>

    <SettingsGroup title="Labos 3">
        <InlineNamedInputField name="N">
            <input type="number" bind:value={$numberOfNodes} />
        </InlineNamedInputField>
        <InlineNamedInputField name="A">
            <input type="number" bind:value={$paramA} />
        </InlineNamedInputField>
        <InlineNamedInputField name="B">
            <input type="number" bind:value={$paramB} />
        </InlineNamedInputField>
        <InlineNamedInputField name="C">
            <input type="number" bind:value={$paramC} />
        </InlineNamedInputField>
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
