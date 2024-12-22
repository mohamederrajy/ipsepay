<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import WidgetCard1 from "$lib/components/widgets/widget-card-1.svelte";
  import WidgetCard2 from "$lib/components/widgets/widget-card-2.svelte";
  import WidgetCard3 from "$lib/components/widgets/widget-card-3.svelte";

  const avatar1 = "/images/avatars/img-8.jpg";
  const avatar2 = "/images/avatars/img-5.jpg";

  const user = {
    image: avatar1,
    name: "Ms. Greeva Navadiya",
    role: "Web & Graphic Designer",
    email: "greeva@coderthemes.com",
    mobileNo: "+00 123-456-789",
    projectCompletion: 85,
    overallRating: 7.5,
  };

  const revenueData = {
    title: "Revenue",
    number: "$2,100.00",
    time: "Last Week",
    growth: 15,
    growthTime: "Prev Week",
    loss: 10,
    lossTime: "Prev Month",
  };

  const assignees = [
    {
      image: avatar1,
      name: "",
    },
    {
      image: avatar2,
      name: "",
    },
  ];

  const recentProjects = [
    {
      date: "Aug 09, 2020",
      title: "Shreyu - Design Updates",
      phase: "Designing",
      text: "Update shreyu with modern and latest trends...",
      progress: 75,
      assignees,
    },
    {
      date: "Aug 10, 2020",
      title: "Prompt v2.0",
      phase: "Planning",
      text: "Plan new features and functionality for prompt...",
      progress: 50,
      assignees,
    },
    {
      date: "Aug 11, 2020",
      title: "Hyper React v4.0",
      phase: "Development",
      text: "Update shreyu with modern and latest trends...",
      progress: 60,
      assignees,
    },
  ];
</script>

<PageTitle title="Mobile Application Landing Page" />

