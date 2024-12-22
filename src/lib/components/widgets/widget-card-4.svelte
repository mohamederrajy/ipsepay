<script lang="ts">
  import type {UserType} from "$lib/utility/types";
  export let testimonial, user: UserType;
</script>

<div class="p-10 bg-white">
  <p class="text-slate-800">{testimonial}</p>
  <div class="flex items-center justify-between mt-5">
    <div class="flex items-center gap-3">
      <div>
        <img src={user.image} class="w-10 rounded-full" alt="" />
      </div>
      <div>
        <h6>{user.name}</h6>
        <p class="text-sm text-slate-500">{user.role}</p>
      </div>
    </div>
    <div>
      <span class="flex gap-1 items-center text-yellow-500 text-base">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </span>
    </div>
  </div>
</div>
