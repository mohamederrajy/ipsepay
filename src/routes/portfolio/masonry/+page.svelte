<script lang="ts">
    import PageTitle from "$lib/components/page-title.svelte";

    import Shuffle from "shufflejs";
    import GLightbox from "glightbox";
    import {onMount} from "svelte";

    class Demo {
        element: HTMLElement;
        shuffle: any;
        activeFilters: [];

        constructor(element: any) {
            this.element = element;
            this.shuffle = new Shuffle(element, {
                itemSelector: ".picture-item",
            });

            this.activeFilters = [];
            this.addFilterButtons();
        }

        addFilterButtons() {
            const options = document.querySelector(".filter-options");

            if (!options) {
                return;
            }

            const filterButtons = Array.from(options.children);
            const onClick = this.handleFilterClick.bind(this);
            filterButtons.forEach((button) => {
                button.addEventListener("click", onClick, false);
            });
        }

        handleFilterClick(evt: any) {
            const button = evt.currentTarget;
            const isActive = button.classList.contains("active");
            const buttonGroup = button.getAttribute("data-group");

            this.removeActiveClassFromChildren(button.parentNode);

            button.classList.add("active");
            this.shuffle.filter(buttonGroup);
        }

        removeActiveClassFromChildren(parent: Element) {
            const {children} = parent;
            for (let i = children.length - 1; i >= 0; i--) {
                children[i].classList.remove("active");
            }
        }
    }

    onMount(() => {
        new Demo(document.getElementById("gallery-wrapper"));

        let lightbox = GLightbox({
            selector: ".image-popup",
        });

        setTimeout(() => document.querySelector<HTMLElement>("[data-group=all]")?.click(), 1);
    });
</script>

<PageTitle title="Portfolio Masonry"/>

<!-- Hero Section -->
<section class="pt-36 pb-24 bg-slate-100">
    <div class="container">
        <div class="text-center max-w-2xl mx-auto">
            <h2 class="md:text-5xl/tight text-3xl font-semibold mb-5">Portfolio Masonry</h2>
            <p class="md:text-lg text-slate-500 leading-7">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
        </div>
    </div>
</section>

<!-- Filter Section -->
<section class="py-20 relative">
    <div class="container">
        <ul class="filter-options flex flex-wrap justify-center gap-3">
            <li class="inline-block active" data-group="all">
                <a href="javascript: void(0);">All</a>
            </li>
            <li class="inline-block" data-group="web-design">
                <a href="javascript: void(0);">Web Design</a>
            </li>
            <li class="inline-block" data-group="graphic-design">
                <a href="javascript: void(0);">Graphic Design</a>
            </li>
            <li class="inline-block" data-group="illustrator">
                <a href="javascript: void(0);">Illustrator</a>
            </li>
            <li class="inline-block" data-group="photography">
                <a href="javascript: void(0);">Photography</a>
            </li>
        </ul>

        <div id="gallery-wrapper" class="md:flex justify-center mx-auto mt-6">
            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['graphic-design']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/13.jpg">
                                <img src="/images/photos/13.jpg"
                                     class="h-full w-full transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Smart Desk v2.0</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['graphic-design']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/14.jpg">
                                <img src="/images/photos/14.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Iphone App</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['photography']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/15.jpg">
                                <img src="/images/photos/15.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Iphone App2</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['graphic-design']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/6.jpg">
                                <img src="/images/photos/6.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Virtual Receptionist</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['web-design']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/5.jpg">
                                <img src="/images/photos/5.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Task Manager</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['designing']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/5.jpg">
                                <img src="/images/photos/5.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Task Manager</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['development']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/12.jpg">
                                <img src="/images/photos/12.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Task Manager</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['photography']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/3.jpg">
                                <img src="/images/photos/3.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Portfolio Manager</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['web-design']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/15.jpg">
                                <img src="/images/photos/15.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Online Conference</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['illustrator']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/4.jpg">
                                <img src="/images/photos/4.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Smart Office v2.0</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups="['illustrator']">
                <div>
                    <div class="border p-2 rounded">
                        <div class="overflow-hidden">
                            <a class="image-popup" href="/images/photos/13.jpg">
                                <img src="/images/photos/13.jpg"
                                     class="transition-all duration-500 origin-center hover:scale-[1.1]"/>
                            </a>
                        </div>
                        <h5 class="text-base font-medium mt-6">Virtual Receptionist 2</h5>
                        <p class="text-slate-400 mt-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-20">
            <a href=""
               class="py-3 px-6 rounded text-white bg-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 focus:outline focus:outline-primary/50"><i
                    class="fa-solid fa-arrows-rotate me-2"></i> Load More</a>
        </div>
    </div>
</section>
