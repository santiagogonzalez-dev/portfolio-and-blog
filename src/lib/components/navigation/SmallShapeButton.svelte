<script lang="ts">
import { retrieve_icon } from '$lib/utils/utils';
import Forward from '../Forward.svelte';
export let href = '/';
export let icon = '';
</script>

<a {href} {...$$restProps} class={` font-sub ${$$props.class}`}>
  <span>
    <slot />
    {#if icon}
      <iconify-icon width="22" height="22" icon={retrieve_icon(icon)} />
    {:else if $$props.rel}
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 2 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
        />
      </svg>
    {:else}
      <Forward />
    {/if}
  </span>
</a>

<style>
a {
  display: flex;
  border-radius: 14px;
  padding: 0.5rem 1rem;
  font-variation-settings: 'wght' 800;
  font-weight: 800;
  box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
}

span {
  display: flex;
  gap: 0.5rem;
}

.default {
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
}

@media (hover: hover) {
  .default:hover {
    background: var(--srf-5);
    border-color: var(--srf-5-brd);
  }

  .default:active {
    background: var(--srf-2);
  }
}
</style>
