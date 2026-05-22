import os
import json

BASE_FOLDER = "assets/images"

output = []

os.makedirs("data", exist_ok=True)

print("Scanning:", BASE_FOLDER)

images = []

for file in os.listdir(BASE_FOLDER):

    print("Checking:", file)

    if file.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):

        image_path = f"{BASE_FOLDER}/{file}"
        images.append(image_path)

print("Total images found:", len(images))

output.append({
    "name": "All Communities",
    "images": images
})

with open("data/communities.json", "w") as f:
    json.dump(output, f, indent=4)

print("DONE → JSON created")