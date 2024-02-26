<script>
    import Navbar from "./Navbar.svelte";
    import { ChessIcon } from "svelte-uicons/rounded/regular";
    import OgdIcon from "./OGDIcon.svelte";
    
    export let visibility;
</script>

<header class="h-{visibility} wrapper text-secondary font-bold truncate sticky top-0 flex justify-center">
    <a href="/" class="h-5 mt-2 sm:p-10">
        <OgdIcon size="160"/>
    </a>
    <Navbar />
</header>