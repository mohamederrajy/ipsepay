<script lang="ts">
  import AccountNavbar from "$lib/components/navbars/account-navbar.svelte";
  import AccountFooter from "$lib/components/footers/account-footer.svelte";
  import BackToTop from "$lib/components/back-to-top.svelte";
</script>

<AccountNavbar />
<slot />
<AccountFooter />
<BackToTop />
