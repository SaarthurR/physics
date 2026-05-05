# Physics 7C: DL8-DL11 Comprehensive Study Guide

## What This Guide Is Trying To Do

This is not just a compressed list of facts. It is built the same way the easier-to-learn Quiz 2 section in the site was built:

1. Name the model first.
2. Draw the physical picture second.
3. Decide what quantity controls the situation.
4. Use the formula only after the concept is clear.
5. Keep a running list of the traps that usually wreck quiz problems.

If you study this guide in order, the formulas should feel like short versions of an idea you already understand rather than random symbols to memorize.

---

## Master Roadmap

DL8 through DL11 move through four big ideas:

1. Standing waves and quantum review
2. Mirrors
3. Refraction, prisms, and lenses
4. Vision correction and the start of electric charge

When you see a problem, do this first:

1. Ask: what model is this?
2. Ask: where are the rays or waves going?
3. Ask: is this about image type, bending direction, allowed wavelengths, or energy changes?
4. Write one governing rule.
5. Check whether the answer should be real or virtual, upright or inverted, larger or smaller, closer to the normal or farther from it, allowed or not allowed.

That is the same study logic that makes the Quiz 2 material easier to use under time pressure.

---

## Part 1: Standing Waves

### The Hook

Imagine shaking a rope and then seeing a pattern that looks frozen in place. The rope is still moving, but the pattern itself does not seem to travel left or right. Some points never move at all. Other points vibrate a lot.

That is the feeling of a standing wave.

So here is the question: if waves usually travel, how can a wave pattern look stationary?

### Part 1 - A standing wave is really two traveling waves

What this means: a standing wave is made when one wave travels one way and another identical wave travels the opposite way.

Think of it like this: one wave goes to the right, reflects, and comes back to the left. The two overlap everywhere.

Watch out: a standing wave is not a new kind of wave source. It is interference.

### Part 2 - Nodes and antinodes are fixed interference locations

What this means: at some locations the two waves always cancel. Those are nodes. At other locations they always reinforce. Those are antinodes.

Think of it like this: some seats in the stadium are always quiet; others are always the loudest.

Watch out: nodes and antinodes stay in place, but the string or air still oscillates.

### Part 3 - Boundaries decide which patterns are allowed

What this means: the ends of the system tell you what kind of wave can fit.

- Fixed end: node
- Free end: antinode

Watch out: many students memorize formulas before deciding what the ends are doing. That causes most standing-wave mistakes.

### The Full Analogy

Imagine jumping with a skipping rope tied at both ends. If your timing is random, the rope looks messy. But if your timing matches one of the rope's natural patterns, the reflected wave comes back and fits perfectly with what you are doing. Suddenly the rope settles into a clean pattern with fixed low points and high points.

Map it clearly:

- Rope shape = displacement pattern
- Reflection from ends = wave returning
- Fixed low-motion points = nodes
- Big vibration points = antinodes

Where does the analogy break down? A real standing wave is happening everywhere along the medium at once, and sound standing waves are about pressure or displacement in air, not just a visible rope. But for understanding why only certain patterns survive, the rope picture is excellent.

### Misconception Correction

Here is where many people go wrong:

"A standing wave means the medium is not moving."

That is off. The pattern is not traveling, but the medium absolutely is oscillating. At nodes it stays still. Away from nodes it moves.

### Rules That Actually Matter

- Node to nearest node = `lambda / 2`
- Node to nearest antinode = `lambda / 4`

For a string with two fixed ends, or a tube with two open ends:

- `lambda_n = 2L / n`
- `n = 1, 2, 3, ...`

For one fixed end and one free end, or one closed end and one open end:

- `lambda_n = 4L / (2n - 1)`
- only odd harmonics appear

### What Lecture 4 Wanted You To Notice

- Two open ends behave like two fixed ends in the pattern logic.
- One open and one closed end behaves like one free and one fixed end.
- Flute logic: open-open
- Clarinet logic: closed-open

### Fast Problem Strategy

1. Mark each end as node or antinode.
2. Sketch the shortest allowed pattern.
3. Count how many quarter-wavelength or half-wavelength pieces fit in the length.
4. Solve for `lambda`.
5. If needed, use `v = f lambda`.

