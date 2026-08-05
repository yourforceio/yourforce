type AutoReplyProps = {
  name: string;
  service: string;
};

const styles = {
  body: {
    backgroundColor: "#f8fafc",
    margin: 0,
    padding: "40px 16px",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1e293b",
  },

  container: {
    maxWidth: "640px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    overflow: "hidden",
  },

  header: {
    backgroundColor: "#0f172a",
    padding: "30px",
    textAlign: "center" as const,
  },

  logo: {
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: 700,
    margin: 0,
  },

  tagline: {
    color: "#cbd5e1",
    fontSize: "14px",
    marginTop: "8px",
  },

  section: {
    padding: "32px",
  },

  title: {
    fontSize: "26px",
    fontWeight: 700,
    margin: "0 0 24px",
  },

  paragraph: {
    color: "#475569",
    fontSize: "16px",
    lineHeight: 1.8,
    margin: "0 0 18px",
  },

  highlightBox: {
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: "10px",
    padding: "20px",
    margin: "26px 0",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "8px",
    fontWeight: 600,
    marginTop: "8px",
  },

  signature: {
    color: "#334155",
    lineHeight: 1.7,
    marginTop: "28px",
  },

  footer: {
    borderTop: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    color: "#64748b",
    fontSize: "13px",
    padding: "22px 30px",
    textAlign: "center" as const,
  },
};

export default function AutoReply({
  name,
  service,
}: AutoReplyProps) {
  return (
    <html>
      <body style={styles.body}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.logo}>
              YourForce
            </h1>

            <div style={styles.tagline}>
              Enterprise Software Development
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.title}>
              Thank you for contacting YourForce
            </h2>

            <p style={styles.paragraph}>
              Hi <strong>{name}</strong>,
            </p>

            <p style={styles.paragraph}>
              We&apos;ve received your inquiry about{" "}
              <strong>{service}</strong>. Thank you for
              considering YourForce for your project.
            </p>

            <div style={styles.highlightBox}>
              <strong>
                What happens next?
              </strong>

              <p
                style={{
                  ...styles.paragraph,
                  margin: "10px 0 0",
                }}
              >
                We&apos;ll review your requirements and
                respond within one business day.
              </p>
            </div>

            <p style={styles.paragraph}>
              In the meantime, you can explore some of
              our recent work.
            </p>

            <a
              href="https://yourforce.io/portfolio"
              style={styles.button}
            >
              View our portfolio
            </a>

            <div style={styles.signature}>
              <strong>
                Amir Shaheen
              </strong>

              <br />
              Founder
              <br />
              YourForce
            </div>
          </div>

          <div style={styles.footer}>
            © {new Date().getFullYear()} YourForce ·
            https://yourforce.io
          </div>
        </div>
      </body>
    </html>
  );
}