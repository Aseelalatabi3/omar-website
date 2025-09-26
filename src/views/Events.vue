<template>
  <div>
    <!-- شريط التنقل -->
    <Navbar />

    <!-- قسم الهيرو -->
    <section class="hero-events pt-32 pb-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="logo-shape mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الورش والفعاليات</h1>
        <p class="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">انضم إلى ورش العمل والفعاليات التدريبية لتطوير مهاراتك المحاسبية والمالية</p>

        <!-- شريط البحث -->
        <div class="max-w-2xl mx-auto relative">
          <input v-model="searchQuery" type="text" placeholder="ابحث عن الورش والفعاليات..." class="w-full py-4 px-6 rounded-2xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-white">
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- عوامل التصفية -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button @click="setFilter('all')" :class="['filter-btn px-6 py-2 rounded-full border-2', activeFilter === 'all' ? 'active' : '']">جميع الفعاليات</button>
          <button @click="setFilter('workshop')" :class="['filter-btn px-6 py-2 rounded-full border-2', activeFilter === 'workshop' ? 'active' : '']">ورش عمل</button>
          <button @click="setFilter('seminar')" :class="['filter-btn px-6 py-2 rounded-full border-2', activeFilter === 'seminar' ? 'active' : '']">ندوات</button>
          <button @click="setFilter('webinar')" :class="['filter-btn px-6 py-2 rounded-full border-2', activeFilter === 'webinar' ? 'active' : '']">ندوات عبر الإنترنت</button>
          <button @click="setFilter('upcoming')" :class="['filter-btn px-6 py-2 rounded-full border-2', activeFilter === 'upcoming' ? 'active' : '']">قادمة</button>
        </div>
      </div>
    </section>

    <!-- الفعاليات -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- فعالية 1 -->
          <div v-if="matchesFilter('workshop')" class="event-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full" style="background-color: var(--cordovan);">ورشة عمل</span>
                <span class="text-sm text-slate-500"><i class="far fa-calendar ml-1"></i> 15 ديسمبر 2023</span>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">إدارة التدفق النقدي في الأزمات</h3>
              <p class="text-slate-600 mb-4">ورشة عمل تفاعلية لتعلم كيفية إدارة التدفقات النقدية خلال فترات الركود الاقتصادي والأزمات.</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="far fa-clock ml-1"></i> 3 ساعات
                  <span class="mx-2">•</span>
                  <i class="fas fa-map-marker-alt ml-1"></i> تعز
                </div>
                <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
              </div>
            </div>
          </div>

          <!-- فعالية 2 -->
          <div v-if="matchesFilter('seminar')" class="event-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1551818255-e9355c40bee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full" style="background-color: var(--brunswick-green);">ندوة</span>
                <span class="text-sm text-slate-500"><i class="far fa-calendar ml-1"></i> 20 ديسمبر 2023</span>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">التحديثات الضريبية لعام 2024</h3>
              <p class="text-slate-600 mb-4">ندوة شاملة عن أهم التحديثات والتغييرات في النظام الضريبي للعام القادم.</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="far fa-clock ml-1"></i> 2 ساعات
                  <span class="mx-2">•</span>
                  <i class="fas fa-video ml-1"></i> عبر الإنترنت
                </div>
                <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
              </div>
            </div>
          </div>

          <!-- فعالية 3 -->
          <div v-if="matchesFilter('webinar')" class="event-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
            <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');"></div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full" style="background-color: var(--dark-green);">ندوة عبر الإنترنت</span>
                <span class="text-sm text-slate-500"><i class="far fa-calendar ml-1"></i> 25 ديسمبر 2023</span>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">تحليل القوائم المالية المتقدم</h3>
              <p class="text-slate-600 mb-4">ندوة متخصصة في تقنيات التحليل المالي المتقدم واستخراج المؤشرات الرئيسية.</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <i class="far fa-clock ml-1"></i> 1.5 ساعة
                  <span class="mx-2">•</span>
                  <i class="fas fa-video ml-1"></i> عبر الإنترنت
                </div>
                <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="#" class="px-8 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-200 transition-colors inline-flex items-center">
            <span>عرض المزيد من الفعاليات</span>
            <i class="fas fa-arrow-left mr-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- الفعاليات القادمة -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
              <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        الفعاليات القادمة
      </h2>
    </div>
          <p class="text-slate-600 max-w-2xl mx-auto">لا تفوت فرصة المشاركة في أهم الفعاليات المحاسبية والمالية</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="timeline">
            <div class="timeline-item fade-in">
              <div class="bg-slate-50 p-6 rounded-2xl shadow-md">
                <span class="timeline-date">يناير 2024</span>
                <h3 class="text-xl font-bold text-slate-800 mb-2">ورشة عمل: التحول الرقمي في المحاسبة</h3>
                <p class="text-slate-600 mb-4">تعلم كيفية استخدام أحدث التقنيات في مجال المحاسبة والمالية.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="fas fa-map-marker-alt ml-1"></i> تعز - فندق موفنبيك</span>
                  <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
                </div>
              </div>
            </div>

            <div class="timeline-item fade-in">
              <div class="bg-slate-50 p-6 rounded-2xl shadow-md">
                <span class="timeline-date">فبراير 2024</span>
                <h3 class="text-xl font-bold text-slate-800 mb-2">ندوة: الامتثال الضريبي في الشركات</h3>
                <p class="text-slate-600 mb-4">ندوة متخصصة في متطلبات الامتثال الضريبي للشركات والمؤسسات.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="fas fa-video ml-1"></i> عبر الإنترنت</span>
                  <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
                </div>
              </div>
            </div>

            <div class="timeline-item fade-in">
              <div class="bg-slate-50 p-6 rounded-2xl shadow-md">
                <span class="timeline-date">مارس 2024</span>
                <h3 class="text-xl font-bold text-slate-800 mb-2">مؤتمر المحاسبة السنوي</h3>
                <p class="text-slate-600 mb-4">المؤتمر الأكبر للمحاسبين والمختصين الماليين في اليمن.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="fas fa-map-marker-alt ml-1"></i> صنعاء - مركز المؤتمرات</span>
                  <router-link to="/booking" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">سجل الآن</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- النشرة البريدية -->
    <section class="py-16 bg-slate-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 class="text-3xl font-bold text-slate-800 mb-4">اشترك في النشرة البريدية</h2>
          <p class="text-slate-600 mb-6">احصل على إشعارات بأحدث الورش والفعاليات والمحتوى التعليمي</p>

          <form class="flex flex-col md:flex-row gap-4 mb-4">
            <input type="email" placeholder="بريدك الإلكتروني" class="flex-grow py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="submit" class="btn-primary py-3 px-6 rounded-lg text-white font-semibold">اشترك الآن</button>
          </form>

          <p class="text-sm text-slate-500">نحن نحترم خصوصيتك ولن نشارك بريدك مع أي طرف ثالث</p>
        </div>
      </div>
    </section>

    <!-- الفوتر -->
<Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'

const searchQuery = ref('')
const activeFilter = ref('all')

const setFilter = (filter) => {
  activeFilter.value = filter
}

const matchesFilter = (eventType) => {
  if (activeFilter.value === 'all') return true
  if (activeFilter.value === 'upcoming') return true // All events are upcoming in this example
  return activeFilter.value === eventType
}

// Intersection Observer for fade-in animations
import { onMounted } from 'vue'
onMounted(() => {
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
.hero-events {
  background: linear-gradient(135deg, rgba(28, 70, 64, 0.9) 0%, rgba(9, 58, 54, 0.85) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.event-card {
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.filter-btn {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.filter-btn.active, .filter-btn:hover {
  background: var(--brunswick-green);
  color: white;
  border-color: var(--brunswick-green);
}

.timeline {
  position: relative;
  padding-right: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
  width: 4px;
  background: var(--gradient);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 12px;
  right: -3rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--cordovan);
  border: 4px solid white;
  box-shadow: 0 0 0 3px var(--cordovan);
  z-index: 1;
}

.timeline-date {
  background: var(--brunswick-green);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
</style>
