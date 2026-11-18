<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements";

const variantClasses = {
	primary: "bg-surface shadow-control",
	secondary: "bg-surface-secondary",
};
type InputVariant = keyof typeof variantClasses;

type InputProps = HTMLInputAttributes & {
	variant?: InputVariant;
};

let {
	value = $bindable(),
	variant = "primary",
	class: className,
	...props
}: InputProps = $props();
</script>

<input
        {...props}
        bind:value
        class={[
          "h-10 w-full rounded-control px-3 text-sm text-foreground placeholder:text-foreground/50",
          "ring-0 ring-primary focus:ring-[2.5px] focus:outline-hidden",
          "motion-safe:transition-shadow duration-150 ease-out",
           variantClasses[variant],
          className,
        ]}
/>