<script lang="ts">
import { Button } from "#lib/components/ui/button/index.ts";
import { Input } from "#lib/components/ui/input/index.ts";
import { Card } from "#lib/components/ui/card/index.ts";
import { Textarea } from "#lib/components/ui/textarea/index.ts";
import { Label } from "#lib/components/ui/label/index.ts";
import { CheckBox } from "#lib/components/ui/checkbox/index.ts";
import { Link } from "#lib/components/ui/link/index.ts";
import { Avatar } from "#lib/components/ui/avatar";

let quantity = $state<number | null>(1);
let accepted = $state<boolean>(Boolean(0));
</script>

<main class="min-h-dvh bg-slate-50 flex flex-col gap-2">

	<div class="gap-2">
		<h1 id="page-top">Welcome to SvelteKit</h1>
		<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
		<Button size="icon">xs</Button>
		<Button size="sm">sm</Button>
		<Button size="md">md</Button>
		<Button size="lg">lg</Button>


		<Button variant="primary">primary</Button>
		<Button variant="secondary">secondary</Button>
		<Button variant="outline">outline</Button>
		<Button variant="ghost">ghost</Button>
		<Button variant="danger">danger</Button>
		<Button variant="link">link</Button>
	</div>
	<div class="flex flex-col w-64 max-w-full gap-2">
		<Input variant="primary" placeholder="请输入邮箱" />
		<Input variant="secondary" placeholder="请输入邮箱" />
		<Input id="quantity" type="number" min={1} step={1} bind:value={quantity} />
		<Input variant="secondary" id="input-type-password" placeholder="••••••••" type="password" />
	</div>
	<Card class="w-80 max-w-full">
		12312321
	</Card>
	<Card variant="secondary" class="w-80 max-w-full">
		12312321
	</Card>
	<div class="flex flex-col w-64 max-w-full gap-2">
		<Textarea/>
	</div>

	<div class="flex flex-col w-64 max-w-full gap-2">
		<Label for="email">邮箱</Label>
		<Input id="email" name="email" type="email" placeholder="name@example.com" />
		<CheckBox name="terms" label="我同意服务条款"  aria-invalid={!accepted} bind:checked={accepted} />
		<Link href="#page-top">返回页首</Link>
		<Link variant="no" href="#page-top">返回页首</Link>
		<Link variant="always" href="#page-top">返回页首</Link>
		<Avatar size="sm" alt="Evorsio" fallback="EV" />
		<Avatar size="md" alt="Evorsio" fallback="EV" />
		<Avatar size="lg" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" alt="Blue" fallback="Bl" />
	</div>
</main>
