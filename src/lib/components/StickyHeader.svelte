<script>
    import sticky from './sticky.js';
    
    import Navbar from "./Navbar.svelte";
    import { ChessIcon } from "svelte-uicons/rounded/regular";
    import OgdIcon from "./OGDIcon.svelte";

    export let stickToTop = true;

    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
</script>


<header>
    {#if !stickToTop}
        <slot />
    {/if}

    <a href="/" class="mt-auto sm:p-10">
        <OgdIcon size="160"/>
    </a>
    <Navbar class="mx-auto mt-2" />

    {#if stickToTop}
        <slot />
    {/if}
</header>
