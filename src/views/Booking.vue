<template>
  <div>
    <!-- شريط التنقل -->
  <Navbar />

    <!-- قسم الهيرو -->
    <section class="hero-booking pt-32 pb-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="logo-shape mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">حجز الاستشارات</h1>
        <p class="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">احجز موعداً لاستشارة محاسبية متخصصة وابدأ رحلتك نحو النجاح المالي</p>
      </div>
    </section>

    <!-- نموذج الحجز -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-slate-50 rounded-2xl shadow-md p-8">
            <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">احجز استشارتك الآن</h2>

            <form @submit.prevent="submitBooking" class="space-y-6">
              <!-- معلومات شخصية -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-slate-700 mb-2 font-semibold">الاسم الكامل *</label>
                  <input v-model="form.name" type="text" required class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-slate-700 mb-2 font-semibold">رقم الهاتف *</label>
                  <input v-model="form.phone" type="tel" required class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>

              <div>
                <label class="block text-slate-700 mb-2 font-semibold">البريد الإلكتروني *</label>
                <input v-model="form.email" type="email" required class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>

              <!-- نوع الاستشارة -->
              <div>
                <label class="block text-slate-700 mb-4 font-semibold">نوع الاستشارة المطلوبة *</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.serviceType" type="radio" value="accounting" name="service" class="ml-3">
                    <div>
                      <div class="font-semibold text-slate-800">استشارة محاسبية</div>
                      <div class="text-sm text-slate-600">إعداد القوائم المالية والتقارير</div>
                    </div>
                  </label>
                  <label class="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.serviceType" type="radio" value="tax" name="service" class="ml-3">
                    <div>
                      <div class="font-semibold text-slate-800">استشارة ضريبية</div>
                      <div class="text-sm text-slate-600">الامتثال الضريبي والتخطيط</div>
                    </div>
                  </label>
                  <label class="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.serviceType" type="radio" value="audit" name="service" class="ml-3">
                    <div>
                      <div class="font-semibold text-slate-800">خدمات التدقيق</div>
                      <div class="text-sm text-slate-600">التدقيق المالي والمراجعة</div>
                    </div>
                  </label>
                  <label class="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.serviceType" type="radio" value="business" name="service" class="ml-3">
                    <div>
                      <div class="font-semibold text-slate-800">استشارة أعمال</div>
                      <div class="text-sm text-slate-600">تطوير الأعمال والتخطيط المالي</div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- تفاصيل الاستشارة -->
              <div>
                <label class="block text-slate-700 mb-2 font-semibold">تفاصيل الاستشارة</label>
                <textarea v-model="form.details" rows="4" placeholder="وصف المشكلة أو الاستشارة المطلوبة..." class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <!-- طريقة التواصل -->
              <div>
                <label class="block text-slate-700 mb-4 font-semibold">طريقة التواصل المفضلة *</label>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.contactMethod" type="radio" value="phone" name="contact" class="ml-3">
                    <i class="fas fa-phone ml-2 text-slate-600"></i>
                    <span>الهاتف</span>
                  </label>
                  <label class="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.contactMethod" type="radio" value="video" name="contact" class="ml-3">
                    <i class="fas fa-video ml-2 text-slate-600"></i>
                    <span>فيديو</span>
                  </label>
                  <label class="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input v-model="form.contactMethod" type="radio" value="office" name="contact" class="ml-3">
                    <i class="fas fa-map-marker-alt ml-2 text-slate-600"></i>
                    <span>المكتب</span>
                  </label>
                </div>
              </div>

              <!-- الميزانية المتوقعة -->
              <div>
                <label class="block text-slate-700 mb-2 font-semibold">الميزانية المتوقعة</label>
                <select v-model="form.budget" class="w-full py-3 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">اختر الميزانية المتوقعة</option>
                  <option value="under-1000">أقل من 1,000 ر.س</option>
                  <option value="1000-5000">1,000 - 5,000 ر.س</option>
                  <option value="5000-10000">5,000 - 10,000 ر.س</option>
                  <option value="over-10000">أكثر من 10,000 ر.س</option>
                </select>
              </div>

              <!-- الموافقة على الشروط -->
              <div class="flex items-start">
                <input v-model="form.agreeToTerms" type="checkbox" required class="mt-1 ml-3">
                <label class="text-slate-600 text-sm">
                  أوافق على <a href="#" class="text-blue-600 hover:underline">الشروط والأحكام</a> و <a href="#" class="text-blue-600 hover:underline">سياسة الخصوصية</a>
                </label>
              </div>

              <!-- زر الإرسال -->
              <div class="text-center">
                <button type="submit" :disabled="!isFormValid" class="btn-primary px-12 py-4 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  <i class="fas fa-calendar-check ml-2"></i>
                  تأكيد الحجز
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- معلومات الاتصال -->
    <section class="py-16 bg-slate-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-800 mb-4">معلومات الاتصال</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">تواصل معنا لأي استفسارات إضافية قبل الحجز</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-md p-6 text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-phone text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">الهاتف</h3>
            <p class="text-slate-600 mb-4">+967 123 456 789</p>
            <a href="tel:+967123456789" class="text-sm font-semibold" style="color: var(--cordovan);">اتصل الآن <i class="fas fa-arrow-left mr-1"></i></a>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-envelope text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">البريد الإلكتروني</h3>
            <p class="text-slate-600 mb-4">info@altawil-accountant.com</p>
            <a href="mailto:info@altawil-accountant.com" class="text-sm font-semibold" style="color: var(--cordovan);">أرسل رسالة <i class="fas fa-arrow-left mr-1"></i></a>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6 text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-map-marker-alt text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">الموقع</h3>
            <p class="text-slate-600 mb-4">تعز - شارع جمال</p>
            <a href="#" class="text-sm font-semibold" style="color: var(--cordovan);">عرض على الخريطة <i class="fas fa-arrow-left mr-1"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- الأسئلة الشائعة -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-800 mb-4">الأسئلة الشائعة</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">إجابات على الأسئلة الأكثر شيوعاً حول حجز الاستشارات</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="faq-item bg-slate-50 rounded-lg p-6 mb-4 cursor-pointer" @click="toggleFaq(0)">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-slate-800">كم يستغرق الرد على طلب الحجز؟</h3>
              <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': activeFaq === 0 }"></i>
            </div>
            <div class="faq-content mt-4 text-slate-600" :class="{ 'block': activeFaq === 0, 'hidden': activeFaq !== 0 }">
              نحن نسعى للرد على جميع طلبات الحجز خلال 24 ساعة من وقت التقديم. في حالات الطوارئ، قد يتم الرد بشكل أسرع.
            </div>
          </div>

          <div class="faq-item bg-slate-50 rounded-lg p-6 mb-4 cursor-pointer" @click="toggleFaq(1)">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-slate-800">هل يمكن إلغاء أو تعديل موعد الاستشارة؟</h3>
              <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': activeFaq === 1 }"></i>
            </div>
            <div class="faq-content mt-4 text-slate-600" :class="{ 'block': activeFaq === 1, 'hidden': activeFaq !== 1 }">
              نعم، يمكن إلغاء أو تعديل موعد الاستشارة بإشعار مسبق لا يقل عن 24 ساعة. سيتم استرداد المبلغ كاملاً في حال الإلغاء المبكر.
            </div>
          </div>

          <div class="faq-item bg-slate-50 rounded-lg p-6 mb-4 cursor-pointer" @click="toggleFaq(2)">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-slate-800">ما هي طرق الدفع المتاحة؟</h3>
              <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': activeFaq === 2 }"></i>
            </div>
            <div class="faq-content mt-4 text-slate-600" :class="{ 'block': activeFaq === 2, 'hidden': activeFaq !== 2 }">
              نقبل جميع طرق الدفع الشائعة بما في ذلك التحويل البنكي، بطاقات الائتمان، والدفع النقدي عند زيارة المكتب.
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
import { ref, computed } from 'vue'
import Navbar from '../components/Layout/Navbar.vue'
import Footer from '../components/Layout/Footer.vue'
const activeFaq = ref(null)

const form = ref({
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  details: '',
  contactMethod: '',
  budget: '',
  agreeToTerms: false
})

const isFormValid = computed(() => {
  return form.value.name &&
         form.value.phone &&
         form.value.email &&
         form.value.serviceType &&
         form.value.contactMethod &&
         form.value.agreeToTerms
})

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const submitBooking = () => {
  if (isFormValid.value) {
    // هنا يمكن إرسال البيانات إلى الخادم
    alert('تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً.')
    // إعادة تعيين النموذج
    form.value = {
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      details: '',
      contactMethod: '',
      budget: '',
      agreeToTerms: false
    }
  }
}
</script>

<style scoped>
.hero-booking {
  background: linear-gradient(135deg, rgba(28, 70, 64, 0.9) 0%, rgba(9, 58, 54, 0.85) 100%), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
