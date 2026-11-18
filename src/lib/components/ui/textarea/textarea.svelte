<script lang="ts">
import type { HTMLTextareaAttributes } from "svelte/elements";

const variantClasses = {
	primary: "bg-surface shadow-control",
	secondary: "bg-surface-secondary",
};
type TextareaVariant = keyof typeof variantClasses;

type TextareaProps = HTMLTextareaAttributes & {
	variant?: TextareaVariant;
};

let {
	value = $bindable(),
	variant = "primary",
	class: className,
	...props
}: TextareaProps = $props();
</script>

<textarea
        {...props}
        bind:value
        class={[
          "min-h-10 block w-full resize-y rounded-control px-3 py-2 text-sm leading-relaxed text-foreground",
         "placeholder:text-foreground/50",
          "ring-0 ring-primary focus:ring-[2.5px] focus:outline-hidden",
          "motion-safe:transition-shadow duration-150 ease-out",
           variantClasses[variant],
          className,
        ]}
/>