<div class="bg-slate-100 mt-[77px] py-3 px-3">
  <section class="relative overflow-hidden">
    <div class="container">
      <div class="flex">
        <div class="w-full">
          <h3 class="text-xl text-gray-800 mt-2">Hi Greeva</h3>
          <p class="mt-1 font-medium mb-4">Welcome to Prompt!</p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-6 mt-2">
        <!-- profile widget -->
        <div class="lg:col-span-5 col-span-12">
          <WidgetCard1 image={user.image} name={user.name} role={user.role} email={user.email} mobileNo={user.mobileNo} projectCompletion={user.projectCompletion} overallRatings={user.overallRating} />
        </div>

        <div class="lg:col-span-3 col-span-12 space-y-6">
          <div class="bg-white">
            <div class="flex items-center p-6">
              <div>
                <div class="inline-flex items-center justify-center h-12 w-12 bg-green-500/10 rounded me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 feather feather-check-circle icon-dual-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <div class="flex-grow-1">
                <h3 class="text-xl text-gray-800">21</h3>
                <p class="text-muted mb-0">Tasks Completed</p>
              </div>
            </div>
          </div>
          <div class="bg-white">
            <div class="flex items-center p-6">
              <div>
                <div class="inline-flex items-center justify-center h-12 w-12 bg-sky-500/10 rounded me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-500 feather feather-edit-3 icon-dual-info">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
              </div>
              <div class="grow">
                <h3 class="text-xl text-gray-800">21</h3>
                <p class="text-muted mb-0">Tasks Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 col-span-12">
          <WidgetCard2 title={revenueData.title} number={revenueData.number} time={revenueData.time} growth={revenueData.growth} growthTime={revenueData.growthTime} loss={revenueData.loss} lossTime={revenueData.lossTime} />
        </div>
      </div>
      <!-- end grid -->
    </div>
  </section>

  <section class="relative overflow-hidden">
    <div class="container">
      <div class="flex items-center justify-between my-6">
        <div>
          <h4 class="text-base text-gray-800">Recent Projects</h4>
        </div>
        <div class="text-end">
          <a href="" class="font-semibold text-primary text-sm"
            >View All
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 inline feather feather-arrow-right ms-1 icon-xxs">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <!-- end title -->

      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
        {#each recentProjects as item, idx (idx)}
          <WidgetCard3 date={item.date} title={item.title} phase={item.phase} text={item.text} progress={item.progress} assignees={item.assignees} />
        {/each}
      </div>
      <!-- end grid -->
    </div>
  </section>

  <section class="relative overflow-hidden">
    <div class="container">
      <div class="flex items-center justify-between my-6">
        <div>
          <h4 class="text-base text-gray-800">Tasks</h4>
        </div>
        <div class="text-end">
          <a href="" class="font-semibold text-primary text-sm"
            >View All
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 inline feather feather-arrow-right ms-1 icon-xxs">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <!-- end title -->

      <div class="flex flex-col gap-y-2 w-full mb-4">
        <div class="bg-white">
          <div class="p-6">
            <div class="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
              <div class="w-1/2">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded border-gray-300" id="task1" />
                  <label class="text-sm font-semibold text-gray-700" for="task1"> Draft the new contract document for sales team </label>
                </div>
                <!-- end checkbox -->
              </div>
              <!-- end col -->
              <div class="lg:w-1/3">
                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-500">Today 10pm</span>
              </div>
              <div class="lg:w-1/3">
                <div class="flex items-center justify-end gap-6">
                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">3/7</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      10 Subtasks are completed
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">21</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      5 Comments
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-red-500/10 text-red-500">High</span>
                </div>
              </div>
              <!-- end col -->
            </div>
          </div>
        </div>
        <!-- end task -->

        <div class="bg-white">
          <div class="p-6">
            <div class="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
              <div class="w-1/2">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded border-gray-300" id="task2" />
                  <label class="text-sm font-semibold text-gray-700" for="task2"> iOS App home page design </label>
                </div>
                <!-- end checkbox -->
              </div>
              <!-- end col -->
              <div class="lg:w-1/3">
                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-500">Today 5pm</span>
              </div>
              <div class="lg:w-1/3">
                <div class="flex items-center justify-end gap-6">
                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">10/11</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      10 Subtasks are completed
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">05</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      5 Comments
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-orange-500/10 text-orange-500">Medium</span>
                </div>
              </div>
              <!-- end col -->
            </div>
          </div>
        </div>
        <!-- end task -->

        <div class="bg-white">
          <div class="p-6">
            <div class="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
              <div class="w-1/2">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded border-gray-300" id="task3" />
                  <label class="text-sm font-semibold text-gray-700" for="task3"> Enable analytics tracking </label>
                </div>
                <!-- end checkbox -->
              </div>
              <!-- end col -->
              <div class="lg:w-1/3">
                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-gray-500/10 text-gray-500">Tomorrow 5pm</span>
              </div>
              <div class="lg:w-1/3">
                <div class="flex items-center justify-end gap-6">
                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">05/11</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      5 Subtasks are completed
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">07</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      7 Comments
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-orange-500/10 text-orange-500">Medium</span>
                </div>
              </div>
              <!-- end col -->
            </div>
          </div>
        </div>
        <!-- end task -->

        <div class="bg-white">
          <div class="p-6">
            <div class="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
              <div class="w-1/2">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="rounded border-gray-300" id="task4" />
                  <label class="text-sm font-semibold text-gray-700" for="task4"> Kanban board design </label>
                </div>
                <!-- end checkbox -->
              </div>
              <!-- end col -->
              <div class="lg:w-1/3">
                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-gray-500/10 text-gray-500">Sep 11, 3pm</span>
              </div>
              <div class="lg:w-1/3">
                <div class="flex items-center justify-end gap-6">
                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">0/3</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      0 Subtasks are completed
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <div>
                    <div class="inline-flex items-center gap-2" data-fc-type="tooltip">
                      <svg class="h-5 w-5 text-gray-800 inline" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Text / Bullet-list</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Stockholm-icons-/-Text-/-Bullet-list" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                          <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" id="Combined-Shape" fill="currentColor"></path>
                          <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                        </g>
                      </svg>
                      <span class="text-sm text-gray-800 font-medium">07</span>
                    </div>
                    <div class="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                      3 Comments
                      <div class="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                    </div>
                  </div>

                  <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-green-500/10 text-green-500">Low</span>
                </div>
              </div>
              <!-- end col -->
            </div>
          </div>
        </div>
        <!-- end task -->
      </div>
      <button class="flex items-center justify-center mx-auto mb-6">
        <a href="" class="inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2 group"
          ><span class="animate-spin inline-block h-4 w-4 border-2 border-primary border-b-transparent group-hover:border-white group-hover:border-b-transparent rounded-full align-[-.125em] me-2"></span>
          Load More</a
        >
      </button>
    </div>
  </section>
</div>
