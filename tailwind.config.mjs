/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline": "#8f6f70",
        "primary": "#95002a",
        "on-primary-fixed-variant": "#920029",
        "surface-variant": "#e1e3e4",
        "background": "#f8f9fa",
        "error": "#ba1a1a",
        "primary-container": "#be123c",
        "secondary-container": "#fd6f8c",
        "error-container": "#ffdad6",
        "tertiary-container": "#ab354b",
        "on-secondary-fixed-variant": "#8a1538",
        "primary-fixed-dim": "#ffb2b7",
        "surface-container": "#edeeef",
        "tertiary-fixed": "#ffdadc",
        "on-error-container": "#93000a",
        "secondary-fixed": "#ffd9dd",
        "on-secondary": "#ffffff",
        "on-background": "#191c1d",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "tertiary-fixed-dim": "#ffb2b9",
        "surface-bright": "#f8f9fa",
        "secondary": "#aa304f",
        "surface-container-high": "#e7e8e9",
        "on-tertiary-fixed-variant": "#891933",
        "on-tertiary": "#ffffff",
        "surface-tint": "#bb0f3a",
        "surface-container-highest": "#e1e3e4",
        "on-secondary-container": "#6f0028",
        "inverse-primary": "#ffb2b7",
        "primary-fixed": "#ffdadb",
        "on-secondary-fixed": "#400014",
        "on-surface": "#191c1d",
        "on-primary-container": "#ffd0d2",
        "surface-dim": "#d9dadb",
        "on-surface-variant": "#5b4041",
        "tertiary": "#8b1b34",
        "inverse-on-surface": "#f0f1f2",
        "on-tertiary-fixed": "#400010",
        "surface": "#f8f9fa",
        "on-error": "#ffffff",
        "outline-variant": "#e3bdbf",
        "on-tertiary-container": "#ffd0d3",
        "on-primary-fixed": "#40000d",
        "inverse-surface": "#2e3132",
        "secondary-fixed-dim": "#ffb2bd",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "gutter": "24px",
        "container-max": "1280px",
        "unit": "8px"
      },
      fontFamily: {
        "body-lg": ["Be Vietnam Pro"],
        "body-md": ["Be Vietnam Pro"],
        "headline-sm": ["EB Garamond"],
        "headline-lg": ["EB Garamond"],
        "headline-lg-mobile": ["EB Garamond"],
        "display-lg": ["EB Garamond"],
        "headline-md": ["EB Garamond"],
        "label-md": ["Be Vietnam Pro"]
      },
      fontSize: {
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-sm": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
        "headline-lg": ["48px", {"lineHeight": "1.2", "fontWeight": "500"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "500"}],
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "500"}],
        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}]
      }
    }
  }
}
