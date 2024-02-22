<script>
    export let previousLink, nextLink, previousTarot, nextTarot;
</script>

<ul class="list-none text-center p-5">
    <li class="mx-20">
        <a href="{previousLink}" >
            <img src="../src/lib/img/tarots/{previousTarot.number}.png" alt="Previous Tarot" />
            <span class="text-tertiary">
                ⪡
            </span>
        </a>
    </li>
    <li class="mx-20">
        <a href="{nextLink}" >
            <img src="../src/lib/img/tarots/{nextTarot.number}.png" alt="Previous Tarot" />
            <span class="text-tertiary">
                ⪢
            </span>
        </a>
    </li>
</ul>

<style lang="postcss">

li {
    width: 10%;
    display: inline-block;
    vertical-align: top;
    align-items: center;
}
img {
    max-width: 100%;
    border-radius: 5em;
    border: 3px solid #bf6e26;
}
</style>
