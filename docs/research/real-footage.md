# Real footage beside the drawn widgets

Researched and cut 2026-11-16. All clips: 480x270, silent, H.264 High, 24 fps, `+faststart`, poster = frame at 1 s
(480x270), in `public/media/`. Not wired into `src/` yet. Every clip was checked frame by frame on a contact sheet.
Personal use only (see CLAUDE.md): clips are cut from other people's YouTube videos.

| Widget | File | YouTube id | Start (s) | Length | Credit |
|---|---|---|---|---|---|
| rig (back) | `rig_real` | `Sg9lNMv1vdU` | 197.5 | 12 s | Start Skydiving |
| rig (front) | `rig_real_front` | `LQZhlBAsWgE` | 228.5 | 12 s | Matt Walker |
| exit | `exit_real` | `Z5lxQOmDIKk` | 6 | 10.5 s | Matt (personal channel) |
| altimeter | `alt_real` | `gCjqB_kB_qM` | 58.3 | 6 s | Marcin Kobylecki |
| pattern | `pattern_pov` | `KUUMP_XCBUE` | 217 | 12 s | Skydive Miami (video by Tiago Seiler) |
| canopyCheck | `canopy_check_pov` | `moBHeP1WNNI` | 33 | 11 s | Strictly Clown Business |
| climb | none added | | | | existing `climb.mp4` kept |

## Details

**rig_real**: "Episode 5: Components of a Skydiving Rig", Start Skydiving. An instructor turns a jumper wearing a
rig around and points at the **main** container (bottom), then the **reserve** container (top); the video's own labels
"MAIN PARACHUTE" and "RESERVE PARACHUTE" appear. Cropped to zoom in (1060x596 at 110,124). Confident.
The same video also points at risers, 3-ring release, cutaway cable, cutaway handle (~152–185 s), BOC pouch and
pilot chute (~286–299 s), AAD (~390 s) and reserve handle (~231 s), but wide shot: parts are small at 480 px.

**rig_real_front**: "Skydive pre-jump gear check", Matt Walker. Rig lying face up: the whole front of the harness
(chest strap, leg straps, warning label), then the red **cutaway handle** is checked in its velcro pocket, close up.
Clean, no text. Confident. Same video, close-ups if more are wanted: AAD display 8–20 s, main pin under the flap
66–72 s, reserve pin in the window 100–112 s, **3-ring** "big ring, middle ring, little ring" 145–180 s, RSL ~192 s.

**exit_real**: "My First EVER Skydive – AFF Level 1", Matt. Camera on the inside instructor in a Caravan-type door:
the student (blue suit) steps into the door, holds the bar next to the outside instructor (maroon), the inside
instructor grips the harness, they leave together. Shows the door set-up and the exit, not the spoken count
(no sound, no captions). Fairly confident. Alternative with the count written on screen ("Take position in door,
check in with instructor", "Exit count: up, down, arch", wing camera): `f1N8OAm8mtg` at 15–21 s, Chicagoland
Skydiving Center, burned-in captions.

**alt_real**: "Skydiving 4500 m Cumulus – GoPro 5", Marcin Kobylecki. Freefall POV just out of a cloud over an
airfield: an **analog altimeter** (white dial, red needle) on the left wrist is held up and read, then the hands move.
Cropped to the lower part of the 4:3 frame. Shows reading the altimeter in freefall, but the needle value is not
readable at 480 px and the dial may be metric: do not caption it "6,000 ft". Medium confidence.

**pattern_pov**: "North Wind Landing Pattern", Skydive Miami. Helmet cam looking down at the landing field from above
the pattern; for ~3 s the video draws the plan on the real field: **Downwind** (up), **Base** (across), **Final**
(down), wind arrows and compass. Skydive Miami logo top left. It shows the planned legs from the canopy, not the
whole flight of each leg. Confident it shows a real pattern plan; the existing `pattern.mp4` is an animation (Skydive
Spaceland), so this is a real-view complement. Same video: a magnified altimeter under canopy ~206 s, dashed base and
final ~246 s, final arrow ~264 s.

**canopy_check_pov**: "Deployment and Canopy Control Check (First Jump Course Video) #AFF", Strictly Clown Business.
POV right after opening: look up, slider coming down, canopy square; on-screen text "Shape, Stability, Steerable".
Confident. Ends just before the video's "UNSTOW THE BREAKS" overlay (typo, left out). The same video goes on with
look right / turn right ~51–56 s, look left / turn left ~57–62 s, practice flare ~66 s (red text overlays) if a second
clip is wanted.

## Not found / skipped

- **Altimeter needle through 6,000 / 5,500 ft**: no clear close-up of an analog altimeter unwinding through those
  numbers in freefall found; `alt_real` is the best real freefall altimeter view.
- **climb**: no clearly better angle than the existing `climb.mp4`; `exit_real` also shows the climb into the door.
- **Exit count from inside with sound/captions**: the clean inside view (`exit_real`) has no count; the one with the
  count (`f1N8OAm8mtg`) is a wing camera with English captions burned in.
