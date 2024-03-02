<script>
    import NavbarLinks from "./NavbarLinks.svelte";
    import OgdIcon from "./OGDIcon.svelte";
    /*import { onMount } from "svelte";

    let topPosition = 0;

    function getParentTopPosition() {
        const parentDiv = document.querySelector(".link");
        const { top } = parentDiv.getBoundingClientRect();
        topPosition = top;
    }

    onMount(getParentTopPosition);
    {#if topPosition == 0}
        <a href="/" class="link mt-auto sm:p-10">
            <OgdIcon size="160"/>
        </a>
    {/if}*/
</script>

<div class="wrapper text-secondary font-bold truncate sticky top-0 flex justify-between">
    <a href="/" class="hidden mt-auto sm:p-10">
        <OgdIcon size="160"/>
    </a>
    <NavbarLinks class="mx-auto mt-2" />
</div>

<hr class="border-1 border-white w-full mx-auto">