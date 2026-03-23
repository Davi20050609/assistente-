import { Activity, Globe, Cpu, Wifi } from 'lucide-react';

export function AICore() {
  return (
    <div className="flex flex-col items-center justify-center py-16 relative">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Outer Ring */}
        <div 
          className="absolute inset-0 border border-accent-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" 
          style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} 
        />
        {/* Middle Ring */}
        <div 
          className="absolute inset-4 border border-accent-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" 
          style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }} 
        />
        {/* Inner Dashed Ring */}
        <div className="absolute inset-10 border-2 border-dashed border-accent-cyan/40 rounded-full animate-[spin_30s_linear_infinite]" />
        
        {/* Center Core (Jarvis/Gideon style) */}
        <div className="w-32 h-32 bg-[#060913] border border-accent-cyan/50 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-full flex items-center justify-center">
            <Globe className="text-accent-cyan w-10 h-10" />
          </div>
        </div>

        {/* Floating Data Nodes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0f1c] border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-accent-cyan flex items-center gap-2">
          <Wifi size={12} /> 99.9% Uptime
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0a0f1c] border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-accent-purple flex items-center gap-2">
          <Cpu size={12} /> 12ms Latency
        </div>
      </div>

      <div className="mt-12 text-center font-mono">
        <p className="flex items-center justify-center gap-2 text-accent-cyan font-semibold tracking-widest">
          <Activity size={18} /> NÚCLEO ZYRION ONLINE
        </p>
        <p className="text-gray-500 text-sm mt-2">Monitoramento de rede global em tempo real</p>
      </div>
    </div>
  );
}
