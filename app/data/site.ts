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
  { to: '/plans', label: 'الخطط' },
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

// The scroll story on the home page: one step per stage of OrderScene.
export const story = [
  { title: 'نبني المتجر', body: 'موقع أو متجر سريع وواضح، يعمل على الجوال قبل أي شيء.' },
  { title: 'الإعلان يجلب الزائر', body: 'حملة على ميتا أو جوجل أو تيك توك، موجّهة لمن يشتري فعلاً.' },
  { title: 'الطلب يصل على واتساب', body: 'زر واحد في المكان الصحيح، والطلب عندك مباشرة.' },
  { title: 'نقيس ونحسّن', body: 'نعرف كم طلباً جاء من كل إعلان، ونزيد الميزانية على ما ينجح.' },
]

// Platforms named in the services above.
export const platforms = ['Meta', 'Google', 'TikTok', 'Snapchat', 'سلة', 'زد', 'Shopify', 'App Store', 'Google Play']

export const steps = [
  { icon: 'strategy', title: 'نخطط', body: 'نفهم هدفك، ونتفق على الأرقام التي سنقيس بها النجاح قبل أن نبدأ.' },
  { icon: 'launch', title: 'نطلق', body: 'نبني على مراحل تراها أولاً بأول، ونطلق بأسرع وقت ممكن.' },
  { icon: 'growth', title: 'ننمّي', body: 'نقيس ونحسّن كل شهر: زيارات، طلبات، مبيعات.' },
]

// Plans shown on the site. No prices on the site by owner's decision: every plan ends in a quote request.
// Internal starting prices are kept out of this file on purpose (it ships to the browser).
export type Plan = { id: string; icon: string; name: string; kind: 'once' | 'monthly'; fit: string; note: string; includes: string[]; featured?: boolean }

export const plans: Plan[] = [
  { id: 'landing', icon: 'launch', kind: 'once', name: 'صفحة هبوط', fit: 'لحملة إعلانية أو منتج واحد', note: 'صفحة واحدة تقود الزائر إلى خطوة واحدة.', includes: ['تصميم مخصص للحملة', 'نموذج طلب أو زر واتساب', 'ربط بكسل الإعلانات'] },
  { id: 'web', icon: 'web', kind: 'once', name: 'موقع شركة', fit: 'لشركة تريد حضوراً يثق به العميل', note: 'من 5 إلى 8 صفحات بالعربي والإنجليزي.', includes: ['تصميم مخصص لهويتك', 'لوحة تحكم لتعديل المحتوى', 'ربط بالواتساب وخرائط جوجل'], featured: true },
  { id: 'store', icon: 'ecommerce', kind: 'once', name: 'متجر إلكتروني', fit: 'لمن يبيع منتجات ويريد الدفع أونلاين', note: 'مخصص، أو على سلة وزد وشوبيفاي.', includes: ['بوابات الدفع والشحن', 'رفع وتنظيم المنتجات', 'تتبع المبيعات من أول يوم'] },
  { id: 'system', icon: 'code', kind: 'once', name: 'تطبيق أو نظام مخصص', fit: 'لعمل له طريقة خاصة لا تناسبها الحلول الجاهزة', note: 'يبدأ بجلسة تحليل مجانية.', includes: ['تحليل سير العمل قبل البرمجة', 'صلاحيات للموظفين', 'تقارير وتصدير بيانات'] },
  { id: 'social', icon: 'social-media', kind: 'monthly', name: 'إدارة السوشيال ميديا', fit: 'حسب عدد المنصات والمنشورات', note: 'خطة محتوى وتصاميم ونشر وردود، كل شهر.', includes: ['خطة محتوى شهرية', 'تصاميم ومقاطع قصيرة', 'الرد على الرسائل والتعليقات'] },
  { id: 'ads', icon: 'ads', kind: 'monthly', name: 'إدارة الإعلانات', fit: 'ميزانية الإعلان منفصلة وتدفعها للمنصة مباشرة', note: 'حملات تقاس بالطلبات لا بالإعجابات.', includes: ['إعداد التتبع والبكسل', 'تصاميم ونصوص الإعلانات', 'تقرير أسبوعي بالأرقام'] },
  { id: 'seo', icon: 'seo', kind: 'monthly', name: 'الظهور في جوجل', fit: 'النتائج تبدأ بالظهور بعد 3 إلى 6 أشهر', note: 'لعملاء يبحثون عنك الآن.', includes: ['تحسين تقني للموقع', 'ملف النشاط على خرائط جوجل', 'محتوى يستهدف كلمات البحث'] },
  { id: 'care', icon: 'maintenance', kind: 'monthly', name: 'الصيانة والحماية', fit: 'لكل موقع أو متجر بعد الإطلاق', note: 'حتى يبقى موقعك سريعاً وآمناً.', includes: ['تحديثات أمنية', 'نسخ احتياطي دوري', 'تعديلات صغيرة شهرية'] },
]

// True facts shown in the strip under the hero.
export const facts = [
  { label: 'نخدم', value: 'شركات حول العالم' },
  { label: 'نرد', value: 'خلال يوم عمل' },
  { label: 'نعمل', value: 'بالعربي والإنجليزي' },
]

// Case studies: replace each [placeholder] with a real project before launch. Never publish invented results.
// `built` lists only what the live project shows; add `result` only with measured numbers.
export type Work = { tag: string; title: string; client: string; result?: string; built?: string[]; url?: string; image?: string }

export const work: Work[] = [
  {
    tag: 'منصة ويب', title: 'مسكن', client: 'منصة تجمع الشقق والعقارات المتاحة للإيجار في الأردن، من تطويرنا بالكامل.',
    url: 'https://maskan-web-ruddy.vercel.app/', image: '/work/maskan.jpg',
    built: ['بحث في الشقق السكنية والسياحية وسكن الطلاب', 'حسابات وتسجيل لأصحاب العقارات', 'عربي وإنجليزي، ووضع فاتح وداكن'],
  },
  { tag: 'موقع', title: '[اسم المشروع]', client: '[اسم العميل والمجال]', result: '[النتيجة بالأرقام، مثلاً: الطلبات من الموقع خلال 60 يوماً]' },
  { tag: 'تطبيق', title: '[اسم المشروع]', client: '[اسم العميل والمجال]', result: '[النتيجة بالأرقام]' },
  { tag: 'إعلانات', title: '[اسم الحملة]', client: '[اسم العميل والمجال]', result: '[تكلفة الطلب قبل وبعد]' },
]
