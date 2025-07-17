<script>
	import { fly } from 'svelte/transition';
</script>

<div class="flex w-full items-center justify-center p-4 sm:p-8">
	<main in:fly={{ y: 20, duration: 600, delay: 100 }} class="w-full max-w-3xl">
		<section class="flex w-full flex-col gap-8">
			<div class="flex flex-col gap-3">
				<p class="text-xl font-medium text-emerald-400 md:text-2xl">
					Hello everyone <span class="wave-animation inline-block">👋</span>
				</p>
				<h1 class="text-5xl tracking-tight text-slate-100 sm:text-6xl md:text-7xl">I'm Bhushan</h1>
			</div>

			<div class="space-y-4 text-lg leading-relaxed text-slate-400 md:text-xl">
				<p>I'm a 4th-year Bachelor of Technology student at the Central University of Haryana</p>

				<p>
					I'm currently working with MLOps, building AI Agents and LLMs, and exploring the DevOps
					ecosystem.
				</p>
			</div>

			<p class="text-sm text-slate-500">
				Note: This portfolio is under development. I will be updating links and content soon.
			</p>
		</section>
	</main>
</div>

<style>
	.wave-animation {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
