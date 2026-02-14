import { FileText, CheckCircle, AlertTriangle, Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-carbon-deep text-slate-900 dark:text-white p-6 md:p-12 font-sans">
            <div className="max-w-3xl mx-auto">
                <header className="mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-text-dim hover:text-accent-green transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft size={16} /> Voltar para o Site
                    </Link>
                    <div className="w-16 h-16 bg-slate-200 dark:bg-white/10 rounded-2xl flex items-center justify-center text-slate-700 dark:text-white mb-6 border border-slate-300 dark:border-white/20">
                        <FileText size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Termos de Serviço</h1>
                    <p className="text-slate-500 dark:text-text-dim font-mono text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </header>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-lg font-bold mb-2 text-carbon-deep dark:text-white uppercase tracking-wider">1. Aceitação dos Termos</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Ao acessar e utilizar o <strong>DriverOS</strong>, você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site/aplicativo.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white uppercase tracking-wider">
                            <CheckCircle size={18} className="text-accent-green" /> 2. Uso da Licença
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            O DriverOS concede a você uma licença limitada, não exclusiva e intransferível para usar o software estritamente para fins de gerenciamento financeiro e operacional pessoal como motorista de aplicativo.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            É proibido:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                            <li>Modificar ou copiar os materiais e código-fonte;</li>
                            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no DriverOS;</li>
                            <li>Remover quaisquer direitos autorais ou outras notações de propriedade;</li>
                            <li>Transferir a conta para outra pessoa sem autorização.</li>
                        </ul>
                    </section>

                    <section className="bg-white dark:bg-carbon-card/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-carbon-deep dark:text-white uppercase tracking-wider">
                            <AlertTriangle size={18} className="text-accent-amber" /> 3. Isenção de Responsabilidade
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Os materiais no DriverOS são fornecidos "como estão". Não oferecemos garantias, expressas ou implícitas, sobre a precisão dos cálculos se os dados inseridos pelo usuário estiverem incorretos. <strong>O DriverOS é uma ferramenta de auxílio e não substitui consultoria contábil profissional.</strong>
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                            Não garantimos que o serviço será ininterrupto ou livre de erros, embora envidemos os melhores esforços para manter a estabilidade da plataforma.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-carbon-deep dark:text-white uppercase tracking-wider">
                            <Scale size={18} className="text-slate-400" /> 4. Limitações
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Em nenhum caso o DriverOS ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro) decorrentes do uso ou da incapacidade de usar os materiais do DriverOS.
                        </p>
                    </section>

                    <div className="text-center pt-8 border-t border-slate-200 dark:border-white/10">
                        <p className="text-xs text-slate-500 dark:text-text-dim">
                            Omnitec BH - Soluções Tecnológicas<br />
                            Belo Horizonte - MG
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
