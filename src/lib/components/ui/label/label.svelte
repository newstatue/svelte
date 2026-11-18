<script lang="ts">
import type { HTMLLabelAttributes } from "svelte/elements";

let { children, class: className, ...props }: HTMLLabelAttributes = $props();
</script>

<label
        {...props}
        class={[
            "text-sm font-medium text-foreground", className
            ]}
>
    {@render children?.()}
</label>