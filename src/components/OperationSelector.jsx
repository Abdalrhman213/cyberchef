import React, { useState } from 'react';
import { decodeBase64, encodeBase64, decodeHex, encodeHex, rot13, reverse } from '../utils/cryptoFunctions';

export default function OperationSelector({ input, setResult }) {
  const [operation, setOperation] = useState('');

  const handleRun = () => {
    let output = '';
    switch (operation) {
      case 'base64_encode':
        output = encodeBase64(input);
        break;
      case 'base64_decode':
        output = decodeBase64(input);
        break;
      case 'hex_encode':
        output = encodeHex(input);
        break;
      case 'hex_decode':
        output = decodeHex(input);
        break;
      case 'rot13':
        output = rot13(input);
        break;
      case 'reverse':
        output = reverse(input);
        break;
      default:
        output = 'يرجى اختيار عملية.';
    }
    setResult(output);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <label className="block mb-2 text-sm">اختر العملية:</label>
      <select
        className="w-full p-2 rounded bg-gray-700 text-white mb-3"
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="">-- اختر --</option>
        <option value="base64_encode">Base64 Encode</option>
        <option value="base64_decode">Base64 Decode</option>
        <option value="hex_encode">Hex Encode</option>
        <option value="hex_decode">Hex Decode</option>
        <option value="rot13">ROT13</option>
        <option value="reverse">Reverse</option>
      </select>
      <button
        onClick={handleRun}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
      >
        تنفيذ
      </button>
    </div>
  );
}
