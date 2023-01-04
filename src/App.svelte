<script lang="ts">
  import CommonSettings from "./lib/CommonSettings.svelte";
  import CanvasWrapper from "./lib/CanvasWrapper.svelte";
</script>

<main>
  <div class="modes">
    <div class="btn-mode">Create</div>
    <div class="btn-mode">Edit</div>
    <div class="btn-mode">Analyze</div>
  </div>
  <div class="body">
    <CanvasWrapper />
    <CommonSettings />
  </div>
</main>

<style>
  main {
    height: 100vh;
    overflow: hidden;
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
</style>
