<template>
  <div>
    <!-- شريط التنقل -->
   <Navbar />

    <!-- قسم الهيرو -->
    <section class="hero-success pt-32 pb-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="logo-shape mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">قصص النجاح</h1>
        <p class="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">اكتشف كيف ساعدت خدماتنا عملاءنا في تحقيق أهدافهم المالية وتنمية أعمالهم</p>
      </div>
    </section>

    <!-- إحصائيات النجاح -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="success-stat fade-in">
            <div class="text-4xl font-bold mb-2" style="color: var(--cordovan);">95%</div>
            <div class="text-slate-600">رضا العملاء</div>
          </div>
          <div class="success-stat fade-in">
            <div class="text-4xl font-bold mb-2" style="color: var(--brunswick-green);">150+</div>
            <div class="text-slate-600">عميل ناجح</div>
          </div>
          <div class="success-stat fade-in">
            <div class="text-4xl font-bold mb-2" style="color: var(--dark-green);">300%</div>
            <div class="text-slate-600">متوسط النمو</div>
          </div>
          <div class="success-stat fade-in">
            <div class="text-4xl font-bold mb-2" style="color: var(--cordovan);">12</div>
            <div class="text-slate-600">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </section>

    <!-- قصص النجاح -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
             <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        قصص نجاح حقيقية
      </h2>
    </div>
          <p class="text-slate-600 max-w-2xl mx-auto">قراءة عن تجارب عملائنا وكيف ساعدناهم في تحقيق أهدافهم</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- قصة نجاح 1 -->
          <div class="success-story bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-64 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80');"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800">أحمد محمد</h3>
                  <p class="text-slate-600">صاحب شركة تجارية</p>
                </div>
              </div>
              <p class="text-slate-600 mb-6">"ساعدني المحاسب عمر في تحويل شركتي من الخسارة إلى الربح خلال 6 أشهر فقط. خدماته الاستشارية ساعدتني في اتخاذ القرارات الصحيحة وإدارة التدفقات النقدية بفعالية."</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="fas fa-chart-line ml-1"></i>
                  <span>زيادة الأرباح بنسبة 250%</span>
                </div>
                <div class="text-sm text-slate-500">
                  <i class="fas fa-star text-yellow-400 ml-1"></i>
                  <span>5/5</span>
                </div>
              </div>
            </div>
          </div>

          <!-- قصة نجاح 2 -->
          <div class="success-story bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-64 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80');"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800">فاطمة علي</h3>
                  <p class="text-slate-600">مستشارة مالية</p>
                </div>
              </div>
              <p class="text-slate-600 mb-6">"كنت أواجه صعوبة في إدارة الضرائب لعملائي. خدمات المحاسب عمر ساعدتني في فهم اللوائح الضريبية المعقدة وتطبيقها بفعالية، مما أدى إلى توفير آلاف الريالات لعملائي."</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="fas fa-save ml-1"></i>
                  <span>توفير 50,000 ر.س في الضرائب</span>
                </div>
                <div class="text-sm text-slate-500">
                  <i class="fas fa-star text-yellow-400 ml-1"></i>
                  <span>5/5</span>
                </div>
              </div>
            </div>
          </div>

          <!-- قصة نجاح 3 -->
          <div class="success-story bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-64 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80');"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800">محمد حسن</h3>
                  <p class="text-slate-600">صاحب مصنع</p>
                </div>
              </div>
              <p class="text-slate-600 mb-6">"كنت أعاني من مشاكل في التدقيق المالي لمصنعي. المحاسب عمر قام بإعادة هيكلة النظام المحاسبي بالكامل، مما أدى إلى تحسين الكفاءة وتقليل الأخطاء بنسبة 80%."</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="fas fa-check-circle ml-1"></i>
                  <span>تقليل الأخطاء بنسبة 80%</span>
                </div>
                <div class="text-sm text-slate-500">
                  <i class="fas fa-star text-yellow-400 ml-1"></i>
                  <span>5/5</span>
                </div>
              </div>
            </div>
          </div>

          <!-- قصة نجاح 4 -->
          <div class="success-story bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-64 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80');"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800">سارة أحمد</h3>
                  <p class="text-slate-600">مستثمرة</p>
                </div>
              </div>
              <p class="text-slate-600 mb-6">"ساعدني المحاسب عمر في اتخاذ قرارات استثمارية حكيمة من خلال تحليل مالي دقيق. استشاراته ساعدتني في مضاعفة استثماراتي خلال عام واحد."</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="fas fa-chart-line ml-1"></i>
                  <span>مضاعفة الاستثمارات</span>
                </div>
                <div class="text-sm text-slate-500">
                  <i class="fas fa-star text-yellow-400 ml-1"></i>
                  <span>5/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- الفوتر -->
  <Footer />
  
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
onMounted(() => {
  // Fade in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  })

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.hero-success {
  background: linear-gradient(135deg, rgba(28, 70, 64, 0.9) 0%, rgba(9, 58, 54, 0.85) 100%), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.success-stat {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.success-stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.success-story {
  transition: all 0.3s ease;
}

.success-story:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
