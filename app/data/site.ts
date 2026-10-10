// All site copy and data in one place, so English (i18n) can be added later without touching components.
// Values in [square brackets] are placeholders to fill before launch.

export const contact = {
  whatsapp: '', // international format without + or spaces, e.g. '9627XXXXXXXX'. Empty = form shows a placeholder state.
  phone: '[رقم الهاتف]',
  email: '[البريد الإلكتروني]',
  location: '[المدينة]، الأردن',
  hours: 'الأحد – الخميس، 9 صباحاً – 6 مساءً',
}

export const nav = [
  { to: '/', label: 'الرئيسية' },
  { to: '/services', label: 'الخدمات' },
  { to: '/work', label: 'الأعمال' },
  { to: '/pricing', label: 'الأسعار' },
  { to: '/contact', label: 'تواصل معنا' },
]

export type Service = { id: string; icon: string; title: string; summary: string; includes: string[]; group: 'build' | 'grow' }

export const services: Service[] = [
  { id: 'web', icon: 'web', group: 'build', title: 'مواقع الشركات', summary: 'موقع سريع بالعربي والإنجليزي، جاهز لمحركات البحث ويعمل على كل الأجهزة.', includes: ['تصميم مخصص لهويتك', 'لوحة تحكم لتعديل المحتوى', 'ربط بالواتساب وخرائط جوجل'] },
  { id: 'mobile-app', icon: 'mobile-app', group: 'build', title: 'تطبيقات الجوال', summary: 'تطبيق واحد يعمل على آيفون وأندرويد، من الفكرة حتى النشر في المتاجر.', includes: ['تصميم الشاشات وتجربة المستخدم', 'لوحة إدارة للتطبيق', 'النشر على App Store و Google Play'] },
  { id: 'code', icon: 'code', group: 'build', title: 'أنظمة مخصصة', summary: 'حجوزات، إدارة داخلية، لوحات تحكم: نظام مبني على طريقة عملك أنت.', includes: ['تحليل سير العمل قبل البرمجة', 'صلاحيات للموظفين', 'تقارير وتصدير بيانات'] },
  { id: 'ecommerce', icon: 'ecommerce', group: 'build', title: 'متاجر إلكترونية', summary: 'متجر مخصص، أو تأسيس احترافي على سلة وزد وشوبيفاي.', includes: ['بوابات الدفع والشحن', 'رفع وتنظيم المنتجات', 'تتبع المبيعات من أول يوم'] },
  { id: 'ui-ux', icon: 'ui-ux', group: 'build', title: 'تصميم الواجهات', summary: 'شاشات واضحة يفهمها عميلك من أول نظرة، تُختبر قبل أن تُبرمج.', includes: ['نماذج تفاعلية', 'نظام تصميم قابل لإعادة الاستخدام', 'اختبار مع مستخدمين حقيقيين'] },
  { id: 'branding', icon: 'branding', group: 'build', title: 'الهوية البصرية', summary: 'شعار وألوان وخطوط ودليل استخدام، لتظهر بنفس الشكل في كل مكان.', includes: ['الشعار بنسخه', 'الألوان والخطوط', 'قوالب للسوشيال ميديا'] },
  { id: 'ads', icon: 'ads', group: 'grow', title: 'إعلانات ممولة', summary: 'حملات على ميتا وجوجل وتيك توك وسناب شات، تقاس بالطلبات لا بالإعجابات.', includes: ['إعداد التتبع والبكسل', 'تصاميم ونصوص الإعلانات', 'تقرير أسبوعي بالأرقام'] },
  { id: 'social-media', icon: 'social-media', group: 'grow', title: 'إدارة السوشيال ميديا', summary: 'خطة محتوى وتصاميم ونشر وردود، كل شهر.', includes: ['خطة محتوى شهرية', 'تصاميم ومقاطع قصيرة', 'الرد على الرسائل والتعليقات'] },
  { id: 'seo', icon: 'seo', group: 'grow', title: 'الظهور في جوجل', summary: 'نرفع ظهور موقعك في نتائج البحث والخرائط، لعملاء يبحثون عنك الآن.', includes: ['تحسين تقني للموقع', 'ملف النشاط على خرائط جوجل', 'محتوى يستهدف كلمات البحث'] },
  { id: 'analytics', icon: 'analytics', group: 'grow', title: 'التتبع والتقارير', summary: 'تعرف من أين يأتي عملاؤك، وكم يكلفك كل عميل.', includes: ['إعداد GA4 والبكسل', 'لوحة أرقام واضحة', 'تقرير شهري بتوصيات'] },
  { id: 'maintenance', icon: 'maintenance', group: 'grow', title: 'الصيانة والحماية', summary: 'تحديثات ونسخ احتياطي ومراقبة، حتى يبقى موقعك سريعاً وآمناً.', includes: ['تحديثات أمنية', 'نسخ احتياطي دوري', 'تعديلات صغيرة شهرية'] },
]

