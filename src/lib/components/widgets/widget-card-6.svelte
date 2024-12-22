<script lang="ts">
  import type {UserType} from "$lib/utility/types";
  export let testimonial, user: UserType;
</script>

<div class="md:p-12 p-6 border rounded">
  <h5 class="font-light">{testimonial}</h5>
  <div class="flex items-center justify-between mt-5">
    <div class="flex items-center gap-3">
      <div>
        <img src={user.image} class="w-10 rounded-full" alt="" />
      </div>
      <div>
        <h6 class="text-sm">{user.name}</h6>
        <p class="text-sm text-slate-500">{user.role}</p>
      </div>
    </div>
    <div>
      <img src={user.company} class="w-24" alt="" />
    </div>
  </div>
</div>
