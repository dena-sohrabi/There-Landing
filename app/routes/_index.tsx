import type { MetaFunction } from '@remix-run/node';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container2: {
    fontFamily:
      '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    fontFamily:
      '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    color: '#1d1d1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    // marginBottom: "60px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    height: 38,
    lineHeight: 38,
    background: {
      default: '#0070f3',
      ':hover': '#0366d6',
    },
    transition: 'background 0.15s ease-out',
    color: 'white',
    marginBottom: 12,
    marginTop: 4,
    fontSize: '16px',
    width: 240,
    fontWeight: '600',
    borderRadius: '12px',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: 30,
    marginBottom: 30,
  },
  menuItem: {
    fontSize: {
      default: '16px',
      '@media (max-width: 768px)': '14px',
    },
    color: {
      default: '#666',
      ':hover': '#333',
    },
  },
  menuLogoItem: {
    width: 22,
    height: 22,
    opacity: {
      default: 0.8,
      ':hover': 1,
    },
  },
  heading: {
    fontSize: {
      default: '36px',
      '@media (max-width: 768px)': '32px',
    },
    lineHeight: 1.1,
    fontWeight: '600',
    color: '#1d1d1f',

    maxWidth: '600px',
    marginBottom: 20,
  },

  trustedSection: {
    textAlign: 'center',
    marginTop: '32px',
  },
  trustedText: {
    fontSize: '18px',
    lineHeight: 1.381,
    fontWeight: '400',
    color: '#1d1d1f',
  },
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  companyLogo: {
    height: '30px',
    width: 'auto',
    opacity: 0.8,
  },
  cardsSection: {
    marginTop: '70px',
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, 1fr)',
      '@media (max-width: 400px)': '1fr',
    },
    gap: '16px',
    marginBottom: '100px',
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: '8px',
    padding: '18px 22px',
  },
  cardIcon: {
    fontSize: '30px',
  },
  cardTitle: {
    fontSize: '19px',
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  cardDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#555',
  },
  footer: {
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: {
      default: 'row',
      '@media (max-width: 400px)': 'column',
    },
    fontSize: '16px',
  },
  footerText: {
    color: '#666',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '18px',
  },
  socialLink: {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    gap: 16,
  },

  logo: {
    scale: 1.2,
    transform: {
      default: 'scale(0.7)',
      '@media (max-width: 400px)': 'scale(0.6)',
    },
    opacity: {
      default: 0.6,
      ':hover': 1,
    },
    marginLeft: -2,
    filter: {
      default: 'grayscale(95%) contrast(1.1)',
      ':hover': 'grayscale(0%) contrast(1)',
    },

    transition: 'opacity 120ms, filter 120ms',
  },
  image: {
    width: 'auto',
    borderRadius: 8,
  },
});

export const meta: MetaFunction = () => {
  return [
    { title: 'There - Timezones in your menubar' },
    {
      name: 'description',
      content:
        'Track local time of your friends, teammates and family. You can set photo and name and add them to your menubar.',
    },
  ];
};

export default function Index() {
  return (
    <div {...stylex.props(styles.container2)}>
      <div {...stylex.props(styles.menu)}>
        <img src="/icons/Icon.png" width={80} alt="thereLogo" />
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a {...stylex.props(styles.menuItem)} href="https://x.com/ThereHQ">
            Follow on X (Twitter)
          </a>

          <a href="https://github.com/dena-sohrabi/There">
            <img
              src="/icons/github-mark.svg"
              alt="github logo"
              {...stylex.props(styles.menuLogoItem)}
            />
          </a>
        </div>
      </div>
      <div {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.heading)}>
            Local time of your friends, teammates or family in menubar
          </h1>

          <a
            href="https://assets-cdn.noor.to/there/There.zip"
            {...stylex.props(styles.button)}
          >
            Download for macOS
          </a>
        </header>
      </div>
      <img
        src="/app.jpg"
        srcSet="/app@2x.jpg 2x"
        width="784px"
        height="522px"
        alt="Screenshot of There app with a few entries"
        {...stylex.props(styles.image)}
      />

      <div {...stylex.props(styles.container)}>
        <section {...stylex.props(styles.trustedSection)}>
          <p {...stylex.props(styles.trustedText)}>
            Used by +17,000 people including people from companies like:
          </p>
          <div {...stylex.props(styles.logos)}>
            <img
              src="/icons/apple.svg"
              width={38}
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
            <h3 {...stylex.props(styles.cardTitle)}>Easy to use</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Add time zones by city, country, abbrs like PST, or UTC offsets
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>👥</div>
            <h3 {...stylex.props(styles.cardTitle)}>People, not time zones</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Set their name and photo by entering their X or Telegram handle.
              Or pick a photo locally.
            </p>
          </div>

          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🔒</div>
            <h3 {...stylex.props(styles.cardTitle)}>Local data storage</h3>
            <p {...stylex.props(styles.cardDescription)}>
              All information kept on your device
            </p>
          </div>
          <div {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardIcon)}>🪶</div>
            <h3 {...stylex.props(styles.cardTitle)}>Lightweight</h3>
            <p {...stylex.props(styles.cardDescription)}>
              Native, ultra low resource usage, keep it running all the time.
            </p>
          </div>
        </section>

        <footer {...stylex.props(styles.footer)}>
          <p {...stylex.props(styles.footerText)}>
            Made by{' '}
            <a
              href="https://x.com/dena_sohrabi"
              target="_blank"
              rel="noreferrer"
            >
              Dena Sohrabi
            </a>{' '}
            and{' '}
            <a href="https://x.com/morajabi" target="_blank" rel="noreferrer">
              Mo Rajabi
            </a>
          </p>
          <div {...stylex.props(styles.socialLinks)}>
            <a href="mailto:hey@there.pm" {...stylex.props(styles.socialLink)}>
              hey@there.pm
            </a>
            <a
              href="https://x.com/ThereHQ"
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.socialLink)}
            >
              Follow on X
            </a>

            <a
              href="https://github.com/dena-sohrabi/There"
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.socialLink)}
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
