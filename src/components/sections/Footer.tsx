const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container-narrow">
        <p className="text-center text-sm text-text-muted">
          © {new Date().getFullYear()} · Alle Rechte vorbehalten
        </p>
      </div>
    </footer>
  );
};

export default Footer;
