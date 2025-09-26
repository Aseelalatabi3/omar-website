<template>
  <div class="min-h-screen">
    <Navbar />
    
    <!-- Hero Section -->
   <section class="hero-gradient pt-32 pb-28 text-white">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center">
      <!-- النصوص -->
      <div class="lg:w-1/2 mb-12 lg:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 leading-tight fade-in">
          <span style="color: var(--silver)"> المحاسب القانوني </span>عمر الطويل 
        </h1>
        <p class="text-xl mb-8 text-gray-200 fade-in" style="transition-delay: 0.2s;">
          بخبرة أكاديمية ومهنية تتجاوز 15 عاماً في التدقيق والمحاسبة الدولية،
          أقدّم حلولاً مالية وقانونية متكاملة تساعدك على تحقيق الشفافية،
          الامتثال للمعايير، وبناء مستقبل مالي أكثر استقراراً ونمواً.
        </p>
        <div class="flex flex-wrap gap-4 fade-in" style="transition-delay: 0.4s;">
          <router-link to="/booking" class="btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg animate-pulse-glow">
            احجز استشارة مجانية
          </router-link>
          <a href="#services" class="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
            استكشف خدماتنا
          </a>
        </div>
        <!-- هاشتاق الهوية -->
        <!-- <div class="mt-6 fade-in" style="transition-delay: 0.6s;">
          <span class="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md animate-bounce">
            #دربك_أخضر
          </span>
        </div> -->
      </div>

      <!-- الصورة والبطاقات -->
      <div class="lg:w-1/2 flex justify-center fade-in" style="transition-delay: 0.6s;">
        <div class="relative w-full max-w-lg">
          <div class="absolute -top-10 -right-5 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating" style="background-color: var(--brunswick-green);"></div>
          <div class="absolute -bottom-10 -left-5 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating animation-delay-2000" style="background-color: var(--cordovan);"></div>
          <div class="relative glass-effect rounded-2xl p-6 shadow-2xl">
            <img src="@/assets/images/about.jpg" alt="المحاسب القانوني عمر الطويل" class="rounded-xl shadow-lg" loading="lazy" decoding="async" />
            
            <!-- بطاقة المحاسب المعتمد -->
            <div class="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 w-40 dark:bg-slate-900" style="border-top: 4px solid var(--dark-green);">
              <div class="flex items-center">
                <div class="rounded-full p-2 mr-2" style="background-color: var(--dark-green)">
                  <i class="fas fa-trophy text-white"></i>
                </div>
                <div>
                  <p class="font-bold text-sm">محاسب معتمد</p>
                  <p class="text-xs text-slate-600 dark:text-slate-400">ترخيص رقم 2202</p>
                </div>
              </div>
            </div>

            <!-- بطاقة الخبرة -->
            <!-- <div class="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-4 w-40 dark:bg-slate-900" style="border-top: 4px solid var(--cordovan);">
              <div class="flex items-center">
                <div class="rounded-full p-2 mr-2" style="background-color: var(--cordovan);">
                  <i class="fas fa-medal text-white"></i>
                </div>
                <div>
                  <p class="font-bold text-sm">15+ سنة</p>
                  <p class="text-xs text-slate-600 dark:text-slate-400">خبرة عملية</p>
                </div>
              </div>
            </div> -->
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-4 fade-in">
            <div class="stat-number text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div class="text-slate-600 dark:text-slate-400">سنوات من الخبرة</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-4xl md:text-5xl font-bold mb-2">250+</div>
            <div class="text-slate-600 dark:text-slate-400">عميل راضٍ</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div class="text-slate-600 dark:text-slate-400">مشروع مكتمل</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-4xl md:text-5xl font-bold mb-2">12+</div>
            <div class="text-slate-600 dark:text-slate-400">شهادة مهنية</div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section -->
   <section id="about" class="py-16 bg-white dark:bg-slate-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
    <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        من نحن
      </h2>
    </div>
      <p class="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg">مكتب المحاسب القانوني عمر الطويل يقدم حلولاً محاسبية واستشارية متكاملة للشركات والأفراد</p>
    </div>
    
 

    <div class="flex flex-col lg:flex-row items-center gap-12">
      <!-- الصورة -->
      <div class="lg:w-2/5 relative">
        <div class="relative z-10">
          <img 
            src="@/assets/images/about.jpg" 
            alt="المحاسب عمر الطويل"
            class="rounded-2xl shadow-2xl"
          >
        </div>

        <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20" style="background-color: var(--cordovan);"></div>
        <div class="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20" style="background-color: var(--brunswick-green);"></div>
        <div class="logo-shape mx-auto mb-6"></div>
        
        <!-- شارة الخبرة -->
        <div class="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border-2" style="border-color: var(--cordovan);">
          <div class="text-center">
            <span class="block text-3xl font-bold" style="color: var(--cordovan);">15+</span>
            <span class="text-sm text-slate-600 dark:text-slate-400">سنة خبرة</span>
          </div>
        </div>
      </div>

      <!-- المحتوى -->
      <div class="lg:w-3/5">
        <div class="mb-8">
          <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-6">
             عمر الطويل 
            <span class="bg-gradient-to-r from-cordovan to-brunswick-green bg-clip-text text-transparent">عمر الطويل</span>
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
            محاسب قانوني معتمد يحمل شهادة مهنية في المحاسبة والمراجعة مع أكثر من 15 عامًا من الخبرة في تقديم الاستشارات المالية والمحاسبية للشركات والمؤسسات.
          </p>
          <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            نقدم خدماتنا بمهنية عالية واحترافية تنافس المكاتب العالمية، مع الحفاظ على القيم والمبادئ المهنية والأخلاقية.
          </p>
        </div>

        <!-- المهارات بشكل أفقي -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style="background-color: var(--cordovan);">
              <i class="fas fa-calculator text-2xl text-white"></i>
            </div>
            <h4 class="font-semibold text-slate-800 dark:text-white mb-2">المحاسبة</h4>
         
          </div>

          <div class="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style="background-color: var(--brunswick-green);">
              <i class="fas fa-chart-line text-2xl text-white"></i>
            </div>
            <h4 class="font-semibold text-slate-800 dark:text-white mb-2">الاستشارات</h4>
            <div class="flex justify-center items-center">
            </div>
          </div>

          <div class="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style="background-color: #d4af37;">
              <i class="fas fa-lightbulb text-2xl text-white"></i>
            </div>
            <h4 class="font-semibold text-slate-800 dark:text-white mb-2">التخطيط</h4>
           
          </div>
        </div>

        <!-- الأزرار -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#" class="px-8 py-3 rounded-lg text-white font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg" style="background-color: var(--cordovan);">
            <i class="fas fa-download ml-2"></i>
            تحميل السيرة الذاتية
          </a>
            <a href="#" class="px-8 py-3 rounded-lg text-white font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg" style="background-color: var(--cordovan);">
            <i class="fas fa-download ml-2"></i>
            تحميل البطاقة التعريفية 
          </a>
          <a href="#contact" class="px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center border-2 transition-all duration-300 hover:shadow-lg" style="border-color: var(--cordovan); color: var(--cordovan);">
            <i class="fas fa-phone ml-2"></i>
            اتصل بنا
          </a>
        </div>
      </div>
    </div>
    <div class="gradient-divider"></div>
   <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-18">
  <!-- البطاقة 1 -->
  <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
    <div class="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" style="background-color: var(--cordovan);"></div>
    <div class="relative z-10">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg" style="background-color: var(--cordovan);">
        <i class="fas fa-bullseye text-2xl text-white"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">رؤيتنا</h3>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">أن نكون الشريك المالي الموثوق للشركات الناشئة والمؤسسات الكبرى في رحلتها نحو النمو والاستدامة.</p>
    </div>
  </div>
  
  <!-- البطاقة 2 -->
  <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
    <div class="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" style="background-color: var(--brunswick-green);"></div>
    <div class="relative z-10">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg" style="background-color: var(--brunswick-green);">
        <i class="fas fa-flag text-2xl text-white"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">رسالتنا</h3>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">تقديم حلول مالية مبتكرة تساعد عملائنا على تحقيق أهدافهم الاستراتيجية والنمو المستدام.</p>
    </div>
  </div>
  
  <!-- البطاقة 3 -->
  <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
    <div class="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" style="background-color: #d4af37;"></div>
    <div class="relative z-10">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg" style="background-color: #d4af37;">
        <i class="fas fa-gem text-2xl text-white"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">قيمنا</h3>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">الشفافية، الاحترافية، الابتكار، والالتزام بأعلى معايير الجودة والأخلاقيات المهنية.</p>
    </div>
  </div>
