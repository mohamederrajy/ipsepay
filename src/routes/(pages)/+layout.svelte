<script lang="ts">
  import Navbar from "$lib/components/navbars/default-navbar.svelte";
  import Footer from "$lib/components/footers/default-footer.svelte";
  import BackToTop from "$lib/components/back-to-top.svelte";
</script>

<Navbar />
<slot />
<Footer />
<BackToTop />
