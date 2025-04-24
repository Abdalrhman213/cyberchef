import React, { useState } from 'react';
import Header from './components/Header';
import TextAreaPanel from './components/TextAreaPanel';
import OperationSelector from './components/OperationSelector';
import ResultPanel from './components/ResultPanel';
import MagicAI from './components/MagicAI';
import FlagHunter from './components/FlagHunter';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Header />
      <div className="grid gap-4 mt-4">
        <TextAreaPanel input={input} setInput={setInput} />
        <OperationSelector input={input} setResult={setResult} />
        <MagicAI input={input} setResult={setResult} />
        <FlagHunter input={input} setResult={setResult} />
        <ResultPanel result={result} />
      </div>
    </div>
  );
}
