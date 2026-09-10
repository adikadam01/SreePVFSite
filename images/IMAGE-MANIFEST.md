# Image manifest — homepage (`index.html`)

> This file also covers the About/Founders/Media/Contact pages — see the
> [second table](#image-manifest--about--founders--media--contact-us-pages) below.

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

## Image manifest — About / Founders / Media / Contact Us pages

Same placeholder scheme as above (`images/placeholder.svg` + `data-image-slot`), for
`about-us.html`, `founders.html`, `videos.html`, `picture-gallery.html`, and `contact-us.html`.

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `subpage-hero-bg` | Page hero banner background — shared by all five pages below (and reused by the Research/Grants/Awards pages) | `/wp-content/uploads/2023/03/Banner-Images.jpg` | `subpage-hero-banner.jpg` | ✅ |
| `honoree-01-photo` … `honoree-28-photo` | About Us — honoree carousel (28 slides, Dr. Pinnamaneni and Smt. Seethadevi Foundation awardees 1989–2013+) | Each slide has its own source image on the live nivo-slider widget (`Image2023...` filenames); not individually captured — 28 distinct portraits | `honoree-01-photo.jpg` … `honoree-28-photo.jpg` | ⚠️ verify each against the live slideshow before use |
| `founder-sudha-photo` | Founders — Dr Chadalawada Sudha portrait | not captured distinctly (page has several similar candidate images) | `founder-sudha-photo.jpg` | ⚠️ verify against live page |
| `founder-sudha-memberships-logos` | Founders — Dr Sudha "Memberships in prestigious associations" logo row | live section renders with no visible content/images captured | `founder-sudha-memberships-logos.png` | ⚠️ live content not confirmed — re-check page before filling in |
| `founder-nageswara-rao-photo` | Founders — Dr. Chadalawada Nageswara Rao portrait | not captured distinctly (page has several similar candidate images) | `founder-nageswara-rao-photo.jpg` | ⚠️ verify against live page |
| `founder-nageswara-rao-memberships-logos` | Founders — Dr. Rao "Memberships in prestigious associations" logo row | live section renders with no visible content/images captured | `founder-nageswara-rao-memberships-logos.png` | ⚠️ live content not confirmed — re-check page before filling in |
| `contact-icon-address` | Contact Us — "Address" info card icon | not captured (small inline icon asset) | `icon-contact-address.png` | ⚠️ verify against live page |
| `contact-icon-call` | Contact Us — "Call Us" info card icon | not captured (small inline icon asset) | `icon-contact-call.png` | ⚠️ verify against live page |
| `contact-icon-queries` | Contact Us — "Queries" info card icon | not captured (small inline icon asset) | `icon-contact-queries.png` | ⚠️ verify against live page |
| `gallery-photo-001` … `gallery-photo-095` | Picture Gallery — full photo grid (95 distinct photos; see individual rows below) | see individual rows | `gallery-photo-001.ext` … `gallery-photo-095.ext` | see individual rows |

**Videos page note:** `videos.html` embeds the live site's real YouTube videos directly (published
third-party content, not a missing media asset — see WEBSITE-STANDARDS.md placeholder policy scope).
IDs used: `LXOGvRZtKWM` (Sree Padmavathi Venkateswara Foundation), `ONrb17fjAEQ` (Sree Ramakrishna
Translational Research Grant), `Tlxr5GTE4m0` (AI pest modeling), `n85yEGvbfAc` (post-harvest tech),
`iDOvJJPBKO8` (edible coating tech). No manifest entries needed for these.

**Picture Gallery — individual photo rows:**

The live gallery renders these 95 photos (a WordPress infinite-loop slider clones a few items at
the wrap boundary; duplicates have been removed here — verify actual gallery photo count/order
against the live page before dropping in real files, since re-ordering may have occurred since this
was captured).

<details>
<summary>Expand all 95 rows</summary>

