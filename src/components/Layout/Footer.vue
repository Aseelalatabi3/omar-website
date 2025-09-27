<template>
  <footer class="relative bg-slate-900 text-slate-300 py-4 overflow-hidden" style="background-color: var(--dark-green);">
    <div class="absolute top-0 left-0 w-full h-1 animate-slide" style="background: linear-gradient(to right, var(--brunswick-green), var(--cordovan), var(--brunswick-green));"></div>

    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div class="text-center md:text-right">
        <h3 class="text-base font-semibold text-white">المحاسب القانوني عمر الطويل</h3>
        <p class="text-xs text-slate-300">حلول مالية وقانونية موثوقة</p>
      </div>

      <div class="flex space-x-2">
        <a href="#" class="icon-circle-sm"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon-circle-sm"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="icon-circle-sm"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="icon-circle-sm"><i class="fab fa-whatsapp"></i></a>
      </div>

      <div class="text-xs text-center md:text-left text-slate-300">
        © 2025 جميع الحقوق محفوظة
      </div>
    </div>
    
    <!-- إضافة اسم المصمم مع رابط الفيسبوك -->
    <div class="container mx-auto px-4 mt-2 pt-2 border-t border-slate-700/30">
      <div class="text-center">
        <p class="text-xs text-slate-400">
          تصميم وتطوير : 
            <a 
                href="https://wa.me/967779028434"
              target="_blank" 
              rel="noopener noreferrer"
              class="text-slate-300 hover:text-white transition-colors duration-300 font-medium underline"
            >
              أصيل العتابي
            </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// يمكن إضافة أي دالة خاصة بالفوتر هنا
</script>

<style scoped>


.animate-slide {
  background-size: 200% 100%;
  animation: slide 3s linear infinite;
}

@keyframes slide {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>