import React, { useState } from 'react';

export default function MagicAI({ input, setResult }) {
  const [loading, setLoading] = useState(false);

  const handleMagic = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'أنت خبير في تحليل البيانات المشفّرة واكتشاف طبقات التشفير المتعددة.'
            },
            {
              role: 'user',
              content: `حلل النص التالي واكتشف جميع طبقات التشفير وأزلها إن أمكن:\n\n${input}`
            }
          ]
        })
      });

      const data = await response.json();
      const resultText = data?.choices?.[0]?.message?.content || 'لم يتم العثور على نتيجة.';
      setResult(resultText);
    } catch (error) {
      setResult('حدث خطأ أثناء الاتصال بـ GPT API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl mt-4">
      <button
        onClick={handleMagic}
        disabled={loading}
        className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition disabled:opacity-50"
      >
        {loading ? 'جاري التحليل...' : 'تحليل باستخدام Magic AI'}
      </button>
    </div>
  );
}
