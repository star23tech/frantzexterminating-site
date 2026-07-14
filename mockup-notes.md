# Frantz Exterminating mockup notes

Template used: emergency-service lane adapted with reputation-rescue/direct-local restraint. Pest control can be urgent, but no 24/7 or same-day emergency claims were verified, so the page uses fast-call structure without unsupported emergency promises.

Verified public sources accessed July 14, 2026:
- http://frantzext.com/ home page
- http://www.frantzext.com/pest-control
- http://www.frantzext.com/residential-services
- http://www.frantzext.com/commercial-services
- http://www.frantzext.com/termite-control
- http://www.frantzext.com/real-estate-inspection
- http://www.frantzext.com/other-services
- http://www.frantzext.com/contact

Source limitation / current defect:
- The home page returned HTTP 415 Unsupported Media Type headers to curl while still returning HTML content.
- The original site loads many assets over http:// URLs and uses an older copyright line.

Placeholders / assumptions:
- Logo image could not be downloaded as an image by curl; the page uses an honest initials placeholder instead of a fake logo.
- Hero image is a labeled placeholder; no AI images or fake project photos were used.
- The demo form is disabled and visual-only.
- No pricing, fake testimonials, fake reviews, fake badges, or unsupported emergency availability claims were added.
