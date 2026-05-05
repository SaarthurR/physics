## Figures Folder

This folder contains two kinds of assets:

- Curated figures used directly by the site live at the top level of `assets/figures/`.
- Full source-image extractions from the discussion lecture PDFs live in `assets/figures/dl8/`, `dl9/`, `dl10/`, and `dl11/`.

Each extracted filename follows this pattern:

`dlX-page-PP-img-NNN-obj-OOOO.ext`

- `PP` is the PDF page number.
- `NNN` is the image index reported by `pdfimages -list`.
- `OOOO` is the original PDF object id.

Each DL folder also includes a `manifest.csv` with the page number, PDF image index, object id, dimensions, encoding, and source PDF filename.

Extraction counts:

- `dl8`: 12 images
- `dl9`: 17 images
- `dl10`: 6 images
- `dl11`: 1 image
