<template>
  <div>
    <!-- شريط التنقل -->
<Navbar />

    <!-- قسم الهيرو -->
    <section class="hero-calculator pt-32 pb-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="logo-shape mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">حاسبة الخدمات المحاسبية</h1>
        <p class="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">احسب تكلفة خدماتنا المحاسبية بسهولة ودقة. اختر نوع الخدمة واملأ البيانات للحصول على تقدير فوري</p>
      </div>
    </section>

    <!-- الحاسبة -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- اختيار نوع الخدمة -->
          <div class="bg-slate-50 rounded-2xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 text-center">اختر نوع الخدمة</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                @click="selectedService = 'accounting'"
                :class="['service-btn p-6 rounded-xl text-center transition-all', { 'bg-cordovan text-white shadow-lg': selectedService === 'accounting', 'bg-white border-2 border-gray-200 hover:border-cordovan': selectedService !== 'accounting' }]"
              >
                <i class="fas fa-calculator text-3xl mb-3" style="color: var(--brunswick-green);"></i>
                <h3 class="font-bold mb-2">المحاسبة المالية</h3>
                <p class="text-sm text-slate-600">إعداد القوائم المالية</p>
              </button>

              <button
                @click="selectedService = 'tax'"
                :class="['service-btn p-6 rounded-xl text-center transition-all', { 'bg-cordovan text-white shadow-lg': selectedService === 'tax', 'bg-white border-2 border-gray-200 hover:border-cordovan': selectedService !== 'tax' }]"
              >
                <i class="fas fa-file-invoice-dollar text-3xl mb-3" style="color: var(--brunswick-green);"></i>
                <h3 class="font-bold mb-2">الاستشارات الضريبية</h3>
                <p class="text-sm text-slate-600">تخطيط الضرائب والزكوية</p>
              </button>

              <button
                @click="selectedService = 'audit'"
                :class="['service-btn p-6 rounded-xl text-center transition-all', { 'bg-cordovan text-white shadow-lg': selectedService === 'audit', 'bg-white border-2 border-gray-200 hover:border-cordovan': selectedService !== 'audit' }]"
              >
                <i class="fas fa-search-dollar text-3xl mb-3" style="color: var(--brunswick-green);"></i>
                <h3 class="font-bold mb-2">خدمات التدقيق</h3>
                <p class="text-sm text-slate-600">التدقيق المالي والمراجعة</p>
              </button>
            </div>
          </div>

          <!-- نموذج الحساب -->
          <div v-if="selectedService" class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 text-center">
              {{ serviceTitles[selectedService] }}
            </h2>

            <!-- نموذج المحاسبة المالية -->
            <form v-if="selectedService === 'accounting'" @submit.prevent="calculateCost">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-slate-700 mb-2">حجم الشركة (عدد الموظفين)</label>
                  <select v-model="formData.employees" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan">
                    <option value="10">أقل من 10</option>
                    <option value="50">10-50</option>
                    <option value="100">50-100</option>
                    <option value="200">أكثر من 100</option>
                  </select>
                </div>
                <div>
                  <label class="block text-slate-700 mb-2">الإيرادات السنوية (ألف ريال)</label>
                  <input v-model="formData.revenue" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 500">
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-slate-700 mb-2">عدد المعاملات الشهرية</label>
                <input v-model="formData.transactions" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 200">
              </div>
              <button type="submit" class="btn-primary w-full py-3 rounded-lg text-white font-semibold">احسب التكلفة</button>
            </form>

            <!-- نموذج الاستشارات الضريبية -->
            <form v-else-if="selectedService === 'tax'" @submit.prevent="calculateCost">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-slate-700 mb-2">نوع النشاط</label>
                  <select v-model="formData.activityType" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan">
                    <option value="small">صغير</option>
                    <option value="medium">متوسط</option>
                    <option value="large">كبير</option>
                  </select>
                </div>
                <div>
                  <label class="block text-slate-700 mb-2">الإيرادات السنوية (ألف ريال)</label>
                  <input v-model="formData.revenue" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 500">
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-slate-700 mb-2">عدد الفروع</label>
                <input v-model="formData.branches" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 1">
              </div>
              <button type="submit" class="btn-primary w-full py-3 rounded-lg text-white font-semibold">احسب التكلفة</button>
            </form>

            <!-- نموذج خدمات التدقيق -->
            <form v-else-if="selectedService === 'audit'" @submit.prevent="calculateCost">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-slate-700 mb-2">نوع التدقيق</label>
                  <select v-model="formData.auditType" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan">
                    <option value="internal">داخلي</option>
                    <option value="external">خارجي</option>
                    <option value="comprehensive">شامل</option>
                  </select>
                </div>
                <div>
                  <label class="block text-slate-700 mb-2">حجم الأصول (مليون ريال)</label>
                  <input v-model="formData.assets" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 5">
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-slate-700 mb-2">عدد السنوات المطلوبة</label>
                <input v-model="formData.years" type="number" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cordovan" placeholder="مثال: 3">
              </div>
              <button type="submit" class="btn-primary w-full py-3 rounded-lg text-white font-semibold">احسب التكلفة</button>
            </form>
          </div>

          <!-- نتيجة الحساب -->
          <div v-if="showResult" class="bg-green-50 rounded-2xl p-8 text-center mt-8">
            <h3 class="text-2xl font-bold text-green-800 mb-4">تقدير التكلفة</h3>
            <div class="text-4xl font-bold text-cordovan mb-4">{{ calculatedCost }} ر.س</div>
            <p class="text-slate-600 mb-6">هذا تقدير تقريبي. للحصول على عرض سعر دقيق، يرجى التواصل معنا.</p>
            <router-link to="/booking" class="btn-primary px-8 py-3 rounded-lg text-white font-semibold">احجز استشارتك الآن</router-link>
          </div>
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
const selectedService = ref('')
const showResult = ref(false)
const calculatedCost = ref(0)
const formData = ref({
  employees: '',
  revenue: '',
  transactions: '',
  activityType: '',
  branches: '',
  auditType: '',
  assets: '',
  years: ''
})

const serviceTitles = {
  accounting: 'حاسبة المحاسبة المالية',
  tax: 'حاسبة الاستشارات الضريبية',
  audit: 'حاسبة خدمات التدقيق'
}

const calculateCost = () => {
  let baseCost = 0
  let multiplier = 1

  if (selectedService.value === 'accounting') {
    baseCost = 5000
    multiplier = parseInt(formData.value.employees) / 10 + parseInt(formData.value.revenue) / 100 + parseInt(formData.value.transactions) / 100
  } else if (selectedService.value === 'tax') {
    baseCost = 3000
    const typeMultipliers = { small: 1, medium: 1.5, large: 2 }
    multiplier = typeMultipliers[formData.value.activityType] + parseInt(formData.value.revenue) / 200 + parseInt(formData.value.branches)
  } else if (selectedService.value === 'audit') {
    baseCost = 8000
    const typeMultipliers = { internal: 1, external: 1.5, comprehensive: 2 }
    multiplier = typeMultipliers[formData.value.auditType] + parseFloat(formData.value.assets) + parseInt(formData.value.years)
  }

  calculatedCost.value = Math.round(baseCost * multiplier)
  showResult.value = true
}
</script>

<style scoped>
.hero-calculator {
  background: linear-gradient(135deg, rgba(28, 70, 64, 0.9) 0%, rgba(9, 58, 54, 0.85) 100%), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
