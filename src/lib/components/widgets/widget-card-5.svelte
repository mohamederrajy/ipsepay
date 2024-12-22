<script lang="ts">
  import type {UserType} from "$lib/utility/types";
  export let testimonial, user: UserType;
</script>

<div class="p-10 border rounded-xl bg-white shadow">
  <i class="fa-solid fa-quote-left text-gray-500 text-5xl"></i>
  <p class="my-4">{testimonial}</p>
  <div class="border-b border-gray-200 w-full my-7"></div>
  <div class="flex items-center gap-2">
    <img src={user.image} alt="avatar" class="h-10 w-10 rounded-full" />
    <div>
      <h1 class="text-sm mb-1">{user.name}</h1>
      <p class="text-gray-500 text-xs">{user.role}</p>
    </div>
  </div>
</div>
