<template>
    <div id="topbar">
        <div id="topbar-inner">
            <div id="topbar-controls">test</div>
            <div id="topbar-title">Firefly</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../../style/global.scss";

#topbar {
    background-color: $color-main;
    color: white;
    text-align: center;
}

#topbar-inner {
    margin: auto;
    width: $viewport;
    text-align: left;
}

#topbar-title {
    font-family: 'Lobster', cursive;
    font-size: 34px;
}

#topbar-controls {
    float: right;
}
</style>
