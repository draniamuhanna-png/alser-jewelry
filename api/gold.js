// Vercel Serverless Function: /api/gold
// تجلب سعر الذهب العالمي (XAU/USD) وسعر الدولار/شيكل وتعيدهما للموقع. لا تحتاج مفاتيح سرية.
// ملاحظة: لم أستطع اختبارها هنا (لا اتصال بالإنترنت). اختبرها بعد النشر بفتح /api/gold والتأكد أن الرد يحوي xauUsd و usdIls.
module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=3600"); // تخزين مؤقت نصف ساعة
  try {
    const [g, f] = await Promise.all([
      fetch("https://api.gold-api.com/price/XAU").then(r => r.json()),
      fetch("https://open.er-api.com/v6/latest/USD").then(r => r.json())
    ]);
    const xauUsd = Number(g.price), usdIls = Number(f.rates && f.rates.ILS);
    if (!(xauUsd > 0) || !(usdIls > 0)) throw new Error("bad data");
    res.status(200).json({ xauUsd, usdIls, updatedAt: new Date().toISOString() });
  } catch (e) {
    res.status(502).json({ error: "gold source unavailable" });
  }
};
