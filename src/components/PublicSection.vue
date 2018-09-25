<template>
    <div id="public-section">
        <div id="content">
            <div id="content-title">Firefly</div>
            <div class="card">
                Content
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PublicSection',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../style/global.scss";

#content {
    margin:auto;
    margin-top: 164px;
    width: 400px;
    text-align: left;
}
</style>
