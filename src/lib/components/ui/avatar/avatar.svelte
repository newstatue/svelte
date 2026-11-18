<script lang="ts">
import { Avatar as BitsAvatar } from "bits-ui";

const sizeClasses = {
	sm: "size-8 text-xs",
	md: "size-10 text-sm",
	lg: "size-12 text-base",
};
type AvatarSize = keyof typeof sizeClasses;

type AvatarProps = Omit<BitsAvatar.RootProps, "children" | "child"> & {
	src?: string | null;
	alt?: string;
	fallback: string;
	size?: AvatarSize;
};

let {
	src,
	alt = "",
	fallback,
	size = "md",
	class: className,
	...props
}: AvatarProps = $props();
</script>

<BitsAvatar.Root
        {...props}
        class={[
    "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
    "bg-muted font-medium text-foreground",
    sizeClasses[size],
    className,
  ]}
>
    <BitsAvatar.Image src={src ?? undefined} {alt} class="size-full object-cover" />

    <BitsAvatar.Fallback
            role={alt ? "img" : undefined}
            aria-label={alt || undefined}
            aria-hidden={alt ? undefined : true}
    >
        {fallback}
    </BitsAvatar.Fallback>
</BitsAvatar.Root>