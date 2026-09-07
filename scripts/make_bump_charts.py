"""
Generate the two analysis charts for the Visuo-Tactile Bumps project page
from the SolidWorks Simulation results in `bump fea data.xlsx`.

Outputs (1600 px wide, white background):
  src/assets/projects/p2/chart_height_scaling.png
  src/assets/projects/p2/chart_profile_control.png
"""
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.ticker
import matplotlib.pyplot as plt

OUT = Path(__file__).resolve().parents[1] / "src" / "assets" / "projects" / "p2"

# ---- frozen style ----
ACCENT = "#1d4ed8"
WARM = "#e0662e"
INK = "#18181b"
MUTE = "#6b7280"
plt.rcParams.update({
    "figure.facecolor": "white",
    "axes.facecolor": "white",
    "savefig.facecolor": "white",
    "font.family": "DejaVu Sans",
    "font.size": 11,
    "axes.edgecolor": "#c9ccd1",
    "axes.labelcolor": INK,
    "text.color": INK,
    "xtick.color": MUTE,
    "ytick.color": MUTE,
    "axes.grid": True,
    "grid.color": "#e9eaed",
    "grid.linewidth": 0.8,
})

# ---------------------------------------------------------------- data
# Stage 3 - Crown height sweep (shear channel). mean|Q| over Q1,Q2.
h = np.array([2.4, 2.8, 3.6, 3.8, 4.6, 5.6])
gain = np.array([
    (0.0339 + 0.0346) / 2,
    (0.037766370279 + 0.038098625736) / 2,
    (0.044743734876 + 0.045518997609) / 2,
    (0.046294260342 + 0.0475679062605) / 2,
    (0.050724333102 + 0.0519979790205) / 2,
    (0.05759094588 + 0.059252223165) / 2,
])
defl = np.array([0.1368, 0.1531461063, 0.2062991347, 0.2245053152, 0.2683579728, 0.3605725587])
gpd = gain / defl

# Stage 2 - top-profile comparison (candidate profiles; baseline shear row is
# under review and omitted). mean|Q| over the populated quadrants.
arms = ["Cylinder", "Crown", "Tapered\nCrown", "Dome"]
shear = np.array([
    (0.0513 + 0.0517) / 2,
    (0.0665 + 0.0679) / 2,
    (0.0687 + 0.0685) / 2,
    (0.0682 + 0.0688) / 2,
])
normal = np.array([
    (0.0222 + 0.0223 + 0.0222 + 0.0222) / 4,
    (0.0205 + 0.0203 + 0.0214 + 0.0213) / 4,
    (0.0212 + 0.0207 + 0.0208 + 0.0206) / 4,
    (0.0210 + 0.0207 + 0.0207 + 0.0209) / 4,
])
sel = 1  # Crown

def spread(a):
    return (a.max() - a.min()) / a.min() * 100

# ---------------------------------------------------------------- chart 1
fig, (axL, axR) = plt.subplots(1, 2, figsize=(8.0, 3.7), dpi=200)

# power-law fits
bg = np.polyfit(np.log(h), np.log(gain), 1)
bd = np.polyfit(np.log(h), np.log(defl), 1)
hh = np.linspace(h.min(), h.max(), 100)

axL.plot(h, gain, "o", color=ACCENT, ms=6, label=f"shear gain  ~ h$^{{{bg[0]:.2f}}}$  (sub-linear)")
axL.plot(hh, np.exp(bg[1]) * hh ** bg[0], "-", color=ACCENT, lw=1.4, alpha=.7)
axL.plot(h, defl, "s", color=WARM, ms=6, label=f"deflection  ~ h$^{{{bd[0]:.2f}}}$  (super-linear)")
axL.plot(hh, np.exp(bd[1]) * hh ** bd[0], "-", color=WARM, lw=1.4, alpha=.7)
axL.set_xscale("log"); axL.set_yscale("log")
xticks = [2.4, 2.8, 3.6, 4.6, 5.6]
axL.xaxis.set_major_locator(matplotlib.ticker.FixedLocator(xticks))
axL.xaxis.set_major_formatter(matplotlib.ticker.FixedFormatter([f"{v:g}" for v in xticks]))
axL.xaxis.set_minor_locator(matplotlib.ticker.NullLocator())
axL.yaxis.set_major_locator(matplotlib.ticker.FixedLocator([0.03, 0.05, 0.1, 0.2, 0.4]))
axL.yaxis.set_major_formatter(matplotlib.ticker.FixedFormatter(["0.03", "0.05", "0.1", "0.2", "0.4"]))
axL.yaxis.set_minor_locator(matplotlib.ticker.NullLocator())
axL.set_xlim(2.25, 6.0)
axL.set_xlabel("bump height  h  (mm)  ·  log scale")
axL.set_ylabel("mm  ·  log scale")
axL.legend(frameon=False, fontsize=8.5, loc="upper left")
axL.set_title("Deflection grows faster than signal", fontsize=10.5, pad=8)

axR.plot(h, gpd, "o-", color=INK, ms=6, lw=1.4)
axR.set_xlabel("bump height  h  (mm)")
axR.set_ylabel("shear gain per mm of deflection")
axR.set_ylim(0, gpd.max() * 1.18)
axR.set_xlim(2.15, 5.85)
axR.set_xticks([2.4, 3.0, 3.6, 4.6, 5.6])
axR.set_title("No interior optimum — pick the shortest h", fontsize=10.5, pad=8)
axR.text(3.7, 0.055, "falls monotonically —\nno turning point, so the answer is\nthe shortest h that clears the spec",
         fontsize=8.8, color=MUTE, ha="left", va="bottom")

fig.tight_layout()
fig.savefig(OUT / "chart_height_scaling.png", bbox_inches="tight")
plt.close(fig)

# ---------------------------------------------------------------- chart 2
fig, (axT, axB) = plt.subplots(2, 1, figsize=(7.4, 4.6), dpi=200, sharex=True)
x = np.arange(len(arms))

barsT = axT.bar(x, shear * 1000, width=.55,
                color=[ACCENT if i == sel else "#b9c7ef" for i in range(len(arms))])
axT.set_ylabel("shear channel\nmean |Q|  (mN)")
axT.set_ylim(0, shear.max() * 1000 * 1.25)
axT.set_title(f"Top-face profile moves the shear channel  ({spread(shear):.0f}% across arms)",
              fontsize=10.5, pad=8)
for xi, v in zip(x, shear * 1000):
    axT.text(xi, v + shear.max() * 1000 * .04, f"{v:.1f}", ha="center", fontsize=9, color=MUTE)

barsB = axB.bar(x, normal * 1000, width=.55,
                color=[ACCENT if i == sel else "#b9c7ef" for i in range(len(arms))])
axB.set_ylabel("normal channel\nmean |Q|  (mN)")
axB.set_ylim(0, normal.max() * 1000 * 1.25)
axB.set_title(f"...but not the normal channel  ({spread(normal):.0f}% across arms) — the ranking is a profile effect",
              fontsize=10.5, pad=8)
for xi, v in zip(x, normal * 1000):
    axB.text(xi, v + normal.max() * 1000 * .04, f"{v:.1f}", ha="center", fontsize=9, color=MUTE)

axB.set_xticks(x); axB.set_xticklabels(arms)
for ax in (axT, axB):
    ax.margins(x=.08)
fig.tight_layout()
fig.savefig(OUT / "chart_profile_control.png", bbox_inches="tight")
plt.close(fig)

print("wrote", OUT / "chart_height_scaling.png")
print("wrote", OUT / "chart_profile_control.png")
