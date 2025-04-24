import React from 'react';

export default function TextAreaPanel({ input, setInput }) {
  return (
    <div>
      <label className="block text-sm mb-1">نص الإدخال:</label>
      <textarea
        className="w-full h-40 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ضع هنا النص المشفّر أو البيانات..."
      ></textarea>
    </div>
  );
}
