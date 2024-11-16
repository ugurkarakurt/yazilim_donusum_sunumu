
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
      title: "Mevcut Durum Analizi (Current State Analysis)",
      icon: <Code className={styles.icon} />,
      color: "#f37070",
      description: "Mevcut süreçler ve teknik borç analizi (Assessment of current processes and technical debt analysis)",
      items: [
        {
          title: "İletişim ve Entegrasyon Sorunları (Communication & Integration Issues)",
          description: "Ekipler arası koordinasyon zorlukları (Cross-team coordination challenges)",
          details: [
            "Tekrarlanan iş akışları (Duplicate work streams) - Farklı ekiplerin aynı sorunu çözmek için çalışması",
            "Bilgi siloları (Information silos) - Ekipler arası bilgi paylaşımının yetersizliği",
            "Gecikmeli geri bildirim döngüleri (Delayed feedback loops) - İletişim kopuklukları nedeniyle geç alınan kararlar",
            "Belirsiz gereksinimler (Unclear requirements) - Net olmayan iş tanımları ve beklentiler",
            "Süreç darboğazları (Process bottlenecks) - Onay ve kontrol noktalarında yaşanan gecikmeler",
            "Araç parçalanması (Tool fragmentation) - Farklı ekiplerin farklı araçlar kullanması"
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
            { label: "Haftalık ekip toplantıları (Team sync meetings/week)", value: "2", trend: "down" },
            { label: "Ortalama yanıt süresi (Avg. response time)", value: "48h", trend: "up" }
          ]
        },
        {
          title: "Teknik Borç ve Eski Sistemler (Technical Debt & Legacy Systems)",
          description: "Sistem bakımı ve modernizasyon zorlukları (System maintenance and modernization challenges)",
          details: [
            "Güncel olmayan kod tabanı (Outdated codebase) - Modern pratiklerle uyumsuz eski kod",
            "Manuel süreçler (Manual processes) - Otomatize edilmemiş deployment ve test süreçleri",
            "Sınırlı test kapsamı (Limited test coverage) - Yetersiz unit ve integration testleri",
            "Güvenlik açıkları (Security vulnerabilities) - Güncel olmayan bağımlılıklar ve güvenlik riskleri",
            "Performans sorunları (Performance issues) - Optimize edilmemiş kod ve veritabanı sorguları",
            "Dokümantasyon eksiklikleri (Documentation gaps) - Yetersiz veya güncel olmayan teknik dokümantasyon"
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
            { label: "Kod kapsama oranı (Code coverage)", value: "35%", trend: "down" },
            { label: "Hata çözüm süresi (Bug resolution time)", value: "4.2d", trend: "up" }
          ]
        }
      ]
    },
    goals: {
      title: "Stratejik Hedefler ve Vizyon (Strategic Goals & Vision)",
      icon: <Target className={styles.icon} />,
      color: "#5099f8",
      description: "Gelecek durum vizyonu ve dönüşüm hedefleri (Future state vision and transformation objectives)",
      items: [
        {
          title: "Modern Geliştirme Altyapısı (Modern Development Infrastructure)",
          description: "Bulut tabanlı ve ölçeklenebilir mimari (Cloud-native and scalable architecture)",
          details: [
            "Mikroservis adaptasyonu (Microservices adoption) - Monolitik yapıdan mikroservislere geçiş",
            "Bulut altyapısı (Cloud infrastructure) - AWS/Azure/GCP üzerinde modern altyapı",
            "Konteyner orkestrasyonu (Container orchestration) - Kubernetes ile ölçeklenebilir deploymentlar",
            "CI/CD otomasyonu (CI/CD automation) - Tam otomatik build ve deployment süreçleri",
            "Kod olarak Altyapı (Infrastructure as Code) - Terraform/CloudFormation ile altyapı yönetimi",
            "Servis mesh implementasyonu (Service mesh implementation) - Istio/Linkerd ile servis yönetimi"
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
            { label: "Hedef deployment sıklığı (Target deployment freq.)", value: "Daily", trend: "up" },
            { label: "Altyapı kod oranı (Infrastructure as Code)", value: "100%", trend: "up" }
          ]
        },
        {
          title: "Kalite ve Performans Standartları (Quality & Performance Standards)",
          description: "Ölçülebilir kalite iyileştirmeleri (Measurable quality improvements)",
          details: [
            "Test otomasyonu (Test automation) - End-to-end test süreçlerinin otomatizasyonu",
            "Performans izleme (Performance monitoring) - Real-time sistem performans takibi",
            "Güvenlik standartları (Security standards) - SAST/DAST ve güvenlik taramaları",
            "Kod kalite metrikleri (Code quality metrics) - Sonar ve benzeri araçlarla kod analizi",
            "DevSecOps pratikleri (DevSecOps practices) - Güvenliğin geliştirme sürecine entegrasyonu",
            "Otomatik QA süreçleri (Automated QA processes) - Kalite kontrol süreçlerinin otomasyonu"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeWidth="8" />
              <path d="M30 50 L45 65 L75 35" stroke="#1d4ed8" strokeWidth="8" fill="none" />
            </svg>
          ),
          metrics: [
            { label: "Hedef test kapsamı (Target test coverage)", value: "90%", trend: "up" },
            { label: "QA otomasyon seviyesi (QA automation level)", value: "95%", trend: "up" }
          ]
        }
      ]
    },
    changes: {
      title: "Uygulama Stratejisi (Implementation Strategy)",
      icon: <ArrowRight className={styles.icon} />,
      color: "#63b981",
      description: "Dönüşüm yol haritası ve uygulama adımları (Transformation roadmap and implementation steps)",
      items: [
        {
          title: "DevOps ve Otomasyon (DevOps & Automation Pipeline)",
          description: "Sürekli entegrasyon ve deployment süreçleri (Continuous integration and deployment pipeline)",
          details: [
            "Git iş akışı (Git workflow implementation) - Branch ve merge stratejilerinin belirlenmesi",
            "Otomatik test kurulumu (Automated testing setup) - Unit, integration ve e2e testlerin hazırlanması",
            "CI/CD pipeline oluşturma (CI/CD pipeline creation) - Jenkins/GitLab CI yapılandırması",
            "Altyapı otomasyonu (Infrastructure automation) - Terraform ile altyapı kodlaması",
            "İzleme implementasyonu (Monitoring implementation) - Prometheus/Grafana kurulumu",
            "Otomatik deployment (Automated deployment) - Zero-downtime deployment konfigürasyonu"
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
            { label: "Otomasyon kapsamı (Automation coverage)", value: "95%", trend: "up" },
            { label: "Deployment sıklığı (Deployment frequency)", value: "Daily", trend: "up" }
          ]
        },
        {
          title: "Çevik Dönüşüm (Agile Transformation)",
          description: "Modern geliştirme metodolojisi adaptasyonu (Modern development methodology adoption)",
          details: [
            "Scrum implementasyonu (Scrum implementation) - Sprint ve ceremonilerin kurulumu",
            "Kanban süreçleri (Kanban processes) - İş akışı görselleştirmesi ve limitleri",
            "Çevik toplantılar (Agile ceremonies) - Daily standup, retro ve planning meetings",
            "Kullanıcı hikayesi haritalama (Story mapping) - Gereksinimlerin agile formatında yazılması",
            "Hız takibi (Velocity tracking) - Sprint velocity ve burndown charts",
            "Sürekli geri bildirim (Continuous feedback) - Retrospektif ve iyileştirme döngüleri"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#059669" strokeWidth="4" />
              <path d="M50 20 A30 30 0 0 1 80 50" fill="none" stroke="#34d399" strokeWidth="8" />
            </svg>
          ),
          metrics: [
            { label: "Sprint öngörülebilirliği (Sprint predictability)", value: "85%", trend: "up" },
            { label: "Ekip hızı (Team velocity)", value: "+40%", trend: "up" }
          ]
        }
      ]
    },
    timeline: {
      title: "Uygulama Zaman Çizelgesi (Implementation Timeline)",
      icon: <Clock className={styles.icon} />,
      color: "#a45df0",
      description: "Aşamalı dönüşüm yaklaşımı (Phased transformation approach)",
      items: [
        {
          title: "Faz 1: Temel Hazırlık (Phase 1: Foundation)",
          description: "İlk 3 ay - Temel altyapı kurulumu (Initial 3 months - Core infrastructure setup)",
          details: [
            "Geliştirme iş akışı (Development workflow setup) - Git ve CI/CD temel kurulumu",
            "Ekip yapılandırması (Team restructuring) - Agile takımların oluşturulması",
            "İlk otomasyon (Initial automation) - Temel deployment otomasyonu",
            "Temel izleme (Basic monitoring) - Logging ve monitoring başlangıcı",
            "Eğitim programı (Training program) - Teknik ve agile eğitimlerin planlanması",
            "Dokümantasyon (Documentation initiative) - Bilgi bankası oluşturulması"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <rect x="10" y="40" width="25" height="20" fill="#c084fc" />
              <rect x="40" y="40" width="25" height="20" fill="#a855f7" />
              <rect x="70" y="40" width="25" height="20" fill="#7c3aed" />
              <text x="50" y="35" fontSize="8" fill="#7c3aed" textAnchor="middle">Faz 1</text>
            </svg>
          ),
          metrics: [
            { label: "Zaman çizelgesi ilerlemesi (Timeline progress)", value: "0%", trend: "up" },
            { label: "Temel tamamlanma (Foundation completed)", value: "0%", trend: "up" }
          ]
        },
        {
          title: "Faz 2: Hızlandırma (Phase 2: Acceleration)",
          description: "4-6. aylar - İleri seviye implementasyon (Months 4-6 - Advanced implementation)",
          details: [
            "İleri test altyapısı (Advanced testing framework) - Kapsamlı test otomasyonu kurulumu",
            "Performans optimizasyonu (Performance optimization) - Sistem performans iyileştirmeleri",
            "Güvenlik güçlendirme (Security hardening) - Güvenlik tarama ve düzeltmeleri",
            "Mikroservis geçişi (Microservices transition) - İlk mikroservis dönüşümleri",
            "Bulut geçişi (Cloud migration) - Bulut altyapısına geçiş başlangıcı",
            "Ekip otonomisi (Team autonomy) - Ekiplerin kendi kararlarını alabilmesi"
          ],
          importance: "medium",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <path d="M20 80 C 40 80, 60 40, 80 20" stroke="#7c3aed" strokeWidth="4" fill="none" />
              <circle cx="20" cy="80" r="5" fill="#c084fc" />
              <circle cx="80" cy="20" r="5" fill="#c084fc" />
              <text x="50" y="50" fontSize="8" fill="#7c3aed" textAnchor="middle">Faz 2</text>
            </svg>
          ),
          metrics: [
            { label: "İleri özellikler (Advanced features)", value: "0%", trend: "up" },
            { label: "Kalan süre (Time remaining)", value: "6mo", trend: "down" }
          ]
        }
      ]
    },
    benefits: {
      title: "Beklenen Faydalar ve Yatırım Getirisi (Expected Benefits & ROI)",
      icon: <BarChart className={styles.icon} />,
      color: "#f39238",
      description: "Somut iyileştirmeler ve iş etkisi (Tangible improvements and business impact)",
      items: [
        {
          title: "Performans ve Verimlilik Artışı (Performance & Efficiency Gains)",
          description: "Ölçülebilir operasyonel iyileştirmeler (Quantifiable operational improvements)",
          details: [
            "Hızlı deploymentlar (Faster deployments) - Deployment süresinde %90 azalma",
            "Azalan hatalar (Reduced errors) - Production hatalarında %60 düşüş",
            "Ekip üretkenliği (Team productivity) - Developer verimliliğinde %40 artış",
            "Maliyet optimizasyonu (Cost optimization) - Operasyonel maliyetlerde %30 düşüş",
            "Pazara çıkış süresi (Time-to-market) - Feature delivery süresinde %50 iyileşme",
            "Kaynak kullanımı (Resource utilization) - Sistem kaynak kullanımında %35 optimizasyon"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <path d="M10 90 L90 90 L90 10" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M10 70 L30 50 L50 60 L70 30" fill="none" stroke="#fcd34d" strokeWidth="4" />
              <text x="50" y="95" fontSize="8" fill="#f59e0b" textAnchor="middle">Performans</text>
            </svg>
          ),
          metrics: [
            { label: "Genel verimlilik artışı (Overall efficiency)", value: "+40%", trend: "up" },
            { label: "Maliyet düşüşü (Cost reduction)", value: "30%", trend: "down" }
          ]
        },
        {
          title: "Kalite ve Güvenilirlik İyileştirmesi (Quality & Reliability Improvement)",
          description: "Gelişmiş sistem stabilitesi ve kalite (Enhanced system stability and quality)",
          details: [
            "Yüksek erişilebilirlik (High availability) - Sistem uptime oranında %99.9'a ulaşma",
            "Kalite metrikleri (Quality metrics) - Kod kalite skorunda %40 artış",
            "Güvenlik duruşu (Security posture) - Güvenlik açıklarında %70 azalma",
            "Müşteri memnuniyeti (Customer satisfaction) - Kullanıcı memnuniyetinde %45 artış",
            "Sistem güvenilirliği (System reliability) - Beklenmeyen kesintilerde %80 azalma",
            "Teknik mükemmellik (Technical excellence) - Modern teknoloji adaptasyonunda %100 artış"
          ],
          importance: "high",
          svg: (
            <svg viewBox="0 0 100 100" className={styles.svgContainer}>
              <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M35 50 L45 60 L65 40" stroke="#fcd34d" strokeWidth="6" fill="none" />
              <text x="50" y="90" fontSize="8" fill="#f59e0b" textAnchor="middle">Kalite</text>
            </svg>
          ),
          metrics: [
            { label: "Sistem güvenilirliği (System reliability)", value: "99.9%", trend: "up" },
            { label: "Kalite skoru (Quality score)", value: "85%", trend: "up" }
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