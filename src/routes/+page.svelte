<script lang="ts">
        import Navbar from "$lib/components/navbars/default-navbar.svelte";

    import PageTitle from "$lib/components/page-title.svelte";
    import SassHero from "$lib/components/heros/saas-hero.svelte";
    import Clients1 from "$lib/components/clients-1.svelte";
    import Testimonial2 from "$lib/components/testimonials/testimonial-2.svelte";
    import Pricing1 from "$lib/components/pricing-1.svelte";
    import Faq from "$lib/components/faq-1.svelte";
    import SaasFooter from "$lib/components/footers/saas-footer.svelte";
    import  Pricing from "$lib/components/pricing /prcing.svelte";
    import BusinessCategores from "$lib/components/business-categores/business-categores.svelte";
    import Advantages from "$lib/components/advantages/advantages.svelte";
    import CtaSection from "$lib/components/section-find-more/cta-section.svelte";
    import Integration from "$lib/components/integration/integration.svelte";
    import ScrollingImages from "$lib/components/scrolling-images/scrolling-images.svelte";
    import SmartSimple from "$lib/components/samrt-simple/smart-simple.svelte";
    import ImageText from "$lib/components/image-text/image-text.svelte";
    import ImageLeft from "$lib/components/image-left/image-left.svelte";
       
    import Internationalisation from "$lib/components/internationalisation/internationalisation.svelte";
    import OnboardingFlow from "$lib/components/onboardingflow/onboardingflow.svelte";
    import PayMethoes from "$lib/components/payment-methos/pay-methoes.svelte";
  </script>
  
  <PageTitle title="Ipsepay" />
  <Navbar/>
  <SassHero />
  <ScrollingImages/>
  <SmartSimple/>
  <ImageText/>
  
<BusinessCategores/>
<PayMethoes/>



<Advantages/>
<Integration/>
<OnboardingFlow/>

<ImageLeft/>

<Pricing/>


  
<Pricing1 />

  
  

  
 
  <Faq />
  <Internationalisation/>
  
  <SaasFooter />
  



