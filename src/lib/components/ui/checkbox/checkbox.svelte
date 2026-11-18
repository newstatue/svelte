<script lang="ts">
import { Checkbox, Label, useId } from "bits-ui";

type CheckboxProps = Omit<Checkbox.RootProps, "children" | "child"> & {
	label: string;
};

let {
	id = useId(),
	label,
	checked = $bindable(false),
	indeterminate = $bindable(false),
	class: className,
	...props
}: CheckboxProps = $props();
</script>

<div class="flex items-center gap-3">
    <Checkbox.Root
            {...props}
            {id}
            bind:checked
            bind:indeterminate
            class={[
      "peer inline-flex size-5 shrink-0 items-center justify-center rounded-md border text-sm leading-none",
      "border-transparent bg-primary text-primary-foreground",
      "data-[state=unchecked]:border-border data-[state=unchecked]:bg-surface",
      "motion-safe:transition-colors duration-150 ease-out",
      "ring-0 ring-primary focus-visible:ring-[2.5px] focus:outline-hidden",
      "disabled:opacity-50",
      "aria-invalid:border-danger! aria-invalid:text-danger! aria-invalid:ring-[2.5px] aria-invalid:ring-danger",
      className,
    ]}
    >
        {#snippet children({ checked, indeterminate })}
            {#if indeterminate}
                <span aria-hidden="true">−</span>
            {:else if checked}
                <span aria-hidden="true">✓</span>
            {/if}
        {/snippet}
    </Checkbox.Root>

    <Label.Root for={id} class="text-sm font-medium text-foreground peer-disabled:opacity-50 peer-aria-invalid:text-danger">
        {label}
    </Label.Root>
</div>