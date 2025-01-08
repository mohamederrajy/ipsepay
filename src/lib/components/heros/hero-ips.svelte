<script>
  import Prtners from "$lib/components/partners/partners.svelte";

const stats = [
{ value: '99.9%', label: 'Success Rate' },
{ value: '0.1s', label: 'Processing' },
{ value: '150+', label: 'Methods' }
];

let currentWord = "Flow";
const words = [
"Flow",
"Payouts",
"Instant",
"Global",
"Solutions",
"Processing",
"Gateway",
"Network"
];
let currentIndex = 0;

// Auto-typing effect
const typeNextWord = () => {
currentIndex = (currentIndex + 1) % words.length;
currentWord = "";
let wordToType = words[currentIndex];
let charIndex = 0;

const typeChar = () => {
  if (charIndex < wordToType.length) {
    currentWord += wordToType[charIndex];
    charIndex++;
    setTimeout(typeChar, 100); // Typing speed
  } else {
    setTimeout(() => {
      // Start erasing after word is fully typed
      const eraseChar = () => {
        if (currentWord.length > 0) {
          currentWord = currentWord.slice(0, -1);
          setTimeout(eraseChar, 50); // Erasing speed
        } else {
          setTimeout(typeNextWord, 500); // Delay before typing next word
        }
      };
      setTimeout(eraseChar, 2000); // Wait before starting to erase
    }, 1000); // How long to show complete word
  }
};

typeChar();
};

// Start the animation
setTimeout(typeNextWord, 3000); // Initial delay
</script>

<style>
@keyframes grid-move {
0% { transform: translateY(0) scale(1); }
100% { transform: translateY(-38px) scale(1); }
}

.animate-blob-float {
animation: blob-float 8s ease-in-out infinite;
}

@keyframes blob-float {
0%, 100% { 
  transform: translate(0, 0) scale(1);
  filter: blur(3xl);
}
50% { 
  transform: translate(20px, -30px) scale(1.1);
  filter: blur(4xl);
}
}

.animate-shape-float {
animation: shape-float 12s ease-in-out infinite;
}

@keyframes shape-float {
0%, 100% { 
  transform: translate(0, 0) rotate(0deg);
  opacity: 0.07;
}
50% { 
  transform: translate(-15px, -20px) rotate(45deg);
  opacity: 0.1;
}
}

.animate-badge-slide-in {
animation: badge-slide-in 0.6s ease-out;
}

@keyframes badge-slide-in {
0% { transform: translateY(-20px); opacity: 0; }
100% { transform: translateY(0); opacity: 1; }
}

.animate-fade-in-up {
animation: fade-in-up 0.8s ease-out forwards;
opacity: 0;
}

@keyframes fade-in-up {
0% { transform: translateY(20px); opacity: 0; }
100% { transform: translateY(0); opacity: 1; }
}

.bg-size-200 {
background-size: 200% 100%;
}

.animate-gradient-x {
animation: gradient-x 15s linear infinite;
}

@keyframes gradient-x {
0% { background-position: 0% 0%; }
50% { background-position: 100% 0%; }
100% { background-position: 0% 0%; }
}

.perspective {
perspective: 1000px;
}

.rotate-y-12 {
transform: rotateY(12deg);
}

.animate-float {
animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
animation: float 6s ease-in-out infinite reverse;
}

@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-12px); }
}

.animate-chart {
animation: chart 2s ease-in-out infinite;
}

@keyframes chart {
0%, 100% { transform: scaleY(1); }
50% { transform: scaleY(0.85); }
}

.animate-notification {
animation: notification 4s ease-in-out infinite;
}

@keyframes notification {
0% { opacity: 0; transform: translateX(20px); }
10% { opacity: 1; transform: translateX(0); }
90% { opacity: 1; transform: translateX(0); }
100% { opacity: 0; transform: translateX(-20px); }
}

.animate-pulse-slow {
animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes pulse-slow {
0%, 100% { opacity: 0.3; }
50% { opacity: 0.6; }
}

.animate-draw {
stroke-dasharray: 100;
stroke-dashoffset: 100;
animation: draw 3s ease-out forwards;
}

@keyframes draw {
to {
  stroke-dashoffset: 0;
}
}

.animate-activity {
animation: activity 2s ease-in-out infinite;
transform-origin: bottom;
}

@keyframes activity {
0%, 100% { transform: scaleY(1); }
50% { transform: scaleY(0.7); }
}

.animate-move-dot {
animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.5); }
}

