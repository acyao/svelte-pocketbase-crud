<script>
    import { page } from '$app/stores';
</script>
<h1>Welcome to SvelteKit</h1>

<nav>
    <ul>
        <li aria-current="{$page.url.pathname === '/' ? 'page' : undefined}">
            <a href="/">Home</a>
        </li>
        <li aria-current="{$page.url.pathname === '/create' ? 'page' : undefined}">
            <a href="/create">Create</a>
        </li>
        <li aria-current="{$page.url.pathname === '/read' ? 'page' : undefined}">
            <a href="/read">Read</a>
        </li>
        <li aria-current="{$page.url.pathname === '/update' ? 'page' : undefined}">
            <a href="/update">Update</a>
        </li>
        <li aria-current="{$page.url.pathname === '/destroy' ? 'page' : undefined}">
            <a href="/destroy">Delete</a>
        </li>
    </ul>
</nav>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
