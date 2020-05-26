<template>
    <div class="columns" style="margin-top: 10rem">
        <div class="column">
            <h2>&#9989; {{ $t("doTitle") }}</h2>
            <ul>
                <li>&#127948; {{ $t("do1") }}</li>
                <li>&#128194; {{ $t("do2") }}</li>
                <li>&#127850; {{ $t("do31") }}{{ $t("disclaimerTitle") }}{{ $t("do32") }}</li>
                <li>&#128517; {{ $t("do4") }}</li>
                <li>&#129335; {{ $t("do5") }}</li>
            </ul>
        </div>
        <div class="column">
            <h2>&#9940; {{ $t("dontTitle") }}</h2>
            <ul>
                <li>&#128164; {{ $t("dont1") }}</li>
                <li>&#128584; {{ $t("dont2") }}</li>
                <li>&#128184; {{ $t("dont3") }}</li>
                <li>&#9749; {{ $t("dont4") }}</li>
                <li>&#129300; {{ $t("dont5") }}<a href="https://github.com/naept/bromse/">Github</a> !</li>
            </ul>

        </div>
    </div>
</template>
