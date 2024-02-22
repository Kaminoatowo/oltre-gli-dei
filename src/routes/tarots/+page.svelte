<script>
    export let data;
</script>

<div class="text-center">
    <h1 class="inline-block">L'esposizione dei tarocchi!</h1>
    <a href="../reveal" class="inline-block">Svela</a>
</div>

<ul>
    {#each data.tarots as tarot}
        <li>
            <h2>
                <span class="dot"></span>
                <a href={tarot.path}>
                    {tarot.meta.title}
                </a>
            </h2>
        </li>
    {/each}
</ul>

<style>
    a::before {
        content: "🔮 ";
        /*content: url('src/lib/img/tarots/{tarot.meta.number}.png');*/
        opacity: 0.5;
    }

    a:hover::before {
        opacity: 1;
    }
</style>