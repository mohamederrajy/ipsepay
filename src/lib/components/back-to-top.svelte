<script lang="ts">
  import {onMount} from "svelte";

  function initBacktoTop() {
    const mybutton = document.querySelector('[data-toggle="back-to-top"]');

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 72) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.remove("flex");
        mybutton.classList.add("hidden");
      }
    });

    if (mybutton) {
      mybutton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
      });
    }
  }

  onMount(() => {
    initBacktoTop();
  });
</script>

<button 
  data-toggle="back-to-top" 
  class="fixed text-sm rounded-full z-10 bottom-5 start-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center hidden"
>
  <i class="fa-solid fa-arrow-up text-base"></i>
</button>

<style>
  /* Ensure left positioning for RTL support */
  button {
    left: 1.25rem;
    right: auto;
  }
</style>
