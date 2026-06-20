import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

src_dir = r"f:\Freelancer\VeraVillamizar\Advicx-Angular_v1.0\Advicx\src\assets\img\new_photos"
base_dst_dir = r"f:\Freelancer\VeraVillamizar\Advicx-Angular_v1.0\Advicx\src\assets\img"

files_to_convert = {
    # Hero
    "IMG_4592.HEIC": "hero/hero1-slider-jorge.webp",
    "IMG_4453.HEIC": "hero/hero1-slider-allyson.webp",
    # Work steps
    "IMG_4430.HEIC": "work/work1-image1.webp",
    "IMG_4434.HEIC": "work/work1-image2.webp",
    "IMG_4440.HEIC": "work/work1-image3.webp",
    "IMG_4468.HEIC": "work/work1-image4.webp",
    # About (Home)
    "IMG_4485.HEIC": "about/about1-image.webp",
    # Service (Home)
    "IMG_4489.HEIC": "service/service1-image.webp",
    # Case Studies (Home & Page)
    "IMG_4503.HEIC": "others/case1-image1.webp",
    "IMG_4550.HEIC": "others/case1-image2.webp",
    "IMG_4464.HEIC": "others/case1-image3.webp",
    "IMG_4618.HEIC": "others/case1-image4.webp",
    "IMG_4545.HEIC": "others/case1-image5.webp",
    "IMG_4444.HEIC": "others/case1-image6.webp",
    "IMG_4472.HEIC": "others/case1-image7.webp",
    "IMG_4525.HEIC": "others/case1-image8.webp",
    "IMG_4596.HEIC": "others/case1-image9.webp",
    # About Page
    "IMG_4560.HEIC": "about/about-page-advicx-image1.webp",
    "IMG_4573.HEIC": "about/about-page-advicx-image2.webp",
    # Services Page
    "IMG_4578.HEIC": "service/service-details-image1.webp",
    "IMG_4581.HEIC": "service/service-details-image2.webp",
    "IMG_4584.HEIC": "service/service-details-image3.webp",
    # Blog Page
    "IMG_4600.HEIC": "blog/blog-details-image1.webp",
    "IMG_4615.HEIC": "blog/blog-details-image2.webp",
    "IMG_4632.HEIC": "blog/blog-details-image3.webp"
}

for src_name, dst_rel_path in files_to_convert.items():
    src_path = os.path.join(src_dir, src_name)
    dst_path = os.path.join(base_dst_dir, dst_rel_path.replace("/", os.sep))
    
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                # Resize to max 1200x1200 to save space while retaining quality
                img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                img.save(dst_path, "WEBP", quality=85)
                print(f"Saved {dst_path}")
        except Exception as e:
            print(f"Failed to convert {src_name}: {e}")
    else:
        print(f"File not found: {src_path}")

print("Done converting images.")
