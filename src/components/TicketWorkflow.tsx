import { CheckCircle2, Clock, AlertCircle, Bot } from 'lucide-react';

export function TicketWorkflow() {
  return (
    <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Bot className="text-accent-purple" /> Workflow de Aprovações
          </h3>
          <p className="text-sm text-gray-400 mt-1">Gestão autônoma de tickets (Estilo Jira)</p>
        </div>
        <div className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-full text-xs font-mono">
          Auto-Pilot: ON
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* To Do Column */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
              <AlertCircle size={16} className="text-gray-400" /> Backlog
            </h4>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-[#060913] border border-white/10 p-4 rounded-lg">
            <div className="text-xs font-mono text-gray-500 mb-2">ZYR-1043</div>
            <p className="text-sm text-gray-200 mb-4">Atualizar dependências do Node</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Medium</span>
              <Bot size={14} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* In Review Column */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-accent-purple flex items-center gap-2">
              <Clock size={16} /> Em Análise (Zyrion)
            </h4>
            <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-[#060913] border border-accent-purple/30 p-4 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-purple"></div>
            <div className="text-xs font-mono text-gray-500 mb-2">ZYR-1042</div>
            <p className="text-sm text-white mb-4">Otimização de Query SQL</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-orange-500/20 text-orange-400 rounded">High</span>
              <div className="flex items-center gap-1 text-xs text-accent-purple">
                <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
                Analisando...
              </div>
            </div>
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 size={16} /> Aprovado
            </h4>
            <span className="text-xs bg-emerald-400/20 text-emerald-400 px-2 py-0.5 rounded-full">1</span>
          </div>
          <div className="bg-[#060913] border border-emerald-400/20 p-4 rounded-lg opacity-70">
            <div className="text-xs font-mono text-gray-500 mb-2 line-through">ZYR-1041</div>
            <p className="text-sm text-gray-400 mb-4">Deploy no ambiente de Produção</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-red-500/20 text-red-400 rounded">Critical</span>
              <CheckCircle2 size={14} className="text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