### Worked Example

Problem: a tube is closed at one end and open at the other. Its length is `L`. What is the fundamental wavelength?

First: what is the model? Standing wave in a mixed-boundary system.

What must the ends do?

- Closed end: node
- Open end: antinode

What is the shortest pattern that fits a node on one side and an antinode on the other? A quarter of a wavelength.

So:

- `L = lambda / 4`
- `lambda = 4L`

Does this make sense? Yes. Mixed boundaries allow a longer wavelength than fixed-fixed for the same length, which means a lower fundamental frequency.

### Plain-Language Recap

A standing wave is two identical waves going opposite directions and interfering. Nodes are always zero. Antinodes are always maximum. The ends tell you the pattern, and the pattern tells you the allowed wavelengths.

---

## Part 2: Quantum Review, de Broglie, and Hydrogen

### The Hook

A guitar string cannot vibrate in just any random pattern if both ends are fixed. It has allowed standing waves only.

Now take that idea and make it much stranger: what if particles also behave like waves?

That is the doorway into quantum mechanics.

### Part 1 - Matter can behave like a wave

What this means: particles are not just tiny hard balls. They also have wave properties.

The de Broglie rule is:

- `lambda = h / p`

where:

- `lambda` is wavelength
- `h` is Planck's constant
- `p` is momentum

Think of it like this: bigger momentum means a shorter wavelength, so the wave wiggles more tightly.

Watch out: this is not saying a particle literally looks like a water wave. It means wave math is needed to describe it.

### Part 2 - Confining a particle leads to standing-wave logic

What this means: if a particle is trapped in a region, only certain wave patterns fit.

Think of it like this: a particle in a box is the quantum version of a string with boundary conditions.

Watch out: not every energy is allowed. That is the whole point of quantization.

### Part 3 - Light also behaves like a particle

What this means: the wave-particle story goes both ways. Matter can look wave-like, and light can act particle-like.

A photon has energy:

- `E_photon = h f = h c / lambda`

Watch out: higher intensity does not automatically mean each photon has more energy. Higher frequency means each photon has more energy.

### Photoelectric Effect Logic

The important observation is:

- Increasing intensity increases how many electrons come out.
- Increasing frequency increases the kinetic energy of the electrons.

This means light must come in packets, not as a perfectly smooth energy smear.

### Hydrogen Atom Review

The hydrogen atom has allowed energy levels. Electrons do not sit at arbitrary energies between them.

That means:

- Absorption: electron jumps up, so the photon must supply exactly the gap
- Emission: electron falls down, so the photon carries away exactly the gap

Energy rule:

- `E_photon = |Delta E|`

If `E_i` is the initial energy and `E_f` is the final energy:

- Emission: `E_photon = E_i - E_f` when `E_i > E_f`
- Absorption: `E_photon = E_f - E_i` when `E_f > E_i`

### The Big Connection

Standing-wave logic is the reason atoms have discrete levels. The electron behaves like a wave bound to the atom, so only certain patterns fit, and only certain energies are allowed.

### Misconception Correction

Common wrong idea:

"If I shine brighter light, I always get more energetic electrons."

No. Brighter means more photons, not necessarily higher-energy photons. The energy per photon depends on frequency.

### Plain-Language Recap

Particles can behave like waves, and trapped waves only fit in certain patterns. That is why energies become quantized. Light also comes in packets called photons, and the photon energy must match the energy jump exactly.

---

## Part 3: Optics Language - Wavefronts vs Rays

Before mirrors and lenses, keep the three descriptions straight:

- Wave equation: tells you amplitude, wavelength, period, and direction in full detail
- Wavefronts: show where equal phase points are and tell you direction and wavelength
- Rays: show direction and relative spreading most clearly

For DL8-DL11, most problems are ray problems.

Watch out: do not mix wavefront diagrams and ray diagrams carelessly. They describe the same light differently, but the geometry you use depends on the representation.

---

## Part 4: Mirrors

### The Hook

When you look in a bathroom mirror, your face seems to be behind the mirror. But if you shine light off a curved mirror, the light can actually come together in front of the mirror.

