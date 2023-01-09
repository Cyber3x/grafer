<script lang="ts">
    import { sketch } from "../../lib/Sketch";
    import P5 from "p5-svelte";
    import { mainCanvasHeight, mainCanvasWidth } from "../../Stores/stores";
    import { isConsoleOpen } from "../../Stores/UIStore";
</script>

<div
    class="canvas-wrapper"
    class:expanded={!$isConsoleOpen}
    bind:clientHeight={$mainCanvasHeight}
    bind:clientWidth={$mainCanvasWidth}
>
    <P5 {sketch} />
</div>

<style>
    .canvas-wrapper {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        background-color: aqua;
    }

    .expanded {
        grid-row-end: 4;
    }
</style>
