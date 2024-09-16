import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container2: {
    fontFamily:
      '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    fontFamily:
      '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    color: "#1d1d1f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    // marginBottom: "60px",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    marginTop: 30,
    marginBottom: 50,
  },
  menuItem: {
    fontSize: {
      default: "18px",
      "@media (max-width: 768px)": "14px",
    },
    color: {
      default: "#666",
      ":hover": "#333",
    },
  },
  menuLogoItem: {
    width: 22,
    height: 22,
    opacity: {
      default: 0.8,
      ":hover": 1,
    },
  },
  heading: {
    fontSize: {
      default: "36px",
      "@media (max-width: 768px)": "32px",
    },
    lineHeight: 1.1,
    fontWeight: "600",
    letterSpacing: "-0.003em",
    color: "#1d1d1f",

    maxWidth: "600px",
    marginBottom: 20,
  },

  trustedSection: {
    textAlign: "center",
    marginTop: "60px",
  },
  trustedText: {
    fontSize: "21px",
    lineHeight: 1.381,
    fontWeight: "400",
    letterSpacing: "0.011em",
    color: "#1d1d1f",
  },
  svgContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  companyLogo: {
    height: "30px",
    width: "auto",
    opacity: 0.8,
  },
  cardsSection: {
    marginTop: "100px",
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(3, 1fr)",
      "@media (max-width: 1024px)": "repeat(2, 1fr)",
      "@media (max-width: 768px)": "1fr",
    },
    gap: "20px",
    marginBottom: "100px",
  },
  card: {
    backgroundColor: "#FAFAFA",
    borderRadius: "8px",
    padding: "30px",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "scale(1.03)",
    },
  },
  cardIcon: {
    fontSize: "36px",
  },
  cardTitle: {
    fontSize: "20px",
    lineHeight: 1.381,
    fontWeight: "700",
    letterSpacing: "0.011em",
    marginBottom: "8px",
  },
  cardDescription: {
    fontSize: "18px",
    lineHeight: 1.47059,
    fontWeight: "400",
    letterSpacing: "-0.022em",
    color: "#333",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #d2d2d7",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  footerText: {
    fontSize: "18px",
    lineHeight: 1.33337,
    fontWeight: "600",
    letterSpacing: "-0.01em",
    color: "#333",
    marginBottom: "20px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  socialLink: {
    color: "#515154",
    textDecoration: "none",
    fontSize: "18px",
    lineHeight: 1.42859,
    fontWeight: "400",
    letterSpacing: "-0.016em",
    ":hover": {
      textDecoration: "underline",
    },
  },
  logos: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    overflow: "hidden",
    gap: 16,
  },

  logo: {
    scale: 1.2,
    transform: {
      default: "scale(0.7)",
      "@media (max-width: 400px)": "scale(0.6)",
    },
    opacity: {
      default: 0.6,
      ":hover": 1,
    },
    marginLeft: -2,
    filter: {
      default: "grayscale(95%) contrast(1.1)",
      ":hover": "grayscale(0%) contrast(1)",
    },

    transition: "opacity 120ms, filter 120ms",
  },
  image: {
    width: "auto",
    height: 400,
    borderRadius: 8,
  },
});

export const meta: MetaFunction = () => {
  return [
    { title: "There - Timezone Tracker" },
    { name: "description", content: "Track timezones across the world" },
  ];
};

export default function Index() {
  return (
    <div {...stylex.props(styles.container2)}>
      <div {...stylex.props(styles.menu)}>
        <img src="/icons/Icon.png" width={80} alt="thereLogo" />
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <img
            src="/icons/github-mark.svg"
            alt="github logo"
            {...stylex.props(styles.menuLogoItem)}
          />
          <p {...stylex.props(styles.menuItem)}>Follow on X</p>
        </div>
      </div>
      <div {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.heading)}>
            Local time of your friends, teammates or family in menubar
          </h1>
        </header>
      </div>
      <img src="/appImage.png" alt="AppImage" {...stylex.props(styles.image)} />
      <div {...stylex.props(styles.container)}>
        <section {...stylex.props(styles.trustedSection)}>
          <p {...stylex.props(styles.trustedText)}>
            Trusted by +17,000 people at top companies
          </p>
          <div {...stylex.props(styles.logos)}>
            <img
              src="/icons/apple.svg"
              width={50}
              alt="Apple logo"
              {...stylex.props(styles.logo)}
            />

            <img
              src="/icons/shopify.svg"
              alt="Shopify logo"
              {...stylex.props(styles.logo)}
            />
            <img
              src="/icons/ibm.svg"
              alt="IBM logo"
              {...stylex.props(styles.logo)}
            />
            <img
              src="/icons/zapier.svg"
              alt="Zapier logo"
              {...stylex.props(styles.logo)}
            />
            <img
              src="/icons/amazon.svg"
              alt="Amazon logo"
              {...stylex.props(styles.logo)}
              style={{ marginBottom: -4 }}
            />
            <img
              src="/icons/atlassian.svg"
              alt="Atlassian logo"
              {...stylex.props(styles.logo)}
            />
            <img
              src="/icons/dribbble.svg"
              alt="Dribbble logo"
              {...stylex.props(styles.logo)}
            />
            <img
              src="/icons/loom.svg"
              alt="Loom logo"
              width={42}
              {...stylex.props(styles.logo)}
            />

            <img
              src="/icons/zoom.svg"
              width={80}
              alt="Zoom logo"
              {...stylex.props(styles.logo)}
            />
          </div>
        </section>

        <section {...stylex.props(styles.cardsSection)}>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🌍</div>
            <h3 {...stylex.props(styles.cardTitle)}>Time Zone Addition</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Add zones by city, country, UTC offset, or abbreviation
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🖼️</div>
            <h3 {...stylex.props(styles.cardTitle)}>Photo Import</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Import images from X, Telegram, or local files
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>⏱️</div>
            <h3 {...stylex.props(styles.cardTitle)}>Time Difference</h3>
            <p {...stylex.props(styles.cardDescription)}>
              See gaps between your time and others
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>👥</div>
            <h3 {...stylex.props(styles.cardTitle)}>Track friends/places</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Add places and people with country flags
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🔒</div>
            <h3 {...stylex.props(styles.cardTitle)}>Local Data Storage</h3>
            <p {...stylex.props(styles.cardDescription)}>
              All information kept on your device
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🪶</div>
            <h3 {...stylex.props(styles.cardTitle)}>Lightweight</h3>
            <p {...stylex.props(styles.cardDescription)}>
              0-1% idle CPU usage, Ultra-low memory
            </p>
          </div>
        </section>

        <footer {...stylex.props(styles.footer)}>
          <p {...stylex.props(styles.footerText)}>
            Made with ❤️ by{" "}
            <a
              href="https://x.com/dena_sohrabi"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#FC87A0",
                margin: 4,
              }}
            >
              Dena
            </a>
            &
            <a
              href="https://x.com/morajabi"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#00A542",
                margin: 4,
              }}
            >
              Mo
            </a>
          </p>
          <div {...stylex.props(styles.socialLinks)}>
            <a
              href="https://twitter.com/there_hq"
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.socialLink)}
            >
              Follow on X
            </a>
            <a
              href="mailto:support@there.team"
              {...stylex.props(styles.socialLink)}
            >
              support@there.team
            </a>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.socialLink)}
            >
              GitHub (open source)
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
