<script>
    import Navbar from "./Navbar.svelte";
    import { ChessIcon } from "svelte-uicons/rounded/regular";
    
    export let visibility;
</script>

<header class="h-{visibility} wrapper text-secondary font-bold truncate sticky top-0 flex justify-center">
    <a href="/" class="h-5 p-4 sm:p-10">
        <ChessIcon size="32"/>
    </a>
    <Navbar />
</header>