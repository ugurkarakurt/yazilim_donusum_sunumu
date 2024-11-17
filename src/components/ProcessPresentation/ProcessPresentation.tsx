
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Code, Target, X, TrendingUp, CheckCircle2,
} from 'lucide-react';
import styles from './styles.module.css';
import { SectionItem, Sections } from './types';
import Image from 'next/image';

const ProcessPresentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('current');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SectionItem | null>(null);

  const sections: Sections = {
    current: {
      title: "Mevcut Durum Analizi",
      icon: <Code className={styles.icon} />,
      color: "#f37070",
      description: "Mevcut süreçler ve teknik borç analizi",
      items: [
        {
          title: "Frontend & Backend Geliştirme Süreçleri",
          description: "Mevcut geliştirme pratikleri ve sorunlar",
          details: [
            "Kod standartları eksikliği",
            "Mimari sorunlar (FE/BE)",
            "Test coverage yetersizliği",
            "Tekrarlanan kodlar",
            "Performans optimizasyon ihtiyacı",
            "API entegrasyon sorunları"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              width={50}
              height={50}
              src="/peak-performers-warning.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "Test coverage", value: "20%", trend: "down" },
            { label: "Dokümantasyon oranı", value: "30%", trend: "down" }
          ]
        },
        {
          title: "Proje Yönetim Süreçleri",
          description: "Mevcut proje yönetim zorlukları",
          details: [
            "Sprint planlama eksiklikleri",
            "İş takibi zorlukları",
            "Belirsiz görev tanımları",
            "Yetersiz dokümantasyon",
            "İletişim kopuklukları",
            "Teknik-İş gereksinimleri uyumsuzluğu"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              width={50}
              height={50}
              src="/done-warning.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "Sprint tamamlanma", value: "40%", trend: "down" }, // Planlanan işlerin tamamlanma oranı
            { label: "Tahmin tutarlılığı", value: "35%", trend: "down" } // Story point tahminlerinin tutarlılığı
          ]
        }
      ]
    },
    goals: {
      title: "Hedefler ve Vizyon",
      icon: <Target className={styles.icon} />,
      color: "#5099f8",
      description: "Dönüşüm hedefleri ve vizyon",
      items: [
        {
          title: "Modern Yazılım Altyapısı",
          description: "Modern ve ölçeklenebilir FE/BE mimarisi",
          details: [
            "Component/Service bazlı geliştirme",
            "Style-guide ve UI Kit",
            "Test otomasyonu (FE/BE)",
            "Code review süreçleri",
            "Performans optimizasyonları",
            "API standartları"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              priority
              width={50}
              height={50}
              src="/bar-chart.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "Hedef test coverage", value: "70%", trend: "up" }, // Başlangıç için daha gerçekçi bir hedef
            { label: "Dokümantasyon hedefi", value: "80%", trend: "up" } // Kritik alanların dokümantasyonu
          ]
        },
        {
          title: "Çevik Metodoloji",
          description: "Çevik süreç adaptasyonu",
          details: [
            "Scrum metodolojisi",
            "Sprint planlamaları",
            "Daily stand-ups",
            "Retrospektifler",
            "Kanban board kullanımı",
            "Cross-functional takımlar"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              priority
              width={50}
              height={50}
              src="/done-info.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "Sprint başarı hedefi", value: "80%", trend: "up" }, // Sprint'te planlanan işlerin tamamlanma hedefi
            { label: "Tahmin tutarlılık hedefi", value: "75%", trend: "up" } // Planlama tutarlılığı hedefi
          ]
        }
      ]
    },
    implementation: {
      title: "Uygulama Planı",
      icon: <ArrowRight className={styles.icon} />,
      color: "#63b981",
      description: "Dönüşüm adımları ve uygulama planı",
      items: [
        {
          title: "Teknoloji Modernizasyonu",
          description: "Yazılım geliştirme süreçlerinin iyileştirilmesi",
          details: [
            "Component/Service kütüphaneleri",
            "Kod standartları (FE/BE)",
            "Test süreçleri",
            "Git workflow optimize",
            "Code review süreçleri",
            "API dokümantasyonu"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              width={50}
              height={50}
              src="/peak-performers-success.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "3 Aylık hedef", value: "40%", trend: "up" }, // İlk 3 ayda ulaşılabilir hedef
            { label: "6 Aylık hedef", value: "70%", trend: "up" } // 6 ay sonunda ulaşılması beklenen seviye
          ]
        },
        {
          title: "Süreç Dönüşümü",
          description: "Çevik metodoloji implementasyonu",
          details: [
            "Jira implementasyonu",
            "Sprint yapılandırması",
            "Scrum/Agile süreçleri",
            "KPI metrikleri",
            "Dokümantasyon sistemi",
            "Ekip yapılandırması"
          ],
          importance: "high",
          svg: (
            <Image
              unoptimized
              width={50}
              height={50}
              src="/increase.png"
              alt="Description"
              className={styles.svgContainer}
            />
          ),
          metrics: [
            { label: "Agile olgunluk", value: "Başlangıç", trend: "up" }, // Agile adaptasyon seviyesi
            { label: "Süreç adaptasyonu", value: "25%", trend: "up" } // Ekibin yeni süreçlere uyum oranı
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
              whileTap={{ scale: 0.95 }}
              className={`${styles.navButton} ${activeSection === key ? styles.active : ''}`}
              onClick={() => setActiveSection(key)}
              style={{ backgroundColor: section.color }}
            >
              <span className={styles.buttonText}>{section.title}</span>
              {section.icon}
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