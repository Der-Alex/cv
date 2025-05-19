<template>
  <div class="photo w-full">
    <picture class="block picture p-8 sm:p-0">
      <source
        srcset="/alex-648.webp"
        media="(width >= 660px)"
      />
      <img
        class="mx-auto w-xs h-xs sm:w-auto sm:min-w-xs sm:max-h-[648px] sm:aspect-[6/9]"
        src="/alex-320.webp"
        alt="Ein Foto von Alex"
        rel="preload"
      />
    </picture>
  </div>
</template>
<style>
.photo {
  background-image: url('/alex-320.webp');
  background-size: 100%;
}
.picture {
  backdrop-filter: blur(42px);
}
</style>
