<!-- about/+Page.svelte -->
<svelte:head>
    <title>Contattami</title>
</svelte:head>

<h1 class="my-2">Contattami!</h1>

<div class="m-2 p-2">
    <p>Vuoi chiedermi qualcosa, o scambiare due chiacchiere? </p>
    
    <p>Scrivimi a <a href="mailto:j.cocomello@gmail.com"> oppure compila il form qui sotto.</p>    

</div>

<hr class="border-1 border-white w-full mx-auto my-2">

<div class="bg-tertiary m-4 p-2 rounded-md">
    <h2 class="text-center">Scrivimi!</h2>
    <hr class="border-1 border-white w-1/2 mx-auto my-2">
    <form action="https://formspree.io/f/moqyqzqz" method="POST" >
        <div class="flex justify-around">
            <div>
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" required><br>
            
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required><br>        
            </div>
            
            <div>
                <label for="message">Messaggio</label>
                <textarea id="message" name="message" required></textarea><br>
            </div>
        </div>
        
    
        <button type="submit" class="bg-secondary p-1 m-1 block rounded-lg shadow-md shadow-primary">Invia</button>
    </form>
    
</div>


<style>
    input, textarea {
        display: block;
        margin: 0.5rem 0;
        border-radius: 0.375em;
        border-color: #151b40;
        border-width: 1px;
    }
</style>