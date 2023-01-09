<div class="main input-field">
    <slot name="lable">
        <p class="error">Missing lable</p>
    </slot>

    <slot name="input">
        <p class="error">Missing input</p>
    </slot>
</div>

<style>
    .main {
        margin-bottom: 0.5em;
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
