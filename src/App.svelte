<script lang="ts">
  import CanvasWrapper from "./components/EditorComponents/CanvasWrapper.svelte";
  import Toolbar from "./components/EditorComponents/Toolbar.svelte";
  import Console from "./components/EditorComponents/Console.svelte";
  import SettingsEditor from "./components/EditorComponents/SettingsEditor.svelte";
</script>

<main>
  <Toolbar />

  <CanvasWrapper />
  <Console />

  <SettingsEditor />
</main>

<style>
  main {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 5% 75% 20%;
    grid-template-rows: 5% 70% 21% 4%;
    grid-template-areas:
      "toolbar toolbar toolbar"
      "canvas canvas settings-editor"
      "console console settings-editor"
      "console console settings-editor";
  }
</style>
