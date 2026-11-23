# مجوهرات طارق السر – ALSER JEWELLRY

- `index.html`: الموقع كاملًا في ملف واحد (البيانات في كائن `STORE` داخل الوسم script).
- `api/gold.js`: دالة Vercel لجلب سعر الذهب العالمي، ورابطها `/api/gold` (مضبوط في `STORE.gold.endpoint`).
- `models/gold-infinity-bangle.glb`: مجسم سوار السر (PBR مضغوط الخامات). نسخة بديلة بإضاءة مخبوزة: `gold-infinity-bangle-shaded.glb`
  (لتجربتها بدّل المسار في `model3d.src`).
- لإضافة مجسم لمنتج آخر: ضع ملف GLB في `models/` ثم اكتب مساره في `model3d.src` للمنتج.
- ارفع المحتوى إلى GitHub ثم اربطه بـ Vercel (Add New Project) دون إعدادات بناء إضافية.
