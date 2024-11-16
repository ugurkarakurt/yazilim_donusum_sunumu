
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Code, Target, BarChart, Clock, X, TrendingUp, CheckCircle2,
} from 'lucide-react';
import styles from './styles.module.css';

interface SectionItem {
  title: string;
  description: string;
  details?: string[];
  importance?: 'high' | 'medium' | 'low';
  svg: JSX.Element;
  metrics?: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
  }[];
}

interface Section {
  title: string;
  icon: JSX.Element;
  color: string;
  description: string;
  items: SectionItem[];
}

type Sections = {
  [key: string]: Section;
};

const ProcessPresentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('current');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SectionItem | null>(null);

  const sections: Sections = {
    current: {
      title: "Current State Analysis (Mevcut Durum Analizi)",
      icon: <Code className={styles.icon} />,
      color: "#f37070",
      description: "Assessment of current processes and technical debt analysis (Mevcut süreçler ve teknik borç analizi)",
      items: [
        {
          title: "Communication & Integration Issues (İletişim ve Entegrasyon Sorunları)",
          description: "Cross-team coordination challenges (Ekipler arası koordinasyon zorlukları)",
          details: [
            "Duplicate work streams (Tekrarlanan iş akışları) - Farklı ekiplerin aynı sorunu çözmek için çalışması",
            "Information silos (Bilgi siloları) - Ekipler arası bilgi paylaşımının yetersizliği",
            "Delayed feedback loops (Gecikmeli geri bildirim döngüleri) - İletişim kopuklukları nedeniyle geç alınan kararlar",
            "Unclear requirements (Belirsiz gereksinimler) - Net olmayan iş tanımları ve beklentiler",
            "Process bottlenecks (Süreç darboğazları) - Onay ve kontrol noktalarında yaşanan gecikmeler",
            "Tool fragmentation (Araç parçalanması) - Farklı ekiplerin farklı araçlar kullanması"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="30" cy="50" r="20" fill="#fee2e2" />
              <circle cx="70" cy="50" r="20" fill="#fee2e2" />
              <line x1="40" y1="50" x2="60" y2="50" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
              <text x="30" y="55" fontSize="12" textAnchor="middle" fill="#ef4444">A</text>
              <text x="70" y="55" fontSize="12" textAnchor="middle" fill="#ef4444">B</text>
            </svg>
          ),
          metrics: [
            { label: "Team sync meetings/week", value: "2", trend: "down" },
            { label: "Avg. response time", value: "48h", trend: "up" }
          ]
        },
        {
          title: "Technical Debt & Legacy Systems (Teknik Borç ve Eski Sistemler)",
          description: "System maintenance and modernization challenges (Sistem bakımı ve modernizasyon zorlukları)",
          details: [
            "Outdated codebase (Güncel olmayan kod tabanı) - Modern pratiklerle uyumsuz eski kod",
            "Manual processes (Manuel süreçler) - Otomatize edilmemiş deployment ve test süreçleri",
            "Limited test coverage (Sınırlı test kapsamı) - Yetersiz unit ve integration testleri",
            "Security vulnerabilities (Güvenlik açıkları) - Güncel olmayan bağımlılıklar ve güvenlik riskleri",
            "Performance issues (Performans sorunları) - Optimize edilmemiş kod ve veritabanı sorguları",
            "Documentation gaps (Dokümantasyon eksiklikleri) - Yetersiz veya güncel olmayan teknik dokümantasyon"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <rect x="20" y="20" width="60" height="60" fill="#fee2e2" />
              <text x="50" y="55" fontSize="20" fill="#ef4444" textAnchor="middle">⚠️</text>
              <text x="50" y="75" fontSize="10" fill="#ef4444" textAnchor="middle">Legacy Code</text>
            </svg>
          ),
          metrics: [
            { label: "Code coverage", value: "35%", trend: "down" },
            { label: "Bug resolution time", value: "4.2d", trend: "up" }
          ]
        }
      ]
    },
    goals: {
      title: "Strategic Goals & Vision (Stratejik Hedefler ve Vizyon)",
      icon: <Target className={styles.icon} />,
      color: "#5099f8",
      description: "Future state vision and transformation objectives (Gelecek durum vizyonu ve dönüşüm hedefleri)",
      items: [
        {
          title: "Modern Development Infrastructure (Modern Geliştirme Altyapısı)",
          description: "Cloud-native and scalable architecture (Bulut tabanlı ve ölçeklenebilir mimari)",
          details: [
            "Microservices adoption (Mikroservis adaptasyonu) - Monolitik yapıdan mikroservislere geçiş",
            "Cloud infrastructure (Bulut altyapısı) - AWS/Azure/GCP üzerinde modern altyapı",
            "Container orchestration (Konteyner orkestrasyonu) - Kubernetes ile ölçeklenebilir deploymentlar",
            "CI/CD automation (CI/CD otomasyonu) - Tam otomatik build ve deployment süreçleri",
            "Infrastructure as Code (Kod olarak Altyapı) - Terraform/CloudFormation ile altyapı yönetimi",
            "Service mesh implementation (Servis mesh implementasyonu) - Istio/Linkerd ile servis yönetimi"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <rect x="10" y="40" width="20" height="40" fill="#bfdbfe" />
              <rect x="40" y="20" width="20" height="60" fill="#93c5fd" />
              <rect x="70" y="30" width="20" height="50" fill="#60a5fa" />
              <text x="50" y="90" fontSize="8" fill="#1d4ed8" textAnchor="middle">Cloud Native</text>
            </svg>
          ),
          metrics: [
            { label: "Target deployment freq.", value: "Daily", trend: "up" },
            { label: "Infrastructure as Code", value: "100%", trend: "up" }
          ]
        },
        {
          title: "Quality & Performance Standards (Kalite ve Performans Standartları)",
          description: "Measurable quality improvements (Ölçülebilir kalite iyileştirmeleri)",
          details: [
            "Test automation (Test otomasyonu) - End-to-end test süreçlerinin otomatizasyonu",
            "Performance monitoring (Performans izleme) - Real-time sistem performans takibi",
            "Security standards (Güvenlik standartları) - SAST/DAST ve güvenlik taramaları",
            "Code quality metrics (Kod kalite metrikleri) - Sonar ve benzeri araçlarla kod analizi",
            "DevSecOps practices (DevSecOps pratikleri) - Güvenliğin geliştirme sürecine entegrasyonu",
            "Automated QA processes (Otomatik QA süreçleri) - Kalite kontrol süreçlerinin otomasyonu"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeWidth="8" />
              <path d="M30 50 L45 65 L75 35" stroke="#1d4ed8" strokeWidth="8" fill="none" />
            </svg>
          ),
          metrics: [
            { label: "Target test coverage", value: "90%", trend: "up" },
            { label: "QA automation level", value: "95%", trend: "up" }
          ]
        }
      ]
    },
    changes: {
      title: "Implementation Strategy (Uygulama Stratejisi)",
      icon: <ArrowRight className={styles.icon} />,
      color: "#63b981",
      description: "Transformation roadmap and implementation steps (Dönüşüm yol haritası ve uygulama adımları)",
      items: [
        {
          title: "DevOps & Automation Pipeline (DevOps ve Otomasyon)",
          description: "Continuous integration and deployment pipeline (Sürekli entegrasyon ve deployment süreçleri)",
          details: [
            "Git workflow implementation (Git iş akışı) - Branch ve merge stratejilerinin belirlenmesi",
            "Automated testing setup (Otomatik test kurulumu) - Unit, integration ve e2e testlerin hazırlanması",
            "CI/CD pipeline creation (CI/CD pipeline oluşturma) - Jenkins/GitLab CI yapılandırması",
            "Infrastructure automation (Altyapı otomasyonu) - Terraform ile altyapı kodlaması",
            "Monitoring implementation (İzleme implementasyonu) - Prometheus/Grafana kurulumu",
            "Automated deployment (Otomatik deployment) - Zero-downtime deployment konfigürasyonu"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <line x1="20" y1="20" x2="80" y2="20" stroke="#059669" strokeWidth="4" />
              <line x1="50" y1="20" x2="50" y2="80" stroke="#059669" strokeWidth="4" />
              <circle cx="20" cy="20" r="5" fill="#34d399" />
              <circle cx="80" cy="20" r="5" fill="#34d399" />
              <circle cx="50" cy="80" r="5" fill="#34d399" />
            </svg>
          ),
          metrics: [
            { label: "Automation coverage", value: "95%", trend: "up" },
            { label: "Deployment frequency", value: "Daily", trend: "up" }
          ]
        },
        {
          title: "Agile Transformation (Çevik Dönüşüm)",
          description: "Modern development methodology adoption (Modern geliştirme metodolojisi adaptasyonu)",
          details: [
            "Scrum implementation (Scrum implementasyonu) - Sprint ve ceremonilerin kurulumu",
            "Kanban processes (Kanban süreçleri) - İş akışı görselleştirmesi ve limitleri",
            "Agile ceremonies (Çevik toplantılar) - Daily standup, retro ve planning meetings",
            "Story mapping (Kullanıcı hikayesi haritalama) - Gereksinimlerin agile formatında yazılması",
            "Velocity tracking (Hız takibi) - Sprint velocity ve burndown charts",
            "Continuous feedback (Sürekli geri bildirim) - Retrospektif ve iyileştirme döngüleri"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#059669" strokeWidth="4" />
              <path d="M50 20 A30 30 0 0 1 80 50" fill="none" stroke="#34d399" strokeWidth="8" />
            </svg>
          ),
          metrics: [
            { label: "Sprint predictability", value: "85%", trend: "up" },
            { label: "Team velocity", value: "+40%", trend: "up" }
          ]
        }
      ]
    },
    timeline: {
      title: "Implementation Timeline (Uygulama Zaman Çizelgesi)",
      icon: <Clock className={styles.icon} />,
      color: "#a45df0",
      description: "Phased transformation approach (Aşamalı dönüşüm yaklaşımı)",
      items: [
        {
          title: "Phase 1: Foundation (Faz 1: Temel Hazırlık)",
          description: "Initial 3 months - Core infrastructure setup (İlk 3 ay - Temel altyapı kurulumu)",
          details: [
            "Development workflow setup (Geliştirme iş akışı) - Git ve CI/CD temel kurulumu",
            "Team restructuring (Ekip yapılandırması) - Agile takımların oluşturulması",
            "Initial automation (İlk otomasyon) - Temel deployment otomasyonu",
            "Basic monitoring (Temel izleme) - Logging ve monitoring başlangıcı",
            "Training program (Eğitim programı) - Teknik ve agile eğitimlerin planlanması",
            "Documentation initiative (Dokümantasyon) - Bilgi bankası oluşturulması"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <rect x="10" y="40" width="25" height="20" fill="#c084fc" />
              <rect x="40" y="40" width="25" height="20" fill="#a855f7" />
              <rect x="70" y="40" width="25" height="20" fill="#7c3aed" />
              <text x="50" y="35" fontSize="8" fill="#7c3aed" textAnchor="middle">Phase 1</text>
            </svg>
          ),
          metrics: [
            { label: "Timeline progress", value: "0%", trend: "up" },
            { label: "Foundation completed", value: "0%", trend: "up" }
          ]
        },
        {
          title: "Phase 2: Acceleration (Faz 2: Hızlandırma)",
          description: "Months 4-6 - Advanced implementation (4-6. aylar - İleri seviye implementasyon)",
          details: [
            "Advanced testing framework (İleri test altyapısı) - Kapsamlı test otomasyonu kurulumu",
            "Performance optimization (Performans optimizasyonu) - Sistem performans iyileştirmeleri",
            "Security hardening (Güvenlik güçlendirme) - Güvenlik tarama ve düzeltmeleri",
            "Microservices transition (Mikroservis geçişi) - İlk mikroservis dönüşümleri",
            "Cloud migration (Bulut geçişi) - Bulut altyapısına geçiş başlangıcı",
            "Team autonomy (Ekip otonomisi) - Ekiplerin kendi kararlarını alabilmesi"
          ],
          importance: "medium",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <path d="M20 80 C 40 80, 60 40, 80 20" stroke="#7c3aed" strokeWidth="4" fill="none" />
              <circle cx="20" cy="80" r="5" fill="#c084fc" />
              <circle cx="80" cy="20" r="5" fill="#c084fc" />
              <text x="50" y="50" fontSize="8" fill="#7c3aed" textAnchor="middle">Phase 2</text>
            </svg>
          ),
          metrics: [
            { label: "Advanced features", value: "0%", trend: "up" },
            { label: "Time remaining", value: "6mo", trend: "down" }
          ]
        }
      ]
    },
    benefits: {
      title: "Expected Benefits & ROI (Beklenen Faydalar ve Yatırım Getirisi)",
      icon: <BarChart className={styles.icon} />,
      color: "#f39238",
      description: "Tangible improvements and business impact (Somut iyileştirmeler ve iş etkisi)",
      items: [
        {
          title: "Performance & Efficiency Gains (Performans ve Verimlilik Artışı)",
          description: "Quantifiable operational improvements (Ölçülebilir operasyonel iyileştirmeler)",
          details: [
            "Faster deployments (Hızlı deploymentlar) - Deployment süresinde %90 azalma",
            "Reduced errors (Azalan hatalar) - Production hatalarında %60 düşüş",
            "Team productivity (Ekip üretkenliği) - Developer verimliliğinde %40 artış",
            "Cost optimization (Maliyet optimizasyonu) - Operasyonel maliyetlerde %30 düşüş",
            "Time-to-market (Pazara çıkış süresi) - Feature delivery süresinde %50 iyileşme",
            "Resource utilization (Kaynak kullanımı) - Sistem kaynak kullanımında %35 optimizasyon"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <path d="M10 90 L90 90 L90 10" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M10 70 L30 50 L50 60 L70 30" fill="none" stroke="#fcd34d" strokeWidth="4" />
              <text x="50" y="95" fontSize="8" fill="#f59e0b" textAnchor="middle">Performance</text>
            </svg>
          ),
          metrics: [
            { label: "Overall efficiency", value: "+40%", trend: "up" },
            { label: "Cost reduction", value: "30%", trend: "down" }
          ]
        },
        {
          title: "Quality & Reliability Improvement (Kalite ve Güvenilirlik İyileştirmesi)",
          description: "Enhanced system stability and quality (Gelişmiş sistem stabilitesi ve kalite)",
          details: [
            "High availability (Yüksek erişilebilirlik) - Sistem uptime oranında %99.9'a ulaşma",
            "Quality metrics (Kalite metrikleri) - Kod kalite skorunda %40 artış",
            "Security posture (Güvenlik duruşu) - Güvenlik açıklarında %70 azalma",
            "Customer satisfaction (Müşteri memnuniyeti) - Kullanıcı memnuniyetinde %45 artış",
            "System reliability (Sistem güvenilirliği) - Beklenmeyen kesintilerde %80 azalma",
            "Technical excellence (Teknik mükemmellik) - Modern teknoloji adaptasyonunda %100 artış"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M35 50 L45 60 L65 40" stroke="#fcd34d" strokeWidth="6" fill="none" />
              <text x="50" y="90" fontSize="8" fill="#f59e0b" textAnchor="middle">Quality</text>
            </svg>
          ),
          metrics: [
            { label: "System reliability", value: "99.9%", trend: "up" },
            { label: "Quality score", value: "85%", trend: "up" }
          ]
        }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const DetailView: React.FC<{ item: SectionItem }> = ({ item }) => (
    <motion.div
      className={styles.detailView}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <button
        className={styles.closeButton}
        onClick={() => {
          setIsDetailView(false);
          setSelectedItem(null);
        }}
      >
        <X size={24} />
      </button>
      <div className={styles.detailContent}>
        <h3 className={styles.detailTitle}>{item.title}</h3>
        <p className={styles.detailDescription}>{item.description}</p>

        {item.details && (
          <div className={styles.detailsList}>
            <h4>Detailed Overview (Detaylı Genel Bakış):</h4>
            <ul>
              {item.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className={styles.detailIcon} size={16} />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {item.metrics && (
          <div className={styles.metricsGrid}>
            {item.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={styles.metricCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>{metric.label}</span>
                  {metric.trend && (
                    <div className={`${styles.trendIndicator} ${styles[metric.trend]}`}>
                      {metric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingUp size={16} className={styles.down} />}
                    </div>
                  )}
                </div>
                <div className={styles.metricValue}>{metric.value}</div>
              </motion.div>
            ))}
          </div>
        )}

        <div className={styles.importanceIndicator}>
          <span className={styles.importanceLabel}>Priority Level (Öncelik Seviyesi):</span>
          <div className={`${styles.importanceBadge} ${styles[item.importance || 'medium']}`}>
            {item.importance === 'high' ? 'High (Yüksek)' :
              item.importance === 'medium' ? 'Medium (Orta)' :
                'Low (Düşük)'}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.wrapper}
      >
        <header className={styles.header}>
          <h1 className={styles.title}>Software Development Process Modernization</h1>
          <p className={styles.subtitle}>Yazılım Geliştirme Süreçleri Modernizasyonu</p>
        </header>

        <nav className={styles.navigationGrid}>
          {Object.entries(sections).map(([key, section]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.navButton} ${activeSection === key ? styles.active : ''}`}
              onClick={() => setActiveSection(key)}
              style={{ backgroundColor: section.color }}
            >
              {section.icon}
              <span className={styles.buttonText}>{section.title}</span>
            </motion.button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={styles.contentSection}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{sections[activeSection].title}</h2>
              <p className={styles.sectionDescription}>{sections[activeSection].description}</p>
            </div>

            <div className={styles.grid}>
              {sections[activeSection].items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                  className={styles.card}
                  onClick={() => {
                    setSelectedItem(item);
                    setIsDetailView(true);
                  }}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.svgContainer}>
                      {item.svg}
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                      {item.metrics && (
                        <div className={styles.cardMetrics}>
                          {item.metrics.map((metric, idx) => (
                            <div key={idx} className={styles.metricItem}>
                              <span className={styles.metricLabel}>{metric.label}:</span>
                              <span className={styles.metricValue}>{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className={styles.cardFooter}>
                        <div className={`${styles.importanceDot} ${styles[item.importance || 'medium']}`} />
                        <span className={styles.viewDetails}>Click for details (Detaylar için tıklayın)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isDetailView && selectedItem && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsDetailView(false);
                  setSelectedItem(null);
                }
              }}
            >
              <DetailView item={selectedItem} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProcessPresentation;