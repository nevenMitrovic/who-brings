<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="w-full flex items-center justify-center"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="space-x-4 flex">
              <div
                class="font-medium text-xl text-gray-400 items-center justify-center hover:text-white cursor-pointer"
              >
                <RouterLink to="/">Create List</RouterLink>
              </div>
              <div
                class="font-medium text-xl text-gray-400 items-center justify-center hover:text-white cursor-pointer"
              >
                <RouterLink to="/dashboard">Dashboard</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
