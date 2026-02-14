import { useEffect, useRef, useState } from 'react'

function Home() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )
        document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* ===== NAVBAR ===== */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <a href="#" className="navbar-logo">
                        <img src="/logo.png" alt="DriverOS" className="navbar-logo-img" />
                        <span>DriverOS</span>
                    </a>
                    <ul className="navbar-links">
                        <li><a href="#features">Recursos</a></li>
                        <li><a href="#how-it-works">Como Funciona</a></li>
                        <li><a href="https://github.com/diegovmsouza/DriverOS-android/releases/latest/download/driveros.apk" className="btn-cta">Baixar App</a></li>
                    </ul>
                </div>
            </nav>

            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <span className="dot"></span>
                                Versão 3.0 disponível
                            </div>
                            <h1>
                                O sistema operacional do <span className="highlight">motorista</span>
                            </h1>
                            <p className="hero-subtitle">
                                Controle financeiro completo, gestão de turnos inteligente e análises com IA para você saber exatamente quanto ganha — e como ganhar mais.
                            </p>
                            <div className="hero-buttons">
                                <a href="https://github.com/diegovmsouza/DriverOS-android/releases/latest/download/driveros.apk" className="btn-cta">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    Baixar para Android
                                </a>
                                <a href="#features" className="btn-outline">
                                    Conhecer recursos
                                </a>
                            </div>
                            <div className="hero-stats">
                                <div>
                                    <div className="hero-stat-value">100%</div>
                                    <div className="hero-stat-label">Gratuito</div>
                                </div>
                                <div>
                                    <div className="hero-stat-value">8+</div>
                                    <div className="hero-stat-label">Recursos</div>
                                </div>
                                <div>
                                    <div className="hero-stat-value">IA</div>
                                    <div className="hero-stat-label">Gemini integrado</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <PhoneMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES ===== */}
            <section className="section" id="features">
                <div className="container">
                    <div className="section-header animate-in">
                        <span className="label">Recursos</span>
                        <h2>Tudo que você precisa,<br />em um só lugar</h2>
                        <p>Projetado por quem entende a rotina do motorista. Cada recurso resolve um problema real do seu dia a dia.</p>
                    </div>
                    <div className="features-grid">
                        <FeatureCard
                            icon="💰"
                            color="green"
                            title="Controle Financeiro"
                            description="Registre ganhos por plataforma (Uber, 99, Particular), despesas e veja seu lucro real em tempo real."
                            delay={0}
                        />
                        <FeatureCard
                            icon="⏱️"
                            color="amber"
                            title="Gestão de Turnos"
                            description="Inicie e encerre turnos com um toque. Acompanhe horas trabalhadas, ganho/hora e quilometragem."
                            delay={1}
                        />
                        <FeatureCard
                            icon="⛽"
                            color="blue"
                            title="Controle de Combustível"
                            description="Registre abastecimentos por tipo de combustível, acompanhe consumo médio (km/l) e custo por quilômetro."
                            delay={2}
                        />
                        <FeatureCard
                            icon="🤖"
                            color="purple"
                            title="Análise com IA e Radar"
                            description="O Gemini analisa seus dados e sugere melhorias para maximizar seus ganhos e reduzir custos. O Radar te ajuda com os melhores pontos de apoio para banheiro e alimentação."
                            delay={3}
                        />
                        <FeatureCard
                            icon="🚗"
                            color="red"
                            title="Gestão de Veículos"
                            description="Controle múltiplos veículos, manutenções preventivas e custos com aluguel ou próprio."
                            delay={4}
                        />
                        <FeatureCard
                            icon="📊"
                            color="cyan"
                            title="Relatórios PDF/CSV"
                            description="Exporte relatórios profissionais para declaração de impostos ou controle pessoal."
                            delay={5}
                        />
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="section" id="how-it-works" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.02) 50%, transparent 100%)' }}>
                <div className="container">
                    <div className="section-header animate-in">
                        <span className="label">Como funciona</span>
                        <h2>Simples como dirigir</h2>
                        <p>Comece a controlar seus ganhos em 3 passos simples.</p>
                    </div>
                    <div className="steps-grid">
                        <div className="step-item animate-in">
                            <div className="step-number">1</div>
                            <h3>Crie sua conta</h3>
                            <p>Cadastro rápido com email. Sem burocracia, sem cartão de crédito.</p>
                        </div>
                        <div className="step-item animate-in">
                            <div className="step-number">2</div>
                            <h3>Registre seus turnos</h3>
                            <p>Inicie o turno quando começar a rodar e registre seus ganhos ao finalizar.</p>
                        </div>
                        <div className="step-item animate-in">
                            <div className="step-number">3</div>
                            <h3>Acompanhe seus lucros</h3>
                            <p>Veja dashboards, relatórios e receba insights personalizados com IA.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="section" id="download">
                <div className="container">
                    <div className="cta-banner animate-in">
                        <span className="label" style={{ marginBottom: 20, display: 'inline-block' }}>Comece agora</span>
                        <h2>Pronto para saber quanto<br />você <span style={{ color: 'var(--accent-green)' }}>realmente</span> ganha?</h2>
                        <p>Baixe o DriverOS gratuitamente e transforme a forma como você gerencia seus ganhos como motorista.</p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://github.com/diegovmsouza/DriverOS-android/releases/latest/download/driveros.apk" className="btn-cta" style={{ fontSize: '0.85rem', padding: '16px 36px' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Baixar APK
                            </a>
                        </div>
                        <p style={{ marginTop: 24, fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Android 8.0+ · 100% gratuito · Sem anúncios
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="DriverOS" className="footer-logo-img" />
                            <span>DriverOS</span>
                        </div>
                        <ul className="footer-links">
                            <li><a href="#features">Recursos</a></li>
                            <li><a href="#how-it-works">Como Funciona</a></li>
                            <li><a href="/privacy">Política de Privacidade</a></li>
                            <li><a href="/terms">Termos de Uso</a></li>
                            <li><a href="/lgpd">LGPD</a></li>
                        </ul>
                    </div>
                    <p className="footer-copy">
                        © {new Date().getFullYear()} DriverOS — Omnitec BH · Belo Horizonte, MG
                    </p>
                </div>
            </footer>
        </>
    )
}

/* ===== Components ===== */

function PhoneMockup() {
    const screenshots = [
        '/screenshot-home.png',
        '/screenshot-dashboard.jpg',
        '/screenshot-ia.jpg',
    ]
    const labels = ['Início / Turno Ativo', 'Dashboard Financeiro', 'DriverOS Intelligence']
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % screenshots.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen-img">
                {screenshots.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={labels[i]}
                        className={`phone-screenshot ${i === current ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="phone-dots">
                {screenshots.map((_, i) => (
                    <button
                        key={i}
                        className={`phone-dot ${i === current ? 'active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={labels[i]}
                    />
                ))}
            </div>
        </div>
    )
}

function FeatureCard({ icon, color, title, description, delay }: {
    icon: string
    color: string
    title: string
    description: string
    delay: number
}) {
    return (
        <div className="feature-card animate-in" style={{ transitionDelay: `${delay * 100}ms` }}>
            <div className={`feature-icon ${color}`}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Home
