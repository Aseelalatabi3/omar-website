<template>
  <div>
    <!-- شريط التنقل -->
  <Navbar />

    <!-- قسم الهيرو -->
    <section class="hero-library pt-32 pb-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="logo-shape mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">المكتبة المعرفية</h1>
        <p class="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">اكتشف مجموعة شاملة من الموارد التعليمية والمعرفية في مجال المحاسبة والمالية</p>

        <!-- شريط البحث -->
        <div class="max-w-2xl mx-auto relative">
          <input v-model="searchQuery" type="text" placeholder="ابحث في المكتبة..." class="w-full py-4 px-6 rounded-2xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-white">
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- التصنيفات -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button @click="setActiveTab('articles')" :class="['tab-button px-6 py-2 rounded-full', activeTab === 'articles' ? 'active' : '']">المقالات</button>
          <button @click="setActiveTab('guides')" :class="['tab-button px-6 py-2 rounded-full', activeTab === 'guides' ? 'active' : '']">الدليل</button>
          <button @click="setActiveTab('tools')" :class="['tab-button px-6 py-2 rounded-full', activeTab === 'tools' ? 'active' : '']">الأدوات</button>
          <button @click="setActiveTab('templates')" :class="['tab-button px-6 py-2 rounded-full', activeTab === 'templates' ? 'active' : '']">النماذج</button>
          <button @click="setActiveTab('webinars')" :class="['tab-button px-6 py-2 rounded-full', activeTab === 'webinars' ? 'active' : '']">الندوات المسجلة</button>
        </div>
      </div>
    </section>

    <!-- المحتوى -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
        <!-- المقالات -->
        <div v-if="activeTab === 'articles'" class="tab-content active">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="resource-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
              <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80');"></div>
              <div class="p-6">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full mb-2 inline-block" style="background-color: var(--cordovan);">مقال</span>
                <h3 class="text-xl font-bold text-slate-800 mb-3">أساسيات المحاسبة المالية</h3>
                <p class="text-slate-600 mb-4">دليل شامل لفهم المبادئ الأساسية في المحاسبة المالية والقوائم المالية.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="far fa-clock ml-1"></i> 5 دقائق قراءة</span>
                  <a href="#" class="text-sm font-semibold" style="color: var(--cordovan);">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
                </div>
              </div>
            </div>

            <div class="resource-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
              <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80');"></div>
              <div class="p-6">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full mb-2 inline-block" style="background-color: var(--brunswick-green);">مقال</span>
                <h3 class="text-xl font-bold text-slate-800 mb-3">إدارة التدفق النقدي</h3>
                <p class="text-slate-600 mb-4">كيفية إدارة التدفقات النقدية بفعالية لضمان استمرارية الأعمال.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="far fa-clock ml-1"></i> 7 دقائق قراءة</span>
                  <a href="#" class="text-sm font-semibold" style="color: var(--cordovan);">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
                </div>
              </div>
            </div>

            <div class="resource-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
              <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80');"></div>
              <div class="p-6">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full mb-2 inline-block" style="background-color: var(--dark-green);">مقال</span>
                <h3 class="text-xl font-bold text-slate-800 mb-3">الامتثال الضريبي</h3>
                <p class="text-slate-600 mb-4">دليل شامل لفهم متطلبات الامتثال الضريبي والإجراءات القانونية.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="far fa-clock ml-1"></i> 10 دقائق قراءة</span>
                  <a href="#" class="text-sm font-semibold" style="color: var(--cordovan);">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- الدليل -->
        <div v-if="activeTab === 'guides'" class="tab-content active">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="guide-card bg-white rounded-2xl shadow-md p-8 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-book-open text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">دليل إعداد القوائم المالية</h3>
              <p class="text-slate-600 mb-4 text-center">دليل خطوة بخطوة لإعداد القوائم المالية وفقاً للمعايير الدولية.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">تحميل الدليل</a>
              </div>
            </div>

            <div class="guide-card bg-white rounded-2xl shadow-md p-8 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-calculator text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">دليل حساب التكاليف</h3>
              <p class="text-slate-600 mb-4 text-center">كيفية حساب التكاليف بدقة وتحليل هامش الربح للمنتجات والخدمات.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">تحميل الدليل</a>
              </div>
            </div>
          </div>
        </div>

        <!-- الأدوات -->
        <div v-if="activeTab === 'tools'" class="tab-content active">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="tool-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-chart-line text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">حاسبة الضرائب</h3>
              <p class="text-slate-600 mb-4 text-center">أداة لحساب الضرائب المستحقة على الدخل والأرباح.</p>
              <div class="text-center">
                <router-link to="/calculator" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">استخدم الأداة</router-link>
              </div>
            </div>

            <div class="tool-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-file-invoice-dollar text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">مولد الفواتير</h3>
              <p class="text-slate-600 mb-4 text-center">أداة لإنشاء فواتير احترافية بسهولة وسرعة.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">استخدم الأداة</a>
              </div>
            </div>

            <div class="tool-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-chart-pie text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">تحليل الميزانية</h3>
              <p class="text-slate-600 mb-4 text-center">أداة لتحليل الميزانيات العمومية واستخراج المؤشرات المالية.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">استخدم الأداة</a>
              </div>
            </div>
          </div>
        </div>

        <!-- النماذج -->
        <div v-if="activeTab === 'templates'" class="tab-content active">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="template-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-file-alt text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">نموذج الميزانية العمومية</h3>
              <p class="text-slate-600 mb-4 text-center">نموذج جاهز لإعداد الميزانية العمومية وفقاً للمعايير الدولية.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">تحميل النموذج</a>
              </div>
            </div>

            <div class="template-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-file-invoice text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">نموذج قائمة الدخل</h3>
              <p class="text-slate-600 mb-4 text-center">نموذج شامل لإعداد قائمة الدخل والأرباح والخسائر.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">تحميل النموذج</a>
              </div>
            </div>

            <div class="template-card bg-white rounded-2xl shadow-md p-6 fade-in">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
                <i class="fas fa-chart-bar text-2xl" style="color: var(--brunswick-green);"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3 text-center">نموذج التدفق النقدي</h3>
              <p class="text-slate-600 mb-4 text-center">نموذج لإعداد قائمة التدفقات النقدية بجميع تفاصيلها.</p>
              <div class="text-center">
                <a href="#" class="btn-primary px-6 py-2 rounded-lg text-white font-semibold text-sm">تحميل النموذج</a>
              </div>
            </div>
          </div>
        </div>

        <!-- الندوات المسجلة -->
        <div v-if="activeTab === 'webinars'" class="tab-content active">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="webinar-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
              <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');"></div>
              <div class="p-6">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full mb-2 inline-block" style="background-color: var(--cordovan);">ندوة مسجلة</span>
                <h3 class="text-xl font-bold text-slate-800 mb-3">التحول الرقمي في المحاسبة</h3>
                <p class="text-slate-600 mb-4">ندوة شاملة عن كيفية استخدام التكنولوجيا في تحسين العمليات المحاسبية.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="far fa-clock ml-1"></i> 90 دقيقة</span>
                  <a href="#" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">شاهد الآن</a>
                </div>
              </div>
            </div>

            <div class="webinar-card bg-white rounded-2xl shadow-md overflow-hidden fade-in">
              <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1551818255-e9355c40bee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
              <div class="p-6">
                <span class="text-sm font-semibold text-white px-3 py-1 rounded-full mb-2 inline-block" style="background-color: var(--brunswick-green);">ندوة مسجلة</span>
                <h3 class="text-xl font-bold text-slate-800 mb-3">إدارة المخاطر المالية</h3>
                <p class="text-slate-600 mb-4">كيفية تحديد وإدارة المخاطر المالية في المنشآت التجارية.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-500"><i class="far fa-clock ml-1"></i> 75 دقيقة</span>
                  <a href="#" class="btn-primary px-4 py-2 rounded-lg text-white font-semibold text-sm">شاهد الآن</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="#" class="px-8 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-200 transition-colors inline-flex items-center">
            <span>عرض المزيد من المحتوى</span>
            <i class="fas fa-arrow-left mr-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- الفوتر -->
  <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
const searchQuery = ref('')
const activeTab = ref('articles')

const setActiveTab = (tab) => {
  activeTab.value = tab
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
.hero-library {
  background: linear-gradient(135deg, rgba(28, 70, 64, 0.9) 0%, rgba(9, 58, 54, 0.85) 100%), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.resource-card, .guide-card, .tool-card, .template-card, .webinar-card {
  transition: all 0.3s ease;
}

.resource-card:hover, .guide-card:hover, .tool-card:hover, .template-card:hover, .webinar-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.tab-button {
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.tab-button.active, .tab-button:hover {
  border-bottom-color: var(--cordovan);
  color: var(--brunswick-green);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>