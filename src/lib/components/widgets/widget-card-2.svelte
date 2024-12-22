<script lang="ts">
  export let title, number, time, growth, growthTime, loss, lossTime;
</script>

<div class="bg-white">
  <div class="p-6">
    <div class="flex justify-between">
      <div class="grow">
        <h4 class="text-base font-semibold text-gray-800">{title}</h4>
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

    <h1 class="text-3xl text-gray-800 my-2.5">{number}</h1>
    <p class="text-gray-400 text-sm">{time}</p>

    <hr class="my-3.5" />

    <div class="flex items-center">
      <div class="lg:w-1/2">
        <div class="flex items-center">
          <div class="me-4 shrink">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-500 feather feather-trending-up text-success">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div class="grow">
            <h5 class="mt-0 mb-0">{growth}%</h5>
            <p class="text-muted mb-0 fs-13">{growthTime}</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="flex items-center">
          <div class="me-3 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-red-500 feather feather-trending-down text-danger">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              <polyline points="17 18 23 18 23 12"></polyline>
            </svg>
          </div>
          <div class="flex-grow-1">
            <h5 class="mt-0 mb-0">{loss}%</h5>
            <p class="text-muted mb-0 fs-13">{lossTime}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