So here is the question: when is an image only apparent, and when is it physically formed in space?

### Part 1 - Reflection means equal angles

Law of reflection:

- angle of incidence = angle of reflection

Both are measured relative to the normal, not the mirror surface.

Watch out: students often measure from the surface by mistake.

### Part 2 - Real vs virtual images

What this means:

- Real image: rays physically meet
- Virtual image: rays do not physically meet; you backtrace them

Think of it like this: a real image can be caught on a screen. A virtual image can be seen by your eye but not projected onto a screen at that location.

### Flat Mirror

A flat mirror makes a virtual image behind the mirror at the same distance the object is in front of it.

### Concave Mirror

A concave mirror tends to bring horizontal incoming rays toward a focal point.

Three principal rays:

1. Horizontal ray reflects through `F`
2. Ray through `F` reflects horizontally
3. Ray through `C` reflects straight back

Big behavior:

- Object farther than `F`: real image
- Object inside `F`: virtual image

Detailed summary:

- `o > 2f`: real, inverted, smaller
- `o = 2f`: real, inverted, same size
- `f < o < 2f`: real, inverted, larger
- `o = f`: no image at a finite location
- `o < f`: virtual, upright, larger

### Convex Mirror

A convex mirror spreads horizontal rays as if they came from a focal point behind the mirror.

Three principal rays:

1. Horizontal ray reflects away from `F`
2. Ray aimed toward `F` reflects horizontally
3. Ray aimed toward `C` reflects straight back

Big behavior:

- Image is always virtual
- Image is always upright
- Image is always smaller

### Formula or Definition Last

Mirror equation:

- `1/o + 1/i = 1/f`

Magnification:

- `M = h_i / h_o = -i / o`

Sign conventions:

- `o > 0` always
- `f > 0` for concave mirrors
- `f < 0` for convex mirrors
- `i > 0` for real images
- `i < 0` for virtual images
- `h_o > 0` always
- `h_i > 0` for upright images
- `h_i < 0` for inverted images
- `M > 0` upright
- `M < 0` inverted

### Why the Signs Make Sense

This is worth saying out loud:

- Real image in front of the mirror means the image is on the same side as the object, so `i` is positive.
- Virtual image behind the mirror means `i` is negative.
- Concave mirrors focus, so `f` is positive.
- Convex mirrors spread, so `f` is negative.

### Applications You Should Recognize Fast

- Makeup or shaving mirror: concave, object inside `f`, upright and magnified
- Wide-angle security or car mirror: convex, upright and smaller, larger field of view

### Worked Example

Problem: a concave mirror has focal length `f`. The object is placed closer than the focal point. What kind of image forms?

First: what is the model? Concave mirror ray tracing.

What do the reflected rays do? They spread after reflection and do not physically meet in front of the mirror.

So what do we do? Backtrace them.

That means the image is virtual. Because it forms from backtraced rays, it appears behind the mirror. It is upright, and for this case it is magnified.

Does that match daily life? Yes. That is exactly why a makeup mirror enlarges your face when you are close to it.

### Trap Radar

- Measuring angles from the surface instead of the normal
- Forgetting that convex mirrors never make real images
- Forgetting that concave mirrors can make either real or virtual images
- Forgetting that `o = f` sends the image to infinity

### Plain-Language Recap

Mirrors are all about where reflected rays go. If they physically meet, the image is real. If they only seem to come from somewhere, the image is virtual. Concave mirrors can do both. Convex mirrors only make virtual, upright, reduced images.

---

## Part 5: Fermat's Principle and Refraction

### The Hook

Imagine a lifeguard trying to reach a swimmer. If running on sand is faster than swimming in water, the fastest path is not always a straight line. The lifeguard stays on sand longer, then enters the water.

Light does the same kind of optimization.

### Fermat's Principle

Light takes the path that minimizes travel time between two points.

If the speed is the same everywhere, that path is a straight line.

If the speed changes between materials, the path bends at the boundary.

### Part 1 - Refraction happens because the speed changes

Index of refraction:

- `n = c / v`

That means:

