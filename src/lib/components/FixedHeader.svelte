<script>
    import Navbar from "./Navbar.svelte";
    import { ChessIcon } from "svelte-uicons/rounded/regular";
    import OgdIcon from "./OGDIcon.svelte";
    
    let customClass = "";
    export { customClass as class };
    export let visibility = "hidden";
</script>

<header class="wrapper text-secondary font-bold truncate sticky top-0 flex justify-between {visibility} {customClass}">
    <a href="/" class="mt-auto sm:p-10">
        <OgdIcon size="160"/>
    </a>
    <Navbar class="mx-auto mt-2" />
</header>