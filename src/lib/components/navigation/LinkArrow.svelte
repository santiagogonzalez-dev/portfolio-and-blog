<script lang="ts">
import Backward from '$lib/components/Backward.svelte';
import Forward from '$lib/components/Forward.svelte';

export let orientation = 'right';
export let href = '/';
</script>

<a style:gap={orientation === 'left' ? '0.6ch' : '0.2ch'} class="font-p" {href} {...$$restProps}>
  {#if orientation === 'left'}
    <Backward />
    <slot />
  {:else if orientation === 'right'}
    <slot />
    <Forward />
  {:else}
    <slot />
  {/if}
</a>

<style>
a {
  display: inline-flex;
  color: var(--text-3);
  transition: all 150ms ease-in-out;
}

@media (hover: hover) {
  a:hover {
    color: var(--clr-red-old);
  }
}
</style>
