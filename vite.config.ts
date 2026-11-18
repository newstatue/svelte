import tailwindcss from "@tailwindcss/vite";
import cloudflareAdapter from "@sveltejs/adapter-cloudflare";
import staticAdapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
			},
			adapter:
				mode === "desktop"
					? staticAdapter({ fallback: "index.html" })
					: cloudflareAdapter(),
		}),
	],
}));
