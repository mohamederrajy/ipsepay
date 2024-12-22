<script lang="ts">
  export let image, name, role, email, mobileNo, projectCompletion, overallRatings;
</script>

<div class="bg-white rounded">
  <div class="p-6">
    <div class="flex">
      <div class="grow">
        <div class="flex">
          <img src={image} class="img-fluid w-12 h-12 rounded me-3" alt="" />
          <div class="grow">
            <h4 class="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">{name}</h4>
            <p class="text-gray-400 pb-0 text-sm mb-4 font-medium">{role}</p>
          </div>
        </div>
      </div>

      <div class="shrink text-end">
        <div class="hs-dropdown relative inline-flex">
          <button id="hs-dropdown-custom" type="button" class="hs-dropdown-toggle text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-600 feather feather-more-horizontal icon icon-xs">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>

          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 p-2 mt-2 hidden bg-white shadow rounded py-2 px-1.5 min-w-[10rem]" aria-labelledby="hs-dropdown-custom">
            <a class="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-edit icon-xxs icon me-2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Share</span>
            </a>
            <a class="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-refresh-cw icon-xxs icon me-2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <span>Refresh</span>
            </a>

            <hr class="my-2" />

            <a class="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded" href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 feather feather-trash-2 icon-xxs icon me-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              <span>Deactivate</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 flex-wrap py-4 border-b">
      <div class="mb-2">
        <a href="" class="flex gap-0.5 text-gray-400 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 feather feather-mail icon-xs icon me-1">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          {email}</a
        >
      </div>
      <div class="mb-2">
        <a href="" class="flex gap-0.5 text-gray-400 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 feather feather-phone icon-xxs icon me-2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {mobileNo}</a
        >
      </div>
    </div>

    <div class="flex items-center gap-6 mt-4">
      <div class="md:w-1/2 w-full">
        <div class="flex justify-between mb-3">
          <h6 class="fw-medium my-0">Project Completion</h6>
          <p class="float-end mb-0">{projectCompletion}%</p>
        </div>
        <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div class="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style="width: {projectCompletion}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="md:w-1/2 w-full">
        <div class="flex justify-between mb-3">
          <h6 class="fw-medium my-0">Overall Rating</h6>
          <p class="float-end mb-0">{overallRatings}</p>
        </div>
        <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar" style="width: {projectCompletion}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>
</div>