</div>
  </div>
</section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
           <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        خدماتنا
      </h2>
    </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">نقدم مجموعة متكاملة من الخدمات المحاسبية والاستشارية المصممة خصيصًا لتلبية احتياجات عملك</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-calculator text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">المحاسبة والمراجعة</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">خدمات محاسبية متكاملة تشمل إعداد القوائم المالية والمراجعة الداخلية والخارجية وفقًا للمعايير الدولية.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
          
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-chart-line text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">الاستشارات الضريبية</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">تقديم الاستشارات الضريبية وإعداد الإقرارات الضريبية والدفاع عن العملاء أمام الجهات الضريبية.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
          
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-briefcase text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">استشارات الأعمال</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">تحليل الوضع المالي للشركات وتقديم التوصيات لتحسين الأداء المالي وزيادة الربحية.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
          
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-hand-holding-usd text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">التدقيق المالي</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">خدمات التدقيق المالي الشاملة لتقييم النظام المالي وضمان الامتثال للقوانين واللوائح.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
          
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-landmark text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">الخدمات الحكومية</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">تمثيل العملاء أمام الجهات الحكومية وإتمام المعاملات الرسمية المتعلقة بالشؤون المالية.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
          
          <div class="service-card bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <div class="p-3 rounded-xl inline-block mb-4" style="background-color: rgba(28, 70, 64, 0.1);">
              <i class="fas fa-laptop text-2xl" style="color: var(--brunswick-green);"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">أنظمة المحاسبة</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">تصميم وتنفيذ أنظمة محاسبية متكاملة باستخدام أحدث البرامج والتقنيات المتاحة.</p>
            <a href="#" class="font-semibold inline-flex items-center" style="color: var(--cordovan);">اعرف أكثر <i class="fas fa-arrow-left mr-2"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clients" class="py-16 bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        عملاءنا
      </h2>
    </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">نفخر بثقة كبرى الشركات والمؤسسات التي تتعامل معنا وتستفيد من خدماتنا</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (1).jpeg" alt="عميل 1" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (2).jpeg" alt="عميل 2" class="h-12 object-contain">
            </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (2).png" alt="عميل 3" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (3).png" alt="عميل 4" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (4).png" alt="عميل 5" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (5).png" alt="عميل 6" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (5).png" alt="عميل 7" class="h-12 object-contain">
          </div>
          <div class="client-logo p-4 flex justify-center">
            <img src="@/assets/images/clients/cl (3).png" alt="عميل 8" class="h-12 object-contain">
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
           <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        الاسئلة الشائعة
      </h2>
    </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto fade-in" style="transition-delay: 0.2s;">
            إجابات لأكثر الأسئلة تكراراً لمساعدتك في فهم خدماتنا بشكل أفضل.
          </p>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="faq-item border-b border-slate-300 dark:border-slate-700 py-4 cursor-pointer">
            <h3 class="faq-question flex justify-between items-center text-xl font-semibold text-slate-800 dark:text-white">
              ما هي الخدمات التي يقدمها مكتب المحاسب القانوني عمر الطويل؟
              <i class="fas fa-chevron-down transition-transform duration-300"></i>
            </h3>
            <p class="faq-answer mt-3 text-slate-600 dark:text-slate-300 max-h-0 overflow-hidden transition-max-height duration-500">
              نحن نقدم خدمات محاسبية ومراجعة، استشارات ضريبية، استشارات أعمال، تدقيق مالي، خدمات حكومية، وتصميم أنظمة محاسبة متكاملة.
            </p>
          </div>
          <div class="faq-item border-b border-slate-300 dark:border-slate-700 py-4 cursor-pointer">
            <h3 class="faq-question flex justify-between items-center text-xl font-semibold text-slate-800 dark:text-white">
              كيف يمكنني حجز استشارة مجانية؟
              <i class="fas fa-chevron-down transition-transform duration-300"></i>
            </h3>
            <p class="faq-answer mt-3 text-slate-600 dark:text-slate-300 max-h-0 overflow-hidden transition-max-height duration-500">
              يمكنك حجز استشارة مجانية عن طريق الضغط على زر "احجز استشارة مجانية" الموجود في الصفحة أو التواصل معنا عبر قسم الاتصال.
            </p>
          </div>
          <div class="faq-item border-b border-slate-300 dark:border-slate-700 py-4 cursor-pointer">
            <h3 class="faq-question flex justify-between items-center text-xl font-semibold text-slate-800 dark:text-white">
              هل تقدمون خدمات للشركات الصغيرة والمتوسطة؟
              <i class="fas fa-chevron-down transition-transform duration-300"></i>
            </h3>
            <p class="faq-answer mt-3 text-slate-600 dark:text-slate-300 max-h-0 overflow-hidden transition-max-height duration-500">
              نعم، نقدم خدمات مخصصة للشركات الصغيرة والمتوسطة لدعم نموها وتحسين أدائها المالي.
            </p>
          </div>
          <div class="faq-item border-b border-slate-300 dark:border-slate-700 py-4 cursor-pointer">
            <h3 class="faq-question flex justify-between items-center text-xl font-semibold text-slate-800 dark:text-white">
              كيف يمكنني تنزيل السيرة الذاتية للمحاسب عمر الطويل؟
              <i class="fas fa-chevron-down transition-transform duration-300"></i>
            </h3>
            <p class="faq-answer mt-3 text-slate-600 dark:text-slate-300 max-h-0 overflow-hidden transition-max-height duration-500">
              يمكنك تنزيل السيرة الذاتية من خلال زر "تحميل السيرة الذاتية" في قسم من نحن.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-floating-slow" style="background-color: rgba(28, 70, 64, 0.1);"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-floating" style="background-color: rgba(152, 48, 65, 0.1);"></div>

      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
 <div class="icon-section-divider">
      <h2 class="section-title-with-icon">
        تواصل معنا
      </h2>
    </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            نحن هنا لخدمتك، يمكنك التواصل معنا عبر أي وسيلة تفضلها.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <div class="contact-card group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform absolute -top-8 -left-8" style="background-color: rgba(28, 70, 64, 0.2); color: var(--brunswick-green);">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">العنوان</h4>
            <p class="text-slate-600 dark:text-slate-300">تعز - شارع جمال</p>
          </div>

          <div class="contact-card group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform absolute -top-8 -left-8" style="background-color: rgba(28, 70, 64, 0.2); color: var(--brunswick-green);">
              <i class="fas fa-phone"></i>
            </div>
            <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">الهاتف</h4>
            <p class="text-slate-600 dark:text-slate-300">+967 123 456 789</p>
          </div>

          <div class="contact-card group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform absolute -top-8 -left-8" style="background-color: rgba(28, 70, 64, 0.2); color: var(--brunswick-green);">
              <i class="fas fa-envelope"></i>
            </div>
            <h4 class="text-xl font-bold text-slate-800 dark:text-white mb-2">البريد الإلكتروني</h4>
            <p class="text-slate-600 dark:text-slate-300">info@altawil-accountant.com</p>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto relative overflow-hidden">
          <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl animate-floating-slow" style="background-color: rgba(28, 70, 64, 0.1);"></div>
          <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl animate-floating" style="background-color: rgba(152, 48, 65, 0.1);"></div>

          <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">أرسل رسالة مباشرة</h3>
          <form class="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="الاسم الكامل" class="input-field md:col-span-1" />
            <input type="email" placeholder="البريد الإلكتروني" class="input-field md:col-span-1" />
            <input type="tel" placeholder="رقم الهاتف" class="input-field md:col-span-2" />
            <textarea rows="5" placeholder="اكتب رسالتك هنا..." class="input-field md:col-span-2"></textarea>
            <button type="submit" class="col-span-2 text-white py-3 rounded-lg font-semibold transition" style="background-color: var(--cordovan);">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>  
