<script>
    export let data;
    const uniqueCategories = [...new Set(data.posts.map(post => post.meta.categories).flat())];
</script>

<h1>Blog</h1>

<ul>
    {#each data.posts as post}
        <li>
            <h2>
                <a href={post.path}>
                    {post.meta.title}
                </a>
            </h2>
            Published on {post.meta.date}
        </li>
    {/each}
</ul>

<h2>Categories</h2>

<ul>
    {#each uniqueCategories as cat}
        <li>
            <h3>
                <a href="/blog/category/{cat}">{cat}</a>
            </h3>
        </li>
    {/each}
</ul>