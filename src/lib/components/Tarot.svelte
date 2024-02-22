<script>
    export let title, tarotImg, source, Content;
</script>


<h1 class="text-center m-5 h-auto mx-auto">
    {title}
</h1>

<div class="h-auto flex flex-row items-center justify-center">
    
    <img src="{tarotImg}" alt="{title}" class="w-1/2 px-2" />

    <div class="bg-quaternary px-2 rounded border-2 border-solid border-tertiary">
        <Content />
        <span class="text-xs text-tertiary">Fonte: <a href="{source}" target="_blank">Wikipedia</a></span>
    </div>
</div>