import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const codeLines = [
  "const zyrion = new ZyrionAI({",
  "  mode: 'autonomous',",
  "  voiceEnabled: true,",
  "  modules: ['CodeMentor', 'AutoProcess']",
  "});",
  "",
  "await zyrion.initialize();",
  "zyrion.on('ready', () => {",
  "  console.log('Zyrion is listening...');",
  "});",
  "",
  "// Analyzing IT market trends...",
  "// Generating optimal learning path...",
  "zyrion.startMentoring('Rust');"
];

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] += currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, Math.random() * 30 + 20); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 500); // Pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl shadow-accent-cyan/10">
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400 font-mono">zyrion-core.ts</div>
      </div>
      <div className="p-6 font-mono text-sm text-gray-300 h-[300px] overflow-y-auto">
        {displayedLines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="text-gray-500 mr-4 select-none">{i + 1}</span>
            <span dangerouslySetInnerHTML={{
              __html: (line || '')
                .replace(/const|new|await|true/g, '<span class="text-accent-purple">$&</span>')
                .replace(/ZyrionAI|console/g, '<span class="text-yellow-300">$&</span>')
                .replace(/'.*?'/g, '<span class="text-green-400">$&</span>')
                .replace(/\/\/.*$/g, '<span class="text-gray-500">$&</span>')
            }} />
          </div>
        ))}
        {currentLineIndex < codeLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-accent-cyan ml-1 align-middle"
          />
        )}
      </div>
    </div>
  );
}