- larger `n` -> slower light in that medium
- smaller `n` -> faster light in that medium

### Part 2 - Bending direction

If light goes from fast to slow:

- it bends toward the normal

If light goes from slow to fast:

- it bends away from the normal

Watch out: students often memorize the bend direction without linking it to speed. Tie it to fast vs slow and it becomes much easier.

### Snell's Law

- `n_1 sin theta_1 = n_2 sin theta_2`

where the angles are measured from the normal.

### Why Snell's Law Feels Reasonable

If `n_2 > n_1`, then the right side has a bigger index, so `sin theta_2` must be smaller than `sin theta_1`. That means `theta_2` is smaller. Smaller angle to the normal means the ray bends toward the normal. Good. The algebra matches the picture.

### Total Internal Reflection

If light tries to go from a high-index medium to a low-index medium, the refracted angle gets bigger and bigger as the incident angle grows.

At one special angle, the refracted angle becomes `90 degrees`. After that, there is no refracted ray. Everything reflects internally.

Critical-angle condition:

- `sin theta_c = n_2 / n_1`

This only works when `n_1 > n_2`.

### Misconception Correction

Wrong idea:

"Total internal reflection can happen any time the angle is large enough."

No. The direction of travel through the materials matters. It only happens going from slower-light medium to faster-light medium, which means from higher `n` to lower `n`.

### Worked Example

Problem: light goes from air into acrylic. Does it bend toward or away from the normal?

First: what is the model? Refraction at a boundary.

What do we know? Air has lower index than acrylic, so light is faster in air and slower in acrylic.

Fast to slow means toward the normal.

Does that agree with Snell's law? Yes. If `n_acrylic > n_air`, then the angle inside acrylic must be smaller.

### Plain-Language Recap

Refraction is bending caused by a speed change at a boundary. Higher index means slower light. Fast to slow bends toward the normal. Slow to fast bends away. Total internal reflection only happens from higher index to lower index.

---

## Part 6: Prisms and Dispersion

### Prism Logic

A prism usually bends the ray twice:

1. once when the ray enters
2. once when it leaves

So never stop after the first interface. A lot of quiz errors happen there.

### What the Prism Is Doing

A converging-type shape can push parallel rays toward each other. A diverging-type shape can spread them.

The clean way to analyze a prism is:

1. Draw the normal at the first surface.
2. Decide toward or away from normal.
3. Trace the ray inside.
4. Draw the normal at the second surface.
5. Decide again toward or away from normal.

### Dispersion

In many materials, the index depends on frequency. In normal dispersion:

- higher frequency -> larger index

That means blue light usually bends more than red light in a prism.

Why? Because blue light travels more slowly in the prism than red light does.

### What You Should Picture

White light enters. Inside the prism, different colors take slightly different paths. When they leave, they fan out instead of overlapping. That is the color spread.

### Trap Radar

- Forgetting the second refraction
- Forgetting that air's dispersion is usually negligible in these problems
- Forgetting that blue bends more than red for normal dispersion

### Plain-Language Recap

Prisms bend light at both surfaces. If different colors have different refractive indices, they bend by different amounts. That is why a prism separates white light into colors.

---

## Part 7: Thin Lenses

### The Hook

A mirror changes the direction of light by reflection. A lens changes it by refraction. But the image logic feels very similar.

So here is the key question: does the refracted light actually meet, or do you have to backtrace it?

### Thin-Lens Assumption

A thin lens is treated as though the bending happens effectively once, not at two widely separated surfaces. That makes ray tracing manageable.

### Converging Lens

Horizontal rays bend through the far focal point.

Three principal rays:

1. Horizontal ray -> through far focal point
2. Ray through center -> no bending
3. Ray through near focal point -> exits horizontally

Big behavior:

- Object outside focal length -> real image, inverted
- Object inside focal length -> virtual image, upright

### Diverging Lens

Horizontal rays bend away from the near focal point.

Three principal rays:

1. Horizontal ray -> away from near focal point
2. Ray through center -> no bending
3. Ray aimed toward far focal point -> exits horizontally

Big behavior:

- always virtual
- always upright
- always smaller

### Thin Lens Equation

