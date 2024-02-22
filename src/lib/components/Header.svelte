<script>
    import Title from "./Title.svelte";
    import Navbar from "./Navbar.svelte";
    export const title = "Oltre gli Dei";
</script>

<header class="wrapper text-secondary font-bold truncate">
    <a href="/" class="text-secondary">
        <h1 class="m-5 h-5">
            <Title {title} color="text-black" x="ml-1" y="mt-1" z="z-10"/>
            <Title {title} color="text-quinternary" x="ml-0.5" y="mt-0.5" z="z-10"/>
            <Title {title} color="text-secondary"/>
        </h1>
    </a>
    
    <Navbar />
    
    <hr class="border-1 border-white w-full mx-auto">
</header>
