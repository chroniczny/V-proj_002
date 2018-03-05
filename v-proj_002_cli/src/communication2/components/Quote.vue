<template>
    <div>
        <div class="title">
            <slot name="title"></slot> <!-- name for slot -->
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
          <!-- slot is named that is why its not default
          and when it appears attr: subtitle it'll replace context of slot tag -->
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }

    .title {
        font-style: italic;
    }
</style>