import { onMounted } from 'vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'

onMounted(() => {
  // Fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();

  // FAQ functionality
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const icon = question.querySelector('i');
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
      document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
});
</script>

<style scoped>
/* الأنماط الخاصة بالصفحة الرئيسية فقط */
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(28, 70, 64, 0.9) 0%,
    rgba(9, 58, 54, 0.85) 100%
  ),
  url('@/assets/images/logo.jpg') no-repeat center center/cover;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.service-card {
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow: 0 25px 30px -8px rgba(0, 0, 0, 0.15), 0 12px 12px -8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--cordovan);
}

.service-card i {
  transition: color 0.4s ease, transform 0.4s ease;
}

.service-card:hover i {
  color: var(--cordovan);
  transform: rotate(20deg) scale(1.1);
}

.stat-number {
  color: var(--cordovan);
  font-weight: 800;
  transition: transform 0.6s ease;
}

.stat-number.animate-scale {
  transform: scale(1.2);
}

.client-logo {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.4s ease;
  cursor: pointer;
}

.client-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.contact-card {
  transition: all 0.3s ease;
  border-top: 3px solid var(--cordovan);
  cursor: pointer;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.12);
}
.gradient-divider {
    height: 3px;
    background: linear-gradient(90deg, 
        var(--brunswick-green) 0%, 
        var(--cordovan) 50%, 
        var(--dark-green) 100%);
    margin: 3rem 0;
    position: relative;
    border-radius: 2px;
}

.gradient-divider::before {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: var(--cordovan);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

</style>