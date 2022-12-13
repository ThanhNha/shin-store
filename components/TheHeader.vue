<template>
  <header id="header">
    <div class="flex items-centter">
      <ul class="grid grid-cols-3 w-full">
        <li class="col-span-1 flex items-center">
          <nav class="">
            <ul class="flex space-x-2 uppercase">
              <li><NuxtLink class="body-text" href="#">Menu1</NuxtLink></li>
              <li><NuxtLink class="body-text" href="#">Menu1</NuxtLink></li>
              <li><NuxtLink class="body-text" href="#">Menu1</NuxtLink></li>
              <li><NuxtLink class="body-text" href="#">Menu1</NuxtLink></li>
              <li><NuxtLink class="body-text" href="#">Menu1</NuxtLink></li>
            </ul>
          </nav>
        </li>
        <li class="col-span-1">
          <div class="flex justify-center">
            <Image src="logo.png" class="main-logo"></Image>
          </div>
        </li>
        <li class="col-span-1"></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.main-logo {
  max-width: 120px;
}
</style>