import type { ContactFormData } from "@/lib/validations/contact";

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
    padding: "30px",
  },

  title: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 8px",
  },

  subtitle: {
    color: "#64748b",
    fontSize: "15px",
    lineHeight: 1.6,
    margin: "0 0 24px",
  },

  card: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },

  row: {
    marginBottom: "16px",
  },

  label: {
    color: "#0f172a",
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "5px",
  },

  value: {
    color: "#475569",
    fontSize: "15px",
    margin: 0,
  },

  message: {
    color: "#334155",
    fontSize: "15px",
    lineHeight: 1.8,
    margin: 0,
    whiteSpace: "pre-wrap" as const,
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
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

export default function ContactEmail({
  name,
  email,
  phone,
  service,
  budget,
  timeline,
  message,
}: ContactFormData) {
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
              New project inquiry
            </h2>

            <p style={styles.subtitle}>
              A visitor submitted the contact form on
              yourforce.io.
            </p>

            <div style={styles.card}>
              <div style={styles.row}>
                <div style={styles.label}>
                  Name
                </div>

                <p style={styles.value}>
                  {name}
                </p>
              </div>

              <div style={styles.row}>
                <div style={styles.label}>
                  Email
                </div>

                <p style={styles.value}>
                  <a
                    href={`mailto:${email}`}
                    style={styles.link}
                  >
                    {email}
                  </a>
                </p>
              </div>

              {phone && (
                <div style={styles.row}>
                  <div style={styles.label}>
                    Phone
                  </div>

                  <p style={styles.value}>
                    {phone}
                  </p>
                </div>
              )}

              <div style={styles.row}>
                <div style={styles.label}>
                  Service
                </div>

                <p style={styles.value}>
                  {service}
                </p>
              </div>

              {budget && (
                <div style={styles.row}>
                  <div style={styles.label}>
                    Estimated budget
                  </div>

                  <p style={styles.value}>
                    {budget}
                  </p>
                </div>
              )}

              {timeline && (
                <div>
                  <div style={styles.label}>
                    Timeline
                  </div>

                  <p style={styles.value}>
                    {timeline}
                  </p>
                </div>
              )}
            </div>

            <div style={styles.card}>
              <div style={styles.label}>
                Project details
              </div>

              <p style={styles.message}>
                {message}
              </p>
            </div>
          </div>

          <div style={styles.footer}>
            Submitted from https://yourforce.io
          </div>
        </div>
      </body>
    </html>
  );
}
