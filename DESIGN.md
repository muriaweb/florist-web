---
name: Floral Editorial
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5b4041'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8f6f70'
  outline-variant: '#e3bdbf'
  surface-tint: '#bb0f3a'
  primary: '#95002a'
  on-primary: '#ffffff'
  primary-container: '#be123c'
  on-primary-container: '#ffd0d2'
  inverse-primary: '#ffb2b7'
  secondary: '#aa304f'
  on-secondary: '#ffffff'
  secondary-container: '#fd6f8c'
  on-secondary-container: '#6f0028'
  tertiary: '#8b1b34'
  on-tertiary: '#ffffff'
  tertiary-container: '#ab354b'
  on-tertiary-container: '#ffd0d3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b7'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#920029'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bd'
  on-secondary-fixed: '#400014'
  on-secondary-fixed-variant: '#8a1538'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#891933'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
This design system evokes the atmosphere of a high-end boutique florist—balancing the raw, organic beauty of nature with professional, editorial sophistication. The aesthetic is rooted in **Modern Minimalism** with a **Romantic Editorial** edge. It prioritizes high-quality imagery of fresh blooms, using generous whitespace to allow the floral textures and colors to serve as the primary visual interest.

The emotional response should be one of grace, freshness, and curated luxury. Transitions are soft, and the overall interface feels airy and effortless, mirroring the delicate nature of a curated bouquet.

## Colors
The palette is centered on a "Deep Rose" spectrum, symbolizing passion, quality, and the vitality of fresh petals.

- **Primary (Crimson Rose):** Used for primary actions, price points, and key brand highlights.
- **Secondary (Midnight Maroon):** Used for high-level headings and sophisticated borders to provide depth and contrast against the lighter backgrounds.
- **Tertiary (Soft Petal):** A muted pink used for subtle backgrounds, hover states, and secondary UI accents.
- **Neutral (Purity):** A foundation of Pure White (#FFFFFF) for maximum freshness, supported by Off-White (#F8F9FA) for subtle structural layering.

## Typography
The typography strategy relies on the contrast between a classic, romantic serif and a contemporary, clean sans-serif.

- **Headings:** **EB Garamond** provides a timeless, literary feel. Use it for all titles and storytelling elements. Headlines should use "Sentence case" to maintain a professional yet approachable tone.
- **Body & UI:** **Be Vietnam Pro** is used for all functional text, descriptions, and buttons. It offers exceptional legibility and a friendly, modern character that balances the formality of the serif.
- **Labels:** Use uppercase sans-serif with slight letter spacing for categories, tags, and small meta-information to create clear visual hierarchy.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on vertical rhythm and "breathing room."

- **Desktop:** 12-column grid with a 1280px maximum container width. Use wide 48px margins to frame the content like an editorial spread.
- **Mobile:** 4-column grid with 16px gutters.
- **Spacing Philosophy:** Use increments of 8px. Favor larger gaps (64px+) between major sections to emphasize the "Luxury Boutique" feel. Content should never feel crowded; if in doubt, add more whitespace.

## Elevation & Depth
Depth is created through **Ambient Shadows** and **Tonal Layering** rather than heavy borders.

- **Surfaces:** Use Off-White containers against Pure White backgrounds to define product areas without harsh lines.
- **Shadows:** Shadows should be extremely soft, using a hint of the secondary maroon color in the shadow tint (e.g., `rgba(136, 19, 55, 0.04)`) to maintain warmth.
- **Interactions:** Lift elements slightly on hover with a soft blur increase to simulate the delicate touch of handling flowers.

## Shapes
The shape language is **Rounded**, reflecting the soft curves of flower petals and organic forms.

- **Standard Radius:** 0.5rem (8px) for buttons and input fields.
- **Large Radius:** 1.5rem (24px) for product cards and featured sections to create a friendly, high-end look.
- **Images:** Floral photography should occasionally use "arch" crops or subtle organic masks to break the rigidity of the grid.

## Components
- **Buttons:** Primary buttons use a solid Crimson background with white text. Secondary buttons use a Crimson outline with a transparent background. All buttons have a subtle 0.5rem corner radius.
- **Cards:** Product cards should be borderless with a very light "Soft Petal" background tint or a soft ambient shadow. Typography inside cards should lead with the price in the sans-serif font for clarity.
- **Input Fields:** Use "floating label" styles with a simple 1px bottom border in Midnight Maroon. When focused, the border becomes 2px and transitions to Crimson.
- **Chips/Tags:** Use for flower types (e.g., "Rose," "Lily"). These should be pill-shaped with a light Pink tint and small uppercase text.
- **List Items:** Use for delivery options or flower care instructions, featuring custom floral-inspired bullet points or simple clean dividers.
- **Featured Component (Bouquet Showcase):** A large-scale carousel with high-resolution imagery, using EB Garamond for dramatic, overlapping titles.