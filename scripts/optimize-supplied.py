from PIL import Image, ImageOps
from pathlib import Path
import shutil, hashlib, json

root = Path(__file__).resolve().parent.parent
records = []
def optimize(source, folder, name, widths):
    src = root / source
    if not src.exists():
        src = root / '.local-backup' / 'intake' / source
    if not src.exists():
        raise FileNotFoundError(f'Local supplied original unavailable: {source}. Optimized runtime files are already checked in; this optional intake script is not required to build.')
    supplied = ImageOps.exif_transpose(Image.open(src))
    original = supplied.convert('RGBA' if 'A' in supplied.getbands() else 'RGB')
    for width in widths:
        image = original.copy()
        image.thumbnail((width, 5000), Image.Resampling.LANCZOS)
        target = root / 'public' / folder / f'{name}{"-640" if width == 640 else ""}.webp'
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, 'WEBP', quality=95 if folder == 'images/clubs' else 88, method=6)
        records.append({'source': source, 'file': str(target.relative_to(root)).replace('\\','/'), 'width':image.width, 'height':image.height, 'bytes':target.stat().st_size, 'sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
for source, name in [('NetShield.png','netshield'),('solar-odyssey.png','solar-odyssey'),('al-tayibat.png','al-tayyibat'),('e-banking.png','e-banking')]:
    optimize(source, 'images/projects', name, [1600,640])
for source,name in [('assets/source/clubs/real-madrid.png','real-madrid'),('assets/source/clubs/al-ahly.png','al-ahly'),('Arsenal.webp','arsenal')]:
    optimize(source, 'images/clubs', name, [240])
for source,name in [('RealMadrid.jpg','real-madrid'),('alahly.jpg','al-ahly')]:
    target = root/'assets/source/clubs'/f'{name}.png'
    image = Image.open(target)
    records.append({'source':source,'file':str(target.relative_to(root)).replace('\\','/'),'width':image.width,'height':image.height,'bytes':target.stat().st_size,'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'backgroundRemoved':True})
certificate = 'Certificate_Yousef_Osama_Abdelhameed_NSF-26-005.png'
target = root/'public/certificates/innovera-network-security.png'
shutil.copyfile(root/'.local-backup/intake'/certificate, target)
records.append({'source':certificate,'file':str(target.relative_to(root)).replace('\\','/'),'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'bytes':target.stat().st_size})
optimize(certificate, 'certificates/thumbnails','innovera-network-security',[640])
thumb = root/'public/certificates/thumbnails/innovera-network-security-640.webp'
thumb.replace(thumb.with_name('innovera-network-security.webp'))
records[-1]['file'] = 'public/certificates/thumbnails/innovera-network-security.webp'
(root/'docs/SUPPLIED-ASSETS.json').write_text(json.dumps(records,indent=2)+'\n')
print(json.dumps(records,indent=2))
