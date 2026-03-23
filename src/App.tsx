import { Terminal } from './components/Terminal';
import { KPIGrid } from './components/KPIGrid';
import { ChatInterface } from './components/ChatInterface';
import { AICore } from './components/AICore';
import { TicketWorkflow } from './components/TicketWorkflow';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-white selection:bg-accent-cyan/30 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/10 bg-[#060913]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Zyrion</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#core" className="hover:text-white transition-colors">Núcleo</a>
            <a href="#workflow" className="hover:text-white transition-colors">Microsistemas</a>
            <a href="#kpis" className="hover:text-white transition-colors">Métricas</a>
            <a href="#mentor" className="hover:text-white transition-colors">Code Mentor</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Zyrion OS v1.0 Online</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Sua Assistente <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                  Pessoal Definitiva
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Automatize processos, gerencie microsistemas e aprenda programação com uma IA conectada ao mercado de T.I. Controle tudo por voz ou terminal.
              </p>
            </div>

            <div className="relative">
              <Terminal />
            </div>
          </div>
        </section>

        {/* AI Core Section (Gideon/Jarvis style) */}
        <section id="core" className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <AICore />
          </div>
        </section>

        {/* Ticket Workflow Section */}
        <section id="workflow" className="py-16 px-6 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Orquestração de Processos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Microsistemas supervisionados pela Zyrion. Acompanhe a aprovação e execução de tarefas em tempo real.
              </p>
            </div>
            <TicketWorkflow />
          </div>
        </section>

        {/* KPIs Section */}
        <section id="kpis" className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Métricas de Performance</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                8 processos fundamentais que levam a microsistemas supervisionados pela Zyrion, garantindo eficiência máxima.
              </p>
            </div>
            <KPIGrid />
          </div>
        </section>

        {/* Code Mentor Section */}
        <section id="mentor" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Sua Mentora de <br/>
                <span className="text-accent-purple">Programação</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zyrion está conectada a uma API global do mercado de T.I. Ela analisa tendências, sugere linguagens em alta e ensina você a programar passo a passo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Suporte a todas as linguagens de programação',
                  'Interação natural por voz e chat',
                  'Exemplos de código em tempo real',
                  'Conexão direta com demandas do mercado'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ChatInterface />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Zyrion AI. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
