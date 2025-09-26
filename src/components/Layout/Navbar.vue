<template>
  <nav id="navbar" class="fixed w-full z-50 py-3 transition-all duration-300" style="background-color: var(--brunswick-green);">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-white flex items-center">
          <div class="p-2 mr-3">
            <img src="@/assets/images/logo.jpg" class="w-10 h-10 rounded-fullt=">
            <!-- <span style="color: white; font-weight: 800;"></span> -->
          </div>
         المحاسب القانوني عمر الطويل
        </router-link>

        <div id="nav-links" class="hidden lg:flex items-center space-x-2 space-x-reverse">
          <router-link to="/" class="px-3 py-2 text-white text-sm font-medium hover:text-gray-300 transition-colors">الرئيسية</router-link>
          <router-link to="/calculator" class="px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">حاسبة الخدمات</router-link>
          <router-link to="/events" class="px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">الورش والفعاليات</router-link>
          <router-link to="/library" class="px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">المكتبة المعرفية</router-link>
          <router-link to="/success" class="px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">قصص النجاح</router-link>
          <router-link to="/booking" class="px-3 py-2 text-white text-sm rounded-md transition-colors font-semibold" style="background-color: var(--cordovan);">حجز الاستشارات</router-link>
          <div class="flex items-center mr-4">
            <span class="text-white mr-2"><i class="fas fa-sun"></i></span>
            <label class="mode-switch">
              <input type="checkbox" id="mode-toggle" />
              <span class="mode-slider"></span>
            </label>
            <span class="text-white ml-2"><i class="fas fa-moon"></i></span>
          </div>
        </div>

        <button id="mobile-menu-btn" class="lg:hidden text-white" aria-label="Toggle menu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="lg:hidden fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out -translate-x-full">
    <div class="flex justify-end p-4">
      <button id="close-mobile-menu-btn" class="text-white text-3xl">&times;</button>
    </div>
    <div class="flex flex-col items-center justify-center h-full space-y-6">
      <router-link to="/" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">الرئيسية</router-link>
      <router-link to="/calculator" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">حاسبة الخدمات</router-link>
      <router-link to="/events" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">الورش والفعاليات</router-link>
      <router-link to="/library" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">المكتبة المعرفية</router-link>
      <router-link to="/success" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">قصص النجاح</router-link>
      <router-link to="/booking" class="px-6 py-3 rounded-md text-white font-semibold text-base" style="background-color: var(--cordovan);">حجز الاستشارات</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Dark Mode Toggle
  const modeToggle = document.getElementById('mode-toggle');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('darkMode') === 'enabled') {
    htmlElement.classList.add('dark');
    modeToggle.checked = true;
  }

  modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
  
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('nav-scroll', 'py-2');
      navbar.classList.remove('py-3');
    } else {
      navbar.classList.remove('nav-scroll', 'py-2');
      navbar.classList.add('py-3');
    }
  });
});
</script>