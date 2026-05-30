---
name: ElevestOS
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered for infrastructure-grade stability, catering to NGOs and funders who manage critical global initiatives. The brand personality is **Institutional, Serious, and Professional**, evoking the same level of trust as a central bank or an international treaty organization.

The aesthetic follows a **Modern Corporate** direction with a focus on **Information Density**. It prioritizes clarity and high-contrast legibility over decorative trends. Every UI element is designed to feel "bolted down" and reliable, utilizing intentional whitespace and structured grids to prevent cognitive overload in data-heavy environments. The emotional response should be one of complete confidence and administrative calm.

## Colors
The palette is anchored by **Deep Navy Trust Blue**, used for core navigational elements and primary headers to establish authority. **Trust Green** serves as the sole signal color, reserved strictly for success states, progress indicators, and primary "action" growth vectors.

- **Surface Strategy:** Use white (#FFFFFF) for the main content areas to maximize contrast. Use the neutral light gray (#F8FAFC) for background "wells" or sidebars to differentiate the workspace from the content.
- **Accents:** Use a slate-colored tertiary (#64748B) for secondary information, such as metadata and labels, to maintain a clear visual hierarchy without the harshness of pure black.
- **Accessibility:** All text-on-background combinations must meet WCAG AA standards. Ensure the Deep Navy is used for large text and the Green is used strategically for interactive elements.

## Typography
This design system utilizes **Inter** as the primary typeface for its exceptional legibility in dense data tables and complex dashboards. For technical metadata, ID numbers, and financial figures, **JetBrains Mono** is employed as the label font to provide a distinct, monospaced clarity that prevents character confusion.

- **Scale:** High contrast in weights (from 400 to 700) is used to guide the eye through deep hierarchies. 
- **Readability:** Line heights are strictly maintained to ensure that even at high information densities, the text remains "breathable." 
- **Monospaced Accents:** Use the `label-md` role for table headers and system statuses to give the interface a precise, "utility" feel.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Sidebars and navigation panels are fixed widths to ensure consistent tool access, while the central workspace is fluid to accommodate wide data tables and Gantt charts.

- **Grid:** A 12-column grid is used for desktop (1440px+), transitioning to an 8-column grid for tablets, and a 4-column grid for mobile.
- **Rhythm:** An 8px linear scale is the primary driver for spacing. For compact data views, use the 4px (xs) increment for internal component padding.
- **Margins:** Large 40px external margins on desktop provide the "institutional" breathing room required for high-stakes financial reporting.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than aggressive shadows. This ensures the UI remains flat enough for high-speed data processing while still indicating hierarchy.

- **Planes:** The base background is the lowest level. Content cards sit one level above, defined by a 1px border (#E2E8F0).
- **Shadows:** Use a single, subtle "Ambient Shadow" for floating modals or dropdowns (0px 4px 12px rgba(10, 25, 47, 0.08)).
- **Interactions:** Hover states should involve a subtle shift in background color (e.g., from White to #F1F5F9) rather than an increase in elevation.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that softens the "institutional" edge of the Deep Navy color without making the system feel too casual or consumer-focused. 

- **Components:** Standard buttons, input fields, and tags use the base 4px radius.
- **Containers:** Larger modules, such as cards or dashboard widgets, use `rounded-lg` (8px) to frame content effectively. 
- **Strictness:** Avoid pill-shaped elements; maintain the rectangular integrity of the grid to emphasize stability.

## Components
- **Buttons:** Primary buttons use Deep Navy (#0A192F) with white text. Success actions use Trust Green (#10B981). Secondary buttons use a 1px border with no fill.
- **Inputs:** Form fields must have a clear 1px border. Focus states use a 2px Deep Navy ring with a 2px offset.
- **Data Tables:** These are the core of the system. Use zebra-striping (alternating #F8FAFC and #FFFFFF) and a 1px horizontal-only border. Headers should use the `label-md` monospaced font.
- **Status Chips:** Small, rectangular badges with a subtle background tint and dark text (e.g., Green tint with dark Green text for "Approved").
- **Cards:** Use cards to group logical data sets. Cards should have a white background, a 1px border (#E2E8F0), and no shadow unless they are the primary focus of a workspace.
- **Progress Indicators:** Use the Trust Green (#10B981) for all linear and circular progress bars to signify "movement toward the goal."