// The path from an ad to an order, and which services work at each stage (ids from `services`).
export const funnel = [
  { stage: 'يراك', what: 'إعلان أو نتيجة بحث أو منشور', services: ['ads', 'seo', 'social-media'] },
  { stage: 'يزورك', what: 'موقع أو متجر أو تطبيق سريع وواضح', services: ['web', 'ecommerce', 'mobile-app'] },
  { stage: 'يراسلك', what: 'زر واتساب ونموذج طلب في المكان الصحيح', services: ['ui-ux', 'web'] },
  { stage: 'يشتري', what: 'دفع وحجز وتتبع لكل طلب', services: ['ecommerce', 'code', 'analytics'] },
]

// Platforms named in the services above.
export const platforms = ['Meta', 'Google', 'TikTok', 'Snapchat', 'سلة', 'زد', 'Shopify', 'App Store', 'Google Play']

export const steps = [
  { icon: 'strategy', title: 'نخطط', body: 'نفهم هدفك، ونتفق على الأرقام التي سنقيس بها النجاح قبل أن نبدأ.' },
  { icon: 'launch', title: 'نطلق', body: 'نبني على مراحل تراها أولاً بأول، ونطلق بأسرع وقت ممكن.' },
  { icon: 'growth', title: 'ننمّي', body: 'نقيس ونحسّن كل شهر: زيارات، طلبات، مبيعات.' },
]

// Starting prices in Jordanian dinars. Gulf clients get quotes in SAR / AED.
export type Price = { id: string; icon: string; name: string; from: string; unit?: string; note: string; featured?: boolean }

export const prices: Price[] = [
  { id: 'landing', icon: 'web', name: 'صفحة هبوط', from: '250', note: 'صفحة واحدة لحملة أو منتج، مع نموذج طلب.' },
  { id: 'web', icon: 'web', name: 'موقع شركة', from: '500', note: 'من 5 إلى 8 صفحات بالعربي والإنجليزي.', featured: true },
  { id: 'store', icon: 'ecommerce', name: 'متجر إلكتروني', from: '1,200', note: 'يختلف حسب عدد المنتجات وطرق الدفع.' },
  { id: 'system', icon: 'code', name: 'تطبيق أو نظام مخصص', from: '3,000', note: 'يحدد السعر بعد جلسة تحليل مجانية.' },
  { id: 'social', icon: 'social-media', name: 'إدارة السوشيال ميديا', from: '150', unit: '/ شهر', note: 'حسب عدد المنصات والمنشورات.' },
  { id: 'ads', icon: 'ads', name: 'إدارة الإعلانات', from: '15%', unit: 'من الميزانية', note: 'حد أدنى 150 د.أ شهرياً. ميزانية الإعلان منفصلة.' },
  { id: 'seo', icon: 'seo', name: 'الظهور في جوجل', from: '250', unit: '/ شهر', note: 'النتائج تبدأ بالظهور بعد 3 إلى 6 أشهر.' },
  { id: 'care', icon: 'maintenance', name: 'الصيانة والحماية', from: '30', unit: '/ شهر', note: 'تحديثات ونسخ احتياطي وتعديلات صغيرة.' },
]

// Case studies: replace each [placeholder] with a real project before launch. Never publish invented results.
export const work = [
  { tag: 'موقع', title: '[اسم المشروع]', client: '[اسم العميل والمجال]', result: '[النتيجة بالأرقام، مثلاً: الطلبات من الموقع خلال 60 يوماً]' },
  { tag: 'تطبيق', title: '[اسم المشروع]', client: '[اسم العميل والمجال]', result: '[النتيجة بالأرقام]' },
  { tag: 'إعلانات', title: '[اسم الحملة]', client: '[اسم العميل والمجال]', result: '[تكلفة الطلب قبل وبعد]' },
]
