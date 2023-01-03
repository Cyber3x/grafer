<script lang="ts">
  import { sketch } from "./components/Sketch";

  import {
    d,
    isDialogMainSettingsVisible,
    numberOfNodes,
  } from "./components/stores";

  import P5 from "p5-svelte";
</script>

<main class="main">
  <P5 {sketch} />
  {#if $isDialogMainSettingsVisible}
    <div class="settings">
      <p>Diameter</p>
      <input type="range" bind:value={$d} min="10" max="100" />
      <p>Number of nodes</p>
      <input type="number" bind:value={$numberOfNodes} min="1" step="1" />
    </div>
  {/if}
</main>

<style>
  .main {
    max-height: 100vh;
    overflow: hidden;
    display: flex;
  }

  .settings {
    background-color: antiquewhite;
    padding: 1em;
    border-radius: 0.5em;
    position: absolute;
    top: 1em;
    left: 1em;
  }
</style>
