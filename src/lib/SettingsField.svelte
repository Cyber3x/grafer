<div class="main">
    <slot name="lable" class="lable">
        <p class="error">Missing lable</p>
    </slot>

    <slot name="input">
        <p class="error">Missing input</p>
    </slot>
</div>

<style>
    .main {
        margin-bottom: 0.5em;
        padding: 0.5em;
        background-color: rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    :last-child {
        margin-bottom: 0;
    }

    .error {
        color: red;
    }
</style>