.animate-fade-in {
animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
}

.typewriter {
display: inline-block;
min-width: 8ch;
border-right: 3px solid #605bff;
animation: blink 0.8s step-end infinite;
}

@keyframes blink {
from, to { border-color: transparent }
50% { border-color: #605bff }
}

.animate-float-sparkle {
display: inline-block;
animation: floatSparkle 2s ease-in-out infinite;
}

.animate-float-sparkle-delay-1 {
display: inline-block;
animation: floatSparkle 2s ease-in-out infinite;
animation-delay: 0.3s;
}

.animate-float-sparkle-delay-2 {
display: inline-block;
animation: floatSparkle 2s ease-in-out infinite;
animation-delay: 0.6s;
}

@keyframes floatSparkle {
0%, 100% { 
  transform: translateY(0) rotate(0deg);
  opacity: 1;
}
50% { 
  transform: translateY(-4px) rotate(20deg);
  opacity: 0.7;
}
}

@keyframes beam-float {
0%, 100% { 
  transform-origin: top;
  transform: scaleY(1) translateY(0);
  opacity: 0.5;
}
50% { 
  transform-origin: top;
  transform: scaleY(1.2) translateY(20px);
  opacity: 0.8;
}
}

.animate-beam-float {
animation: beam-float 8s ease-in-out infinite;
}

/* Enhanced animations */
@keyframes premium-float {
0%, 100% { 
  transform: translate(0, 0) scale(1);
  filter: blur(3xl) brightness(1);
}
50% { 
  transform: translate(25px, -35px) scale(1.1);
  filter: blur(4xl) brightness(1.2);
}
}

.animate-premium-float {
animation: premium-float 14s ease-in-out infinite;
}

@keyframes glass-float {
0%, 100% { 
  transform: translate(0, 0) rotate(0deg) scale(1);
  opacity: 0.05;
}
50% { 
  transform: translate(-18px, -25px) rotate(45deg) scale(1.05);
  opacity: 0.08;
}
}

.animate-glass-float {
animation: glass-float 10s ease-in-out infinite;
}

@keyframes ray-float {
0%, 100% { 
  transform-origin: top;
  transform: scaleY(1) translateY(0) rotate(var(--rotation));
  opacity: 0.4;
}
50% { 
  transform-origin: top;
  transform: scaleY(1.3) translateY(30px) rotate(var(--rotation));
  opacity: 0.7;
}
}

.animate-ray-float {
animation: ray-float 12s ease-in-out infinite;
}

/* Cleaner animations */
@keyframes float-0 {
0%, 100% { transform: translate(0, 0) scale(1); }
50% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes float-1 {
0%, 100% { transform: translate(0, 0) scale(1); }
50% { transform: translate(-20px, -30px) scale(1.03); }
}

@keyframes float-2 {
0%, 100% { transform: translate(0, 0) scale(1); }
50% { transform: translate(25px, -25px) scale(1.02); }
}

@keyframes slow-spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

.animate-slow-spin {
animation: slow-spin 60s linear infinite;
}

@keyframes orb-float {
0%, 100% {
  transform: translate(0, 0) scale(1);
  opacity: 0.07;
}
50% {
  transform: translate(-30px, 30px) scale(1.1);
  opacity: 0.05;
}
}

.animate-orb-float {
animation: orb-float 20s ease-in-out infinite;
}

@keyframes line-float {
0%, 100% {
  transform: translateY(0) rotate(var(--rotation, 0deg));
  opacity: 0.05;
}
50% {
  transform: translateY(-30px) rotate(var(--rotation, 0deg));
  opacity: 0.08;
}
}

.animate-line-float {
animation: line-float 15s ease-in-out infinite;
}

@keyframes particle {
0% {
  transform: translateY(0) scale(1);
  opacity: 0;
}
50% {
  transform: translateY(-100px) scale(1.5);
  opacity: 0.5;
}
100% {
  transform: translateY(-200px) scale(1);
  opacity: 0;
}
}

.animate-particle {
animation: particle 15s ease-in-out infinite;
}

@keyframes glow-pulse {
0%, 100% { opacity: 0.5; transform: scale(1); }
50% { opacity: 0.7; transform: scale(1.2); }
}

.animate-glow-pulse {
animation: glow-pulse 10s ease-in-out infinite;
}

.animate-glow-pulse-delayed {
animation: glow-pulse 10s ease-in-out infinite;
animation-delay: 5s;
}

@keyframes glass-float {
0%, 100% {
  transform: translate(0, 0) rotate(var(--rotation, 0deg));
  opacity: 0.05;
}
50% {
  transform: translate(-20px, 20px) rotate(calc(var(--rotation, 0deg) + 5deg));
  opacity: 0.08;
}
}

.animate-glass-float {
animation: glass-float 20s ease-in-out infinite;
}

@keyframes streak {
0% { transform: translateY(-100%) scaleY(0); opacity: 0; }
50% { transform: translateY(100%) scaleY(2); opacity: 0.5; }
100% { transform: translateY(300%) scaleY(0); opacity: 0; }
}

.animate-streak {
animation: streak 7s ease-in-out infinite;
}

@keyframes float-dot {
0%, 100% {
  transform: translate(0, 0);
  opacity: var(--initial-opacity, 0.05);
}
50% {
  transform: translate(
    calc(var(--x-offset, 0) * 30px),
    calc(var(--y-offset, 0) * 30px)
  );
  opacity: calc(var(--initial-opacity, 0.05) * 1.5);
}
}

.animate-float-dot {
--x-offset: calc(random() * 2 - 1);
--y-offset: calc(random() * 2 - 1);
--initial-opacity: calc(0.03 + random() * 0.05);
}

@keyframes card-float {
0%, 100% {
  transform: translate(0, 0) rotate(var(--rotation, 15deg));
  opacity: 0.07;
}
50% {
  transform: translate(-15px, 15px) rotate(calc(var(--rotation, 15deg) + 3deg));
  opacity: 0.09;
}
}

.animate-card-float {
animation: card-float 18s ease-in-out infinite;
}

@keyframes icon-float {
0%, 100% {
  transform: translate(0, 0) rotate(0deg);
  opacity: 0.06;
}
50% {
  transform: translate(-10px, 10px) rotate(5deg);
  opacity: 0.08;
}
}

.animate-icon-float {
animation: icon-float 15s ease-in-out infinite;
}

@keyframes flow-line {
0% { transform: translateY(-100%) scaleY(0); opacity: 0; }
50% { transform: translateY(100%) scaleY(1.5); opacity: 0.4; }
100% { transform: translateY(300%) scaleY(0); opacity: 0; }
}

.animate-flow-line {
animation: flow-line 8s ease-in-out infinite;
}

@keyframes data-point {
0%, 100% {
  transform: translate(0, 0) scale(1);
  opacity: var(--initial-opacity, 0.04);
}
50% {
  transform: translate(
    calc(var(--x-offset, 0) * 25px),
    calc(var(--y-offset, 0) * 25px)
  ) scale(1.2);
  opacity: calc(var(--initial-opacity, 0.04) * 1.5);
}
}

.animate-data-point {
--x-offset: calc(random() * 2 - 1);
--y-offset: calc(random() * 2 - 1);
--initial-opacity: calc(0.04 + random() * 0.04);
}

@keyframes pulse-slow {
0%, 100% { opacity: 0.03; transform: scale(1); }
50% { opacity: 0.05; transform: scale(1.1); }
}

.animate-pulse-slow {
animation: pulse-slow 10s ease-in-out infinite;
}

@keyframes security-pulse {
0% { transform: translateX(-50%) scale(0.95); opacity: 0.1; }
50% { transform: translateX(-50%) scale(1); opacity: 0.05; }
100% { transform: translateX(-50%) scale(0.95); opacity: 0.1; }
}

.animate-security-pulse {
animation: security-pulse 8s ease-in-out infinite;
}

@keyframes wave {
0% { transform: translateX(0) translateY(0) scale(1); }
50% { transform: translateX(-2%) translateY(10px) scale(1.02); }
100% { transform: translateX(0) translateY(0) scale(1); }
}

.animate-wave {
animation: wave 15s ease-in-out infinite;
}

@keyframes fade-in-out {
0%, 100% { opacity: 0.04; transform: translateY(0); }
50% { opacity: 0.08; transform: translateY(-5px); }
}

.animate-fade-in-out {
animation: fade-in-out 6s ease-in-out infinite;
}

@media (max-width: 768px) {
.security-circles {
  transform: scale(0.7);
}
}

/* Additional mobile optimizations */
@media (max-width: 640px) {
  /* Further reduce title size */
  h1 {
    font-size: 2rem !important;
  }

  /* Stack badges and icons */
  .inline-flex {
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Adjust sparkle animations */
  .animate-float-sparkle,
  .animate-float-sparkle-delay-1,
  .animate-float-sparkle-delay-2 {
    display: none;
  }
}
</style>



<section class="relative min-h-[85vh] overflow-hidden pt-20">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <!-- Professional Gradient Base -->
    <div class="absolute inset-0 bg-gradient-to-tr from-[#f8f9ff] via-white to-[#f0f4ff]"></div>
    
    <!-- Strategic Light Effects -->
    <div class="absolute inset-0">
      <!-- Main Highlight Area -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full
                  bg-[radial-gradient(70%_50%_at_50%_0%,rgba(96,91,255,0.06)_0%,transparent_100%)]"></div>
      
      <!-- Accent Light -->
      <div class="absolute top-20 right-[20%] w-[600px] h-[600px]
                  bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_60%)]
                  animate-pulse-slow"></div>
    </div>

    <!-- Modern Geometric Patterns -->
    <div class="absolute inset-0">
      <!-- Diagonal Grid -->
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: 
             repeating-linear-gradient(
               -45deg,
               #605bff 0px,
               #605bff 1px,
               transparent 1px,
               transparent 40px
             );"></div>

      <!-- Horizontal Lines -->
      <div class="absolute inset-0 opacity-[0.02]"
           style="background-image: 
             repeating-linear-gradient(
               0deg,
               #605bff 0px,
               #605bff 1px,
               transparent 1px,
               transparent 80px
             );"></div>
    </div>

    <!-- Dynamic Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Security Circles -->
      {#each Array(3) as _, i}
        <div class="absolute rounded-full border border-[#605bff]/10
                    animate-security-pulse"
             style="width: ${300 + i * 100}px;
                    height: ${300 + i * 100}px;
                    left: ${50 + i * 5}%;
                    top: ${20 + i * 10}%;
                    transform: translateX(-50%);
                    animation-delay: ${i * 1}s;"></div>
      {/each}

      <!-- Tech Wave -->
      <svg class="absolute w-full h-40 left-0 top-[20%] opacity-[0.04]" 
           viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor" class="animate-wave">
        </path>
      </svg>

      <!-- Payment Icons Grid -->
      <div class="absolute inset-0 grid grid-cols-6 gap-20 p-10 opacity-[0.04]">
        {#each Array(18) as _, i}
          <div class="relative animate-fade-in-out"
               style="animation-delay: ${i * 0.2}s">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {#if i % 3 === 0}
                <!-- Shield -->
                <path d="M12 2L3 7v6a12 12 0 0 0 9 11.66A12 12 0 0 0 21 13V7l-9-5z" 
                      stroke-width="1.5"/>
              {:else if i % 3 === 1}
                <!-- Lock -->
                <rect x="3" y="11" width="18" height="11" rx="2" stroke-width="1.5"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke-width="1.5"/>
              {:else}
                <!-- Check -->
                <path d="M20 6L9 17l-5-5" stroke-width="1.5"/>
              {/if}
            </svg>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 items-center max-w-[1400px] mx-auto">
      <!-- Left Section - Card -->
      <div class="hidden lg:block relative h-[400px]">
        <div class="absolute -left-24 w-full">
          <!-- Card Stack Effect -->
          <div class="absolute top-20 -left-4 w-[320px] h-[200px] rounded-2xl 
                      bg-gradient-to-br from-purple-600/20 to-purple-800/20
                      transform -rotate-12 blur-xl"></div>
          
          <div class="absolute top-16 -left-2 w-[320px] h-[200px] rounded-2xl 
                      bg-gradient-to-br from-purple-600/40 to-purple-800/40
                      transform -rotate-6 blur-md"></div>
          
          <!-- Main Card -->
          <div class="absolute top-10 w-[320px] h-[200px] rounded-2xl 
                      bg-gradient-to-br from-[#605bff] via-[#7b66ff] to-[#8b7fff]
                      shadow-xl hover:shadow-2xl transition-all duration-500 
                      transform hover:-translate-y-2 hover:scale-105 animate-float
                      backdrop-blur-xl border border-white/20">
            <div class="relative p-6 text-white h-full">
              <!-- Card Header -->
              <div class="flex justify-between items-start">
                <div class="space-y-1">
                  <div class="text-sm font-medium opacity-80">Premium Card</div>
                  <div class="text-xl font-bold tracking-wide">ipsepay</div>
                </div>
                
                <!-- EMV Chip -->
                <div class="w-12 h-9 rounded-md bg-[#FFD700]/80 
                            flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-yellow-600/40"></div>
                  <div class="grid grid-cols-3 gap-0.5">
                    {#each Array(6) as _}
                      <div class="w-1 h-1 bg-yellow-900/30 rounded-sm"></div>
                    {/each}
                  </div>
                </div>
              </div>
              
              <!-- Card Number -->
              <div class="mt-8">
                <div class="flex justify-between items-center text-xl tracking-[0.25em] font-light">
                  <span>****</span>
                  <span>****</span>
                  <span>****</span>
                  <span class="tracking-wider">4242</span>
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="absolute bottom-6 left-6 right-6">
                <div class="flex justify-between items-end text-sm">
                  <div>
                    <div class="opacity-70 text-xs mb-1">Card Holder</div>
                    <div class="font-medium tracking-wider">JOHN DOE</div>
                  </div>
                  <div class="text-right">
                    <div class="opacity-70 text-xs mb-1">Expires</div>
                    <div class="font-medium tracking-wider">12/25</div>
                  </div>
                </div>
              </div>
              
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          <!-- Card Reflections -->
          <div class="absolute top-[4.5rem] w-[320px] h-[200px] rounded-2xl 
                      bg-gradient-to-br from-white/5 to-white/10
                      blur-2xl transform -rotate-x-12 scale-95 opacity-40"></div>

          <!-- Original Floating Transaction Notifications -->
          {#each Array(2) as _, i}
            <div class="absolute right-0 w-48 p-3 bg-white/90 backdrop-blur-sm rounded-lg
                        shadow-lg border border-white/50 transform
                        animate-notification"
                 style="top: {140 + i * 80}px; animation-delay: {i * 2}s">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d={i === 0 ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M9 12l2 2 4-4"}/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium text-[#32325d]">
                    {i === 0 ? 'Payment Sent' : 'Transfer Complete'}
                  </div>
                  <div class="text-xs text-[#605bff]">${(100 + Math.random() * 900).toFixed(2)}</div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Center Section - Full width on mobile -->
      <div class="col-span-1 lg:col-span-1 px-4 lg:px-8">
        <div class="flex flex-col items-center text-center max-w-6xl mx-auto">
          <!-- Enhanced Title Section -->
          <div class="space-y-8 mb-16">
            <!-- Refined Badge -->
            <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                        bg-white/80 backdrop-blur-sm border border-[#605bff]/10 
                        shadow-sm hover:shadow transition-all duration-500
                        animate-badge-slide-in hover:-translate-y-0.5">
              <div class="flex items-center gap-2">
                <!-- Subtle Status Indicator -->
                <div class="relative flex items-center">
                  <div class="flex space-x-1">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#605bff]/40 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#605bff]/60"></span>
                    </span>
                  </div>
                  <div class="ml-2 h-3 w-px bg-gradient-to-b from-transparent via-[#605bff]/20 to-transparent"></div>
                </div>

                <!-- Refined Icon -->
                <div class="relative group">
                  <div class="absolute -inset-1 bg-gradient-to-r from-[#605bff]/20 to-purple-600/20 
                              rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <svg class="relative w-4 h-4 text-[#605bff]/70 transform transition-all duration-300 
                              group-hover:rotate-12 group-hover:scale-110" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>

              <!-- Lighter Text -->
              <div class="flex items-center gap-2">
                <span class="text-sm font-normal text-[#32325d]/70 tracking-wide">
                  Seamless Payment Solutions
                </span>
                <!-- Subtle Sparkle -->
                <span class="inline-flex animate-float-sparkle opacity-60">
                  <svg class="w-3.5 h-3.5 text-[#605bff]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Enhanced Creative Title -->
            <h1 class="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-tight mt-6 text-center">
              <div class="flex items-center gap-4 justify-center">
                <span class="text-[#32325d]">Ipsepay</span>
                <span class="bg-gradient-to-r from-[#605bff] to-purple-600 
                             bg-clip-text text-transparent">
                  Payment
                </span>
              </div>
              <span class="bg-gradient-to-r from-[#605bff] to-purple-600 
                           bg-clip-text text-transparent typewriter">
                {currentWord}
              </span>
            </h1>

            <!-- Static Subtitle with animated sparkles - visible on all screens -->
            <p class="text-lg text-[#32325d]/70 font-normal max-w-2xl mx-auto leading-relaxed tracking-wide relative text-center">
              <span class="inline-flex items-center gap-2 justify-center">
                Experience next-gen payment solutions
                <span class="animate-float-sparkle inline-block">✨</span>
              </span> 
              with instant global payouts, 
              <span class="inline-flex items-center gap-2 text-[#32325d]/90 justify-center">
                secure processing
                <span class="animate-float-sparkle-delay-1 inline-block">✨</span>
              </span>, and 
              <span class="inline-flex items-center gap-2 text-[#32325d]/90 justify-center">
                24/7 support
                <span class="animate-float-sparkle-delay-2 inline-block">✨</span>
              </span>.
            </p>

            <!-- Action Buttons - Centered for all screens -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <!-- Get Started Button - Links to signup -->
              <a href="/account/signup" 
                 class="w-full sm:w-auto group relative px-8 py-4 bg-[#605bff] rounded-xl text-white
                        shadow-lg shadow-[#605bff]/20 hover:shadow-xl hover:shadow-[#605bff]/30
                        transform hover:-translate-y-1 transition-all duration-300">
                <div class="absolute inset-0 bg-gradient-to-r from-[#605bff] to-purple-600
                             rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div class="relative flex items-center justify-center gap-3">
                  <span class="font-medium">Get Started</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </a>

              <!-- Login Button -->
              <a href="/account/login"
                 class="w-full sm:w-auto group px-8 py-4 bg-white/80 backdrop-blur-xl rounded-xl
                        border border-[#605bff]/20 text-[#32325d]
                        shadow-lg hover:shadow-xl transform hover:-translate-y-1
                        transition-all duration-300">
                <div class="flex items-center justify-center gap-3">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                  <span class="font-medium">Login</span>
                </div>
              </a>
            </div>

            <div class="mt-12 text-center">
              <!-- Enhanced Trust Badge with Multiple Checkmarks - Refined Size -->
              <div class="mt-6 inline-flex items-center gap-3">
                <!-- Checkmark Icons -->
                <div class="flex -space-x-1.5">
                  {#each Array(4) as _}
                    <div class="w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" 
                              stroke="currentColor" 
                              stroke-width="2" 
                              stroke-linecap="round" 
                              stroke-linejoin="round"/>
                      </svg>
                    </div>
                  {/each}
                </div>
                
                <!-- Text -->
                <div class="flex items-center gap-1.5 text-[#1E293B] text-sm">
                  <span class="font-normal">Trusted by</span>
                  <span class="font-bold">10,000+</span>
                  <span class="font-normal">businesses worldwide</span>
                </div>
              </div>

              <!-- Mobile-only sections -->
              <div class="lg:hidden mt-8 mb-6 sm:mt-10 sm:mb-8 px-4 sm:px-6">
                <!-- Container for side-by-side layout with offset positioning -->
                <div class="flex flex-row justify-center gap-10 sm:gap-12 md:gap-16 w-full relative">
                  <!-- Left Section - Mobile Version -->
                  <div class="relative h-[140px] sm:h-[160px] w-full max-w-[160px] sm:max-w-[180px] -translate-x-4 sm:-translate-x-6 md:-translate-x-8">
                    <div class="relative w-full transform scale-[0.8] sm:scale-[0.85] origin-center hover:scale-[0.9] transition-transform duration-300">
                      <!-- Background Card -->
                      <div class="absolute top-6 left-1/2 -translate-x-1/2 w-[160px] sm:w-[180px] h-[120px] sm:h-[140px] rounded-xl 
                                  bg-gradient-to-br from-purple-600 to-purple-800
                                  transform -rotate-12 opacity-40 blur-sm">
                      </div>
                      
                      <!-- Main Card -->
                      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] sm:w-[180px] h-[120px] sm:h-[140px] rounded-xl 
                                  bg-gradient-to-br from-[#605bff] to-purple-600
                                  shadow-xl transition-all duration-500 
                                  transform animate-float">
                        <div class="relative p-3 sm:p-4 text-white">
                          <div class="flex justify-between">
                            <div class="space-y-0.5">
                              <div class="text-[10px] sm:text-xs font-medium opacity-80">Premium</div>
                              <div class="text-xs sm:text-sm font-bold">ipsepay</div>
                            </div>
                            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center">
                              <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div class="mt-3 sm:mt-4 space-y-2">
                            <div class="flex justify-between text-xs tracking-wider">
                              <span>****</span>
                              <span>4242</span>
                            </div>
                            
                            <div class="flex justify-between text-[10px] sm:text-xs">
                              <div>
                                <div class="opacity-70">Card Holder</div>
                                <div>J. DOE</div>
                              </div>
                              <div class="text-right">
                                <div class="opacity-70">Exp</div>
                                <div>12/25</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right Section - Mobile Version -->
                  <div class="relative h-[140px] sm:h-[160px] w-full max-w-[180px] sm:max-w-[200px] translate-x-4 sm:translate-x-6 md:translate-x-8">
                    <div class="relative w-full transform scale-[0.8] sm:scale-[0.85] origin-center hover:scale-[0.9] transition-transform duration-300">
                      <!-- Main Dashboard Panel -->
                      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] sm:w-[200px] bg-white/95 backdrop-blur-xl 
                                  rounded-xl p-3 sm:p-4 border border-white/50 shadow-xl">
                        <div class="space-y-2 sm:space-y-3">
                          <!-- Dashboard Header -->
                          <div class="flex items-center justify-between">
                            <div>
                              <div class="text-[10px] sm:text-xs font-medium text-[#32325d]/70">Analytics Overview</div>
                              <div class="text-xs sm:text-sm font-bold text-[#32325d]">$48,562.20</div>
                            </div>
                            <div class="flex gap-1">
                              {#each ['1H', '1D', '1W'] as period}
                                <button class="px-1.5 py-0.5 text-[8px] sm:text-[10px] rounded 
                                           {period === '1D' ? 'bg-[#605bff] text-white' : 'text-[#32325d]/70 hover:bg-[#605bff]/10'}
                                           transition-all duration-300">
                                  {period}
                                </button>
                              {/each}
                            </div>
                          </div>

                          <!-- Dynamic Chart - Same as Desktop -->
                          <div class="relative h-16 sm:h-20">
                            <!-- Gradient Background -->
                            <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/5 to-transparent rounded-lg"></div>
                            
                            <!-- Chart Lines -->
                            <svg class="w-full h-full" viewBox="0 0 100 40">
                              <!-- Grid Lines -->
                              {#each Array(5) as _, i}
                                <line x1="0" y1={i * 10} x2="100" y2={i * 10} 
                                      stroke="#605bff" stroke-width="0.1" stroke-dasharray="1 1"/>
                              {/each}
                              
                              <!-- Main Chart Line -->
                              <path d="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20"
                                    fill="none" stroke="#605bff" stroke-width="0.5"
                                    class="animate-draw"/>
                              
                              <!-- Chart Area -->
                              <path d="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20 L 100 40 L 0 40 Z"
                                    fill="url(#gradient)" opacity="0.2"/>
                                      
                              <!-- Animated Dot -->
                              <circle r="1" fill="#605bff" class="animate-move-dot">
                                <animateMotion dur="4s" repeatCount="indefinite"
                                              path="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20"/>
                              </circle>
                            </svg>
                            
                            <!-- Gradient Definition -->
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#605bff;stop-opacity:0.3"/>
                                <stop offset="100%" style="stop-color:#605bff;stop-opacity:0"/>
                              </linearGradient>
                            </defs>
                          </div>

                          <!-- Activity Indicators -->
                          <div class="flex items-center justify-between px-2">
                            {#each Array(6) as _, i}
                              <div class="w-1 sm:w-1.5 h-3 sm:h-4 rounded-full bg-[#605bff]/20 overflow-hidden">
                                <div class="w-full bg-[#605bff] animate-activity"
                                     style="height: {30 + Math.random() * 70}%; animation-delay: {i * 0.2}s">
                                </div>
                              </div>
                            {/each}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Prtners/>

         
        </div>
      </div>

      <!-- Right Section - Hidden on mobile -->
      <div class="hidden lg:block relative h-[400px]">
        <div class="absolute -right-24 w-full">
          <!-- Main Dashboard Panel -->
          <div class="absolute top-10 right-0 w-[320px] bg-white/95 backdrop-blur-xl 
                      rounded-2xl p-5 border border-white/50 shadow-xl animate-float-reverse">
            <div class="space-y-4">
              <!-- Dashboard Header -->
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm font-medium text-[#32325d]/70">Analytics Overview</div>
                  <div class="text-lg font-bold text-[#32325d]">$48,562.20</div>
                </div>
                <div class="flex gap-2">
                  {#each ['1H', '1D', '1W'] as period}
                    <button class="px-2 py-1 text-xs rounded-md 
                               {period === '1D' ? 'bg-[#605bff] text-white' : 'text-[#32325d]/70 hover:bg-[#605bff]/10'}
                               transition-all duration-300">
                      {period}
                    </button>
                  {/each}
                </div>
              </div>

              <!-- Dynamic Chart -->
              <div class="relative h-32">
                <!-- Gradient Background -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/5 to-transparent rounded-lg"></div>
                
                <!-- Chart Lines -->
                <svg class="w-full h-full" viewBox="0 0 100 40">
                  <!-- Grid Lines -->
                  {#each Array(5) as _, i}
                    <line x1="0" y1={i * 10} x2="100" y2={i * 10} 
                          stroke="#605bff" stroke-width="0.1" stroke-dasharray="1 1"/>
                  {/each}
                  
                  <!-- Main Chart Line -->
                  <path d="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20"
                        fill="none" stroke="#605bff" stroke-width="0.5"
                        class="animate-draw"/>
                  
                  <!-- Chart Area -->
                  <path d="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20 L 100 40 L 0 40 Z"
                        fill="url(#gradient)" opacity="0.2"/>
                          
                  <!-- Animated Dot -->
                  <circle r="1" fill="#605bff" class="animate-move-dot">
                    <animateMotion dur="4s" repeatCount="indefinite"
                                  path="M0 30 Q 20 25, 30 15 T 45 20 T 60 10 T 75 25 T 100 20"/>
                  </circle>
                </svg>
                
                <!-- Gradient Definition -->
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#605bff;stop-opacity:0.3"/>
                    <stop offset="100%" style="stop-color:#605bff;stop-opacity:0"/>
                  </linearGradient>
                </defs>
              </div>

              
              <!-- Activity Indicators -->
              <div class="flex items-center justify-between px-2">
                {#each Array(6) as _, i}
                  <div class="w-1.5 h-6 rounded-full bg-[#605bff]/20 overflow-hidden">
                    <div class="w-full bg-[#605bff] animate-activity"
                         style="height: {30 + Math.random() * 70}%; animation-delay: {i * 0.2}s">
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute bottom-20 right-10 w-32 h-32 rounded-full 
                      bg-gradient-to-br from-[#605bff]/10 to-purple-600/10 
                      blur-2xl animate-pulse-slow">
          </div>
        </div>
      </div>
    </div>
  </div>


</section>



