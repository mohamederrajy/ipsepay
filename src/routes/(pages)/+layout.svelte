<script lang="ts">
  import Navbar from "$lib/components/navbars/default-navbar.svelte";
  import SaasFooter from '$lib/components/footers/saas-footer.svelte';

  import BackToTop from "$lib/components/back-to-top.svelte";
</script>

<Navbar />
<slot />
<SaasFooter/>

