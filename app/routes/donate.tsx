import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { Footer, Menu } from "./_index";

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
    maxWidth: "785px",
    margin: "0 auto",
    padding: "20px",
    color: "#1d1d1f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 40,
    marginBottom: 40,
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
  },
  menuItem: {
    fontSize: {
      default: "16px",
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
    color: "#1d1d1f",
    maxWidth: "600px",
    marginBottom: 14,
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#666",
  },
  donationOptions: {
    marginTop: "40px",
    width: "100%",
    marginBottom: 100,
  },
  donationMethodsTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  donationList: {
    listStyle: "none",
    padding: 0,
  },
  donationItem: {
    marginBottom: "20px",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  donationLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.2s ease",
    ":hover": {
      color: "#0366d6",
    },
  },
  cryptoAddress: {
    backgroundColor: "#F2F9FF",
    padding: "4px 8px",
    borderRadius: "4px",
    fontFamily: "monospace",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  thankYouMessage: {
    marginTop: "40px",
    fontSize: "18px",
    color: "#666",
    textAlign: "left",
    fontStyle: "italic",
  },
  coinTitle: {
    fontSize: "18px",
    fontFamily: "monospace",
    fontWeight: "bold",
    marginRight: 10,
  },
  copiedMessage: {
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: 10,
  },
  brewing: {
    color: "#333",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 2,
    marginBottom: 2,
    paddingLeft: 20,
    paddingRight: 12,
  },
  underDownload: {
    fontSize: 14,
    fontFamily: '"Reddit Mono", monospace',
    color: "#888",
    marginTop: 8,
    marginBottom: 8,
    display: "flex",
  },
  copyBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    width: 22,
  },
});

export const meta: MetaFunction = () => {
  return [
    { title: "There - Support Us" },
    {
      name: "description",
      content: "Support the development of There, a timezone tracking tool.",
    },
  ];
};

export default function Donate() {
  const [copiedBTC, setCopiedBTC] = useState(false);
  const [copiedETH, setCopiedETH] = useState(false);

  const copyToClipboard = (
    text: string,
    setCopied: (value: boolean) => void
  ) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div {...stylex.props(styles.container2)}>
      <Menu />
      <div {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.heading)}>Support There!</h1>
          <p {...stylex.props(styles.subheading)}>
            I'm Dena, the co-creator of There alongside Mo. We built There in
            our free time and have never charged for it since the first version
            was released six years ago. Currently, more than 17,000 people have
            used the app, which we never imagined! If you find the app useful,
            now you can support our efforts building it.
          </p>
        </header>
        <div {...stylex.props(styles.donationOptions)}>
          <ul {...stylex.props(styles.donationList)}>
            <li {...stylex.props(styles.donationItem)}>
              <a
                href="https://paypal.me/therehq?country.x=LV&locale.x=en_US"
                target="_blank"
                rel="noopener noreferrer"
                {...stylex.props(styles.donationLink)}
              >
                <img
                  src="/PayPal_Monogram_Full_Color_RGB.png"
                  alt="PayPal"
                  width="18"
                  height="18"
                  style={{ marginRight: "10px" }}
                />
                PayPal
              </a>
            </li>
            <li {...stylex.props(styles.donationItem)}>
              <img
                src="/bitcoin.png"
                alt="Bitcoin"
                width="18"
                height="18"
                style={{ marginRight: "10px" }}
              />
              <p {...stylex.props(styles.coinTitle)}>BTC</p>
              <div {...stylex.props(styles.underDownload, styles.brewing)}>
                <code>bc1qev92p7e7l7f0cczt0fgwjky3gl2kcttp4hznge</code>
                <button
                  {...stylex.props(styles.copyBtn)}
                  onClick={() =>
                    copyToClipboard(
                      "bc1qev92p7e7l7f0cczt0fgwjky3gl2kcttp4hznge",
                      setCopiedBTC
                    )
                  }
                >
                  {copiedBTC ? (
                    "✔️"
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            </li>
            <li {...stylex.props(styles.donationItem)}>
              <img
                src="/eth-diamond-black.a042df77.png"
                alt="ETH"
                width="16"
                height="16"
                style={{ marginRight: "10px" }}
              />
              <p {...stylex.props(styles.coinTitle)}>ETH</p>
              <div {...stylex.props(styles.underDownload, styles.brewing)}>
                <code>0xA0C944De6CF94d49ad4C0E22FBbe4064DCEB5a11</code>
                <button
                  {...stylex.props(styles.copyBtn)}
                  onClick={() =>
                    copyToClipboard(
                      "0xA0C944De6CF94d49ad4C0E22FBbe4064DCEB5a11",
                      setCopiedETH
                    )
                  }
                >
                  {copiedETH ? (
                    "✔️"
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
