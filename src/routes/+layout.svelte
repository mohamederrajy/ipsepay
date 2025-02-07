<script lang="ts">
    import "aos/dist/aos.css";
    import "swiper/css";
    import "swiper/css/autoplay";
    import "jarallax/dist/jarallax.min.css";
    import "$lib/assets/scss/icons.scss";
    import "$lib/assets/scss/style.scss";  
    import SaasFooter from '$lib/components/footers/saas-footer.svelte';
    import TidioChat from '$lib/components/TidioChat.svelte';
    import BackToTop from '$lib/components/back-to-top.svelte';
    import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';


    import {onMount} from "svelte";
    import AOS from "aos";

    onMount(() => {
        setTimeout(() => {
            AOS.init();
        }, 500);
    });
</script>

<svelte:head>
    <meta content="A fully responsive Tailwind CSS Multipurpose agency, application, business, clean, creative, cryptocurrency, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc."
          name="description"/>
    <meta content="coderthemes" name="author"/>
    <link rel="shortcut icon" href="/favicon.ico"/>
</svelte:head>
<WhatsAppButton phoneNumber="+212639048285" message="Hello! I have a question about IpsePay." />

<slot/>
<TidioChat />

<BackToTop />

<!-- Replace the old footer with SaasFooter -->