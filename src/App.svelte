<script lang="ts">
  import { sketch } from "./components/Sketch";

  import P5 from "p5-svelte";
  import CommonSettings from "./lib/CommonSettings.svelte";
  import { mainCanvasParrent } from "./components/stores";
  $: if ($mainCanvasParrent) console.log($mainCanvasParrent);
</script>

<main>
  <div class="modes">
    <div class="btn-mode">Create</div>
    <div class="btn-mode">Edit</div>
    <div class="btn-mode">Analyze</div>
  </div>
  <div class="body">
    <div bind:this={$mainCanvasParrent} class="main-canvas-parent">
      <P5 {sketch} />
    </div>
    <CommonSettings />
  </div>
</main>

<style>
  main {
    height: 100vh;
  }
  .body {
    display: flex;
  }

  .btn-mode {
    padding: 0.5em 1em;
    color: whitesmoke;
    cursor: pointer;
  }

  .btn-mode:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .modes {
    background: #505050;
    display: flex;
  }

  .main-canvas-parent {
    flex: 4;
    height: 100vh;
  }
</style>
