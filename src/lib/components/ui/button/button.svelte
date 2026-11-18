<script lang="ts">
import { Button } from "bits-ui";

const sizeClasses = {
	icon: "h-8 px-2.5 text-xs",
	sm: "h-9 px-3 text-sm",
	md: "h-10 px-4 text-sm",
	lg: "h-12 px-5 text-base",
};
type ButtonSize = keyof typeof sizeClasses;

const variantClasses = {
	primary:
		"border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
	secondary: "border-transparent bg-muted text-foreground hover:bg-muted-hover",
	outline: "border-border bg-transparent text-foreground hover:bg-muted",
	ghost: "border-transparent bg-transparent text-foreground hover:bg-muted",
	danger:
		"border-transparent bg-danger text-danger-foreground hover:bg-danger-hover",
	link: "border-transparent bg-transparent text-foreground underline-offset-4 underline decoration-foreground/25 hover:decoration-foreground/50 active:decoration-foreground",
};
type ButtonVariants = keyof typeof variantClasses;

type ButtonProps = Extract<Button.RootProps, { href?: never }> & {
	size?: ButtonSize;
	variant?: ButtonVariants;
};

let {
	children,
	type = "button",
	size = "md",
	variant = "primary",
	class: className,
	...props
}: ButtonProps = $props();
</script>

<Button.Root
		{...props}
		{type}
		class={[
			"inline-flex items-center justify-center rounded-control border font-medium",
			"motion-safe:transition duration-150 ease-out motion-safe:active:scale-[0.98]",
			"ring-0 ring-primary focus-visible:ring-[2.5px] focus:outline-hidden",
			sizeClasses[size],
			variantClasses[variant],
			className,
		]}
>
	{@render children?.()}
</Button.Root>