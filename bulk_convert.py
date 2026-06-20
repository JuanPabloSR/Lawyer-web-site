import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

src_dir = r"f:\Freelancer\VeraVillamizar\Advicx-Angular_v1.0\Advicx\src\assets\img\new_photos"
dst_dir = r"f:\Freelancer\VeraVillamizar\Advicx-Angular_v1.0\Advicx\src\assets\img\new_photos_jorge"

os.makedirs(dst_dir, exist_ok=True)

print("Iniciando conversión de alta calidad a new_photos_jorge. Esto tardará unos minutos...")

for filename in os.listdir(src_dir):
    if filename.lower().endswith(".heic"):
        src_path = os.path.join(src_dir, filename)
        dst_name = os.path.splitext(filename)[0] + ".webp"
        dst_path = os.path.join(dst_dir, dst_name)
        
        if not os.path.exists(dst_path):
            try:
                with Image.open(src_path) as img:
                    # Removed the thumbnail constraint to keep original size
                    # Increased quality from 85 to 95 for sharp images
                    img.save(dst_path, "WEBP", quality=95)
                    print(f"Convertida en alta resolución: {dst_name}")
            except Exception as e:
                print(f"Error al convertir {filename}: {e}")
        else:
            print(f"Ya existe: {dst_name}, omitiendo.")

print("¡Conversión en alta calidad completada! Revisa la carpeta new_photos_jorge.")
