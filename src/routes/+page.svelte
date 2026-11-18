<script lang="ts">
    import { Button } from "#lib/components/ui/button/index.ts";

    let count = $state(0);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Button onclick={()=> count++}>点击了{count}次</Button>