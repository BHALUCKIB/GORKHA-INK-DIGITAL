---
name: Gorkha Ink Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f87'
  primary: '#001835'
  on-primary: '#ffffff'
  primary-container: '#0f2d52'
  on-primary-container: '#7b95c0'
  inverse-primary: '#adc8f5'
  secondary: '#5b5d74'
  on-secondary: '#ffffff'
  secondary-container: '#dbdaf7'
  on-secondary-container: '#5e5f77'
  tertiary: '#131143'
  on-tertiary: '#ffffff'
  tertiary-container: '#282759'
  on-tertiary-container: '#908fc7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#adc8f5'
  on-primary-fixed: '#001b3b'
  on-primary-fixed-variant: '#2d476e'
  secondary-fixed: '#e0e0fc'
  secondary-fixed-dim: '#c4c4e0'
  on-secondary-fixed: '#181a2e'
  on-secondary-fixed-variant: '#44455c'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c1fd'
  on-tertiary-fixed: '#161446'
  on-tertiary-fixed-variant: '#424174'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  paper-white: '#F9F9FB'
  ink-black: '#0A0A0A'
  lavender-tint: '#EBEBFF'
typography:
  display-lg:
    fontFamily: Chivo
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-md:
    fontFamily: Chivo
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Source Serif 4
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

The design system is rooted in the "Modern Editorial" style—a digital extension of high-end independent print magazines. It bridges the gap between traditional Gorkha heritage and contemporary cultural commentary. 

The brand personality is **authoritative yet intimate, sophisticated, and deeply grounded.** It avoids the frantic pace of typical digital news, opting instead for a pace that encourages "slow reading" and deep reflection. 

Visual themes emphasize:
- **Stark Contrast:** Utilizing black-and-white photography to ground the lavender and blue accents.
- **Intentional Whitespace:** Generous margins to allow "Gorkha voices" room to breathe.
- **Cultural Texture:** Subtly referencing ink-on-paper through fine lines and carefully chosen serif weights.

## Colors

This color palette is derived directly from the physical "Pilot Issue" covers. 

- **Primary (Deep Blue):** Represents the "Ink" in the title. Used for high-level branding, heavy headings, and primary navigation elements.
- **Secondary (Lavender):** Used as a foundational background tint for cards or section headers to differentiate content blocks without losing the editorial feel.
- **Tertiary (Muted Purple-Blue):** Reserved for supporting accents, metadata, and secondary interactive states.
- **Neutral:** A range of high-contrast blacks and off-whites. Pure black is reserved for typography on white backgrounds, while "Paper White" provides a softer, more sophisticated canvas than default #FFFFFF.

## Typography

The typography system uses a high-contrast pairing to distinguish between the "Voice" (Headlines) and the "Story" (Body).

- **Headlines (Chivo):** A bold, high-impact sans-serif that echoes the urgency and strength of Gorkha representation. Heavy weights (700-900) should be used for article titles and category labels.
- **Body (Source Serif 4):** A professional, highly legible serif optimized for long-form reading. It provides the "literary" feel necessary for an editorial publication.
- **Labels:** Use uppercase Chivo with increased letter spacing for metadata (dates, authors, volume numbers) to mimic the aesthetic of print magazine mastheads.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for desktop to maintain the "columnar" feel of a magazine.

- **The 12-Column Grid:** On desktop, content is housed within a 1200px container. Editorial features often span 8 columns (centered) to provide optimal line lengths for the serif body text.
- **Vertical Rhythm:** A strict "Stack" scale is used to separate content. Large gaps (stack-xl) are encouraged between major sections to emphasize documentation and curated pacing.
- **Responsive Behavior:** 
    - **Desktop:** 12 columns / 64px margins.
    - **Tablet:** 8 columns / 32px margins.
    - **Mobile:** 4 columns / 20px margins. Headlines scale down to mobile-specific tokens to ensure readability.

## Elevation & Depth

To maintain a sophisticated editorial feel, this design system **avoids heavy drop shadows.** Instead, hierarchy is created through:

- **Tonal Layering:** Using the "Lavender Tint" or "Secondary" color to lift content blocks off the primary "Paper White" background.
- **Sharp Rule Lines:** 1px solid borders in Primary or Ink Black colors are used to separate sections, mimicking the layout of a newspaper or print journal.
- **Negative Space:** Content is "elevated" by the amount of white space surrounding it. The more important the voice, the more padding it receives.
- **In-Set Depth:** For interactive elements like input fields, a subtle 1px inset border can be used, but surface-level shadows should be avoided.

## Shapes

The shape language is **Sharp (0)**. 

To reflect the mission of "documentation" and the physical nature of a printed magazine, all containers, buttons, and image frames must have 0px border radii. This creates a structured, architectural feel that communicates seriousness and permanence. 

Images should never be rounded; they should appear as "plates" or "cuts" within the text.

## Components

### Buttons
Buttons are high-contrast rectangles. 
- **Primary:** Solid Ink Black or Deep Blue with Paper White text. No rounding.
- **Secondary:** Transparent background with a 2px solid Primary border.
- **Text:** Always Chivo Bold, Uppercase.

### Cards
Editorial cards use "Secondary" lavender backgrounds. They should not have shadows. Use 1px rule lines to separate the image from the headline if they are stacked.

### Input Fields
Strictly rectangular with a 1px "Ink Black" border. Use Chivo for labels and Source Serif for the input text itself.

### Chips / Tags
Used for categories (e.g., "Culture", "Poetry"). These should be small, sharp-edged boxes with a light lavender fill and deep blue text.

### Image Treatment
All imagery should be black and white where possible, or high-contrast color. They are always contained in sharp-edged frames. Captions are placed directly beneath in the "Caption" typography style, often preceded by a 1px horizontal line.