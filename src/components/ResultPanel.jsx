import React from 'react';

export default function ResultPanel({ result }) {
  return (
    <div>
      <label className="block text-sm mb-1">النتيجة:</label>
      <textarea
        className="w-full h-40 p-3 rounded-lg bg-gray-800 border border-gray-700 text-green-300 resize-none"
        value={result}
        readOnly
      ></textarea>
    </div>
  );
}
