<script>
    import Tarot from '../../../lib/components/Tarot.svelte';
    import NextPrev from '../../../lib/components/NextPrev.svelte';
    export let data;
    const { title, number, source, Content } = data;
    let tarotImg = `../src/lib/img/tarots/cards/${number}.png`;
    console.log(tarotImg);

    let previousTarot = number > 0 ? { number: number - 1 } : { number: 21 };
    let nextTarot = number < 21 ? { number: number + 1 } : { number: 0 };
    let previousLink = `/tarots/${previousTarot.number}`;
    let nextLink = `/tarots/${nextTarot.number}`;
</script>

<svelte:head>
    <title>My blog - {title}</title>
    <meta property="og:title" content="{title}" />
</svelte:head>

<Tarot {title} {number} {tarotImg} {source} {Content} />

<NextPrev {previousLink} {nextLink} {previousTarot} {nextTarot} />