| `data-image-slot` | Where it is | Original source (sreepvf.org) | Recommended filename | Confidence |
|---|---|---|---|---|
| `gallery-photo-001` | Picture Gallery grid, photo 1 | `/wp-content/uploads/2023/03/1-e1680783483489-400x270.png` | `gallery-photo-001.png` | ✅ |
| `gallery-photo-002` | Picture Gallery grid, photo 2 | `/wp-content/uploads/2023/03/10-400x270.png` | `gallery-photo-002.png` | ✅ |
| `gallery-photo-003` | Picture Gallery grid, photo 3 | `/wp-content/uploads/2023/03/2-e1680783467280-400x270.png` | `gallery-photo-003.png` | ✅ |
| `gallery-photo-004` | Picture Gallery grid, photo 4 | `/wp-content/uploads/2023/03/3-e1680783444964-400x270.png` | `gallery-photo-004.png` | ✅ |
| `gallery-photo-005` | Picture Gallery grid, photo 5 | `/wp-content/uploads/2023/03/4-e1680783430509-400x270.png` | `gallery-photo-005.png` | ✅ |
| `gallery-photo-006` | Picture Gallery grid, photo 6 | `/wp-content/uploads/2023/03/5-e1680783414707-400x270.png` | `gallery-photo-006.png` | ✅ |
| `gallery-photo-007` | Picture Gallery grid, photo 7 | `/wp-content/uploads/2023/03/6-e1680783397608-400x270.png` | `gallery-photo-007.png` | ✅ |
| `gallery-photo-008` | Picture Gallery grid, photo 8 | `/wp-content/uploads/2023/03/7-e1680783375433-400x270.png` | `gallery-photo-008.png` | ✅ |
| `gallery-photo-009` | Picture Gallery grid, photo 9 | `/wp-content/uploads/2023/03/8-e1680783317485-400x270.png` | `gallery-photo-009.png` | ✅ |
| `gallery-photo-010` | Picture Gallery grid, photo 10 | `/wp-content/uploads/2023/03/9-e1680783204121-400x270.png` | `gallery-photo-010.png` | ✅ |
| `gallery-photo-011` | Picture Gallery grid, photo 11 | `/wp-content/uploads/2023/03/A-1-e1680783540415-400x270.png` | `gallery-photo-011.png` | ✅ |
| `gallery-photo-012` | Picture Gallery grid, photo 12 | `/wp-content/uploads/2023/03/A-e1680783635426-400x270.png` | `gallery-photo-012.png` | ✅ |
| `gallery-photo-013` | Picture Gallery grid, photo 13 | `/wp-content/uploads/2023/03/APJ1-e1680783501910-400x270.png` | `gallery-photo-013.png` | ✅ |
| `gallery-photo-014` | Picture Gallery grid, photo 14 | `/wp-content/uploads/2023/03/B-e1680783619108-400x270.png` | `gallery-photo-014.png` | ✅ |
| `gallery-photo-015` | Picture Gallery grid, photo 15 | `/wp-content/uploads/2023/03/C-e1680783603836-400x270.png` | `gallery-photo-015.png` | ✅ |
| `gallery-photo-016` | Picture Gallery grid, photo 16 | `/wp-content/uploads/2023/03/D-1-e1680783567397-400x270.png` | `gallery-photo-016.png` | ✅ |
| `gallery-photo-017` | Picture Gallery grid, photo 17 | `/wp-content/uploads/2023/03/D-e1680783588818-400x270.png` | `gallery-photo-017.png` | ✅ |
| `gallery-photo-018` | Picture Gallery grid, photo 18 | `/wp-content/uploads/2023/03/WhatsApp-Image-2021-07-09-at-12.17.53-PM-1-e1680783657373-400x270.jpeg` | `gallery-photo-018.jpeg` | ✅ |
| `gallery-photo-019` | Picture Gallery grid, photo 19 | `/wp-content/uploads/2023/04/image20230407112030.webp` | `gallery-photo-019.webp` | ✅ |
| `gallery-photo-020` | Picture Gallery grid, photo 20 | `/wp-content/uploads/2023/04/img-20230403-wa0013.webp` | `gallery-photo-020.webp` | ✅ |
| `gallery-photo-021` | Picture Gallery grid, photo 21 | `/wp-content/uploads/2023/04/img-20230403-wa0015.webp` | `gallery-photo-021.webp` | ✅ |
| `gallery-photo-022` | Picture Gallery grid, photo 22 | `/wp-content/uploads/2023/04/img-20230403-wa0016.webp` | `gallery-photo-022.webp` | ✅ |
| `gallery-photo-023` | Picture Gallery grid, photo 23 | `/wp-content/uploads/2023/04/img-20230403-wa0017.webp` | `gallery-photo-023.webp` | ✅ |
| `gallery-photo-024` | Picture Gallery grid, photo 24 | `/wp-content/uploads/2023/04/img-20230403-wa0018.webp` | `gallery-photo-024.webp` | ✅ |
| `gallery-photo-025` | Picture Gallery grid, photo 25 | `/wp-content/uploads/2023/04/img-20230403-wa0019.webp` | `gallery-photo-025.webp` | ✅ |
| `gallery-photo-026` | Picture Gallery grid, photo 26 | `/wp-content/uploads/2023/04/img-20230403-wa0020.webp` | `gallery-photo-026.webp` | ✅ |
| `gallery-photo-027` | Picture Gallery grid, photo 27 | `/wp-content/uploads/2023/04/img-20230403-wa0021.webp` | `gallery-photo-027.webp` | ✅ |
| `gallery-photo-028` | Picture Gallery grid, photo 28 | `/wp-content/uploads/2023/04/img-20230403-wa0022.webp` | `gallery-photo-028.webp` | ✅ |
| `gallery-photo-029` | Picture Gallery grid, photo 29 | `/wp-content/uploads/2023/04/img-20230403-wa0023.webp` | `gallery-photo-029.webp` | ✅ |
| `gallery-photo-030` | Picture Gallery grid, photo 30 | `/wp-content/uploads/2023/04/img-20230403-wa0024.webp` | `gallery-photo-030.webp` | ✅ |
| `gallery-photo-031` | Picture Gallery grid, photo 31 | `/wp-content/uploads/2023/04/img-20230403-wa0025.webp` | `gallery-photo-031.webp` | ✅ |
| `gallery-photo-032` | Picture Gallery grid, photo 32 | `/wp-content/uploads/2023/04/img-20230403-wa0026.webp` | `gallery-photo-032.webp` | ✅ |
| `gallery-photo-033` | Picture Gallery grid, photo 33 | `/wp-content/uploads/2023/04/img-20230403-wa0027.webp` | `gallery-photo-033.webp` | ✅ |
| `gallery-photo-034` | Picture Gallery grid, photo 34 | `/wp-content/uploads/2023/04/img-20230403-wa0028.webp` | `gallery-photo-034.webp` | ✅ |
| `gallery-photo-035` | Picture Gallery grid, photo 35 | `/wp-content/uploads/2023/04/img-20230403-wa0029.webp` | `gallery-photo-035.webp` | ✅ |
| `gallery-photo-036` | Picture Gallery grid, photo 36 | `/wp-content/uploads/2023/04/img-20230403-wa0030.webp` | `gallery-photo-036.webp` | ✅ |
| `gallery-photo-037` | Picture Gallery grid, photo 37 | `/wp-content/uploads/2023/04/img-20230403-wa0031.webp` | `gallery-photo-037.webp` | ✅ |
| `gallery-photo-038` | Picture Gallery grid, photo 38 | `/wp-content/uploads/2023/04/img-20230403-wa0032.webp` | `gallery-photo-038.webp` | ✅ |
| `gallery-photo-039` | Picture Gallery grid, photo 39 | `/wp-content/uploads/2023/04/img-20230403-wa0033.webp` | `gallery-photo-039.webp` | ✅ |
| `gallery-photo-040` | Picture Gallery grid, photo 40 | `/wp-content/uploads/2023/04/img-20230403-wa0034.webp` | `gallery-photo-040.webp` | ✅ |
| `gallery-photo-041` | Picture Gallery grid, photo 41 | `/wp-content/uploads/2023/04/img-20230403-wa0035.webp` | `gallery-photo-041.webp` | ✅ |
| `gallery-photo-042` | Picture Gallery grid, photo 42 | `/wp-content/uploads/2023/04/img-20230403-wa0036.webp` | `gallery-photo-042.webp` | ✅ |
| `gallery-photo-043` | Picture Gallery grid, photo 43 | `/wp-content/uploads/2023/04/img-20230403-wa0038.webp` | `gallery-photo-043.webp` | ✅ |
| `gallery-photo-044` | Picture Gallery grid, photo 44 | `/wp-content/uploads/2023/04/img-20230403-wa0040.webp` | `gallery-photo-044.webp` | ✅ |
| `gallery-photo-045` | Picture Gallery grid, photo 45 | `/wp-content/uploads/2023/04/img-20230403-wa0041.webp` | `gallery-photo-045.webp` | ✅ |
| `gallery-photo-046` | Picture Gallery grid, photo 46 | `/wp-content/uploads/2023/04/img-20230403-wa0042.webp` | `gallery-photo-046.webp` | ✅ |
| `gallery-photo-047` | Picture Gallery grid, photo 47 | `/wp-content/uploads/2023/04/img-20230403-wa0043.webp` | `gallery-photo-047.webp` | ✅ |
| `gallery-photo-048` | Picture Gallery grid, photo 48 | `/wp-content/uploads/2023/04/img-20230403-wa0044.webp` | `gallery-photo-048.webp` | ✅ |
| `gallery-photo-049` | Picture Gallery grid, photo 49 | `/wp-content/uploads/2023/04/img-20230403-wa0045.webp` | `gallery-photo-049.webp` | ✅ |
| `gallery-photo-050` | Picture Gallery grid, photo 50 | `/wp-content/uploads/2023/04/img-20230403-wa0046.webp` | `gallery-photo-050.webp` | ✅ |
| `gallery-photo-051` | Picture Gallery grid, photo 51 | `/wp-content/uploads/2023/04/img-20230403-wa0047.webp` | `gallery-photo-051.webp` | ✅ |
| `gallery-photo-052` | Picture Gallery grid, photo 52 | `/wp-content/uploads/2023/04/img-20230403-wa0048.webp` | `gallery-photo-052.webp` | ✅ |
| `gallery-photo-053` | Picture Gallery grid, photo 53 | `/wp-content/uploads/2023/04/img-20230403-wa0049.webp` | `gallery-photo-053.webp` | ✅ |
| `gallery-photo-054` | Picture Gallery grid, photo 54 | `/wp-content/uploads/2023/04/img-20230403-wa0050.webp` | `gallery-photo-054.webp` | ✅ |
| `gallery-photo-055` | Picture Gallery grid, photo 55 | `/wp-content/uploads/2023/04/img-20230403-wa0051.webp` | `gallery-photo-055.webp` | ✅ |
| `gallery-photo-056` | Picture Gallery grid, photo 56 | `/wp-content/uploads/2023/04/img-20230403-wa0052.webp` | `gallery-photo-056.webp` | ✅ |
| `gallery-photo-057` | Picture Gallery grid, photo 57 | `/wp-content/uploads/2023/04/img-20230403-wa0053.webp` | `gallery-photo-057.webp` | ✅ |
| `gallery-photo-058` | Picture Gallery grid, photo 58 | `/wp-content/uploads/2023/04/img-20230403-wa0054.webp` | `gallery-photo-058.webp` | ✅ |
| `gallery-photo-059` | Picture Gallery grid, photo 59 | `/wp-content/uploads/2023/04/img-20230403-wa0055-1.webp` | `gallery-photo-059.webp` | ✅ |
| `gallery-photo-060` | Picture Gallery grid, photo 60 | `/wp-content/uploads/2023/04/img-20230403-wa0057.webp` | `gallery-photo-060.webp` | ✅ |
| `gallery-photo-061` | Picture Gallery grid, photo 61 | `/wp-content/uploads/2023/04/img-20230403-wa0058.webp` | `gallery-photo-061.webp` | ✅ |
| `gallery-photo-062` | Picture Gallery grid, photo 62 | `/wp-content/uploads/2023/04/img-20230403-wa0059.webp` | `gallery-photo-062.webp` | ✅ |
| `gallery-photo-063` | Picture Gallery grid, photo 63 | `/wp-content/uploads/2023/04/img-20230403-wa0060.webp` | `gallery-photo-063.webp` | ✅ |
| `gallery-photo-064` | Picture Gallery grid, photo 64 | `/wp-content/uploads/2023/04/img-20230403-wa0061.webp` | `gallery-photo-064.webp` | ✅ |
| `gallery-photo-065` | Picture Gallery grid, photo 65 | `/wp-content/uploads/2023/04/img-20230403-wa0062.webp` | `gallery-photo-065.webp` | ✅ |
| `gallery-photo-066` | Picture Gallery grid, photo 66 | `/wp-content/uploads/2023/04/img-20230403-wa0063.webp` | `gallery-photo-066.webp` | ✅ |
| `gallery-photo-067` | Picture Gallery grid, photo 67 | `/wp-content/uploads/2023/04/img-20230403-wa0064.webp` | `gallery-photo-067.webp` | ✅ |
| `gallery-photo-068` | Picture Gallery grid, photo 68 | `/wp-content/uploads/2023/04/img-20230403-wa0065.webp` | `gallery-photo-068.webp` | ✅ |
| `gallery-photo-069` | Picture Gallery grid, photo 69 | `/wp-content/uploads/2023/04/img-20230403-wa0066.webp` | `gallery-photo-069.webp` | ✅ |
| `gallery-photo-070` | Picture Gallery grid, photo 70 | `/wp-content/uploads/2023/04/img-20230403-wa0067.webp` | `gallery-photo-070.webp` | ✅ |
| `gallery-photo-071` | Picture Gallery grid, photo 71 | `/wp-content/uploads/2023/04/img-20230403-wa0068.webp` | `gallery-photo-071.webp` | ✅ |
| `gallery-photo-072` | Picture Gallery grid, photo 72 | `/wp-content/uploads/2023/04/img-20230403-wa0069.webp` | `gallery-photo-072.webp` | ✅ |
| `gallery-photo-073` | Picture Gallery grid, photo 73 | `/wp-content/uploads/2023/04/img-20230403-wa0070.webp` | `gallery-photo-073.webp` | ✅ |
| `gallery-photo-074` | Picture Gallery grid, photo 74 | `/wp-content/uploads/2023/04/img-20230403-wa0071.webp` | `gallery-photo-074.webp` | ✅ |
| `gallery-photo-075` | Picture Gallery grid, photo 75 | `/wp-content/uploads/2023/04/img-20230403-wa0072.webp` | `gallery-photo-075.webp` | ✅ |
| `gallery-photo-076` | Picture Gallery grid, photo 76 | `/wp-content/uploads/2023/04/img-20230403-wa0073.webp` | `gallery-photo-076.webp` | ✅ |
| `gallery-photo-077` | Picture Gallery grid, photo 77 | `/wp-content/uploads/2023/04/img-20230403-wa0074.webp` | `gallery-photo-077.webp` | ✅ |
| `gallery-photo-078` | Picture Gallery grid, photo 78 | `/wp-content/uploads/2023/04/img-20230403-wa0075.webp` | `gallery-photo-078.webp` | ✅ |
| `gallery-photo-079` | Picture Gallery grid, photo 79 | `/wp-content/uploads/2023/04/img-20230403-wa0076.webp` | `gallery-photo-079.webp` | ✅ |
| `gallery-photo-080` | Picture Gallery grid, photo 80 | `/wp-content/uploads/2023/04/img-20230403-wa0077.webp` | `gallery-photo-080.webp` | ✅ |
| `gallery-photo-081` | Picture Gallery grid, photo 81 | `/wp-content/uploads/2023/04/img-20230403-wa0078.webp` | `gallery-photo-081.webp` | ✅ |
| `gallery-photo-082` | Picture Gallery grid, photo 82 | `/wp-content/uploads/2023/04/img-20230403-wa0079.webp` | `gallery-photo-082.webp` | ✅ |
| `gallery-photo-083` | Picture Gallery grid, photo 83 | `/wp-content/uploads/2023/04/img-20230403-wa0080.webp` | `gallery-photo-083.webp` | ✅ |
| `gallery-photo-084` | Picture Gallery grid, photo 84 | `/wp-content/uploads/2023/04/img-20230403-wa0081.webp` | `gallery-photo-084.webp` | ✅ |
| `gallery-photo-085` | Picture Gallery grid, photo 85 | `/wp-content/uploads/2023/04/img-20230403-wa0082.webp` | `gallery-photo-085.webp` | ✅ |
| `gallery-photo-086` | Picture Gallery grid, photo 86 | `/wp-content/uploads/2023/04/img-20230403-wa0083.webp` | `gallery-photo-086.webp` | ✅ |
| `gallery-photo-087` | Picture Gallery grid, photo 87 | `/wp-content/uploads/2023/04/img-20230403-wa0084.webp` | `gallery-photo-087.webp` | ✅ |
| `gallery-photo-088` | Picture Gallery grid, photo 88 | `/wp-content/uploads/2023/04/img-20230403-wa0085.webp` | `gallery-photo-088.webp` | ✅ |
| `gallery-photo-089` | Picture Gallery grid, photo 89 | `/wp-content/uploads/2023/04/img-20230403-wa0086.webp` | `gallery-photo-089.webp` | ✅ |
| `gallery-photo-090` | Picture Gallery grid, photo 90 | `/wp-content/uploads/2023/04/img-20230403-wa0087.webp` | `gallery-photo-090.webp` | ✅ |
| `gallery-photo-091` | Picture Gallery grid, photo 91 | `/wp-content/uploads/2023/04/img-20230403-wa0088.webp` | `gallery-photo-091.webp` | ✅ |
| `gallery-photo-092` | Picture Gallery grid, photo 92 | `/wp-content/uploads/2023/04/img-20230403-wa0089.webp` | `gallery-photo-092.webp` | ✅ |
| `gallery-photo-093` | Picture Gallery grid, photo 93 | `/wp-content/uploads/2023/04/img-20230403-wa0090.webp` | `gallery-photo-093.webp` | ✅ |
| `gallery-photo-094` | Picture Gallery grid, photo 94 | `/wp-content/uploads/2023/04/img-20230403-wa0091.webp` | `gallery-photo-094.webp` | ✅ |
| `gallery-photo-095` | Picture Gallery grid, photo 95 | `/wp-content/uploads/2023/04/img-20230403-wa0092.webp` | `gallery-photo-095.webp` | ✅ |

</details>

## How to replace a placeholder

1. Save the real file into `images/` using the recommended filename above (or your own — just keep it
   kebab-case and descriptive, per WEBSITE-STANDARDS.md §4).
2. Find the element by its `data-image-slot` value in the relevant page (`index.html`,
   `about-us.html`, `founders.html`, `videos.html`, `picture-gallery.html`, or `contact-us.html` —
   `subpage-hero-bg` appears in all five of the latter).
3. For a content `<img>`: change `src="images/placeholder.svg"` to the new path and remove the
   `img-placeholder` class.
4. For a background slot (`.bg-placeholder`, e.g. the two hero slides and the video frame): remove the
   `bg-placeholder` class and `data-placeholder-label` attribute, and add an inline
   `style="background-image:url('images/your-file.jpg'); background-size:cover; background-position:center;"`
   (or move the rule into `css/pages/index.css`).
5. Delete that row from this manifest once it's done, so the file always reflects what's still
   outstanding.