- `1/o + 1/i = 1/f`

Magnification:

- `M = h_i / h_o = -i / o`

Sign conventions:

- `o > 0` always
- `i > 0` for real images
- `i < 0` for virtual images
- `f > 0` for converging lenses
- `f < 0` for diverging lenses

### Why This Looks Like the Mirror Equation

Because the geometry of image formation ends up following the same structure. Do not panic when you see the same formula. What changes is the physical story producing the image.

### Important Pattern Summary

Converging lens:

- `o > 2f`: real, inverted, smaller
- `o = 2f`: real, inverted, same size
- `f < o < 2f`: real, inverted, larger
- `o = f`: image at infinity
- `o < f`: virtual, upright, larger

Diverging lens:

- always virtual, upright, smaller

### Worked Example

Problem: an object is placed in front of a diverging lens. What type of image should you expect before calculating anything?

First: what is the model? Diverging lens.

What do diverging lenses do to incoming rays? They spread them out.

If the rays are spreading, can they physically meet on the far side? No.

So the image must be virtual. That means `i < 0`. It is upright, and it is smaller than the object.

That prediction should come before any algebra.

### Trap Radar

- Using mirror intuition but forgetting the light is transmitted, not reflected
- Forgetting that the center ray in the thin-lens model is undeviated
- Forgetting that diverging lenses do not make real images for a real object in this course setup

### Plain-Language Recap

Lenses make images the same way mirrors do conceptually: by controlling whether rays meet or only appear to meet. Converging lenses can make real or virtual images depending on object position. Diverging lenses give virtual, upright, reduced images.

---

## Part 8: Multiple-Lens Systems

### The Core Idea

The image made by lens 1 becomes the object for lens 2.

That is the whole game.

Even if the first image is virtual, lens 2 still responds to the light arriving at it, so that image can still function as the next object in the analysis.

### How To Attack These Problems

1. Solve lens 1 completely.
2. Decide where image 1 is located.
3. Use the lens separation to find object distance for lens 2.
4. Solve lens 2.
5. Multiply magnifications:

- `M_total = M_1 M_2`

### Why Students Get Lost

Because they keep thinking about the original object when they are supposed to switch attention to the image produced by lens 1.

### Worked Example Logic

If lens 1 makes a real image, that image is physically out in space. If lens 2 is placed so that this image lies inside lens 2's focal length, then lens 2 can turn that into a virtual final image.

That is the same object-inside-focal-length logic from a single converging lens. The only new part is that the "object" for lens 2 may not be the original object.

### Trap Radar

- Forgetting to update the object for lens 2
- Using the wrong lens separation relation
- Forgetting to multiply, not add, magnifications

### Plain-Language Recap

Two-lens systems are just single-lens systems done twice in sequence. Finish the first lens, then feed that result into the second one.

---

## Part 9: Amateur Optometry

### The Hook

Glasses do not "fix" your eye by changing the object. They fix your vision by changing where the image appears to be so that your eye can focus it.

That is a beautiful idea once it clicks.

### Near Point and Far Point

- Near point: closest distance you can focus clearly
- Far point: farthest distance you can focus clearly

Normal benchmark used here:

- near point about `25 cm`
- far point at infinity

### The Key Optometry Idea

A corrective lens makes a virtual image in a place where your eye can focus.

That is the sentence to remember.

### Nearsightedness (Myopia)

Problem:

- distant objects are too hard to focus
- far point is too close

Fix:

- use a diverging lens

Why?

Because a diverging lens makes incoming parallel rays look as if they came from the person's far point, which the eye can handle.

### Farsightedness (Hyperopia)

Problem:

- nearby objects are too hard to focus
- near point is farther away than normal

Fix:

- use a converging lens

Why?

Because the converging lens creates a virtual image farther away than the actual nearby object, moving it to a location the eye can focus on.

### Optical Power

Optical power is:

- `P = 1/f`

with `f` in meters and `P` in diopters.

Examples:

- positive power -> converging lens
- negative power -> diverging lens

### Misconception Correction

Wrong idea:

"If I need help seeing far away, I need a converging lens because it focuses."

