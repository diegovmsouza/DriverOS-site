import { Shield, Lock, Eye, Database, Server, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-carbon-deep text-slate-900 dark:text-white p-6 md:p-12 font-sans">
            <div className="max-w-3xl mx-auto">
                <header className="mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-text-dim hover:text-accent-green transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft size={16} /> Voltar para o Site
                    </Link>
                    <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center text-accent-green mb-6 border border-accent-green/20">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Política de Privacidade</h1>
                    <p className="text-slate-500 dark:text-text-dim font-mono text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </header>

                <div className="space-y-8 prose dark:prose-invert max-w-none">
                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white">
                            <Lock size={20} className="text-accent-green" /> 1. Compromisso com a Privacidade
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            O <strong>DriverOS</strong> (disponível em driveros.omnitecbh.com.br) leva a sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos as informações operacionais e financeiras que você, motorista de aplicativo, insere em nossa plataforma. Estamos comprometidos com os princípios da <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white">
                            <Database size={20} className="text-accent-amber" /> 2. Dados Coletados
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300 marker:text-accent-green">
                            <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone, cidade e estado para criação de conta e personalização da experiência.</li>
                            <li><strong>Dados Operacionais:</strong> Registros de turnos (horários de início/fim), quilometragem rodada e consumo médio.</li>
                            <li><strong>Dados Financeiros:</strong> Ganhos reportados (Uber, 99, etc.), despesas (alimentação, manutenção) e abastecimentos.</li>
                            <li><strong>Metadados:</strong> Informações técnicas de acesso para segurança e melhoria da performance do aplicativo.</li>
                        </ul>
                    </section>

                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white">
                            <Eye size={20} className="text-blue-500" /> 3. Finalidade do Uso
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Utilizamos seus dados exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                            <li>Fornecer análises financeiras e operacionais personalizadas.</li>
                            <li>Gerar históricos de desempenho e relatórios de lucro.</li>
                            <li>Utilizar Inteligência Artificial (Gemini) para oferecer insights sobre sua rodagem (apenas mediante sua solicitação ativa).</li>
                            <li>Garantir a segurança da sua conta.</li>
                        </ul>
                        <p className="text-sm font-bold mt-4 text-accent-green">Nós NÃO vendemos seus dados pessoais para terceiros.</p>
                    </section>

                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white">
                            <Server size={20} className="text-purple-500" /> 4. Armazenamento e Segurança
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Seus dados são armazenados de forma segura utilizando serviços de nuvem de ponta (Supabase), com criptografia em trânsito e em repouso. Adotamos práticas de segurança do setor para proteger contra acesso não autorizado, alteração ou destruição de dados.
                        </p>
                    </section>

                    <div className="text-center pt-8 border-t border-slate-200 dark:border-white/10">
                        <p className="text-xs text-slate-500 dark:text-text-dim">
                            Para exercer seus direitos de titular (acesso, correção ou exclusão), entre em contato conosco através do suporte na plataforma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
