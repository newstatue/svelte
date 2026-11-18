<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";

const variantClasses = {
	primary: "bg-surface shadow-control",
	secondary: "bg-surface-secondary",
};
type CardVariants = keyof typeof variantClasses;

type CardProps = HTMLAttributes<HTMLDivElement> & {
	variant?: CardVariants;
};

let {
	variant = "primary",
	children,
	class: className,
	...props
}: CardProps = $props();
</script>

<div
        {...props}
        class={[
            "rounded-control p-4 text-foreground",
            variantClasses[variant],
            className,
        ]}
>
    {@render children?.()}
</div>