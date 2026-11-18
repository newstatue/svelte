<script lang="ts">
import type { HTMLAnchorAttributes } from "svelte/elements";

const variantClasses = {
	default:
		"underline underline-offset-4 decoration-primary/25 hover:decoration-primary/50 active:decoration-primary",
	always:
		"underline-offset-4 decoration-primary/25 hover:underline hover:decoration-primary/50 active:decoration-primary",
	no: "",
};
type LinkVariant = typeof variantClasses;

type LinkProps = HTMLAnchorAttributes & {
	href: string;
	variant?: LinkVariant;
};

let {
	href,
	children,
	variant = "default",
	class: className,
	...props
}: LinkProps = $props();
</script>

<a
        {...props}
        {href}
        class={[
    "rounded-control text-primary",
    "ring-0 ring-primary focus-visible:ring-[2.5px] focus:outline-hidden focus-visible:ring-offset-2",
    variantClasses[variant],
    className,
  ]}
>
    {@render children?.()}
</a>
