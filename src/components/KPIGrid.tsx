import { motion } from 'motion/react';
import { Code2, Cpu, Mic, TrendingUp, Layers, Activity, ShieldCheck, BrainCircuit } from 'lucide-react';

const kpis = [
  { id: 1, title: "Code Mentor", value: "100+", unit: "Linguagens", icon: Code2, desc: "Ensino passo a passo conectado ao mercado", color: "text-accent-cyan" },
  { id: 2, title: "Automação", value: "99.9", unit: "%", icon: Cpu, desc: "Processos executados sem intervenção", color: "text-accent-purple" },
  { id: 3, title: "Voz & Chat", value: "< 200", unit: "ms", icon: Mic, desc: "Latência de resposta natural", color: "text-emerald-400" },
  { id: 4, title: "Inteligência T.I", value: "Real-time", unit: "", icon: TrendingUp, desc: "Análise de tendências do mercado", color: "text-blue-400" },
  { id: 5, title: "Orquestração", value: "∞", unit: "Tasks", icon: Layers, desc: "Gestão de microsistemas", color: "text-pink-400" },
  { id: 6, title: "Performance", value: "10x", unit: "Boost", icon: Activity, desc: "Aumento de produtividade", color: "text-orange-400" },
  { id: 7, title: "Segurança", value: "Nível", unit: "Militar", icon: ShieldCheck, desc: "Proteção de dados e processos", color: "text-green-400" },
  { id: 8, title: "Evolução", value: "24/7", unit: "Learning", icon: BrainCircuit, desc: "Aprendizado contínuo adaptativo", color: "text-yellow-400" },
];

export function KPIGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={`p-3 rounded-xl bg-white/5 ${kpi.color}`}>
              <kpi.icon size={24} />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">SYS_0{kpi.id}</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-gray-400 text-sm font-medium mb-1">{kpi.title}</h3>
            <div className="flex items-baseline space-x-1 mb-2">
              <span className="text-3xl font-bold text-white">{kpi.value}</span>
              <span className="text-sm font-medium text-gray-500">{kpi.unit}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{kpi.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
