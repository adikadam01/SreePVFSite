# Image manifest — homepage (`index.html`)

No WordPress backup or manual image export has been supplied yet, so every image/background slot on
the homepage currently renders `images/placeholder.svg` (content images) or the `.bg-placeholder` CSS
pattern (background-image slots), tagged with a `data-image-slot` key. This table maps each key back to
its best-identified original asset on **https://sreepvf.org/**, so real files can be dropped in later
without re-auditing the page.

**Confidence key:** ✅ confirmed via direct DOM inspection · ⚠️ best-effort match, verify before use.

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `header-logo` | Top bar logo | `/wp-content/uploads/2023/03/Logo-1.png` (500×500, displayed 80×80) | `sreepvf-logo.png` | ✅ |
| `hero-slide-biomedical-bg` | Hero slide 1 background | `/wp-content/uploads/2023/03/Image20230311171137-1.jpg` (1400×809) | `hero-biomedical-sciences.jpg` | ✅ |
| `hero-slide-agricultural-bg` | Hero slide 2 background | `/wp-content/uploads/2023/03/Image20230314100759.jpg` (1400×809) | `hero-agricultural-sciences.jpg` | ✅ |
| `about-collage-back` | About Us — back image (soil/seedling) | `/wp-content/uploads/2023/03/agriculture-blog-1-vp.webp` | `about-soil-seedling.webp` | ⚠️ lazy-loaded src captured before real image swap-in; re-check on live page |
| `about-collage-front` | About Us — front image (lab/petri dishes) | not captured distinctly from `about-collage-back` (see note above) | `about-lab-petri-dish.webp` | ⚠️ verify against live page |
| `grant-icon-biomedical` | "Biomedical Sciences" focus-area card icon | `/wp-content/uploads/2023/03/Image20230309114519.png` (212×202) | `icon-biomedical-sciences.png` | ✅ |
| `grant-icon-agricultural` | "Agricultural Sciences" focus-area card icon | `/wp-content/uploads/2023/03/Image20230309114532.png` (219×162) | `icon-agricultural-sciences.png` | ✅ |
| `stats-icon-grants` | "₹23cr+ In Grants awarded" icon | not captured (small inline icon-box asset) | `icon-stat-grants.png` | ⚠️ verify against live page |
| `stats-icon-applications` | "1330+ Applications received" icon | not captured | `icon-stat-applications.png` | ⚠️ verify against live page |
| `stats-icon-institutes` | "500+ Applicant institutes" icon | not captured | `icon-stat-institutes.png` | ⚠️ verify against live page |
| `video-thumbnail` | "Science with Purpose" video | YouTube embed, title "Chadalawada's Biography English" | — (embed, not a static image) | ⚠️ replace the placeholder with the real `<iframe>` embed once the video ID is confirmed |
| `mission-photo` | "Our Mission at SreePVF" | `/wp-content/uploads/2023/03/Screenshot-2023-03-03-145714.remini-enhanced.jpg` | `mission-community-photo.jpg` | ✅ |
| `founders-photo` | "Meet the Founders" | `/wp-content/uploads/2023/03/Image20230309121004.png` | `founders-photo.png` | ⚠️ two similar candidates on the page (also `SreePVF-1024x1024.png`); verify |
| `testimonial-avatar-1` through `testimonial-avatar-5` | Decorative avatar cluster beside the testimonial carousel | not captured — the five circular photos are a decorative composition, not 1:1 tied to carousel slide index | `testimonial-avatar-1.jpg` … `5.jpg` | ⚠️ verify against live page (people are, in slide order: Dr Ramesh V Sonti, Prof. L S Shashidhara, Prof. D Balasubramanian, Dr. Chadalawada Sudha, Dr. Chadalawada Nageswara Rao) |
| `event-card-1-image` | Upcoming Events slide 1 | `/wp-content/uploads/2025/09/YSR-Award-Photograph.jpeg` (1080×1350) | `event-ysr-memorial-award.jpeg` | ✅ |
| `event-card-2-image`, `event-card-3-image`, `event-card-4-image` | Upcoming Events slides 2–4 | `/wp-content/uploads/2023/03/Image20230406125903.png` (688×443, same file on all three) | `event-research-award-ceremony-2023.png` | ✅ |
| `news-card-1-image` | "Translation Accelerator – Day 2 Plenary" | `/wp-content/uploads/2026/09/day-2-plenary-6aa1123b702fa-212x300.webp` | `news-translation-accelerator-day2.webp` | ✅ |
| `news-card-2-image` | "Translation Accelerator – Day 1 Plenary" | `/wp-content/uploads/2026/09/day-1-plenary-6aa1121e01d16-212x300.webp` | `news-translation-accelerator-day1.webp` | ✅ |
| `news-card-3-image` | Prof. Sachin Mandavgane / P. K. Bose award | `/wp-content/uploads/2026/09/sachin-pk-bose-memorial-award-6a96a632aec7f-212x300.webp` | `news-pk-bose-award-2025.webp` | ✅ |
| `news-card-4-image` | Dr. Shahid Rasool / The Hindu feature | `/wp-content/uploads/2026/04/shahid-rasool-thumbnail-69e8611df396a-300x300.webp` | `news-shahid-rasool-hindu.webp` | ✅ |
| `science-advisor-photo` | Professor LS Shashidhara | `/wp-content/uploads/2023/03/LS1-scaled.jpg` | `professor-ls-shashidhara.jpg` | ✅ |
| `board-director-1-photo` | Dr Prasad G Kilaru, MD | `/wp-content/uploads/2020/10/Image20230304180416.png` | `dr-prasad-g-kilaru.png` | ⚠️ order vs. director 2 unconfirmed |
| `board-director-2-photo` | Mr Pinnamaneni Trivikrama Prasad | `/wp-content/uploads/2020/10/Image20230304180645.png` | `pinnamaneni-trivikrama-prasad.png` | ⚠️ order vs. director 1 unconfirmed |

## How to replace a placeholder

1. Save the real file into `images/` using the recommended filename above (or your own — just keep it
   kebab-case and descriptive, per WEBSITE-STANDARDS.md §4).
2. Find the element by its `data-image-slot` value in `index.html`.
3. For a content `<img>`: change `src="images/placeholder.svg"` to the new path and remove the
   `img-placeholder` class.
4. For a background slot (`.bg-placeholder`, e.g. the two hero slides and the video frame): remove the
   `bg-placeholder` class and `data-placeholder-label` attribute, and add an inline
   `style="background-image:url('images/your-file.jpg'); background-size:cover; background-position:center;"`
   (or move the rule into `css/pages/index.css`).
5. Delete that row from this manifest once it's done, so the file always reflects what's still
   outstanding.
