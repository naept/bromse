<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <h2 class="subtitle is-4">&#9989; {{ $t("doTitle") }}</h2>
                <ul>
                    <li>&#127948; {{ $t("do1") }}</li>
                    <li>&#128194; {{ $t("do2") }}</li>
                    <li>&#127850; {{ $t("do31") }}{{ $t("disclaimerTitle") }}{{ $t("do32") }}</li>
                    <li>&#128517; {{ $t("do4") }}</li>
                    <li>&#129335; {{ $t("do5") }}</li>
                </ul>
            </div>
            <div class="column">
                <h2 class="subtitle is-4">&#9940; {{ $t("dontTitle") }}</h2>
                <ul>
                    <li>&#128164; {{ $t("dont1") }}</li>
                    <li>&#128584; {{ $t("dont2") }}</li>
                    <li>&#128184; {{ $t("dont3") }}</li>
                    <li>&#9749; {{ $t("dont4") }}</li>
                    <li>&#129300; {{ $t("dont5") }}<a target="_blank" rel="noopener noreferrer" href="https://github.com/naept/bromse/">Github</a> !</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<style scoped>
.columns {
    margin-top: 10rem;
    margin-bottom: 10rem !important;
}
.column {
    margin-left: 3rem; 
    margin-right: 3rem
}
h2.subtitle {
    margin-bottom: 0.5rem;
}
li {
    margin-bottom: 0.25rem;
}
</style>