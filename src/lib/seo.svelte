<script lang="ts">
import config from '$lib/config.json';

export let url = new URL('/');
export let data = {
  title: '',
  description: ''
};

let canonical = config.landingpage.url.concat(url.toString());
</script>

<svelte:head>
  <title>{data.title}</title>
  <link rel="canonical" href={canonical} />
  <meta name="description" content={data.description} />

  <meta itemprop="name" content={data.title} />
  <meta itemprop="description" content={data.description} />
  <!-- <meta itemprop="image" content="" /> -->

  <meta property="og:url" content={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <!-- <meta property="og:image" content="" /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <!-- <meta name="twitter:image" content="" /> -->
</svelte:head>
