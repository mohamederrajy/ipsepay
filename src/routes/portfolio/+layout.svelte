<script lang="ts">
  import Navbar from "$lib/components/navbars/default-navbar.svelte";
  import SassFooter from "$lib/components/footers/saas-footer.svelte";
  import BackToTop from "$lib/components/back-to-top.svelte";
  import "glightbox/dist/css/glightbox.min.css";
</script>

<Navbar />
<slot />
<SassFooter />
<BackToTop />
