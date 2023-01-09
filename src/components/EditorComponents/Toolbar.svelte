<script lang="ts">
</script>

<div class="container">
    <div class="btn-mode">Create</div>
    <div class="btn-mode">Edit</div>
    <div class="btn-mode">Analyze</div>
</div>

<style>
    .container {
        background: #505050;
        display: flex;
        grid-area: toolbar;
    }

    .btn-mode {
        display: flex;
        align-items: center;
        color: rgb(245, 245, 245, 0.85);
        cursor: pointer;
        height: 100%;
        padding: 0 1em;
    }

    .btn-mode:hover {
        background: rgba(0, 0, 0, 0.5);
        color: rgb(116, 255, 123);
    }
</style>