That sounds tempting but it is wrong for myopia. What matters is where the virtual image ends up relative to your eye's usable range, not the vague idea of "more focus."

### Plain-Language Recap

Corrective lenses work by moving the apparent image to a distance your eye can focus. Myopia uses diverging lenses. Farsightedness uses converging lenses. Optical power is just the reciprocal of focal length.

---

## Part 10: Electric Charges and Electric Forces

This is the start of a new unit, but DL11 introduces the first ideas cleanly enough that it is worth including here.

### The Hook

Rub a PVC pipe with cloth and suddenly neutral objects start moving. That feels weird at first because nothing touched them.

So what changed?

### Part 1 - Charge is about imbalance

An object is neutral if it has equal positive and negative charge overall. It is charged if that balance is broken.

In these contexts, rubbing often transfers electrons.

### Part 2 - Like repels, unlike attracts

If two rubbed PVC pipes repel, they carry the same sign.

If the pipe and the cloth attract, they likely ended with opposite signs.

### Part 3 - Neutral objects can still be attracted

This is the subtle part.

A neutral conductor has charges that can move around. Bring a charged rod nearby, and the charges in the conductor rearrange. The closer opposite charges pull more strongly than the farther like charges push. Net result: attraction.

That is induction.

### Soda Can Logic

If a charged rod is brought near a neutral metal can, electrons in the can move. One side becomes effectively more opposite in sign than the other side, so the can is attracted and rolls.

### Misconception Correction

Wrong idea:

"If an object is neutral, a charged object cannot affect it."

No. Neutral does not mean unresponsive. It just means the total charge is zero. The charges inside can still rearrange.

### Plain-Language Recap

Charge means imbalance in protons and electrons. Like charges repel, unlike attract. Neutral conductors can still be attracted because charges shift around inside them.

---

## Final Formula Sheet

### Standing Waves

- node to node = `lambda / 2`
- node to adjacent antinode = `lambda / 4`
- fixed-fixed or open-open: `lambda_n = 2L / n`
- fixed-open or closed-open: `lambda_n = 4L / (2n - 1)`
- wave speed: `v = f lambda`

### Quantum and Photons

- de Broglie: `lambda = h / p`
- photon energy: `E = h f = h c / lambda`
- transition energy: `E_photon = |Delta E|`

### Mirrors

- `1/o + 1/i = 1/f`
- `M = h_i / h_o = -i / o`

### Refraction

- `n = c / v`
- `n_1 sin theta_1 = n_2 sin theta_2`
- critical angle: `sin theta_c = n_2 / n_1` for `n_1 > n_2`

### Lenses

- `1/o + 1/i = 1/f`
- `M = h_i / h_o = -i / o`
- total magnification: `M_total = M_1 M_2`

### Optometry

- optical power: `P = 1/f`

---

## Final Trap List

If you want the highest-value last-minute review, keep these in your head:

1. Standing waves: boundaries first, formulas second.
2. Quantum: higher intensity is not the same as higher photon energy.
3. Mirrors: measure angles from the normal, not the surface.
4. Concave mirrors can make real or virtual images; convex mirrors only make virtual ones.
5. Refraction: tie the bend direction to fast vs slow, not memorized arrows.
6. Total internal reflection only happens from higher index to lower index.
7. Prisms bend light at both surfaces.
8. Converging lenses can make real or virtual images; diverging lenses are virtual-only in these setups.
9. In multi-lens systems, the image from lens 1 becomes the object for lens 2.
10. Corrective lenses work by placing a virtual image where the eye can focus.
11. Neutral objects can still be attracted through induction.

---

## Short Version

Standing waves explain why only certain patterns fit. Quantum mechanics keeps that same "allowed patterns only" idea and turns it into allowed energies. Mirrors and lenses are image-location machines: the whole job is deciding whether rays really meet or only appear to. Refraction is about light changing speed at a boundary, and Snell's law is the compact rule describing that bend. Vision correction is just lens physics applied to the eye. Electric induction is the reminder that even neutral objects can respond when charges rearrange inside them.

You do not need to memorize every sentence here. You need to keep the pictures straight. Once the picture is right, the formulas become much easier to trust and use.
