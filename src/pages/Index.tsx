export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">VELVET*STAGE</div>
        <nav>
          <a href="#">Шоу</a>
          <a href="#">Артистки</a>
          <a href="#">Бар</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Забронировать стол</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НОЧЬ,
              <br />
              КОТОРУЮ <span>ПОМНЯТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Элитный стриптиз-бар в духе 70-х. Живые шоу, крафтовые коктейли и атмосфера, от которой не хочется уходить.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Забронировать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Расписание шоу
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ШОУ
              <br />
              КАЖДУЮ НОЧЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #VELVETSTAGE
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              18+
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЖИВЫЕ ШОУ КАЖДУЮ НОЧЬ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 4:00 * ЛУЧШЕЕ ЗАВЕДЕНИЕ ГОРОДА *
            ЖИВЫЕ ШОУ КАЖДУЮ НОЧЬ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 4:00 * ЛУЧШЕЕ ЗАВЕДЕНИЕ ГОРОДА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ БАРА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Полное меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит вечера</span>
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Velvet Sour"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Velvet Sour</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Виски, лимонный сок, яичный белок и биттер. Классика с шёлковым послевкусием.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Фирменный
              </span>
              <img
                src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Stage Negroni"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Stage Negroni</h3>
                  <span className="price">1 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Джин, кампари, сладкий вермут и цедра апельсина. Горьковато и соблазнительно.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Disco Spritz"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Disco Spritz</h3>
                  <span className="price">1 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Просекко, апероль, содовая и долька грейпфрута. Лёгкий и искрящийся.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">АТМОСФЕРА, КОТОРАЯ ЦЕПЛЯЕТ.</h2>
            <p className="vibe-text">
              Красный бархат, низкий свет, живая музыка и артистки, которые знают своё дело. Velvet Stage — это не просто клуб.
              Это ритуал. Приходи один или с компанией — забудешь всё лишнее.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О заведении
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @VELVET.STAGE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">VELVET*STAGE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Элитный стриптиз-бар в стиле 70-х. Живые шоу, атмосфера и коктейли для тех, кто умеет отдыхать. 18+
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Шоу
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Артистки
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Правила входа
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 20:00 - 02:00</li>
            <li>Пт-Сб: 20:00 - 04:00</li>
            <li>Вс: 20:00 - 00:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 VELVET STAGE</span>
          <span>ТОЛЬКО ДЛЯ ВЗРОСЛЫХ 18+</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
