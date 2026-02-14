import { Shield, CheckCircle, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lgpd() {
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
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">LGPD e Proteção de Dados</h1>
                    <p className="text-slate-500 dark:text-text-dim font-mono text-sm">Lei nº 13.709/2018</p>
                </header>

                <div className="space-y-8">
                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            O <strong>DriverOS</strong> coleta e processa seus dados para fornecer análises financeiras e operacionais personalizadas. Transparência é nosso pilar fundamental.
                        </p>

                        <h3 className="text-sm font-bold uppercase tracking-widest text-accent-green mb-4">Dados que tratamos</h3>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {[
                                'Dados de identificação (nome, email, telefone)',
                                'Registros de turnos e quilometragem',
                                'Dados financeiros (ganhos, despesas, abastecimentos)',
                                'Dados de veículos e manutenções'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 text-sm text-slate-600 dark:text-slate-300">
                                    <CheckCircle size={18} className="text-accent-green mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-accent-green/5 dark:bg-accent-green/10 border border-accent-green/10 dark:border-accent-green/20 rounded-3xl p-6">
                        <h3 className="text-lg font-bold text-accent-green mb-2">Seus Direitos como Titular</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Conforme o Art. 18 da LGPD, você tem o direito de a qualquer momento e mediante requisição:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                            <li>Confirmar a existência de tratamento de dados;</li>
                            <li>Acessar seus dados;</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                            <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço;</li>
                            <li>Eliminar os dados pessoais tratados com o consentimento;</li>
                            <li>Revogar o consentimento.</li>
                        </ul>
                    </section>

                    <section className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                        <Link to="/privacy" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-carbon-card border border-carbon-border hover:border-accent-green transition-all group w-full">
                            <ExternalLink size={18} className="text-accent-green group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm uppercase tracking-wider">Política de Privacidade</span>
                        </Link>
                        <Link to="/terms" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-carbon-card border border-carbon-border hover:border-accent-green transition-all group w-full">
                            <ExternalLink size={18} className="text-accent-green group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm uppercase tracking-wider">Termos de Uso</span>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};
