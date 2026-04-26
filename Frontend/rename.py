import os
import uuid

folder = r"Frontend\public\images\programs\New-Programs"

# 🔥 Sort by Date Modified (IMPORTANT)
files = sorted(
    [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))],
    key=lambda x: os.path.getmtime(os.path.join(folder, x))
)

programs = [
    "bba-in-business-analytics",
    "bba-in-sports-management",
    "bba-in-hotel-hospitality-administration",
    "bca-in-ai-ml",
    "bca-in-data-science-cyber-security",
    "diploma-in-aviation-hospitality-management",
    "diploma-in-medical-laboratory-technology",
    "advanced-certification-in-agentic-ai",
    "advanced-certification-in-full-stack-development",
    "advanced-certification-in-software-development",
    "advanced-certification-in-aviation-cabin-crew",
    "master-of-hospital-administration",
    "bca",
    "bba-in-business-analytics-alt",
    "bsc-in-medical-laboratory-technology-bmlt",
    "bba-in-global-business"
]

sections = ["banner", "overview", "curriculum", "careers"]

expected = len(programs) * len(sections)

if len(files) != expected:
    print("ERROR:", len(files), "files found but expected", expected)
    exit()

print("Step 1: Temporary renaming...\n")

# ======================
# STEP 1: UUID TEMP RENAME
# ======================
temp_files = []

for file in files:
    old_path = os.path.join(folder, file)

    temp_name = "temp_" + uuid.uuid4().hex + ".tmp"
    temp_path = os.path.join(folder, temp_name)

    os.rename(old_path, temp_path)
    temp_files.append(temp_name)

print("Step 2: Final renaming...\n")

# ======================
# STEP 2: FINAL RENAME
# ======================
index = 0

for program in programs:
    for section in sections:
        old_name = temp_files[index]
        old_path = os.path.join(folder, old_name)

        new_name = f"{program}-{section}.webp"
        new_path = os.path.join(folder, new_name)

        os.rename(old_path, new_path)

        print(old_name, "->", new_name)

        index += 1

print("\nDONE: All images renamed correctly.")