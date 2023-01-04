<script lang="ts">
    import { sketch } from "../components/Sketch";
    import P5 from "p5-svelte";
    import { mainCanvasHeight, mainCanvasWidth } from "../components/stores";
</script>

<div
    class="canvas-wrapper"
    bind:clientHeight={$mainCanvasHeight}
    bind:clientWidth={$mainCanvasWidth}
>
    <P5 {sketch} />
</div>

<style>
    .canvas-wrapper {
        background-color: aqua;
        flex: 4;
        width: 50vw;
        height: 100vh;
    }
</style>
