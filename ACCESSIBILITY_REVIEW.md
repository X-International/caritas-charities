# Accessibility Review

## Overall rating: Good

The site has strong foundations: semantic landmarks, a skip link, labelled forms, keyboard-visible focus styles, `aria-current` navigation state, live form/carousel feedback, and accessible button-based controls. The main gaps were custom widget behavior, especially focus containment and recovery for mobile navigation and dialogs.

## Fixes implemented

- Added focus management, Tab trapping, Escape handling, and focus restoration to the video dialog.
- Added focus containment and initial focus to the mobile navigation drawer; marked it as a modal dialog.
- Replaced the search backdrop click-only `div` with an accessible close button.
- Added correct tab/tabpanel IDs and relationships to the vision/mission/values control.
- Added route-level loading, error, global error, and not-found experiences with keyboard-accessible recovery actions.
- Added a graceful keyboard-accessible Google Maps fallback when Mapbox is unavailable.
- Preserved form values and announced specific provider/timeout/rate-limit errors through the live status region.

## Remaining recommendations

1. Run automated axe or Lighthouse accessibility checks in CI across `/`, `/contact-us`, `/donate`, `/resources/news`, and `/resources/gallery`.
2. Test with NVDA/JAWS on Windows and VoiceOver on macOS/iOS; automated checks cannot validate announcement quality or reading order fully.
3. Keep color contrast checks in the design-token review, especially muted gray text over beige backgrounds and inactive carousel controls.
4. If the unused Spotlight and identity widgets become user-facing, add automated keyboard tests for their tab navigation and video dialog before release.

## Verification

- Production build passes.
- ESLint, TypeScript, and diff checks pass.
- Mobile drawer focus stays inside the drawer while tabbing.
- Share dialog focus enters the dialog, Escape closes it, and focus returns to its trigger.
- Contact failure status is announced and entered form data is preserved.
