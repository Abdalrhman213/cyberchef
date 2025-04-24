import React, { useState } from 'react';
import {
  decodeBase64,
  decodeHex,
  reverse,
  rot13,
} from '../utils/cryptoFunctions';

const flagPatterns = [
  /FLAG\{.*?\}/i,
  /CTF\{.*?\}/i,
  /NCSC\{.*?\}/i,
];

export default function FlagHunter({ input, setResult }) {
  const [searching, setSearching] = useState(false);

  const tryDecode = (text) => {
    const methods = [
      decodeBase64,
      decodeHex,
      rot13,
      reverse,
    ];

    for (let method of methods) {
      try {
        const result = method(text);
        if (result !== text) return result;
      } catch (err) {
        continue;
      }
    }

    return text;
  };

  const detectFlag = (text) => {
    for (let pattern of flagPatterns) {
      const match = text.match(pattern);
      if (match) return match[0];
    }
    return null;
  };

  const hunt = () => {
    setSearching(true);
    let current = input;
    let depth = 0;
    let flag = null;

    while (depth < 10) {
      const possible = detectFlag(current);
      if (possible) {
        flag = possible;
        break;
      }
      const next = tryDecode(current);
      if (next === current) break;
      current = next;
      depth++;
    }

    setResult(flag ? `✅ تم العثور على الفلاغ: ${flag}` : '❌ لم يتم العثور على أي فلاغ');
    setSearching(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl mt-4">
      <button
        onClick={hunt}
        disabled={searching}
        className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition disabled:opacity-50"
      >
        {searching ? 'جاري البحث عن الفلاغ...' : '🔍 البحث عن FLAG / CTF / NCSC'}
      </button>
    </div>
  );
}
