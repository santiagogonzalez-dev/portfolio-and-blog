<script lang="ts">
export let src: string;
export let alt: string;
</script>

<img {src} title={alt} {alt} loading="lazy" />

<style>
img {
  display: block;
  max-width: 100%;

  border-radius: 8px;
}
</style>
