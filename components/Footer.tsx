export function Footer() {
  return (
    <footer style={{ padding: "48px 0", borderTop: "1px solid var(--glass-border)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span className="font-display" style={{ fontWeight: 700 }}>
          dev<span className="gradient-text">.studio</span>
        </span>
        <div className="font-mono" style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", gap: 20 }}>
          <a href="mailto:hello@devstudio.ru">hello@devstudio.ru</a>
          <a href="https://t.me/devstudio" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} dev.studio
        </span>
      </div>
    </footer>
  );
}
