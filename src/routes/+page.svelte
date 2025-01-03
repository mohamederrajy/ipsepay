<script lang="ts">
        import Navbar from "$lib/components/navbars/default-navbar.svelte";
    import Testimonial1 from "$lib/components/testimonials/testimonial-1.svelte";
    import PageTitle from "$lib/components/page-title.svelte";
    import SassHero from "$lib/components/heros/saas-hero.svelte";
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
    import OnlinePayments from "$lib/components/online-payments/online-payments.svelte";
    import Internationalisation from "$lib/components/internationalisation/internationalisation.svelte";
    import OnboardingFlow from "$lib/components/onboardingflow/onboardingflow.svelte";
    import PayMethoes from "$lib/components/payment-methos/pay-methoes.svelte";
    import { onMount } from 'svelte';
    import HeroIps from "$lib/components/heros/hero-ips.svelte";
    import DashbordSection from "$lib/components/industries/sections/dashbord-section.svelte";
    import PayoutMethodes from "$lib/components/payout-methodes/payout-methodes.svelte";
    import PayoutTime from "$lib/components/payout-time/payout-time.svelte";
    import CommerceSolutions from "$lib/components/commerce-solutions/commerce-solutions.svelte";
    import CustomerExpectations from "$lib/components/customer-expectations/customer-expectations.svelte";
  </script>
  <PageTitle title="Ipsepay " />
  <Navbar/>
  <HeroIps/>
  <!--<ScrollingImages/>-->
    <!--<SmartSimple/>-->
  <OnlinePayments/>
  <PayMethoes/>
  <PayoutTime/>
     <!-- <DashbordSection/>-->
   <!-- <BusinessCategores/>-->
   <Integration/>
   <CommerceSolutions/>
  <PayoutMethodes/>
   <!-- <Advantages/>-->
 

  <OnboardingFlow/>
  <CustomerExpectations/>
  <!--<ImageLeft/>-->
  <Pricing/>
  <Pricing1 />
  <Testimonial1/>
  <Faq />
  <Internationalisation/>
  <SaasFooter />
  



