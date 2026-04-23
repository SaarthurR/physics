export const FORMULA_STRIP = [
  { label: "Wave speed", value: "v = λf = λ / T" },
  {
    label: "Doppler",
    value: "f_obs = (v / (v ± v_s)) × f_s",
  },
  {
    label: "Interference",
    value: "ΔΦ = -2πΔx / λ + Δφ₀",
  },
  {
    label: "Beats",
    value: "f_beat = |f₁ - f₂|",
  },
  {
    label: "Double slit",
    value: "nλ = d sin θ",
  },
];

export const QUIZ_2_FORMULA_STRIP = [
  { label: "Total phase", value: "ΔΦ = -2πΔx / λ + Δφ₀" },
  { label: "Wave speed", value: "v = λf" },
  { label: "Beats", value: "f_beat = |f₁ - f₂|" },
  { label: "Double slit", value: "Δx = d sin θ" },
  { label: "Bright", value: "d sin θ = nλ" },
  { label: "Dark", value: "d sin θ = (n + 1/2)λ" },
  { label: "Crystal", value: "Δφ₀ = 2πΔt / T" },
];

export const QUIZ_22_FORMULA_STRIP = [
  { label: "Superposition", value: "y_tot = y₁ + y₂" },
  { label: "Total phase", value: "ΔΦ = -2πΔx / λ + Δφ₀" },
  { label: "Beats", value: "f_beat = |f₁ - f₂|" },
  { label: "Doppler", value: "f_obs = ((v ± v_o) / (v ∓ v_s)) f_s" },
  { label: "Bright", value: "d sin θ = nλ" },
  { label: "Crystal", value: "y = Δφ₀λD / (2πd)" },
  { label: "Thin film", value: "2d = nλ" },
];

export const STUDY_GUIDE = {
  title: "Waves: Complete Study Guide",
  subtitle: "PW-Style | DL 1 - DL 5 | Acts 8.1 through 8.15",
  chapters: [
    {
      id: "chapter-1",
      number: "01",
      title: "Chapter 1 - What Is a Wave?",
      plainText: `
Physics 7C Unit 8 Waves Complete Study Guide Chapter 1 What Is a Wave.
The Hook Feel It Before You Name It.
You are at a stadium. The crowd does a wave. The individuals do not travel. They just move up and down. But the disturbance travels all the way around the stadium.
For the mechanical waves we start with, that is a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.
Think about it. When an ocean wave passes under a boat, the boat bobs up and down. But the water under the boat is not flowing to shore. The energy travels. The water stays roughly in place.
Core Concept Transverse vs Longitudinal.
Transverse Waves. The medium moves perpendicular at 90 degrees to the direction the wave travels. Example: a rope wave. You shake one end up and down. The disturbance travels horizontally. The rope moves vertically.
In the simple surface-wave picture used here, water waves are treated as transverse because the visible surface motion is mostly up and down while the disturbance moves outward.
Longitudinal Waves. The medium moves parallel to the direction the wave travels.
Example: sound. Air molecules are squeezed together in compressions and spread apart in rarefactions in the same direction the sound is moving. Push a slinky from one end and the coils compress and expand along the slinky length.
Common confusion: longitudinal does not mean the medium travels with the wave. Air molecules oscillate back and forth around a fixed point.
Wave Dimensionality. The dimensionality of a wave is the number of directions the wave travels, not the dimensions of the medium.
One dimensional wave: travels in only one direction. Example: a wave on a string.
Two dimensional and three dimensional waves: spreads in 2 or 3 directions. Example: water ripples are 2D, sound from a speaker is 3D.
A sound wave exists in 3D space because it travels outward in all directions, not just because air is 3D.
      `.trim(),
      sections: [
        {
          id: "chapter-1-hook",
          title: "The Hook - Feel It Before You Name It",
          html: `
            <p>You're at a stadium. The crowd does a "wave" - people raise their arms section by section. The individuals don't travel; they just move up and down. But something - the disturbance - travels all the way around the stadium.</p>
            <p>For the mechanical waves we start with, that's a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.</p>
            <p>Think about it - when an ocean wave passes under a boat, the boat bobs up and down. But the water under the boat isn't flowing to shore. The energy travels; the water stays roughly in place.</p>
          `,
        },
        {
          id: "chapter-1-core",
          title: "Core Concept: Transverse vs. Longitudinal",
          html: `
            <h4>Transverse Waves</h4>
            <p>The medium moves perpendicular (at 90 degrees) to the direction the wave travels.</p>
            <p><strong>Example:</strong> A rope wave. You shake one end up-and-down. The disturbance travels horizontally. The rope moves vertically. Those two directions are perpendicular - that's transverse.</p>
            <p><strong>Also:</strong> In the simple surface-wave model used in this class, water waves are treated as transverse because the surface moves up/down while the disturbance moves outward.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter1-transverse-wave-example.png" alt="Transverse wave displacement graph from DL1" />
              <figcaption>DL1 includes a transverse-wave rope example, which pairs well with this section's discussion of perpendicular motion.</figcaption>
            </figure>
            <h4>Longitudinal Waves</h4>
            <p>The medium moves parallel to (in the same direction as) the wave travel.</p>
            <p><strong>Example:</strong> Sound. Air molecules are squeezed together (compressions) and spread apart (rarefactions) in the same direction the sound is moving. Push a slinky from one end - the coils compress and expand along the slinky's length.</p>
            <div class="callout">
              <strong>Common Confusion:</strong> People think "longitudinal" means the medium travels with the wave. It doesn't. Air molecules in a sound wave oscillate back and forth around a fixed point - they don't travel from the speaker to your ear. Only the disturbance travels.
            </div>
          `,
        },
        {
          id: "chapter-1-dimensionality",
          title: "Wave Dimensionality",
          html: `
            <p>The dimensionality of a wave = the number of directions the wave travels, NOT the dimensions of the medium.</p>
            <h4>1-D Wave</h4>
            <p>Travels in only one direction.</p>
            <p><strong>Example:</strong> a wave on a string.</p>
            <h4>2-D / 3-D Waves</h4>
            <p>Spreads in 2 or 3 directions.</p>
            <p><strong>Example:</strong> water ripples (2-D), sound from a speaker (3-D).</p>
            <p>A sound wave exists in 3-D space but it is 3-D because it travels outward in all directions - not just because air is 3-D.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-2",
      number: "02",
      title: "Chapter 2 - The Sinusoidal Wave Equation",
      plainText: `
Chapter 2 The Sinusoidal Wave Equation.
The Hook Reading the Wave's ID Card. Every wave has a fingerprint - a set of numbers that describe exactly how it moves. The wave equation is how we write that fingerprint mathematically. Once you understand what each piece means, you can read a wave like reading a sentence.
The Equation: y(x, t) - y0 = A sin(2pi t/T +/- 2pi x/lambda + phi0) = A sin(Phi).
Decoding Each Symbol One at a Time.
A amplitude maximum displacement from equilibrium. In the simple model it is mainly source-set.
T period time for one complete oscillation. Source dependent.
f frequency cycles per second. f = 1/T. Units Hz.
lambda wavelength distance between consecutive crests or equivalent points.
v wave speed. v = lambda/T = lambda f. Medium dependent. Same source in different medium means same frequency but different speed and wavelength.
Phi total phase. Phi = 2pi t/T +/- 2pi x/lambda + phi0.
phi0 fixed phase constant set by the initial conditions together with the chosen origin for x and t.
Direction rule. Minus sign on x term means wave moves in plus x direction to the right. Plus sign means wave moves in minus x direction to the left.
Source vs Medium table. Period and frequency are source-set. Wave speed is medium-set. Wavelength depends on both. Amplitude is mainly source-set in the simple model. Phase constant is fixed by initial conditions and the chosen origin.
Worked Example Boat and Buoy Problem.
Harbor boat problem asks what moves, the wave speed, the amplitude, whether the boat and buoy share the same height, the wave equation assuming the wave moves left, the buoy motion, and the displacement at x = 5 m and t = 2 s.
Given T = 6 s, lambda = 20 m, A = 0.5 m, and boat at x = 0 on a crest when t = 0.
Wave speed v = 20/6 = 3.33 m/s.
Because the original prompt explicitly says to assume the wave moves left, y(x,t) = 0.5 sin(2pi t/6 + 2pi x/20 + pi/2).
The buoy at x = 10 m follows y_buoy(t) = 0.5 sin(2pi t/6 + 3pi/2).
At x = 5 m and t = 2 s, y ≈ -0.25 m.
      `.trim(),
      sections: [
        {
          id: "chapter-2-hook",
          title: "The Hook - Reading the Wave's ID Card",
          html: `
            <p>Every wave has a fingerprint - a set of numbers that describe exactly how it moves. The wave equation is how we write that fingerprint mathematically. Once you understand what each piece means, you can read a wave like reading a sentence.</p>
          `,
        },
        {
          id: "chapter-2-equation",
          title: "The Equation",
          html: `
            <div class="formula-box">y(x, t) - y₀ = A sin(2πt/T ± 2πx/λ + φ₀) = A sin(Φ)</div>
          `,
        },
        {
          id: "chapter-2-symbols",
          title: "Decoding Each Symbol - One at a Time",
          html: `
            <h4>A - Amplitude</h4>
            <p>The maximum displacement from equilibrium. How "tall" the wave is.</p>
            <p><strong>Real life:</strong> Turn up the volume on a speaker - you're increasing the amplitude of the sound wave. The wave gets "bigger" but not faster.</p>
            <p><strong>Source or medium?</strong> In the simple model it is mainly source-set. You usually control it by how hard you shake the source, though real transmitted amplitude can also depend on the setup.</p>

            <h4>T - Period</h4>
            <p>Time for one complete oscillation (one full cycle). Units: seconds.</p>
            <p><strong>Real life:</strong> The period of a clock's pendulum is about 2 seconds (tick...tock = one cycle).</p>
            <p><strong>Source or medium?</strong> Source-dependent. Set by whatever is generating the wave.</p>

            <h4>f - Frequency</h4>
            <p>How many cycles per second. The reciprocal of period.</p>
            <div class="formula-inline">f = 1/T &nbsp;&nbsp;&nbsp; Units: Hz (Hertz = cycles per second)</div>
            <p>Period and frequency are opposites. High frequency = short period. Low frequency = long period. A 440 Hz musical note (concert A) has a period of about 0.0023 seconds - tiny!</p>

            <h4>λ - Wavelength</h4>
            <p>The spatial analogue of period. The distance the wave travels in one full cycle. It's the distance between two consecutive crests (or troughs, or any equivalent points).</p>
            <p><strong>Medium or source?</strong> Both. It depends on wave speed (medium) AND frequency (source). See the relationship below.</p>

            <h4>v - Wave Speed</h4>
            <p>How fast the disturbance moves through the medium. NOT the same as how fast the medium's particles move.</p>
            <div class="formula-inline">v = λ / T = λf</div>
            <p><strong>Medium-dependent:</strong> Change the tension on a string → change the wave speed. The source doesn't control this.</p>
            <p><strong>Key insight:</strong> Same source, different medium → same frequency, different speed → different wavelength.</p>

            <h4>Φ - Total Phase</h4>
            <p>The argument of the sine function. It tells you exactly where in the oscillation cycle the wave is at any given (x, t). Units: radians.</p>
            <div class="formula-inline">Φ = 2πt/T ± 2πx/λ + φ₀</div>
            <p>If Φ increases by 2π, you complete one full cycle and return to the same state. That's it.</p>

            <h4>φ₀ - Fixed Phase Constant</h4>
            <p>The "starting phase" - where the wave is in its cycle at t = 0, x = 0. It is fixed by the initial conditions together with your chosen origin for position and time.</p>
          `,
        },
        {
          id: "chapter-2-direction",
          title: "The ± Sign - Wave Direction",
          html: `
            <h4>DIRECTION RULE:</h4>
            <ul>
              <li>Minus sign (-2πx/λ) → wave moves in the +x direction (to the right)</li>
              <li>Plus sign (+2πx/λ) → wave moves in the -x direction (to the left)</li>
            </ul>
            <p>This trips almost everyone up. The minus sign means right-moving. Yes, it seems backwards. Think of it this way: a right-moving wave at position x arrives at x+dx slightly later in time - the phase must decrease with increasing x at a fixed time, hence the minus.</p>
          `,
        },
        {
          id: "chapter-2-source-medium",
          title: "Source vs. Medium - The Big Table",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Depends On</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Period T</td>
                  <td>Source</td>
                  <td>Set by how fast you vibrate the source</td>
                </tr>
                <tr>
                  <td>Frequency f</td>
                  <td>Source</td>
                  <td>Same as period (f = 1/T)</td>
                </tr>
                <tr>
                  <td>Wave Speed v</td>
                  <td>Medium</td>
                  <td>Tension, density, elasticity of medium</td>
                </tr>
                <tr>
                  <td>Wavelength λ</td>
                  <td>Both</td>
                  <td>λ = v/f - depends on both speed AND frequency</td>
                </tr>
                <tr>
                  <td>Amplitude A</td>
                  <td>Mainly source (simple model)</td>
                  <td>Mostly set by how energetically you disturb the medium, though real transmitted amplitude can also depend on the setup</td>
                </tr>
                <tr>
                  <td>Phase constant φ₀</td>
                  <td>Initial conditions / coordinate choice</td>
                  <td>Fixed once you choose where x = 0 and t = 0 and specify the wave's starting phase</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "chapter-2-worked-example",
          title: "Worked Example - The Boat and Buoy Problem",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem:</strong> You are in a small boat anchored in a harbor. Ocean waves are moving past you such that a wave crest passes by every six seconds. You observe that these crests are spaced 20 m apart. You also notice that a buoy anchored 10 m to the right of you is also bobbing along with the waves.</p>
              <ol>
                <li>Exactly what is moving as the waves propagate?</li>
                <li>What is the speed of the wave?</li>
                <li>When your boat is at a wave peak, you notice that it is 0.5 m above the buoy. A few seconds later when your boat is at a trough, it is 0.5 m lower than the buoy. What is the amplitude of this wave? Will the buoy and your boat ever be at the same height? (Draw a physical picture of the boat and buoy and label relevant distances.)</li>
                <li>Write an equation to describe this wave, assuming the wave moves to the left, your boat is at position x = 0, and that at time t = 0, your boat is on a crest. Explain all values.</li>
                <li>Using your answer in 3), write an equation to describe the motion of the buoy. On your board, graph the buoy&rsquo;s motion as a function of time, being sure to show at least two full periods.</li>
                <li>What is the displacement from equilibrium at x = 5 m and t = 2 s?</li>
              </ol>
            </div>
            <h4>1 - What is actually moving?</h4>
            <p>The water mostly oscillates around equilibrium. The thing that propagates from place to place is the disturbance and the energy it carries, not a chunk of water sailing across the harbor.</p>
            <h4>2 - Wave speed</h4>
            <div class="formula-inline">v = λ / T = 20 m / 6 s ≈ 3.33 m/s</div>
            <h4>3 - Amplitude and boat/buoy relationship</h4>
            <p>The boat is 0.5 m above the buoy at one instant and 0.5 m below a little later, so each object sits 0.5 m from equilibrium at its extreme position.</p>
            <div class="formula-inline">A = 0.5 m</div>
            <p>The boat and buoy are separated by 10 m, which is λ/2. That means they are always out of phase by π: when one is at a crest the other is at a trough, and they pass through equilibrium at the same height twice per cycle.</p>
            <h4>4 - Wave equation</h4>
            <p>The original DL1 prompt explicitly says to assume the wave moves to the left, so the sign on the x-term is plus. At x = 0 and t = 0 the boat is on a crest, so sin(φ₀) = 1 and φ₀ = π/2.</p>
            <div class="formula-box">y(x, t) = 0.5 sin(2πt/6 + 2πx/20 + π/2) meters</div>
            <h4>5 - Buoy motion</h4>
            <p>The buoy stays at x = 10 m, so plug x = 10 into the same wave equation:</p>
            <div class="formula-inline">y_buoy(t) = 0.5 sin(2πt/6 + 2π(10)/20 + π/2)</div>
            <div class="formula-inline">y_buoy(t) = 0.5 sin(2πt/6 + 3π/2) meters</div>
            <p>That matches the physical picture: when the boat is on a crest at t = 0, the buoy is 0.5 m below equilibrium.</p>
            <h4>6 - Displacement at x = 5 m, t = 2 s</h4>
            <div class="formula-inline">Φ = 2π(2)/6 + 2π(5)/20 + π/2 = 2π/3 + π/2 + π/2 = 2π/3 + π ≈ 5.76 rad</div>
            <div class="formula-inline">y ≈ 0.5 × sin(5.76) ≈ -0.25 m</div>
          `,
        },
      ],
    },
    {
      id: "chapter-3",
      number: "03",
      title: "Chapter 3 - Reading Wave Graphs",
      plainText: `
Chapter 3 Reading Wave Graphs.
Two Types of Wave Graphs.
y(x) snapshot in time like a photograph of the wave. t fixed. x varies. Spatial period is wavelength lambda.
y(t) time history at one point. x fixed. t varies. Temporal period is T.
How to Go From Graphs to Wave Equation: read amplitude, period, wavelength, determine direction, determine phase constant.
Tricky: Two y(t) Graphs at Different Positions. If the farther position graph is shifted later in time, the wave is moving in positive x direction.
The sign of the position itself does not determine direction. What matters is whether the same feature reaches the larger-x point later or earlier.
      `.trim(),
      sections: [
        {
          id: "chapter-3-two-types",
          title: "Two Types of Wave Graphs",
          html: `
            <h4>y(x) - Snapshot in Time</h4>
            <p>Like a photograph of the wave. t is fixed. x varies. The spatial period = wavelength λ.</p>
            <p>Read λ from the x-axis: distance between identical points.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter3-wave-snapshot.png" alt="Snapshot graph of displacement versus position" />
              <figcaption>This worksheet graph is a clean y(x) snapshot: it shows the wave's shape across space at one instant.</figcaption>
            </figure>
            <h4>y(t) - Time History at One Point</h4>
            <p>Like a recording of one point on the wave. x is fixed. t varies. The temporal period = T.</p>
            <p>Read T from the t-axis: time between identical points.</p>
          `,
        },
        {
          id: "chapter-3-graphs-to-equation",
          title: "How to Go From Graphs -> Wave Equation",
          html: `
            <p>This is the core skill. Work through it systematically every time:</p>
            <ol>
              <li>Read A (amplitude) from either graph - peak height.</li>
              <li>Read T from the y(t) graph (time between crests).</li>
              <li>Read λ from the y(x) graph (distance between crests).</li>
              <li>Determine direction from context (given or inferred from two y(t) graphs at different positions).</li>
              <li>Determine φ₀ by plugging in a known (x, t, y) point and solving.</li>
            </ol>
          `,
        },
        {
          id: "chapter-3-tricky",
          title: "Tricky: Two y(t) Graphs at Different Positions",
          html: `
            <p>If you have y(t) at x = 1.0 m and y(t) at x = 1.1 m, you can determine direction by comparing when the <em>same feature</em> arrives at the two points. The fact that x = 1.1 m is positive does <strong>not</strong> mean the wave moves left. It only means that point is farther to the right on the x-axis.</p>
            <p>If the x = 1.1 m graph is shifted to the right in time, that means the crest or trough reaches the farther-right point <em>later</em>. So the disturbance is traveling from x = 1.0 m toward x = 1.1 m: the wave is moving in the +x direction (to the right).</p>
            <p>If the x = 1.1 m graph were shifted to the left instead, the farther-right point would experience the same feature earlier, which would mean the wave is moving in the -x direction (to the left).</p>
            <p>You can see the same thing from the right-moving equation y = A sin(ωt - kx + φ₀). At a larger x, you need a larger t to keep the same phase, so the time graph at the farther point is delayed.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter3-position-time-comparison.png" alt="Two position or time graphs used to compare phase at different points" />
              <figcaption>The DL graph pair is exactly the kind of comparison you use to infer the wave's direction from timing.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "chapter-4",
      number: "04",
      title: "Chapter 4 - Waves in 2D and 3D",
      plainText: `
Chapter 4 Waves in 2D and 3D.
Wavefronts and rays. Wavefronts connect points with same phase. Rays point in direction of travel and are perpendicular to wavefronts.
Intensity is power per unit area. I = P / Area.
For 2D waves area = circumference = 2pi r so I proportional to 1/r.
For 3D waves area = 4pi r^2 so I proportional to 1/r^2.
Since I proportional to A^2, amplitude in 2D falls as 1/sqrt(r), in 3D as 1/r.
Decibels: D - D0 = 10 log10(I/I0).
Key facts: +10 dB = 10x more intense but sounds only 2x louder. +3 dB approximately 2x more intense.
Two 70 dB speakers together produce 76 dB.
      `.trim(),
      sections: [
        {
          id: "chapter-4-wavefronts",
          title: "Wavefronts and Rays",
          html: `
            <p>When a wave travels in more than one dimension, we use two tools to visualize it:</p>
            <h4>Wavefronts</h4>
            <p>Lines (2D) or surfaces (3D) connecting all points with the same phase.</p>
            <p>Solid lines = crests. Dashed lines = troughs. Distance between adjacent solid lines = λ.</p>
            <figure class="concept-figure concept-figure-small">
              <img src="./assets/figures/chapter4-wavefronts.png" alt="Concentric wavefront circles from the worksheet" />
              <figcaption>The higher-dimensional wave worksheet shows the circular wavefront picture used in this section.</figcaption>
            </figure>
            <h4>Rays</h4>
            <p>Arrows pointing in the direction of wave travel.</p>
            <p>Rays are always perpendicular to wavefronts.</p>
          `,
        },
        {
          id: "chapter-4-intensity",
          title: "Intensity - Why Loud Things Fade With Distance",
          html: `
            <p>Stand next to a speaker: deafening. Walk 100 meters away: barely audible. The speaker didn't get quieter. The energy just spread over a larger area.</p>
            <p>Intensity = power per unit area of the wavefront.</p>
            <div class="formula-inline">I = P / Area</div>
            <p>If no energy is lost (no dissipation), the total power crossing each wavefront stays constant. But the area of the wavefront grows.</p>
            <h4>2D Waves (circles)</h4>
            <p>Area = circumference = 2πr</p>
            <div class="formula-inline">I ∝ 1/r</div>
            <h4>3D Waves (spheres)</h4>
            <p>Area = 4πr²</p>
            <div class="formula-inline">I ∝ 1/r² (inverse square law)</div>
            <p>Since I ∝ A², amplitude in 2D falls as A ∝ 1/√r, and in 3D as A ∝ 1/r.</p>
            <p>Our ears detect intensity, not power. That's why the same speaker sounds quieter from far away - the intensity at your ear decreased, even though total power output of the speaker didn't change.</p>
          `,
        },
        {
          id: "chapter-4-decibels",
          title: "Decibels - Why Sound Uses a Log Scale",
          html: `
            <p>If you double the number of speakers, the sound gets louder - but you don't hear it as twice as loud. Human hearing compresses big differences into smaller perceived changes. This is why we use a logarithmic scale.</p>
            <div class="formula-box">D - D₀ = 10 × log₁₀(I / I₀)</div>
            <h4>Key facts to memorize:</h4>
            <ul>
              <li>+10 dB = 10× more intense, but sounds only 2× louder</li>
              <li>+3 dB ≈ 2× more intense (since log₁₀(2) ≈ 0.3)</li>
            </ul>
          `,
        },
        {
          id: "chapter-4-two-speakers",
          title: "Worked: Two Speakers Each at 70 dB",
          html: `
            <p>Two identical speakers playing simultaneously. Each alone = 70 dB. Assuming the two waves arrive in phase at the listener so their amplitudes add, what is the combined level?</p>
            <p>Combined amplitude = 2A. Then, since I ∝ A², the intensity ratio is I/I₀ = (2A)²/A² = 4.</p>
            <div class="formula-inline">D - 70 = 10 × log₁₀(4) = 10 × 0.602 ≈ 6 dB</div>
            <div class="formula-inline">Combined = 76 dB</div>
            <p>76 dB is NOT twice as loud as 70 dB. To sound twice as loud, you need 80 dB (+10 dB). So two speakers sounding together doesn't even come close to sounding twice as loud as one.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-5",
      number: "05",
      title: "Chapter 5 - The Doppler Effect",
      plainText: `
Chapter 5 The Doppler Effect.
The Hook That Classic Ambulance Sound.
The observed frequency changes when source and observer are moving relative to each other.
Toward observer squeezes wavelength and raises frequency. Away stretches wavelength and lowers frequency.
Moving source formula: f_observed = (v / (v +/- v_source)) x f_source. Toward observer uses minus in denominator. Away uses plus.
Full formula with moving observer: f_observed = ((v +/- v_observer) / (v ∓ v_source)) x f_source.
Observer toward source uses plus in numerator. Away uses minus.
Worked example: v_s = 50 m/s, f_s = 50 Hz, sound speed v = 350 m/s. Forward wavelength 6 m gives 58.3 Hz. Backward wavelength 8 m gives 43.75 Hz.
The original setup also asks you to compare those wavelengths to the stationary value lambda = 7 m.
      `.trim(),
      sections: [
        {
          id: "chapter-5-hook",
          title: "The Hook - That Classic Ambulance Sound",
          html: `
            <p>An ambulance passes you at full speed. As it approaches: high-pitched wail. As it passes and moves away: the pitch drops noticeably. The siren's actual frequency never changed. What changed is your perception - and it's completely explained by physics.</p>
            <p>The Doppler Effect: the observed frequency of a wave changes when the source and observer are moving relative to each other.</p>
          `,
        },
        {
          id: "chapter-5-intuition",
          title: "Why It Happens - Intuition First",
          html: `
            <p>Imagine the ambulance emitting crests at regular intervals. When the ambulance moves toward you, each successive crest is emitted from a position slightly closer to you than the last. So the crests are squeezed together - shorter wavelength - which means higher frequency for you.</p>
            <p>When the ambulance moves away, each crest is emitted from farther away. The crests are stretched out - longer wavelength - lower frequency.</p>
            <div class="formula-inline">λ_forward &lt; λ_stationary &lt; λ_backward</div>
          `,
        },
        {
          id: "chapter-5-moving-source",
          title: "The Formula - Moving Source",
          html: `
            <div class="formula-box">f_observed = (v / (v ± v_source)) × f_source</div>
            <h4>Sign convention - get this right:</h4>
            <ul>
              <li>Source moving TOWARD observer → use MINUS in denominator → smaller denominator → f_observed is HIGHER</li>
              <li>Source moving AWAY from observer → use PLUS in denominator → larger denominator → f_observed is LOWER</li>
            </ul>
            <p>Sanity check: if source is stationary (v_source = 0), you get f_observed = f_source. Correct!</p>
          `,
        },
        {
          id: "chapter-5-full-formula",
          title: "The Full Formula - Moving Observer Too",
          html: `
            <div class="formula-box">f_observed = ((v ± v_observer) / (v ∓ v_source)) × f_source</div>
            <p><strong>For the observer:</strong></p>
            <ul>
              <li>Observer moving TOWARD source → use PLUS in numerator (higher f)</li>
              <li>Observer moving AWAY from source → use MINUS in numerator (lower f)</li>
            </ul>
            <p><strong>For the source:</strong> use MINUS in the denominator when the source moves toward the observer, and PLUS when it moves away.</p>
            <p>Is it symmetric? NO. A source moving toward a stationary observer gives a different frequency than a stationary source with an observer moving toward it at the same speed. The formulas are NOT the same - test a number and you'll see.</p>
          `,
        },
        {
          id: "chapter-5-worked-example",
          title: "Worked Example - Ambulance Problem (FNT 2)",
          html: `
            <div class="problem-prompt">
              <p><strong>Setup:</strong> Consider an ambulance racing towards an accident at speed v = 50 m/s. The ambulance is equipped with a siren that emits a sine wave with frequency f = 50 Hz. At time t = 0 s, it is exactly halfway between two observers (Silas and Eppie), as shown in Figure 1 below. Furthermore, at t = 0 s, the siren is emitting a crest.</p>
              <div class="concept-gallery">
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter5-doppler-setup.png" alt="Ambulance halfway between Silas and Eppie at t equals 0 seconds" />
                  <figcaption>Figure 1 from the PDF sets up the original ambulance position.</figcaption>
                </figure>
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter5-doppler-motion.png" alt="Ambulance shifted forward after a short time interval" />
                  <figcaption>Figure 2 shows the source after moving forward, which is what squeezes the forward wavelength.</figcaption>
                </figure>
              </div>
              <ol>
                <li>What is the distance, x, that the ambulance has traveled between t = 0 s and t = 0.02 s?</li>
                <li>If the ambulance siren was emitting a crest at time t = 0, what is the siren doing at time t = 0.02 s? Is it emitting a crest or trough, or is it somewhere else in the cycle? How do you know?</li>
                <li>If sound travels in the air at 350 m/s, how far has the crest that was emitted at time t = 0 s traveled at time t = 0.02 s? Where is the t = 0 s crest that was emitted forward towards Eppie at time t = 0.02 s? Where is the t = 0 s crest that was emitted backwards towards Silas at time t = 0.02 s?</li>
                <li>Recall that the wavelength of a wave is defined to be the distance between successive crests. Based on your answers above, what is the wavelength of the wave traveling forward towards Eppie? What is the wavelength of the wave traveling backward towards Silas?</li>
                <li>How do your answers compare to the wavelength you would calculate using the equation v = λf (i.e., the wavelength observed if the ambulance were stationary)?</li>
              </ol>
            </div>
            <h4>1 - Ambulance displacement</h4>
            <div class="formula-inline">x = v<sub>s</sub>t = 50 × 0.02 = 1 m</div>
            <h4>2 - What is the siren doing at t = 0.02 s?</h4>
            <p>The siren completes f × t = 50 × 0.02 = 1 full cycle, so at t = 0.02 s it is emitting another crest.</p>
            <h4>3 - Where is the original crest?</h4>
            <div class="formula-inline">distance = vt = 350 × 0.02 = 7 m</div>
            <p>So the crest emitted at t = 0 has moved 7 m away from the original position in every direction, while the new crest is emitted from the ambulance's shifted position.</p>
            <h4>4 - Forward and backward wavelengths</h4>
            <p>Toward Eppie, the new crest starts 1 m closer to the old crest, so the wavelength is shorter. Toward Silas, the new crest starts 1 m farther away, so the wavelength is longer.</p>
            <div class="formula-inline">λ<sub>forward</sub> = 7 - 1 = 6 m</div>
            <div class="formula-inline">λ<sub>backward</sub> = 7 + 1 = 8 m</div>
            <div class="formula-inline">λ<sub>stationary</sub> = v / f = 350 / 50 = 7 m</div>
            <p>So the moving source compresses the forward wavelength below 7 m and stretches the backward wavelength above 7 m.</p>
            <h4>5 - Observed frequencies</h4>
            <div class="formula-inline">f_Eppie = v / λ<sub>forward</sub> = 350 / 6 ≈ 58.3 Hz</div>
            <div class="formula-inline">f_Silas = v / λ<sub>backward</sub> = 350 / 8 = 43.75 Hz</div>
            <p>Eppie hears the higher pitch because the ambulance is moving toward her. Silas hears the lower pitch because the ambulance is moving away from him.</p>
            <p>Verify with the Doppler formulas:</p>
            <div class="formula-inline">f_Eppie = (350 / (350 - 50)) × 50 = (350/300) × 50 ≈ 58.3 Hz</div>
            <div class="formula-inline">f_Silas = (350 / (350 + 50)) × 50 = (350/400) × 50 = 43.75 Hz</div>
          `,
        },
      ],
    },
    {
      id: "chapter-6",
      number: "06",
      title: "Chapter 6 - Superposition and Interference",
      plainText: `
Chapter 6 Superposition and Interference.
The Hook When Waves Collide.
Superposition principle: y_total(x,t) = y1(x,t) + y2(x,t).
Constructive interference phase difference 0, 2pi, 4pi. Destructive interference pi, 3pi, 5pi. Partial is anything else.
Phase chart method leads to Delta Phi = -2pi Delta x / lambda + Delta phi0.
Constructive: Delta x = n lambda - (Delta phi0 lambda)/(2pi).
Destructive: Delta x = (n + 1/2) lambda - (Delta phi0 lambda)/(2pi).
If Delta phi0 = 0 then constructive Delta x = n lambda and destructive Delta x = (n + 1/2) lambda.
Pond problem: Bob is 4 m from An and 2 m from Carla while An and Carla are 3 m apart.
If Bob is the source and T = 4/3 s, then lambda = 4 m.
If An and Carla are the sources and want constructive interference at Bob, the path difference is |4 - 2| = 2 m = n lambda, so possible wavelengths are 2 m, 1 m, 2/3 m, and so on.
      `.trim(),
      sections: [
        {
          id: "chapter-6-hook",
          title: "The Hook - When Waves Collide",
          html: `
            <p>Two speakers aimed at the same spot. One makes the air push toward you; the other pushes at exactly the same moment. The combined push is double. Now flip one speaker: one pushes while the other pulls - the net effect is zero. Dead silence at a specific point, even though both speakers are blasting. That's interference.</p>
          `,
        },
        {
          id: "chapter-6-superposition",
          title: "The Superposition Principle",
          html: `
            <div class="formula-box">y_total(x, t) = y_1(x, t) + y_2(x, t)</div>
            <p>The displacements add algebraically - that's it. No special interaction between waves. They pass through each other and continue unchanged.</p>
          `,
        },
        {
          id: "chapter-6-types",
          title: "Three Types of Interference",
          html: `
            <p>The table below assumes the two waves have the same amplitude, which is why the extremes come out cleanly as 2A and 0.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Phase Difference ΔΦ</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>ΔΦ = 0, 2π, 4π, ... (n × 2π)</td>
                  <td>Max amplitude (2A for equal amplitudes). Crests align.</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = π, 3π, 5π, ... ((2n+1) × π)</td>
                  <td>Zero amplitude only for equal amplitudes. Otherwise you get the smallest possible result, not total cancellation.</td>
                </tr>
                <tr>
                  <td>Partial</td>
                  <td>Anything else</td>
                  <td>For equal amplitudes, the result lies between 0 and 2A.</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "chapter-6-phase-chart",
          title: "The Phase Chart Method",
          html: `
            <p>This is the systematic tool for interference problems. Build a chart like this:</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two speakers with two different path lengths to the observer" />
              <figcaption>The two-speaker setup from DL3 is the physical picture behind the path-difference terms in the phase chart.</figcaption>
            </figure>
            <table class="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2πt / T (time term)</th>
                  <th>-2πx / λ (pos term)</th>
                  <th>φ₀</th>
                  <th>Total Phase Φ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wave 1</td>
                  <td>same for both</td>
                  <td>-2πx₁ / λ</td>
                  <td>φ₁</td>
                  <td>Φ₁</td>
                </tr>
                <tr>
                  <td>Wave 2</td>
                  <td>same for both</td>
                  <td>-2πx₂ / λ</td>
                  <td>φ₂</td>
                  <td>Φ₂</td>
                </tr>
                <tr>
                  <td>Difference</td>
                  <td>0 (cancels out)</td>
                  <td>-2πΔx / λ</td>
                  <td>Δφ₀</td>
                  <td>ΔΦ = C / D / P?</td>
                </tr>
              </tbody>
            </table>
            <p>Key insight: the time term cancels in the difference (both waves exist at the same time at the same point). What remains: path length difference and phase constant difference.</p>
            <div class="formula-inline">ΔΦ = -2π(Δx)/λ + Δφ₀</div>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-wave-pair-a.png" alt="One pair of interference comparison waves from DL3" />
                <figcaption>One worksheet case showing how the two waves can line up differently at x₁ and x₂.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-wave-pair-b.png" alt="Another pair of interference comparison waves from DL3" />
                <figcaption>A second case that changes the phase relationship and therefore the interference result.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "chapter-6-conditions",
          title: "Conditions for Constructive and Destructive",
          html: `
            <p><strong>Constructive</strong> (ΔΦ = n × 2π): Δx = nλ - (Δφ₀ × λ)/(2π)</p>
            <p><strong>Destructive</strong> (ΔΦ = (2n+1) × π): Δx = (n + 1/2)λ - (Δφ₀ × λ)/(2π)</p>
            <p><strong>Special case:</strong> same phase constants (Δφ₀ = 0):</p>
            <ul>
              <li>Constructive: Δx = nλ (path difference is a whole number of wavelengths)</li>
              <li>Destructive: Δx = (n + 1/2)λ (path difference is a half-integer wavelength)</li>
            </ul>
          `,
        },
        {
          id: "chapter-6-pond-problem",
          title: "Superposition in 2D - The Pond Problem",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem:</strong> Three people (An, Bob, and Carla) are in a very still pond. Bob generates waves by moving up and down in the water. The speed of water waves in this pond is 3 m/s.</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter6-pond-problem.png" alt="Pond problem diagram with An, Bob, and Carla distances" />
                <figcaption>The DL3 figure gives the actual geometry: Bob-An is 4 m, Bob-Carla is 2 m, and An-Carla is 3 m.</figcaption>
              </figure>
              <ol>
                <li>Suppose it takes Bob 4/3 seconds to travel through a cycle. Determine the wavelength of the resulting waves and use the wavefront representation to draw in the wave crests and troughs generated by Bob on your board. Label the wavelength on your sketch.</li>
                <li>Compare the motion of An and Carla, due to waves generated by Bob. Be as detailed as possible. (i.e. Do they move up and down at the same rate? Are they both at a crest at the same time?)</li>
                <li>The group allows the water to become calm, and then An and Carla move up and down with the same frequency as each other (different from Bob&rsquo;s in parts 1 and 2), starting their motion at the same instant at the same point in the cycle. They wish to team up so that, after they have been bobbing for a while, a wave crest from each person always arrives at Bob at the same time. With what frequency should they move? (Note that more than one correct answer is possible, your group only needs to find one possibility!) What type of interference is Bob experiencing?</li>
                <li>Use the wavefront representation to draw in the wave crests and troughs generated by An and by Carla. Do this on a different sketch than you used for questions 1) and 2).</li>
                <li>Describe Bob&rsquo;s motion in a sentence or two (no equation necessary). How does his motion differ from how it would be if only Carla were making waves?</li>
              </ol>
            </div>
            <h4>1 - Bob as the source</h4>
            <div class="formula-inline">λ = vT = 3 × (4/3) = 4 m</div>
            <p>So Bob's crests are 4 m apart, and troughs sit halfway between successive crests.</p>
            <h4>2 - An and Carla responding to Bob</h4>
            <p>Both observers move with the same frequency as Bob's wave because they are being driven by the same source. But they are not in the same phase, because Bob-An and Bob-Carla are different distances.</p>
            <div class="formula-inline">Δx = |4 - 2| = 2 m = λ/2</div>
            <p>That means An and Carla are out of phase by π for Bob's original wave: when one is near a crest, the other is near a trough.</p>
            <h4>3 - An and Carla as the sources</h4>
            <p>For Bob to receive crests from An and Carla at the same time, the path difference from the two sources to Bob must be an integer number of wavelengths:</p>
            <div class="formula-inline">Δx = |4 - 2| = 2 m = nλ</div>
            <div class="formula-inline">λ = 2/n</div>
            <p>Possible wavelengths are 2 m, 1 m, 2/3 m, and so on.</p>
            <h4>4 - Allowed driving frequencies and interference type</h4>
            <div class="formula-inline">f = v/λ = 3 / (2/n) = 1.5n Hz</div>
            <p>So possible frequencies are 1.5 Hz, 3.0 Hz, 4.5 Hz, and so on. Those choices make the interference at Bob constructive.</p>
            <h4>5 - Bob's motion</h4>
            <p>With both An and Carla timed this way, Bob gets a larger oscillation than he would from either one alone because the two arriving disturbances reinforce each other instead of partially canceling.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-7",
      number: "07",
      title: "Chapter 7 - Core Formula Reference (DL 1-3)",
      plainText: `
Chapter 7 Core Formula Reference for DL1 to DL3.
v = lambda f = lambda/T wave speed.
f = 1/T frequency inverse of period.
y(x,t) = A sin(2pi t/T +/- 2pi x/lambda + phi0) full wave equation.
I proportional to A^2 intensity proportional to amplitude squared.
I proportional to 1/r^2 in 3D and 1/r in 2D.
D - D0 = 10 log10(I/I0) decibel definition.
f_obs = v/(v +/- v_s) x f_s for moving source.
f_obs = (v +/- v_o)/(v ∓ v_s) x f_s for moving source and observer.
Delta Phi = -2pi Delta x/lambda + Delta phi0 phase difference.
Constructive Delta Phi = 2npi. Destructive Delta Phi = (2n+1)pi.
      `.trim(),
      sections: [
        {
          id: "chapter-7-reference",
          title: "Core Formula Reference (DL 1-3)",
          html: `
            <p>This is the compact DL1-DL3 subset. For the full DL1-DL5 formula sheet, use Chapter 12.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>What it means</th>
                  <th>Watch out</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>v = λf = λ/T</td>
                  <td>Wave speed = wavelength × frequency</td>
                  <td>v depends on medium; f on source</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency is inverse of period</td>
                  <td>Units of f are Hz (s⁻¹)</td>
                </tr>
                <tr>
                  <td>y(x,t) = A sin(2πt/T ± 2πx/λ + φ₀)</td>
                  <td>Full wave equation</td>
                  <td>Minus = right-moving; Plus = left</td>
                </tr>
                <tr>
                  <td>I ∝ A²</td>
                  <td>Intensity proportional to amplitude squared</td>
                  <td>Double A → 4× intensity</td>
                </tr>
                <tr>
                  <td>I ∝ 1/r² (3D), 1/r (2D)</td>
                  <td>Inverse square/linear law</td>
                  <td>No dissipation assumed</td>
                </tr>
                <tr>
                  <td>D - D₀ = 10 log₁₀(I/I₀)</td>
                  <td>Decibel definition</td>
                  <td>+10 dB = 10× intensity</td>
                </tr>
                <tr>
                  <td>f_obs = v/(v ± v_s) × f_s</td>
                  <td>Doppler, moving source</td>
                  <td>Minus = source toward observer</td>
                </tr>
                <tr>
                  <td>f_obs = (v ± v_o)/(v ∓ v_s) × f_s</td>
                  <td>Doppler, source + observer moving</td>
                  <td>Observer toward: plus in numerator; source toward: minus in denominator</td>
                </tr>
                <tr>
                  <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                  <td>Phase difference from two sources</td>
                  <td>Key to all interference problems</td>
                </tr>
                <tr>
                  <td>Constructive: ΔΦ = 2nπ</td>
                  <td>In-phase condition</td>
                  <td>n = 0, ±1, ±2, ...</td>
                </tr>
                <tr>
                  <td>Destructive: ΔΦ = (2n+1)π</td>
                  <td>Anti-phase condition</td>
                  <td>n = 0, ±1, ±2, ...</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
    {
      id: "chapter-8",
      number: "08",
      title: "Chapter 8 - Interference Scenarios & Simplified Phase Charts",
      plainText: `
Chapter 8 Interference Scenarios and Simplified Phase Charts DL4.
Turn a speaker backwards and the reversed wiring creates a fixed phase difference of pi.
Simplified phase charts keep only the changing terms: path difference and fixed phase constant difference.
Core relation: Delta Phi = -2pi Delta x / lambda + Delta phi0.
Scenario 1 same spot and reversed leads gives destructive interference.
Scenario 2 one speaker forward by lambda/2 gives destructive interference.
Scenario 3 lambda/2 apart and reversed leads gives constructive interference because the two phase shifts cancel.
Scenario 4 one speaker forward by lambda gives constructive interference.
Walking around lambda-separated speakers changes path difference continuously and produces loud quiet loud bands.
KDVS radio antennas add a fixed phase constant difference of pi/2 before path difference is even considered.
      `.trim(),
      sections: [
        {
          id: "chapter-8-hook",
          title: "The Hook - Turn a Speaker Backwards",
          html: `
            <p>Imagine two identical speakers playing the same note side by side. Swap the red and black wires on one speaker. The cone that used to push air toward you now pulls it away at exactly the same moment the other speaker pushes.</p>
            <p>The two waves perfectly cancel. Total silence from two working speakers. That's destructive interference in action, and it's the clearest demo of what phase difference really means.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter8-speaker-scenario.png" alt="Speaker interference scenarios from DL4" />
              <figcaption>The DL4 speaker setups make the path-difference and wiring-difference cases concrete before you touch the algebra.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-8-simplified-phase-chart",
          title: "The Simplified Phase Chart",
          html: `
            <p>You don't always need all three columns. When two waves exist at the same point at the same time, the time-term difference is zero. What matters is:</p>
            <div class="formula-box">ΔΦ = -2π(Δx)/λ + Δφ₀</div>
            <p>The simplified chart strips the problem down to just what changes between the two waves:</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter8-simplified-phase-chart.png" alt="Simplified phase chart from DL4" />
              <figcaption>This is the compact version of the phase chart: path contribution, wiring contribution, then total phase difference.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-8-four-scenarios",
          title: "The Four Speaker Scenarios - Know These Cold",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Setup</th>
                  <th>-2πΔx/λ</th>
                  <th>Δφ₀</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Same spot, leads reversed</td>
                  <td>0</td>
                  <td>π</td>
                  <td>Destructive - near silence</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>One speaker pushed forward λ/2</td>
                  <td>-π</td>
                  <td>0</td>
                  <td>Destructive - quiet</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>λ/2 apart and leads reversed</td>
                  <td>-π</td>
                  <td>π</td>
                  <td>Constructive - the two phase shifts cancel</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>One speaker pushed forward λ</td>
                  <td>-2π</td>
                  <td>0</td>
                  <td>Constructive - loud</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Common trap:</strong> Scenario 3 looks destructive twice, but the contributions add to zero phase difference: ΔΦ = -π + π = 0, so the result is constructive.
            </div>
          `,
        },
        {
          id: "chapter-8-walking-around",
          title: "Walking Around the Speakers - What You Hear",
          html: `
            <p>In Scenario 4, the speakers are λ apart. When you walk around them, the path length difference changes continuously.</p>
            <p>As Δx sweeps from 0 to λ/2 to λ, you hear loud, then quiet, then loud again. You're literally scanning through the interference pattern in space.</p>
            <p>That is the physical intuition behind interference bands: different points in space correspond to different path differences, which means different values of ΔΦ.</p>
          `,
        },
        {
          id: "chapter-8-kdvs",
          title: "Problem Start - KDVS Radio Antennas",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem start:</strong> Suppose KDVS, the campus radio station, were to transmit from two antennas, each set a distance x from the North-South direction (see figure). Also, suppose there is a phase constant difference, Δϕ₀, associated with the waves coming from each antenna such that each maximum from antenna A is emitted a time T/4 earlier than those of antenna B (the words an electrical engineer might use for this are “the signal from A is π/2 ahead of the signal from antenna B”).</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter8-kdvs-antennas.png" alt="KDVS radio antenna figure showing antennas A and B placed symmetrically about the north-south direction" />
                <figcaption>The original DL4 KDVS figure: antennas A and B sit symmetrically about the north-south line, each a distance x from center.</figcaption>
              </figure>
              <p><strong>Exact DL questions:</strong></p>
              <ol>
                <li>How does the phase constant difference affect the signal received from both antennas?</li>
                <li>Which quantities affect the type of interference?</li>
                <li>Does the type of interference depend on where the observer is located?</li>
              </ol>
            </div>
            <h4>1 - Translate the timing lead into phase language</h4>
            <p>If antenna A is one-quarter period ahead of antenna B, then the fixed phase constant difference is:</p>
            <div class="formula-inline">Δφ₀ = 2π(T/4)/T = π/2</div>
            <h4>2 - Combine source phase and path difference</h4>
            <p>The observer cares about both the source offset and the extra distance one wave travels compared with the other.</p>
            <div class="formula-box">ΔΦ = -2πΔx/λ + π/2</div>
            <h4>3 - Decide what happens at a location</h4>
            <p>Constructive interference happens when ΔΦ = 2nπ. Destructive interference happens when ΔΦ = (2n + 1)π. Partial interference is everything in between.</p>
            <p>Because Δx changes with observer position, the interference pattern changes with observer position too. The source phase difference shifts the whole pattern, but location still matters.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-9",
      number: "09",
      title: "Chapter 9 - Beats: Superposition of Different Frequencies",
      plainText: `
Chapter 9 Beats Superposition of Different Frequencies DL4.
Beats happen when two close frequencies drift in and out of phase.
The beat period is the time for loud quiet loud.
Beat formulas: f_beat = |f1 - f2| and f_carrier = (f1 + f2)/2.
Phase-chart derivation uses only the time column because the speakers are at the same place.
Reading the beat graphs shows a slow envelope around a faster carrier oscillation.
Challenge problem: Angharad between two bagpipers hears beat frequency 4 Hz and carrier frequency 260 Hz.
Running toward the 258 Hz piper and away from the 262 Hz piper at about 2.62 m/s makes the heard frequencies equal.
      `.trim(),
      sections: [
        {
          id: "chapter-9-hook",
          title: "The Hook - The Tuning Trick",
          html: `
            <p>Guitar players use beats to tune. Play the same note on two strings. If they're slightly out of tune, you hear a slow pulsing sound: wah-wah-wah.</p>
            <p>The closer the strings are in frequency, the slower the pulse. When the pulse disappears completely, they're in tune. That pulse is beats.</p>
          `,
        },
        {
          id: "chapter-9-what-happening",
          title: "What's Actually Happening",
          html: `
            <p>Two waves with slightly different frequencies start in phase, so the sound is loud. As time goes on, they slowly drift out of phase, so the sound becomes quiet. Then they drift back into phase again.</p>
            <p>The loud-quiet-loud cycle is the beat period. What you hear is a carrier tone whose amplitude pulses inside a slower envelope.</p>
          `,
        },
        {
          id: "chapter-9-derivation",
          title: "Deriving the Beat Frequency - Phase Chart Method",
          html: `
            <p>Put both speakers at the same location, with the same phase constant, but different periods T₁ and T₂. At t = 0 they interfere constructively, so ΔΦ = 0.</p>
            <p>After one beat period T<sub>b</sub>, they are back in phase again, so ΔΦ = 2π:</p>
            <div class="formula-inline">ΔΦ = 2πT<sub>b</sub>/T₁ - 2πT<sub>b</sub>/T₂ = 2π</div>
            <div class="formula-inline">T<sub>b</sub>(1/T₁ - 1/T₂) = 1</div>
            <div class="formula-inline">T<sub>b</sub> = 1/|f₁ - f₂|</div>
            <div class="formula-box">f<sub>beat</sub> = |f₁ - f₂| &nbsp;&nbsp;&nbsp; f<sub>carrier</sub> = (f₁ + f₂) / 2</div>
          `,
        },
        {
          id: "chapter-9-reading-graphs",
          title: "Reading the Beat Graphs",
          html: `
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two close-frequency wave graphs from DL4" />
                <figcaption>Figure 1 shows the two nearby frequencies that gradually drift in and out of phase.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope graph from DL4" />
                <figcaption>Figure 2 shows their sum: a fast carrier oscillation wrapped in a slower beat envelope.</figcaption>
              </figure>
            </div>
            <p>In the DL figure, the red curve has T = 4 s, so f = 0.25 Hz. The blue curve has T = 3.2 s, so f ≈ 0.313 Hz. That gives a beat period of about 16 s.</p>
            <p>The tight oscillations inside the envelope are the carrier frequency, which is the average of the two source frequencies.</p>
          `,
        },
        {
          id: "chapter-9-challenge",
          title: "Challenge Problem - Beats + Doppler Together",
          html: `
            <div class="problem-prompt">
              <p><strong>Challenge:</strong> Angharad stands midway between two out-of-tune bagpipers. One is playing a note with frequency f₁ = 258 Hz, while the other is playing a note with frequency f₂ = 262 Hz. The speed of sound in the air is 340 m/s.</p>
              <ol>
                <li>What is the beat frequency Angharad hears? What is the carrier frequency she hears?</li>
                <li>If Angharad does not want to hear beats, how fast and in which direction should she run so that the frequencies she hears from the two bagpipers are the same? What is this frequency she hears?</li>
              </ol>
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Angharad standing midway between two bagpipers playing 258 and 262 hertz notes" />
              <figcaption>The DL4 bagpiper challenge itself is text-only, so this support diagram makes the midpoint setup and running direction visual.</figcaption>
            </figure>
            <h4>1 - Beat frequency and carrier frequency</h4>
            <div class="formula-inline">f<sub>beat</sub> = 262 - 258 = 4 Hz</div>
            <div class="formula-inline">f<sub>carrier</sub> = (258 + 262) / 2 = 260 Hz</div>
            <h4>2 - Which way should she run?</h4>
            <p>She wants the lower note to shift up and the higher note to shift down, so she must run toward the 258 Hz piper and away from the 262 Hz piper.</p>
            <div class="formula-inline">f&rsquo;<sub>258</sub> = ((340 + u) / 340) × 258</div>
            <div class="formula-inline">f&rsquo;<sub>262</sub> = ((340 - u) / 340) × 262</div>
            <p>Set them equal so the beats disappear:</p>
            <div class="formula-inline">258(340 + u) = 262(340 - u)</div>
            <div class="formula-inline">520u = 4 × 340</div>
            <div class="formula-inline">u ≈ 2.62 m/s</div>
            <h4>3 - Common heard frequency</h4>
            <div class="formula-inline">f&rsquo; ≈ ((340 + 2.62) / 340) × 258 ≈ 260 Hz</div>
            <p>So she hears a single tone near 260 Hz once the Doppler shifts cancel the original mismatch.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-10",
      number: "10",
      title: "Chapter 10 - Diffraction and Young's Double Slit Interference",
      plainText: `
Chapter 10 Diffraction and Young's Double Slit Interference DL5.
Huygens's principle says a sufficiently small opening can act approximately like a new point source because each point on a wavefront emits secondary wavelets.
Wavefront model shows wavelength and phase relationships; ray model emphasizes direction of propagation.
Young's experiment gives decisive evidence for the wave behavior of light because two slits produce alternating bright and dark stripes.
Double-slit geometry gives path difference Delta x = d sin theta.
Constructive condition: d sin theta = n lambda. Destructive condition: d sin theta = (n + 1/2) lambda.
Small angle approximation gives d = lambda D / Delta y for the first bright fringe spacing.
Red light spreads farther than blue because longer wavelength gives a larger angle.
      `.trim(),
      sections: [
        {
          id: "chapter-10-hook",
          title: "The Hook - Huygens's Principle",
          html: `
            <p>Plane waves hit a wall with a tiny hole. On the other side, you don't see a narrow beam. You see circular waves spreading in all directions, as if the hole has become a brand-new point source.</p>
            <p>That is Huygens's principle: every point on a wavefront acts like a source of secondary wavelets, and a sufficiently small opening behaves approximately like a new point source.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-huygens-hole.png" alt="Plane waves passing through a small opening and spreading out as circular waves" />
              <figcaption>This DL5 diagram is the visual heart of diffraction: the hole re-emits the disturbance in all directions.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-10-wavefront-ray",
          title: "Wavefront Model vs. Ray Model",
          html: `
            <h4>Wavefront Model</h4>
            <p>Shows wavelength and phase relationships. Solid lines can represent crests, dashed lines troughs, and the spacing between crests gives λ.</p>
            <h4>Ray Model</h4>
            <p>Emphasizes direction of propagation. Rays are drawn perpendicular to the wavefronts and point along the direction the wave travels.</p>
            <p>The ray model is simpler, but it does not show phase or amplitude directly, which is why interference problems still need the wavefront picture.</p>
          `,
        },
        {
          id: "chapter-10-young",
          title: "Young's Double Slit - Light Shows Wave Behavior",
          html: `
            <p>If light behaved only like classical particles, two slits would produce two bright patches on a wall and little else. If light behaves as a wave, each slit becomes a new source and the two waves interfere.</p>
            <p>What Young observed was an alternating pattern of bright and dark stripes across the screen. That pattern gave decisive evidence for the wave character of light.</p>
          `,
        },
        {
          id: "chapter-10-geometry",
          title: "The Geometry - Deriving d sin θ = nλ",
          html: `
            <p>Two slits are separated by a distance d, and the screen is far away at distance D. A point on the screen at angle θ receives waves that traveled different distances from the two slits.</p>
            <p>The path length difference is:</p>
            <div class="formula-box">Δx = d sin θ</div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Young's double slit geometry with d, D, theta, and fringe spacing" />
              <figcaption>The DL5 geometry figure links the picture on the screen to the path-length difference that creates interference.</figcaption>
            </figure>
            <div class="formula-inline">Constructive: d sin θ = nλ</div>
            <div class="formula-inline">Destructive: d sin θ = (n + 1/2)λ</div>
          `,
        },
        {
          id: "chapter-10-small-angle",
          title: "The Small Angle Approximation",
          html: `
            <p>When the screen is much farther away than the slit spacing, the angle is small enough that sin θ ≈ tan θ ≈ θ.</p>
            <div class="formula-inline">tan θ = Δy / D</div>
            <p>For the first bright spot, n = 1, so:</p>
            <div class="formula-box">d = λD / Δy</div>
            <p>This lets you calculate an impossibly tiny slit separation from the much easier-to-measure fringe spacing on the screen.</p>
          `,
        },
        {
          id: "chapter-10-worked-example",
          title: "Worked Example - Measuring Slit Spacing and Color Spread",
          html: `
            <div class="problem-prompt">
              <p><strong>DL5 application:</strong> We are now going to test what we learned in the previous activity. You will shine light from a single wavelength red He-Ne laser on a &ldquo;wall&rdquo; with two slits in it. Then you will use the known value of the laser wavelength and measurements concerning the position of the bright spots to determine the spacing of the slits.</p>
              <ol>
                <li>Slide the slide horizontally so the laser hits the two-slit pattern. Make sure the laser spot is vertically centered across the slits. You can do this by adjusting the slits while watching the diffraction pattern on the wall. Describe the pattern and make a measurement of the spot separation, Δy.</li>
                <li>Use what you learned in the previous activity to determine the slit separation. The red laser has a wavelength of 633 nm or 6.33 × 10⁻⁷ m.</li>
                <li>Predict what will happen to the distance between the bright fringes when you change the light to blue color. Explain your prediction and run the simulation by changing the color of the laser to blue. If the result is different from what you predicted, explain why.</li>
              </ol>
            </div>
            <h4>1 - Use the small-angle result</h4>
            <div class="formula-inline">d = (633 × 10⁻⁹ × 1.5) / 0.0025 ≈ 3.80 × 10⁻⁴ m</div>
            <p>That is about 0.38 mm: tiny enough to be hard to measure directly, but easy to infer from the interference pattern.</p>
            <h4>2 - Why red spreads more than blue</h4>
            <p>For fixed slit spacing d, the fringe spacing scales with wavelength because Δy = λD/d. Red light has the longer wavelength, so its bright fringes land farther apart. Blue light has the shorter wavelength, so its fringes bunch closer together.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-11",
      number: "11",
      title: "Chapter 11 - Diffraction Gratings and Wave Behavior of Light",
      plainText: `
Chapter 11 Diffraction Gratings and Wave Behavior of Light DL5.
CD rainbows come from diffraction grating behavior.
More slits do not move the bright spots; they sharpen them.
Grating formula: n lambda = d sin theta.
White light spreads because each wavelength satisfies the equation at a different angle.
Thin-film butterfly problem uses reflections from successive layers and asks for the spacing that makes blue light constructive.
Phase-shifted double slit problem places a screen 4 m away and asks how a nonzero phase constant difference moves the bright pattern.
      `.trim(),
      sections: [
        {
          id: "chapter-11-hook",
          title: "The Hook - The Rainbow in a CD",
          html: `
            <p>Hold a CD at an angle under white light and you see a rainbow. The disc acts like a diffraction grating: thousands of microscopic tracks behave like evenly spaced slit sources.</p>
            <p>Red bends the most because it has the longest wavelength. Blue bends the least because it has the shortest.</p>
          `,
        },
        {
          id: "chapter-11-multislit",
          title: "Multiple Slits - Why More Is Sharper",
          html: `
            <p>With two slits, the bright regions are fairly broad. With many slits, the bright regions become much sharper and the dark regions wider, even though the bright spots stay at the same angles.</p>
            <p>That is why diffraction gratings are so good at separating wavelengths: they don't change the angle formula, they make the maxima much more precise.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-multislit-maxima.png" alt="Multi-slit or diffraction grating diagram from DL5" />
              <figcaption>More slits sharpen the peaks instead of moving them, which is the key intuition behind diffraction gratings.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-11-grating-formula",
          title: "The Diffraction Grating Formula",
          html: `
            <div class="formula-box">nλ = d sin θ</div>
            <p>Here n is the order, λ is the wavelength, d is the slit spacing, and θ is the angle from the central maximum.</p>
            <p>The same constructive-interference condition from the double-slit case still governs the bright peaks. The difference is that many slits make those peaks dramatically cleaner.</p>
          `,
        },
        {
          id: "chapter-11-white-light",
          title: "White Light Through a Grating",
          html: `
            <p>White light contains wavelengths from roughly 400 nm to 700 nm. For the first bright order, each wavelength satisfies the grating equation at a different angle.</p>
            <ul>
              <li>Violet is closest to the center because its wavelength is shortest.</li>
              <li>Red is farthest from the center because its wavelength is longest.</li>
            </ul>
            <p>That is why a diffraction grating fans white light out into a rainbow.</p>
          `,
        },
        {
          id: "chapter-11-thin-film",
          title: "Thin Film Interference - The Butterfly Wings Problem",
          html: `
            <div class="problem-prompt">
              <p><strong>Challenge:</strong> The blue morpho butterfly is famous for its iridescent blue wings. This brilliant coloration is produced not by pigmentation but rather by many layers of very thin scales separated by air, as shown in the figure to the right. The scales themselves are much smaller than the wavelength of visible light, and the interference that produces the distinctive coloration is from rays of light reflected off the successive layers of scales.</p>
              <ol>
                <li>Draw one incident ray coming from the light source, as shown in the picture, reflecting straight back from the top scale. Draw another incident ray transmitting through the first scale but reflecting from the second scale.</li>
                <li>The two reflected rays you drew in a) meet at the top scale and interfere. How large must the distance d be for the two reflections of blue light rays to interfere constructively? Blue light has a wavelength of about 450 nm in air. Assume that the reflected rays do not have a phase constant difference.</li>
                <li>What type of interference would result from multiple reflections of blue light from successive layers of scales?</li>
                <li>Will there be some wavelengths of light that interfere destructively?</li>
              </ol>
            </div>
            <figure class="concept-figure concept-figure-small">
              <img src="./assets/figures/chapter11-butterfly-thin-film.svg" alt="Butterfly thin-film diagram showing incoming light reflecting from successive scale layers separated by distance d" />
              <figcaption>The butterfly setup is a layered-reflection picture: one ray reflects from the top scale, and another travels down and back up from the next scale, creating an extra path of <code>2d</code>.</figcaption>
            </figure>
            <h4>1 - The two important rays</h4>
            <p>One ray reflects immediately from the top layer. The other travels down to the next layer, reflects, and then travels back up. That second ray covers an extra round-trip distance inside the layered structure.</p>
            <h4>2 - Constructive blue reflection</h4>
            <p>If there is no extra reflection phase offset, the path length difference is just the extra round trip:</p>
            <div class="formula-inline">Δx = 2d = nλ</div>
            <div class="formula-inline">d = nλ/2</div>
            <p>For the smallest nonzero thickness that works for blue light, choose n = 1:</p>
            <div class="formula-inline">d = 450 nm / 2 = 225 nm</div>
            <h4>3 - What repeated reflections do</h4>
            <p>If many successive layers are built around that same spacing, the blue reflections keep arriving in phase and strongly reinforce one another. That gives the wing its bright structural blue.</p>
            <h4>4 - Other wavelengths</h4>
            <p>Yes. Other wavelengths can satisfy destructive or only partial-interference conditions, which is why thin-film structures can boost one color while suppressing others.</p>
          `,
        },
        {
          id: "chapter-11-phase-shift",
          title: "Problem Start - Double Slit with a Phase Shift",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem start:</strong> You are performing a double slit experiment very similar to the one from DL by shining a laser on two narrow slits spaced by some small distance. However, by placing a piece of crystal in one of the slits, you are able to make it so that the rays of light that travel through the two slits have some non-zero phase constant difference, φ₀,bottom − φ₀,top = Δφ₀. You observe the first bright spot above the center (y = 0) of the interference pattern on a screen placed 4 meters away from the slits. As in DL, you may use the approximations D ≫ d and sin θ ≈ tan θ.</p>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Phase-shifted double slit figure with a shifted fringe pattern" />
                <figcaption>A phase constant shift moves the entire pattern; path length difference then tells you where you are inside that shifted pattern.</figcaption>
              </figure>
              <p><strong>NOTE:</strong> How does the phase constant difference affect the interference pattern? What is the path length difference at the center of the interference pattern? What about the total phase difference? What kind of interference happens at the center? What is the path length difference condition to have a bright spot?</p>
            </div>
            <h4>1 - Start at the center of the screen</h4>
            <p>At y = 0 the two paths are the same length, so Δx = 0. That means the center no longer has zero total phase difference. Instead:</p>
            <div class="formula-inline">ΔΦ_center = Δφ₀</div>
            <p>So if Δφ₀ is not 0 or 2π, the center is not the central bright maximum anymore. The whole interference pattern shifts.</p>
            <h4>2 - Bright-fringe condition with a phase offset</h4>
            <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ₀</div>
            <div class="formula-inline">-2πΔx/λ + Δφ₀ = 2πn</div>
            <div class="formula-inline">Δx = (Δφ₀ - 2πn)λ / (2π)</div>
            <h4>3 - Convert path difference into screen position</h4>
            <p>For a double slit, Δx ≈ d sin θ, so the shifted bright spots satisfy:</p>
            <div class="formula-inline">d sin θ = (Δφ₀ - 2πn)λ / (2π)</div>
            <p>With the small-angle approximation, y ≈ D tan θ ≈ D sin θ. Once you know the first bright spot's y-value, that relation tells you how far the whole pattern moved because of the crystal.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-12",
      number: "12",
      title: "Chapter 12 - Complete Formula Reference (DL 1-5)",
      plainText: `
Chapter 12 Complete Formula Reference DL1 to DL5.
Wave speed v = lambda f = lambda/T.
Frequency f = 1/T.
Full wave equation y = A sin(2pi t/T +/- 2pi x/lambda + phi0).
Intensity scales as amplitude squared.
Inverse distance laws for 2D and 3D waves.
Decibel definition.
Doppler formulas.
Interference phase difference and constructive and destructive conditions.
Beat formulas.
Double-slit formulas and thin-film constructive condition.
      `.trim(),
      sections: [
        {
          id: "chapter-12-reference",
          title: "Complete Formula Reference",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>What it means</th>
                  <th>Watch out</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>v = λf = λ/T</td>
                  <td>Wave speed = wavelength × frequency</td>
                  <td>v is medium-dependent; f is source-dependent</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency = reciprocal of period</td>
                  <td>Units are Hz</td>
                </tr>
                <tr>
                  <td>y = A sin(2πt/T ± 2πx/λ + φ₀)</td>
                  <td>Full 1-D wave equation</td>
                  <td>Minus means right-moving; plus means left-moving</td>
                </tr>
                <tr>
                  <td>I ∝ A²</td>
                  <td>Intensity scales with amplitude squared</td>
                  <td>Double A means 4× intensity</td>
                </tr>
                <tr>
                  <td>I ∝ 1/r² (3D), 1/r (2D)</td>
                  <td>Spreading loss with distance</td>
                  <td>Assumes no dissipation</td>
                </tr>
                <tr>
                  <td>D - D₀ = 10 log₁₀(I/I₀)</td>
                  <td>Decibel scale</td>
                  <td>+10 dB means 10× intensity</td>
                </tr>
                <tr>
                  <td>f_obs = v/(v ± v_s) × f_s</td>
                  <td>Doppler for moving source</td>
                  <td>Use minus when the source moves toward the observer</td>
                </tr>
                <tr>
                  <td>f_obs = (v ± v_o)/(v ∓ v_s) × f_s</td>
                  <td>Doppler with moving observer and source</td>
                  <td>Observer toward source uses plus in the numerator; source toward uses minus in the denominator</td>
                </tr>
                <tr>
                  <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                  <td>Core two-source phase-difference formula</td>
                  <td>This is the whole phase-chart story in one line</td>
                </tr>
                <tr>
                  <td>Constructive: ΔΦ = 2nπ</td>
                  <td>In-phase condition</td>
                  <td>Loud or bright result</td>
                </tr>
                <tr>
                  <td>Destructive: ΔΦ = (2n+1)π</td>
                  <td>Anti-phase condition</td>
                  <td>Quiet or dark result</td>
                </tr>
                <tr>
                  <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                  <td>Beat frequency</td>
                  <td>Always take the absolute value</td>
                </tr>
                <tr>
                  <td>f<sub>carrier</sub> = (f₁ + f₂)/2</td>
                  <td>Carrier frequency</td>
                  <td>This is the pitch you hear inside the envelope</td>
                </tr>
                <tr>
                  <td>Δx = d sin θ</td>
                  <td>Double-slit path length difference</td>
                  <td>d is slit spacing</td>
                </tr>
                <tr>
                  <td>nλ = d sin θ</td>
                  <td>Bright fringes</td>
                  <td>n = 0 is the central maximum</td>
                </tr>
                <tr>
                  <td>(n + 1/2)λ = d sin θ</td>
                  <td>Dark fringes</td>
                  <td>First dark fringe is beside the center</td>
                </tr>
                <tr>
                  <td>d = λD / Δy</td>
                  <td>Find slit spacing from fringe spacing</td>
                  <td>Uses the small-angle approximation</td>
                </tr>
                <tr>
                  <td>2d = nλ</td>
                  <td>Simple constructive thin-film condition</td>
                  <td>Only valid when no extra reflection phase flip matters</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
    {
      id: "chapter-13",
      number: "13",
      title: "Chapter 13 - Textbook Supplement: Sections 8.1-8.6",
      plainText: `
Chapter 13 Textbook Supplement Sections 8.1 to 8.6.
Section 8.1 introduces material waves as disturbances that transfer energy through a medium without transporting the medium itself.
Material waves require both a medium that can be displaced and restoring forces between neighboring particles.
Pulse waves are single disturbances while periodic harmonic waves repeat continuously.
Only transverse waves can be polarized because only they have multiple possible directions of oscillation perpendicular to travel.
Section 8.2 focuses on wave representation through equations, snapshots, time plots, total phase, and fixed phase constant.
The wave equation includes amplitude, wavelength, period, frequency, direction, and phase information.
Section 8.3 treats multi-dimensional waves using wavefronts, rays, sound as a pressure wave, and intensity spreading over larger wavefronts.
Section 8.4 derives Doppler formulas for moving sources, moving observers, and the combined case.
Section 8.5 formalizes superposition and interference using total phase difference, path length difference, and phase constant difference.
Section 8.6 shows that beats come from adding two nearby frequencies, producing a carrier and an envelope.
      `.trim(),
      sections: [
        {
          id: "chapter-13-8-1",
          title: "8.1 - Introduction to Waves",
          html: `
            <p>The LibreTexts section starts from the physical picture underneath the formulas: a wave exists because a medium can be displaced, and once one part is displaced, restoring forces push and pull neighboring parts so the disturbance keeps getting handed forward.</p>
            <p>That is why a wave can move energy through the medium without the medium itself being carried away with it. The particles only wobble around equilibrium; the disturbance is what travels.</p>
            <p>A <strong>pulse wave</strong> is one brief disturbance. A <strong>periodic harmonic wave</strong> repeats continuously and gives us the clean sinusoidal model used all over the rest of the chapter.</p>
            <p>The textbook also formalizes the vocabulary around waves: displacement, equilibrium, amplitude, period, frequency, wavelength, wave speed, and dimensionality.</p>
            <p><strong>Polarization</strong> is the special idea this section adds most clearly. Only transverse waves can be polarized, because only transverse waves can choose among different perpendicular directions to oscillate in. A longitudinal wave oscillates only along the direction of travel, so there is nothing to filter into one plane.</p>
          `,
        },
        {
          id: "chapter-13-8-2",
          title: "8.2 - Wave Representation",
          html: `
            <p>This textbook section is really about becoming fluent at reading a wave from both an equation and a graph. The wave equation is treated like a compact sentence that stores the amplitude, timing, spacing, direction, and starting offset of the wave all at once.</p>
            <div class="formula-box">y(x, t) = A sin(2πt/T ± 2πx/λ + φ₀)</div>
            <p>LibreTexts explicitly contrasts a <strong>snapshot plot</strong> of displacement versus position with a <strong>time plot</strong> of displacement versus time at one position. Snapshot graphs give wavelength. Time graphs give period. You need both to reconstruct the full wave.</p>
            <p>It also leans harder on <strong>total phase</strong>, which tells you exactly where you are in the oscillation cycle:</p>
            <div class="formula-inline">Φ(x, t) = 2πt/T ± 2πx/λ + φ₀</div>
            <p>The fixed phase constant φ₀ is the initial offset for the chosen origin. The sign on the x-term tells the direction: minus means right-moving, plus means left-moving.</p>
            <p>One textbook skill that was missing from the site before is this: from graphs, you can infer not just A, T, and λ, but also the direction of travel and the value of φ₀ by plugging in a known point like a crest, trough, or zero crossing.</p>
          `,
        },
        {
          id: "chapter-13-8-3",
          title: "8.3 - Multi-Dimensional Waves",
          html: `
            <p>This section combines three ideas into one picture: <strong>wavefronts</strong>, <strong>rays</strong>, and <strong>intensity spreading</strong>. Wavefronts connect points in the same phase. Rays point in the direction the energy is moving, and they are perpendicular to the wavefronts.</p>
            <p>The textbook also frames sound more explicitly as a <strong>pressure wave</strong>. Instead of tracking the up-and-down displacement of a rope, you can track how the pressure in the air oscillates above and below atmospheric equilibrium.</p>
            <p>Then comes the energy argument: the source may emit the same total power, but that power spreads over larger and larger wavefronts as the radius grows.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Wave type</th>
                  <th>Wavefront area</th>
                  <th>Intensity</th>
                  <th>Amplitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-D</td>
                  <td>Constant</td>
                  <td>Constant</td>
                  <td>Constant</td>
                </tr>
                <tr>
                  <td>2-D</td>
                  <td>2πr</td>
                  <td>I ∝ 1/r</td>
                  <td>A ∝ 1/√r</td>
                </tr>
                <tr>
                  <td>3-D</td>
                  <td>4πr²</td>
                  <td>I ∝ 1/r²</td>
                  <td>A ∝ 1/r</td>
                </tr>
              </tbody>
            </table>
            <p>Because intensity is proportional to amplitude squared, the amplitude falloff is the square-root version of the intensity falloff. That is why in 3-D, intensity goes like 1/r² while amplitude goes like 1/r.</p>
            <p>So the main textbook contribution here is not a random extra formula. It is the geometry explaining why loudness fades with distance and why wavefronts and rays are such useful tools in two and three dimensions.</p>
          `,
        },
        {
          id: "chapter-13-8-4",
          title: "8.4 - Doppler Effect",
          html: `
            <p>The textbook version of Doppler goes one step farther than the basic DL treatment. It starts with the <strong>moving source</strong>, then handles the <strong>moving observer</strong>, and finally combines both effects into one expression.</p>
            <p>For a moving source, the geometry is the same one you already know: in one source period T, the source moves a distance v<sub>s</sub>T, so the wavelength ahead is compressed and the wavelength behind is stretched.</p>
            <div class="formula-inline">λ<sub>forward</sub> = (v - v<sub>s</sub>) / f<sub>s</sub></div>
            <div class="formula-inline">λ<sub>backward</sub> = (v + v<sub>s</sub>) / f<sub>s</sub></div>
            <p>Then f = v/λ gives the usual moving-source Doppler formula.</p>
            <p>The part that was missing before is the <strong>moving observer</strong> case. There, the wavelength in the medium stays the same, but the observer meets crests faster or slower depending on their own motion.</p>
            <div class="formula-inline">f<sub>o</sub> = ((v ± v<sub>o</sub>) / v) f<sub>s</sub></div>
            <p>Putting both effects together gives the combined formula:</p>
            <div class="formula-box">f<sub>o</sub> = ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>)) f<sub>s</sub></div>
            <p>Use plus in the numerator when the observer moves toward the source, minus when away. Use minus in the denominator when the source moves toward the observer, plus when away.</p>
          `,
        },
        {
          id: "chapter-13-8-5",
          title: "8.5 - Superposition and Interference",
          html: `
            <p>The textbook opens with the superposition principle itself: the total displacement is simply the sum of the individual displacements.</p>
            <div class="formula-inline">y<sub>total</sub> = y₁ + y₂</div>
            <p>From there it builds constructive, destructive, and partial interference using total phase difference. It also makes a cleaner distinction between <strong>path length difference</strong> and <strong>phase constant difference</strong>.</p>
            <div class="formula-inline">Δx = x₂ - x₁</div>
            <div class="formula-inline">ΔΦ = -(2π/λ)Δx + Δφ₀</div>
            <p>That means two sources can interfere differently because one wave traveled farther, because the sources started out out-of-step, or because both effects happen together.</p>
            <p>The trig identity underneath the phase chart for equal-amplitude waves at one point is:</p>
            <div class="formula-box">y<sub>total</sub> = 2A cos(ΔΦ/2) × sin(average phase)</div>
            <p>That front cosine factor controls the effective amplitude. If ΔΦ = 0, the amplitude is 2A. If ΔΦ = π, the amplitude is 0. If ΔΦ = π/2, the result is partial interference.</p>
            <p>So the textbook confirms that the phase chart is not a separate trick. It is just a fast bookkeeping method for the same superposition math.</p>
          `,
        },
        {
          id: "chapter-13-8-6",
          title: "8.6 - Beats",
          html: `
            <p>The beat section explains beats as plain old superposition between two waves whose frequencies are close but not identical. The relative phase drifts slowly, so the sound grows loud, soft, loud, soft in a repeating envelope.</p>
            <div class="formula-inline">f<sub>beat</sub> = |f₁ - f₂|</div>
            <div class="formula-inline">f<sub>carrier</sub> = (f₁ + f₂)/2</div>
            <p>The textbook then derives those formulas from the trig identity for adding two sine waves:</p>
            <div class="formula-inline">y₁ = A sin(2πf₁t), &nbsp; y₂ = A sin(2πf₂t)</div>
            <div class="formula-box">y<sub>total</sub> = 2A cos(π(f₁ - f₂)t) × sin(π(f₁ + f₂)t)</div>
            <p>The cosine factor is the slow envelope. The sine factor is the fast carrier. LibreTexts also spells out a subtle point students miss all the time: the envelope oscillates at half the beat frequency, but one full envelope cycle contains two intensity maxima, so the number of beats you hear per second is still |f₁ - f₂|.</p>
            <p>That is exactly why musicians tune by listening for beats to slow down and disappear.</p>
          `,
        },
        {
          id: "chapter-13-summary",
          title: "What the Textbook Adds",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>DL guide gives you</th>
                  <th>Textbook adds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Introduction to waves</td>
                  <td>Hook, intuition, and core definitions</td>
                  <td>Formal medium/restoring-force picture, periodic-vs-pulse language, and polarization framing</td>
                </tr>
                <tr>
                  <td>Wave representation</td>
                  <td>Reading A, T, λ, and direction from graphs</td>
                  <td>Snapshot vs time plots, total phase, and solving for φ₀ from known points</td>
                </tr>
                <tr>
                  <td>Multi-dimensional waves</td>
                  <td>Wavefronts, rays, and intensity ideas</td>
                  <td>Pressure-wave framing for sound and the geometry behind spreading power</td>
                </tr>
                <tr>
                  <td>Doppler effect</td>
                  <td>Moving-source intuition and worked example</td>
                  <td>Observer-motion formula and the full combined expression</td>
                </tr>
                <tr>
                  <td>Superposition math</td>
                  <td>Phase chart shortcut</td>
                  <td>Explicit path-length plus phase-constant bookkeeping under ΔΦ</td>
                </tr>
                <tr>
                  <td>Beats</td>
                  <td>Phase-drift intuition</td>
                  <td>Carrier-frequency formula and the envelope-versus-beat-frequency distinction</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
  ],
  recap: {
    id: "final-recap",
    title: "Final Recap - The Complete Short Version (DL 1-5)",
    plainText: `
All of Unit 8 in 15 sentences.
1. A wave is a traveling disturbance that carries energy. For mechanical waves, the medium oscillates instead of traveling with it.
2. Transverse = medium moves perpendicular to travel. Longitudinal = parallel.
3. y = A sin(2pi t/T +/- 2pi x/lambda + phi0). Minus means right-moving.
4. Speed v = lambda f. Speed depends on medium. Frequency depends on source. Wavelength depends on both.
5. Intensity falls as 1/r^2 in 3D and amplitude falls as 1/r. Decibels are logarithmic.
6. Doppler effect changes wavelength and therefore observed frequency.
7. Superposition means displacements add. Delta Phi = 2npi gives constructive and odd multiples of pi give destructive.
8. Delta Phi = -2pi Delta x/lambda + Delta phi0, so both path length and wiring matter.
9. Reversing speaker leads makes Delta phi0 = pi.
10. Beats come from nearby frequencies. f_beat = |f1 - f2| and f_carrier = (f1 + f2)/2.
11. Diffraction means waves spread after a small opening or around an obstacle.
12. Bright two-slit fringes satisfy d sin theta = n lambda and dark fringes satisfy d sin theta = (n + 1/2)lambda.
13. Young's experiment gave decisive evidence for the wave behavior of light.
14. More slits sharpen the peaks at the same angles. Grating equation: n lambda = d sin theta.
15. Phase constant shifts move the whole interference pattern.
Waves is a genuinely hard unit because the concepts stack on top of each other. If you worked through all of this, you now have a real map of the territory. The rest is practice problems.
    `.trim(),
    sections: [
      {
        id: "final-recap-10",
        title: "All of Unit 8 in 15 Sentences",
        html: `
          <ol class="long-list">
            <li>A wave is a traveling disturbance that carries energy. For mechanical waves, the medium oscillates instead of traveling with it.</li>
            <li>Transverse = medium moves perpendicular to travel (rope). Longitudinal = parallel (sound).</li>
            <li>The wave equation y = A sin(2πt/T ± 2πx/λ + φ₀) encodes how a 1-D wave evolves. Minus means right-moving.</li>
            <li>Speed v = λf. Speed is medium-dependent. Frequency is source-dependent. Wavelength depends on both.</li>
            <li>In 3D, intensity falls as 1/r² and amplitude falls as 1/r. Decibels are logarithmic.</li>
            <li>Doppler effect shifts observed frequency by compressing or stretching wavelength.</li>
            <li>Superposition means displacements add algebraically. ΔΦ = 2nπ gives constructive and odd multiples of π give destructive.</li>
            <li>ΔΦ = -2πΔx/λ + Δφ₀, so both path difference and fixed phase difference matter.</li>
            <li>Reversing speaker leads makes Δφ₀ = π. Combined with path offsets, it can flip destructive into constructive.</li>
            <li>Beats come from two nearby frequencies. f<sub>beat</sub> = |f₁ - f₂| and f<sub>carrier</sub> = (f₁ + f₂)/2.</li>
            <li>Diffraction means waves spread after passing through a small opening or around an obstacle. Huygens's principle explains why.</li>
            <li>Two-slit bright fringes satisfy d sin θ = nλ. Dark fringes satisfy d sin θ = (n + 1/2)λ.</li>
            <li>Young's experiment gave decisive evidence for the wave behavior of light because it produced alternating bright and dark interference bands.</li>
            <li>More slits sharpen the peaks at the same angles. Diffraction gratings use that to separate wavelengths.</li>
            <li>Phase constant shifts move the whole pattern. Path length tells you where you are inside the pattern.</li>
          </ol>
        `,
      },
      {
        id: "final-recap-close",
        title: "Closing Note",
        html: `
          <p>Waves is a genuinely hard unit because the ideas stack on top of each other and the math can hide whether the physical picture is actually clear. If you worked through all of this, you now have a real map of the territory. The rest is practice problems.</p>
        `,
      },
    ],
  },
};

// Legacy copy kept as reference while the scoped Quiz 2 rewrite settles.
const QUIZ_2_GUIDE_LEGACY = {
  title: "Quiz 2 Study Guide",
  subtitle: "DL3-DL6 | Interference, diffraction, standing waves, and quantum ideas",
  chapters: [
    {
      id: "quiz2-chapter-1",
      number: "01",
      title: "Start Here",
      plainText: `
Quiz 2 covers the wave-equation logic from DL3, the phase-difference and beats ideas from DL4, the diffraction and double-slit material from DL5, and the standing-wave and particle-wave extensions from DL6.
The fastest way to attack a problem start is to identify the wave type, decide which quantities are source-set and which are medium-set, write the relevant phase or wavelength rule, and only then start algebra.
Most mistakes on this quiz come from mixing up beat rate with heard pitch, using the wrong Doppler sign, forgetting that the center is not automatically bright when there is a phase shift, or using the wrong standing-wave boundary condition.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-1-coverage",
          title: "What Quiz 2 Covers",
          html: `
            <p>This guide is focused on the parts of DL3 through DL6 that actually feed quiz-style problem starts: wave-equation reading, interference and total phase, Doppler, beats, double-slit logic, standing waves, and the first particle-as-wave ideas.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>DL</th>
                  <th>Main quiz use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DL3</td>
                  <td>Wave equation wrap-up, Doppler effect, and 2D interference setups</td>
                </tr>
                <tr>
                  <td>DL4</td>
                  <td>Total phase difference, sound interference, beats, beat rate, carrier pitch</td>
                </tr>
                <tr>
                  <td>DL5</td>
                  <td>Huygens/diffraction, Young's double slit, path-difference geometry</td>
                </tr>
                <tr>
                  <td>DL6</td>
                  <td>Crystal phase shifts, standing waves, de Broglie, particle in a box</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Focus rule:</strong> most quiz questions are not asking you to remember a paragraph. They are asking you to identify the right model first, then use the right formula second.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-roadmap",
          title: "Problem Start Roadmap",
          html: `
            <ol class="long-list">
              <li><strong>Name the wave model.</strong> Is this 1D, 2D, or 3D? Is it Doppler, interference, double slit, standing waves, or particle waves?</li>
              <li><strong>Sort the quantities.</strong> Frequency and period stay with the source. Wave speed comes from the medium. Wavelength adjusts to fit both.</li>
              <li><strong>Draw the geometry.</strong> Mark distances, path differences, source directions, and boundary conditions before doing algebra.</li>
              <li><strong>Write the one governing rule.</strong> That might be the wave equation, total phase equation, Doppler formula, beat formula, or harmonic condition.</li>
              <li><strong>Check the physical meaning.</strong> Ask whether your answer means louder or quieter, higher or lower pitch, bright or dark, node or antinode.</li>
            </ol>
            <div class="callout">
              <strong>Dimension check:</strong> in 2D, intensity falls like 1/r and amplitude like 1/√r. In 3D, intensity falls like 1/r² and amplitude like 1/r.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-mistakes",
          title: "Common Mistakes to Catch Early",
          html: `
            <ul>
              <li>Mixing up <strong>beat rate</strong> with <strong>heard pitch</strong>.</li>
              <li>Using the wrong Doppler sign without first drawing motion arrows.</li>
              <li>Forgetting that the time term cancels when you compare two waves at the same place and time.</li>
              <li>Assuming the center of a double-slit pattern must be bright even when a crystal shifts one slit by a phase constant.</li>
              <li>Using the fixed-fixed harmonic rule on a fixed-open standing-wave problem.</li>
            </ul>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-2",
      number: "02",
      title: "Wave Equation",
      plainText: `
Use the wave equation to read amplitude, period, wavelength, direction, and phase constant. Frequency and period are source-set. Speed is medium-set. Wavelength depends on both because λ = v/f. Minus on the x-term means right-moving and plus means left-moving.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-2-source-medium",
          title: "Source vs Medium",
          html: `
            <p>Start here whenever a problem mentions a new medium, a new string tension, or a new source. The cleanest logic is to ask: who fixes this quantity, the source or the medium?</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Wave property</th>
                  <th>Determined by</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Period T</td>
                  <td>Source</td>
                  <td>It is the time the source takes to complete one cycle.</td>
                </tr>
                <tr>
                  <td>Frequency f</td>
                  <td>Source</td>
                  <td>It is how many cycles the source creates each second.</td>
                </tr>
                <tr>
                  <td>Phase constant φ₀</td>
                  <td>Source / initial setup</td>
                  <td>It records the starting offset at t = 0 and x = 0.</td>
                </tr>
                <tr>
                  <td>Amplitude A</td>
                  <td>Mainly source</td>
                  <td>It tracks how strongly the source shakes the medium in the simple model.</td>
                </tr>
                <tr>
                  <td>Wave speed v</td>
                  <td>Medium</td>
                  <td>It depends on the material or boundary conditions.</td>
                </tr>
                <tr>
                  <td>Wavelength λ</td>
                  <td>Both</td>
                  <td>It must satisfy λ = v/f.</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Quiz rule:</strong> when a wave enters a different medium, the frequency does <em>not</em> change. If the speed increases, the wavelength must increase with it.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-equation",
          title: "Read the 1-D Wave Equation",
          html: `
            <div class="formula-box">y(x,t) = A sin(2πt/T ∓ 2πx/λ + φ₀)</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Meaning</th>
                  <th>Where to find it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>Maximum displacement from equilibrium</td>
                  <td>Crest height above the center line</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>Seconds per cycle</td>
                  <td>History graph y vs. t</td>
                </tr>
                <tr>
                  <td>λ</td>
                  <td>Meters per cycle</td>
                  <td>Snapshot graph y vs. x</td>
                </tr>
                <tr>
                  <td>φ₀</td>
                  <td>Starting phase offset</td>
                  <td>Plug in a known point</td>
                </tr>
              </tbody>
            </table>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/quiz2-chapter2-snapshot-graph-dl1.png" alt="DL1 snapshot graph y versus x at a fixed time t sub 0" />
                <figcaption>Worksheet snapshot graph: at fixed time <em>t₀</em>, use the shape across space to read amplitude and wavelength.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/quiz2-chapter2-history-graph-dl1.png" alt="DL1 history graph y versus t at a fixed position x sub 0" />
                <figcaption>Worksheet history graph: at fixed position <em>x₀</em>, use the motion over time to read amplitude and period.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-direction",
          title: "Direction: Minus Right, Plus Left",
          html: `
            <p>The sign in the wave equation is opposite to the physical travel direction:</p>
            <ul>
              <li><strong>- 2πx/λ</strong> means the wave travels to the right.</li>
              <li><strong>+ 2πx/λ</strong> means the wave travels to the left.</li>
            </ul>
            <div class="callout">
              <strong>Fast check:</strong> if the same crest shows up at a larger x-value a little later, the disturbance is moving to the right.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-chapter2-direction-graphs-dl3.png" alt="DL3 time graphs at x equals 1.0 meters and x equals 1.1 meters showing the crest arrives later at the larger position" />
              <figcaption>DL3 comparison: the crest reaches <em>x = 1.1 m</em> after it reaches <em>x = 1.0 m</em>, so the wave is moving to the right and the x-term takes the minus sign.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-3",
      number: "03",
      title: "Interference",
      plainText: `
Interference is controlled by total phase difference. At the same place and time, the time term cancels, so the main rule becomes ΔΦ = -2πΔx/λ + Δφ₀. Constructive interference happens at even multiples of pi and destructive at odd multiples of pi.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-3-checklist",
          title: "Superposition Checklist",
          html: `
            <p>When two waves meet, add their displacements. To decide whether that addition is constructive or destructive, compare their total phases.</p>
            <div class="formula-box">ΔΦ = 2πΔt/T - 2πΔx/λ + Δφ₀</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Difference term</th>
                  <th>Question to ask</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Δt</td>
                  <td>Did one wave start later than the other?</td>
                </tr>
                <tr>
                  <td>Δx</td>
                  <td>Do the waves travel different path lengths to the observer?</td>
                </tr>
                <tr>
                  <td>Δφ₀</td>
                  <td>Do the sources begin in phase or already offset?</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Same-place, same-time comparison:</strong> in the most common quiz setup, the time term is zero, so you only track path difference and source phase difference.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-3-total-phase",
          title: "Compute Total Phase Difference",
          html: `
            <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ₀</div>
            <p>This is the version you will use again and again for speakers, slits, and any problem where two waves travel to one location.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two-source path difference geometry" />
              <figcaption>Path difference is purely geometric: measure how much farther one wave travels than the other.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-3-conditions",
          title: "Constructive vs Destructive",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Total phase condition</th>
                  <th>What you observe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>ΔΦ = 0, 2π, 4π, ...</td>
                  <td>Loud / bright / maximum amplitude</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = π, 3π, 5π, ...</td>
                  <td>Quiet / dark / cancellation</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Translation tip:</strong> if a prompt says the sources are out of phase, that means you already have a built-in Δφ₀ = π before any path difference is added.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-4",
      number: "04",
      title: "Doppler and Beats",
      plainText: `
For Doppler, draw the motion arrows first. Numerator sign follows observer motion. Denominator sign follows source motion. For beats, the beat rate is |f1 - f2| but the note you hear is the average pitch. They are not the same quantity.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-4-doppler",
          title: "Choose the Doppler Signs",
          html: `
            <p>Doppler problems are easier when you think physically first: approaching squeezes wavefronts and raises the observed frequency; receding stretches them and lowers it.</p>
            <div class="formula-box">f<sub>obs</sub> = f<sub>s</sub> ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>))</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Motion</th>
                  <th>Sign rule</th>
                  <th>Memory hook</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Observer toward source</td>
                  <td>Use <strong>+</strong> in the numerator</td>
                  <td>Top toward</td>
                </tr>
                <tr>
                  <td>Observer away from source</td>
                  <td>Use <strong>-</strong> in the numerator</td>
                  <td>Top away</td>
                </tr>
                <tr>
                  <td>Source toward observer</td>
                  <td>Use <strong>-</strong> in the denominator</td>
                  <td>Bottom squeeze</td>
                </tr>
                <tr>
                  <td>Source away from observer</td>
                  <td>Use <strong>+</strong> in the denominator</td>
                  <td>Bottom stretch</td>
                </tr>
              </tbody>
            </table>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter5-doppler-motion.png" alt="Moving source shifting crest spacing for the Doppler effect" />
              <figcaption>The source moves between emissions, so the forward wavelength is shorter and the rear wavelength is longer.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-4-beats",
          title: "Beat Rate vs Heard Pitch",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Formula</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beat rate</td>
                  <td>|f₁ - f₂|</td>
                  <td>How fast the volume pulses loud-soft-loud</td>
                </tr>
                <tr>
                  <td>Heard pitch</td>
                  <td>(f₁ + f₂) / 2</td>
                  <td>The average note you hear underneath the pulsing</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Do not mix them up:</strong> the beat rate is not a second pitch. It is the rate of loudness change.</div>
            <div class="figure-grid">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two close frequencies making beats" />
                <figcaption>Two nearby frequencies gradually drift in and out of phase.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope showing carrier and beat pattern" />
                <figcaption>The fast oscillation is the carrier. The slow envelope sets the beat rate.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "quiz2-chapter-4-combined",
          title: "Beats Plus Doppler",
          html: `
            <p>Combined problems usually ask you to change one heard frequency upward and the other downward until the beat rate reaches zero.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Bagpiper beats plus Doppler setup" />
              <figcaption>Run toward the lower note and away from the higher note if you want the Doppler shift to cancel the original mismatch.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-5",
      number: "05",
      title: "Double-Slit and Crystal Shift",
      plainText: `
Double-slit interference comes from path difference. Bright spots satisfy d sin theta = n lambda and dark spots satisfy d sin theta = (n + 1/2) lambda. A crystal adds a phase constant difference, so the center can shift away from bright.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-5-young",
          title: "Young's Experiment",
          html: `
            <p>Two slits act like two coherent sources. The path difference from the slits to a point on the screen determines whether that point is bright or dark.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-huygens-hole.png" alt="Diffraction through a small opening using Huygens' principle" />
              <figcaption>A small opening can behave like a new source. That is the key idea that lets the two slits interfere.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-5-fringe-math",
          title: "Path Difference and Fringe Conditions",
          html: `
            <div class="formula-inline">Δx = d sin θ</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Pattern point</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bright fringe</td>
                  <td>d sin θ = nλ</td>
                </tr>
                <tr>
                  <td>Dark fringe</td>
                  <td>d sin θ = (n + 1/2)λ</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Small-angle shortcut:</strong> once the geometry is set up, use sin θ ≈ tan θ ≈ y/D to connect the angle to the screen position.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Double-slit geometry with path difference and screen spacing" />
              <figcaption>This is the geometry you should sketch before you plug numbers into the bright or dark condition.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-5-crystal",
          title: "Crystal Phase Shift",
          html: `
            <p>A crystal in front of one slit delays one wave. That delay shows up as a source phase difference instead of a path difference.</p>
            <div class="formula-inline">Δφ₀ = 2πΔt / T</div>
            <div class="callout">
              <strong>Important trap:</strong> once the crystal adds a phase shift, the center of the screen is not guaranteed to be bright anymore. Evaluate the total phase there first.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Double-slit setup with a phase-shifting crystal in one slit" />
              <figcaption>Treat the crystal delay as the Δφ₀ term in the total-phase checklist.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-6",
      number: "06",
      title: "Standing Waves",
      plainText: `
Standing waves come from two identical waves moving in opposite directions. Nodes stay at zero displacement. Antinodes reach maximum displacement. Boundary conditions decide the allowed wavelengths and harmonics.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-6-boundaries",
          title: "Nodes, Antinodes, and Boundaries",
          html: `
            <p>Before doing algebra, decide what each end must do. A fixed end is a node. An open end in the simple air-column model is an antinode.</p>
            <div class="formula-inline">node to node = λ / 2 &nbsp;&nbsp;&nbsp; node to nearest antinode = λ / 4</div>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-standing-waves.svg" alt="Standing-wave patterns for fixed-fixed, open-open, and fixed-open boundaries" />
              <figcaption>Boundary conditions come first. The harmonic formula comes second.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-6-harmonics",
          title: "Allowed Harmonics",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Configuration</th>
                  <th>Allowed wavelengths</th>
                  <th>Allowed harmonics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fixed-fixed / open-open</td>
                  <td>λₙ = 2L / n</td>
                  <td>n = 1, 2, 3, ...</td>
                </tr>
                <tr>
                  <td>Fixed-open</td>
                  <td>λₙ = 4L / (2n - 1)</td>
                  <td>Odd harmonics only</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Flute vs clarinet logic:</strong> a fixed-open instrument can reach a lower fundamental for the same length because the first allowed fit is a quarter-wave, not a half-wave.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-7",
      number: "07",
      title: "Quantum Waves",
      plainText: `
Quantum particles behave like waves with wavelength lambda equals h over p. In a box, only standing-wave fits are allowed, so only certain wavelengths and energies are possible. Measuring which slit a particle used destroys the interference pattern.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-7-slits",
          title: "Particles Through Slits",
          html: `
            <p>The quantum version of the two-slit experiment says something wild but precise: even single particles can build up an interference pattern over time if you do not measure which path they take.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>If you...</th>
                  <th>What you get</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Let the particle travel without path measurement</td>
                  <td>Interference pattern builds up</td>
                </tr>
                <tr>
                  <td>Measure which slit it uses</td>
                  <td>The interference pattern disappears</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz2-chapter-7-debroglie",
          title: "de Broglie and Particle in a Box",
          html: `
            <div class="formula-box">λ = h / p</div>
            <p>Momentum sets wavelength. Shorter wavelength means larger momentum, so the higher-energy standing-wave patterns are the ones with more wiggles packed into the same box.</p>
            <div class="formula-inline">E<sub>n</sub> = h²n² / (8mL²)</div>
            <p>That formula says the allowed energies are quantized and scale like n², not just n.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-particle-box.svg" alt="Particle-in-a-box standing-wave idea with de Broglie wavelength" />
              <figcaption>The box walls force nodes, so only certain standing waves fit. That is why the energies are quantized.</figcaption>
            </figure>
          `,
        },
      ],
    },
  ],
  recap: {
    id: "quiz2-formula-sheet",
    title: "Quiz 2 Formula Sheet",
    plainText: `
Quiz 2 formula sheet.
Wave speed v = lambda f.
Total phase difference Delta Phi = -2pi Delta x / lambda + Delta phi zero.
Doppler uses observer motion in the numerator and source motion in the denominator.
Beat rate is absolute difference, heard pitch is the average.
Double slit uses Delta x = d sin theta, bright d sin theta = n lambda, dark d sin theta = (n + one half) lambda.
Standing waves depend on boundary conditions.
de Broglie wavelength lambda = h / p.
    `.trim(),
    sections: [
      {
        id: "quiz2-formula-sheet-core",
        title: "Core Formulas",
        html: `
          <table class="data-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Formula</th>
                <th>Use it when...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wave speed</td>
                <td>v = λf</td>
                <td>You know any two of speed, wavelength, frequency</td>
              </tr>
              <tr>
                <td>Total phase</td>
                <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                <td>You compare two waves at the same place and time</td>
              </tr>
              <tr>
                <td>Doppler</td>
                <td>f<sub>obs</sub> = f<sub>s</sub>((v ± v<sub>o</sub>)/(v ∓ v<sub>s</sub>))</td>
                <td>Source or observer motion changes the heard frequency</td>
              </tr>
              <tr>
                <td>Beat rate</td>
                <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                <td>You need the loud-soft-loud pulse rate</td>
              </tr>
              <tr>
                <td>Average pitch</td>
                <td>f<sub>avg</sub> = (f₁ + f₂) / 2</td>
                <td>You need the note heard under the beat envelope</td>
              </tr>
              <tr>
                <td>Double slit path difference</td>
                <td>Δx = d sin θ</td>
                <td>You relate slit geometry to bright and dark spots</td>
              </tr>
              <tr>
                <td>Bright fringe</td>
                <td>d sin θ = nλ</td>
                <td>You want constructive interference</td>
              </tr>
              <tr>
                <td>Dark fringe</td>
                <td>d sin θ = (n + 1/2)λ</td>
                <td>You want destructive interference</td>
              </tr>
              <tr>
                <td>Fixed-fixed standing waves</td>
                <td>λₙ = 2L / n</td>
                <td>Both ends have the same boundary type</td>
              </tr>
              <tr>
                <td>Fixed-open standing waves</td>
                <td>λₙ = 4L / (2n - 1)</td>
                <td>One end is a node and the other is an antinode</td>
              </tr>
              <tr>
                <td>de Broglie</td>
                <td>λ = h / p</td>
                <td>You connect particle momentum to wavelength</td>
              </tr>
              <tr>
                <td>Particle in a box</td>
                <td>E<sub>n</sub> = h²n² / (8mL²)</td>
                <td>You need the allowed quantum energy levels in a 1D box</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "quiz2-formula-sheet-traps",
        title: "Fast Trap Check",
        html: `
          <ul>
            <li>Frequency stays with the source when a wave enters a new medium.</li>
            <li>Beat rate and heard pitch are different quantities.</li>
            <li>For double slit with a crystal, evaluate the center with the new Δφ₀ before assuming it is bright.</li>
            <li>For standing waves, pick the boundary condition before writing a wavelength formula.</li>
          </ul>
        `,
      },
    ],
  },
};

const QUIZ_2_SECTION_LOCATORS = {
  "quiz2-chapter-1-hook": "Big picture • one interference story across DL3, DL4, DL5, and DL6 Activity 8.16",
  "quiz2-chapter-1-coverage": "Official scope • DL3 Activities 8.9-8.10, all of DL4 and DL5, and DL6 Activity 8.16",
  "quiz2-chapter-1-patterns": "Practice scan • Q2-1 through Q2-6 plus Problem Starts",
  "quiz2-chapter-1-roadmap": "Guide order • use this sequence to study the official Quiz 2 topics",
  "quiz2-chapter-1-mistakes": "Cross-packet traps • pulled from repeated Quiz 2 practice mistakes",
  "quiz2-chapter-2-hook": "DL3 • Activity 8.9 superposition intuition",
  "quiz2-chapter-2-total-phase": "DL3 • Activity 8.9 total phase and interference conditions",
  "quiz2-chapter-2-phase-chart": "DL4 • Activity 8.11 simplified phase chart; see DL3 Activity 8.10 geometry",
  "quiz2-chapter-2-2d": "DL3 • Activity 8.10 two-dimensional interference; see Problem Starts 1",
  "quiz2-chapter-2-worked": "Q2-3 Practice 1 • two-radio-tower destructive interference",
  "quiz2-chapter-3-hook": "DL4-DL5 • beats and sound-motion intuition from Activities 8.12-8.13",
  "quiz2-chapter-3-checklist": "DL4 • Activity 8.11 speaker scenarios 1-4",
  "quiz2-chapter-3-beats": "DL4 • Activity 8.12 beats, carrier pitch, and envelope",
  "quiz2-chapter-3-combined": "DL4 • Activity 8.12 Angharad setup; see Q2-5(c) moving-speaker beats",
  "quiz2-chapter-4-hook": "DL5 • Activities 8.14-8.15 why the double-slit pattern matters",
  "quiz2-chapter-4-huygens": "DL5 • Activity 8.14 diffraction and Huygens principle",
  "quiz2-chapter-4-geometry": "DL5 • Activity 8.15 double-slit fringe geometry; see Problem Starts 3-4",
  "quiz2-chapter-4-worked": "Problem Starts • Problems 3-4 standard screen-spacing setup",
  "quiz2-chapter-5-hook": "DL6 • Activity 8.16 crystal-delay intuition",
  "quiz2-chapter-5-young": "DL6 • Activity 8.16 crystal-in-one-slit setup",
  "quiz2-chapter-5-fringe-math": "DL6 • Activity 8.16 crystal phase shift; see Q2-1 #2 and Q2-6 #1",
  "quiz2-chapter-5-crystal": "DL6 • Activity 8.16 white-light grating questions 1-2",
  "quiz2-chapter-5-review": "Cross-packet drill order • based on repeated Quiz 2 practice patterns",
  "quiz2-formula-sheet-core": "Mixed recap • DL3 8.9-8.10, DL4 8.11-8.12, DL5 8.14-8.15, and DL6 8.16",
  "quiz2-formula-sheet-translate": "Mixed recap • packet wording translated into the right move",
  "quiz2-formula-sheet-traps": "Mixed recap • last-minute trap check across the official packet scope",
};

function withSectionLocators(guide, locators = {}, chapterLocators = {}) {
  return {
    ...guide,
    chapters: guide.chapters.map((chapter) => ({
      ...chapter,
      locator: chapterLocators[chapter.id] || chapter.locator || "",
      sections: chapter.sections.map((section) => ({
        ...section,
        locator: locators[section.id] || chapterLocators[chapter.id] || section.locator || "",
      })),
    })),
    recap: guide.recap
      ? {
          ...guide.recap,
          locator: chapterLocators[guide.recap.id] || guide.recap.locator || "",
          sections: guide.recap.sections.map((section) => ({
            ...section,
            locator: locators[section.id] || chapterLocators[guide.recap.id] || section.locator || "",
          })),
        }
      : null,
  };
}

export const QUIZ_2_GUIDE = withSectionLocators({
  title: "Quiz 2 Study Guide",
  subtitle: "Official scope: DL3 8.9-8.10, DL4, DL5, and DL6 Activity 8.16",
  chapters: [
    {
      id: "quiz2-chapter-1",
      number: "01",
      title: "Overview and Study Order",
      plainText: `
Quiz 2 is mainly an interference quiz. Start by locking the official scope, then study the guide in this order: interference core, speakers and beats, double-slit geometry, and crystal-shifted DL6 review. The highest-yield skills are phase bookkeeping, beats, double-slit geometry, and crystal-shifted fringe logic.
      `.trim(),
      studyCard: [
        {
          label: "What to study",
          value: "DL3 Activities 8.9 and 8.10, all of DL4 and DL5, and DL6 Activity 8.16 only.",
        },
        {
          label: "Best order",
          value: "Interference core first, then speakers and beats, then double-slit geometry, then crystal-shifted DL6 review.",
        },
        {
          label: "Study hardest",
          value: "Phase bookkeeping, speaker or tower interference, crystal-shifted double slit, and beats.",
        },
        {
          label: "Lower priority",
          value: "Standing waves and de Broglie are later DL6 topics, not the official Quiz 2 target list.",
        },
      ],
      sections: [
        {
          id: "quiz2-chapter-1-coverage",
          kicker: "Overview",
          badge: "Must know",
          badgeTone: "priority",
          title: "What You Actually Need To Study",
          html: `
            <p>If you are wondering what counts for Quiz 2, use this section as the answer key. The packet matters more than the rest of the site history here.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>DL</th>
                  <th>What to know</th>
                  <th>How it shows up</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DL3</td>
                  <td>Activity 8.9 superposition, Activity 8.10 two-dimensional interference</td>
                  <td>Phase charts, path difference, two-source geometry</td>
                </tr>
                <tr>
                  <td>DL4</td>
                  <td>Interference in 1D and 2D, beats, beat rate, carrier pitch</td>
                  <td>Speaker setups, loud vs quiet, beat logic</td>
                </tr>
                <tr>
                  <td>DL5</td>
                  <td>Sound-interference wrap-up, diffraction, Young's double slit, wave evidence for light</td>
                  <td>Combined beats and Doppler, slit geometry, screen spacing</td>
                </tr>
                <tr>
                  <td>DL6</td>
                  <td>Activity 8.16 only: Young's double-slit review, white-light grating, crystal shift</td>
                  <td>Bright and dark conditions, color ordering, phase-shifted center</td>
                </tr>
              </tbody>
            </table>
            <div class="callout callout-review">
              <strong>Translation:</strong> this quiz is really about interference, beats, double-slit geometry, and crystal-shift questions, not the later standing-wave or quantum material.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-roadmap",
          kicker: "Study order",
          badge: "Checklist",
          badgeTone: "method",
          title: "What To Work Through First",
          html: `
            <p>If you want the guide to feel less scattered, move through it in this order instead of bouncing between packets.</p>
            <div class="study-map-grid">
              <div class="study-map-card">
                <p class="quiz-kicker">1</p>
                <h4>Topic 1 - Interference core</h4>
                <p>Start with total phase, path difference, and built-in source phase shift. This is the backbone for the rest.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">2</p>
                <h4>Topic 2 - Speakers, beats, and Doppler</h4>
                <p>Next, separate same-frequency speaker interference from different-frequency beat questions.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">3</p>
                <h4>Topic 3 - Double-slit geometry</h4>
                <p>Then switch to the screen picture: path difference, bright and dark conditions, and fringe geometry.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">4</p>
                <h4>Topic 4 - Crystal shift and DL6 review</h4>
                <p>Finish with crystal-delay questions and the short white-light grating ideas from DL6 Activity 8.16.</p>
              </div>
            </div>
            <div class="takeaway-line">
              <strong>If you are short on time,</strong> spend the biggest chunk on Topic 1 and Topic 4, then make sure Topic 2 feels clean before you do a quick Topic 3 pass.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-patterns",
          kicker: "Study hardest",
          badge: "High yield",
          badgeTone: "priority",
          title: "What To Drill Hardest",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Repeated pattern</th>
                  <th>Where it appears</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Two-source interference with a built-in phase offset</td>
                  <td>DL3 8.9-8.10, Q2-1, Q2-3, Q2-4, Problem Starts 1-2</td>
                  <td>Highest</td>
                </tr>
                <tr>
                  <td>Speaker setups asking loud or quiet, constructive or destructive</td>
                  <td>DL4 8.11, Q2-1, Q2-4, Q2-5</td>
                  <td>Highest</td>
                </tr>
                <tr>
                  <td>Beats and average pitch, sometimes after one source moves</td>
                  <td>DL4 8.12, DL5 8.13, Q2-2, Q2-5</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Double-slit geometry and fringe conditions</td>
                  <td>DL5 8.14-8.15, Problem Starts 3-4</td>
                  <td>Highest</td>
                </tr>
                <tr>
                  <td>Crystal delay or phase shift in one slit</td>
                  <td>Q2-1 #2, Q2-6 #1, DL6 8.16 FNT 3</td>
                  <td>Highest</td>
                </tr>
                <tr>
                  <td>White-light grating color order</td>
                  <td>DL6 8.16 FNT 2</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>
            <div class="callout callout-priority">
              <strong>Best payoff:</strong> if you are short on time, drill total phase, speaker or tower geometry, and crystal-shifted double slit before anything else.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-hook",
          kicker: "Big idea",
          badge: "Hook",
          badgeTone: "review",
          title: "Why All Of Quiz 2 Feels Like The Same Story",
          html: `
            <p>You've probably had this happen at a concert, in a car, or with two speakers in a room: you take one step and the sound suddenly gets louder. Take another step and it weirdly drops off again. The sources did not change. <em>Your location</em> changed.</p>
            <p>That is the whole spirit of Quiz 2. Tiny changes in path length, timing, or built-in phase can completely change what you hear or see. Once that feels normal, the formulas stop feeling random and start feeling like bookkeeping.</p>
            <div class="takeaway-line">
              <strong>Across almost the whole quiz,</strong> the real question is “what changed the relative phase?” not “which random formula do I remember?”
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-mistakes",
          kicker: "Trap check",
          badge: "Avoid",
          badgeTone: "trap",
          title: "Common Mistakes To Catch Early",
          html: `
            <ul>
              <li>Using the constructive condition when the prompt actually asks for <strong>zero signal</strong> or a <strong>dark fringe</strong>.</li>
              <li>Forgetting that at the same place and same time, the time term drops out, so the whole game becomes <strong>Δx and Δφ₀</strong>.</li>
              <li>Assuming the center of a double-slit pattern is automatically bright even after a crystal adds a source phase shift.</li>
              <li>Mixing up <strong>beat rate</strong> with the <strong>note you hear</strong>.</li>
              <li>Studying later DL6 standing-wave content instead of the actual Quiz 2 material.</li>
            </ul>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-2",
      number: "02",
      title: "Topic 1 - Interference Core",
      plainText: `
This is the backbone of Quiz 2. Two waves meet. You compare their total phases. If the total phase difference lands on an even multiple of π, you get constructive interference. If it lands on an odd multiple of π, you get destructive interference.
      `.trim(),
      studyCard: [
        {
          label: "What this chapter does",
          value: "Turns the phase chart into a repeatable decision process for 1D and 2D problems.",
        },
        {
          label: "Study hardest",
          value: "Same-place same-time logic, path difference, and built-in source phase shifts.",
        },
        {
          label: "First move",
          value: "Write ΔΦ = -2πΔx/λ + Δφ₀ before you think about constructive or destructive.",
        },
        {
          label: "Watch for",
          value: "A prompt can hide Δφ₀ in words like out of phase, opposite wiring, or one source ahead by T/4.",
        },
      ],
      sections: [
        {
          id: "quiz2-chapter-2-hook",
          kicker: "Topic preview",
          badge: "Hook",
          badgeTone: "review",
          title: "Topic Preview - Same-Place Same-Time Interference",
          html: `
            <p>Noise-canceling headphones work because they do not just block sound. They create another sound wave designed to line up in the opposite phase, so the two waves cancel as they reach your ear.</p>
            <p>That is interference in one sentence: same place, same time, but different phase relationship. Quiz 2 just asks you to track that phase relationship more carefully than your headphones do automatically.</p>
          `,
        },
        {
          id: "quiz2-chapter-2-total-phase",
          kicker: "Core idea",
          badge: "Must know",
          badgeTone: "priority",
          title: "Total Phase Difference Controls Everything",
          html: `
            <p>Interference is a timing story. Are the two waves arriving together in the same part of the cycle, or is one wave shifted relative to the other? That shift is the total phase difference.</p>
            <div class="formula-box">ΔΦ = 2πΔt/T - 2πΔx/λ + Δφ₀</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Question it answers</th>
                  <th>What it means physically</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Δt</td>
                  <td>Did one wave start later than the other?</td>
                  <td>A built-in time offset between emissions</td>
                </tr>
                <tr>
                  <td>Δx</td>
                  <td>Did one wave travel farther?</td>
                  <td>Path difference from source to observer</td>
                </tr>
                <tr>
                  <td>Δφ₀</td>
                  <td>Did the sources already begin out of step?</td>
                  <td>Phase built in by wiring, timing, or a crystal</td>
                </tr>
              </tbody>
            </table>
            <div class="callout callout-method">
              <strong>Same-place, same-time shortcut:</strong> in most quiz problems you compare both waves at one location and one instant, so Δt = 0 and the rule collapses to <strong>ΔΦ = -2πΔx/λ + Δφ₀</strong>.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-phase-chart",
          kicker: "How to think",
          badge: "Checklist",
          badgeTone: "method",
          title: "Use A Phase Chart Instead Of Guessing",
          html: `
            <p>When a prompt feels messy, the phase chart keeps the logic clean. Split the question into the pieces that can create relative phase, then add them at the end.</p>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter8-simplified-phase-chart.png" alt="Simplified phase chart for comparing two interfering waves" />
                <figcaption>The simplified phase chart is your bookkeeping tool. Use it whenever the problem mixes geometry with a source offset.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two-source path difference geometry for interference" />
                <figcaption>Geometry gives you Δx. Wiring, timing, or a crystal gives you Δφ₀. Those two pieces are the main quiz story.</figcaption>
              </figure>
            </div>
            <div class="study-map-grid">
              <div class="study-map-card">
                <p class="quiz-kicker">Step 1</p>
                <h4>Measure the path difference</h4>
                <p>Subtract the two travel distances to the observer. Keep the sign consistent.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">Step 2</p>
                <h4>Add the source offset</h4>
                <p>If the prompt says out of phase, opposite wiring, or delayed by a crystal, that becomes Δφ₀.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">Step 3</p>
                <h4>Match the condition</h4>
                <p>Constructive means 2nπ. Destructive means (2n + 1)π.</p>
              </div>
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-2d",
          kicker: "DL3 Activity 8.10",
          badge: "Study hardest",
          badgeTone: "priority",
          title: "1D And 2D Interference Use The Same Logic",
          html: `
            <p>A 2D picture does not need a new theory. The only thing that changes is how you read the distances. Once you have those distances, the phase logic is identical.</p>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-pond-problem.png" alt="Two-dimensional pond-source geometry for interference" />
                <figcaption>DL3 Activity 8.10 turns interference into geometry: measure how far each wave travels to the same point.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter8-kdvs-antennas.png" alt="KDVS antenna worksheet figure for two-source interference" />
                <figcaption>The KDVS-style antenna problem is the same model: equal frequencies, one observation direction, and a built-in phase offset.</figcaption>
              </figure>
            </div>
            <div class="takeaway-line">
              <strong>If the picture is in 2D,</strong> do not panic. Just turn the drawing into two distances, then go right back to ΔΦ.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-worked",
          kicker: "Worked reasoning",
          badge: "Model answer",
          badgeTone: "review",
          title: "How A Radio-Tower Starter Actually Unfolds",
          html: `
            <div class="worked-example">
              <div class="worked-example-head">
                <p class="quiz-kicker">Problem pattern</p>
                <h4>Two sources on a line, one built-in phase shift, and the prompt asks where the signal disappears</h4>
              </div>
              <div class="worked-example-grid">
                <div class="worked-step">
                  <strong>1. What stays the same?</strong>
                  <p>The sources have the same frequency, so the deciding terms are path difference and source phase difference.</p>
                </div>
                <div class="worked-step">
                  <strong>2. What is the target?</strong>
                  <p>No signal means destructive interference, so you want ΔΦ = (2n + 1)π.</p>
                </div>
                <div class="worked-step">
                  <strong>3. What is the geometry move?</strong>
                  <p>Write the two travel distances to the point, subtract them to get Δx, and then substitute into ΔΦ = -2πΔx/λ + Δφ₀.</p>
                </div>
                <div class="worked-step">
                  <strong>4. What do you solve for?</strong>
                  <p>Solve for the allowed Δx values first, then translate those back into actual positions on the line.</p>
                </div>
              </div>
            </div>
            <div class="callout callout-method">
              <strong>Fast self-check:</strong> if your final answer is just a phase difference and not an actual location, you probably stopped one step too early.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-3",
      number: "03",
      title: "Topic 2 - Speakers, Beats, and Doppler",
      plainText: `
Once the basic interference logic is clear, DL4 and the practice sets ask a more physical version: what do you hear? The answer may be louder or quieter because of same-frequency interference, or it may be a wobbling loud-soft-loud pattern because of beats.
      `.trim(),
      studyCard: [
        {
          label: "What this chapter does",
          value: "Separates same-frequency interference from different-frequency beats, so the sounds stop blurring together.",
        },
        {
          label: "Study hardest",
          value: "Reversed leads, λ/2 speaker shifts, beat rate vs heard pitch, and moving-source beat problems.",
        },
        {
          label: "First move",
          value: "Ask whether the two sources have the same frequency. If yes, use phase conditions. If not, use beat logic.",
        },
        {
          label: "Watch for",
          value: "A Doppler shift can change one of the frequencies before you compute the beat rate.",
        },
      ],
      sections: [
        {
          id: "quiz2-chapter-3-hook",
          kicker: "Topic preview",
          badge: "Hook",
          badgeTone: "review",
          title: "Topic Preview - Same Tone Vs Almost Same Tone",
          html: `
            <p>Imagine two guitars trying to tune to the same note, but one string is still a tiny bit off. You do not hear two clean notes fighting each other. You hear one note whose volume swells and fades: wah... wah... wah.</p>
            <p>That pulsing is beats. If one source also moves, like a siren or player walking relative to you, the heard frequency changes first and the beat pattern changes after that. This chapter is about keeping those two effects separate in your head.</p>
          `,
        },
        {
          id: "quiz2-chapter-3-checklist",
          kicker: "DL4 Activity 8.11",
          badge: "Must know",
          badgeTone: "priority",
          title: "Same-Frequency Speaker Logic",
          html: `
            <p>If the speakers play the same tone, this is still a phase problem, not a beats problem. The physical setup decides Δx and Δφ₀, and that decides what you hear.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter8-speaker-scenario.png" alt="Speaker-interference worksheet scenario" />
              <figcaption>When the frequency is the same, ask how the geometry and wiring change the total phase at your position.</figcaption>
            </figure>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Setup move</th>
                  <th>What it changes</th>
                  <th>What to expect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reverse the leads of one speaker</td>
                  <td>Δφ₀ becomes π</td>
                  <td>It can flip loud into quiet or quiet into loud</td>
                </tr>
                <tr>
                  <td>Push one speaker forward by λ/2</td>
                  <td>Δx changes by λ/2</td>
                  <td>That adds a phase shift of π from geometry</td>
                </tr>
                <tr>
                  <td>Separate the speakers by λ</td>
                  <td>Δx changes by a full wavelength</td>
                  <td>The phase can land back where it started</td>
                </tr>
              </tbody>
            </table>
            <div class="takeaway-line">
              <strong>Same tone means same-frequency interference.</strong> Different tone means beats. Make that decision before you do anything else.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-3-beats",
          kicker: "DL4 Activity 8.12",
          badge: "Study hardest",
          badgeTone: "priority",
          title: "Beat Rate Vs Heard Pitch",
          html: `
            <p>Beats happen when the two frequencies are close but not equal. You do <em>not</em> hear two separate clean notes. You hear one note whose loudness pulses.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Formula</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beat rate</td>
                  <td>|f₁ - f₂|</td>
                  <td>How many loud-soft-loud pulses happen each second</td>
                </tr>
                <tr>
                  <td>Heard pitch</td>
                  <td>(f₁ + f₂) / 2</td>
                  <td>The average note underneath the pulsing</td>
                </tr>
              </tbody>
            </table>
            <div class="figure-grid">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two nearby frequencies producing beats" />
                <figcaption>The two source waves drift in and out of phase because their frequencies are close, not identical.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope and carrier oscillation" />
                <figcaption>The fast wiggle is the carrier. The slow envelope gives the beat rate.</figcaption>
              </figure>
            </div>
            <div class="callout callout-trap">
              <strong>Classic mistake:</strong> if the question says “what pitch do they hear?” do <em>not</em> answer with the beat rate.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-3-combined",
          kicker: "Practice pattern",
          badge: "High yield",
          badgeTone: "priority",
          title: "When Doppler Enters Before Beats",
          html: `
            <p>Some practice sets first change one heard frequency by source motion, then ask for the beat rate between the shifted value and the unchanged one. In that case the order matters.</p>
            <div class="formula-box">f<sub>obs</sub> = f<sub>s</sub> ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>))</div>
            <div class="worked-example">
              <div class="worked-example-head">
                <p class="quiz-kicker">Thinking order</p>
                <h4>Do the Doppler step first, then do the beat step</h4>
              </div>
              <div class="worked-example-grid">
                <div class="worked-step">
                  <strong>1. Identify which source is moving relative to the observer.</strong>
                  <p>Approaching raises the heard frequency. Receding lowers it.</p>
                </div>
                <div class="worked-step">
                  <strong>2. Compute the shifted heard frequency.</strong>
                  <p>This gives you the actual value entering the beat problem.</p>
                </div>
                <div class="worked-step">
                  <strong>3. Compare the two heard frequencies.</strong>
                  <p>Use the shifted one and the unchanged one in f<sub>beat</sub> = |f₁ - f₂|.</p>
                </div>
                <div class="worked-step">
                  <strong>4. If the beat rate goes to zero,</strong>
                  <p>that means the two heard frequencies have been made equal.</p>
                </div>
              </div>
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Bagpiper problem combining beats and Doppler" />
              <figcaption>The motion matters only because it changes what frequency is heard. After that, beats take over.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-4",
      number: "04",
      title: "Topic 3 - Double-Slit Geometry",
      plainText: `
DL5 and the problem starters keep coming back to the same picture: two coherent slits, a screen far away, and a point somewhere above or below the center line. Your job is to turn the picture into path difference, then match that to bright or dark conditions.
      `.trim(),
      studyCard: [
        {
          label: "What this chapter does",
          value: "Builds the double-slit picture from physical idea to geometry to bright and dark rules.",
        },
        {
          label: "Study hardest",
          value: "Δx = d sin θ, Δy = D tan θ, and the small-angle link between them.",
        },
        {
          label: "First move",
          value: "Sketch the standard triangle and decide whether the point is bright, dark, or unknown.",
        },
        {
          label: "Watch for",
          value: "A prompt may give two fringe locations and ask for slit spacing, wavelength, or whether they are consecutive.",
        },
      ],
      sections: [
        {
          id: "quiz2-chapter-4-hook",
          kicker: "Topic preview",
          badge: "Hook",
          badgeTone: "review",
          title: "Topic Preview - Why Two Slits Make A Pattern",
          html: `
            <p>If light were just little pellets fired through two narrow openings, you would expect two bright patches on the wall. But in the real experiment, you get a whole striped pattern of bright and dark bands.</p>
            <p>That is why the double-slit experiment matters so much. The pattern forces you to think of each slit as sending out a wave, and the rest is geometry: which points on the wall get matched-up waves, and which points get cancellation.</p>
          `,
        },
        {
          id: "quiz2-chapter-4-huygens",
          kicker: "DL5 Activity 8.14",
          badge: "Big idea",
          badgeTone: "review",
          title: "Why Two Slits Interfere At All",
          html: `
            <p>A slit is not just a hole. In this model it behaves like a new source. That is why one incoming wave can become two outgoing sources that later interfere on the screen.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-huygens-hole.png" alt="Huygens principle and diffraction through a small opening" />
              <figcaption>Huygens logic is the doorway: each slit acts like a source, so the screen sees two waves reaching each point by slightly different paths.</figcaption>
            </figure>
            <div class="takeaway-line">
              <strong>Once the slits become two sources,</strong> the double-slit experiment becomes a normal interference problem with special geometry.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-4-geometry",
          kicker: "Geometry first",
          badge: "Must know",
          badgeTone: "priority",
          title: "Turn The Screen Picture Into Equations",
          html: `
            <div class="formula-inline">Δx = d sin θ</div>
            <div class="formula-inline">Δy = D tan θ</div>
            <div class="callout callout-method">
              <strong>Small-angle shortcut:</strong> for the standard far-screen setup, use sin θ ≈ tan θ ≈ y/D so that path difference can be related directly to the screen position.
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>If the point is...</th>
                  <th>Condition</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bright</td>
                  <td>d sin θ = nλ</td>
                  <td>Constructive interference from the two slits</td>
                </tr>
                <tr>
                  <td>Dark</td>
                  <td>d sin θ = (n + 1/2)λ</td>
                  <td>Destructive interference from the two slits</td>
                </tr>
              </tbody>
            </table>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Young's double-slit geometry with screen distance and fringe spacing" />
              <figcaption>Most double-slit questions are really asking you to move between this picture and the bright or dark condition without dropping a geometry step.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-4-worked",
          kicker: "Problem starter",
          badge: "Model answer",
          badgeTone: "review",
          title: "How To Read The Standard Screen-Spacing Prompt",
          html: `
            <div class="worked-example">
              <div class="worked-example-head">
                <p class="quiz-kicker">Prompt pattern</p>
                <h4>You are given one bright spot and one dark spot on the wall and need slit spacing, wavelength, or the index of the fringe</h4>
              </div>
              <div class="worked-example-grid">
                <div class="worked-step">
                  <strong>1. Mark what each point is.</strong>
                  <p>A bright point uses d sin θ = nλ. A dark point uses d sin θ = (n + 1/2)λ.</p>
                </div>
                <div class="worked-step">
                  <strong>2. Convert wall position into angle information.</strong>
                  <p>Use tan θ = y/D, then the small-angle approximation if the setup allows it.</p>
                </div>
                <div class="worked-step">
                  <strong>3. Decide if the fringes are consecutive.</strong>
                  <p>If the prompt does not say consecutive, do not force n and n + 1. Leave the index relation more general until the picture tells you otherwise.</p>
                </div>
                <div class="worked-step">
                  <strong>4. Solve only after the condition is locked.</strong>
                  <p>The geometry and the fringe type must come before substitution.</p>
                </div>
              </div>
            </div>
            <div class="takeaway-line">
              <strong>The quiz is usually testing the setup,</strong> not whether you can memorize one isolated formula.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-5",
      number: "05",
      title: "Topic 4 - Crystal Shift and DL6 Review",
      plainText: `
DL6 Activity 8.16 keeps the double-slit picture but adds two twists: a crystal can insert a phase shift, and white light through many slits spreads different colors to different angles.
      `.trim(),
      studyCard: [
        {
          label: "What this chapter does",
          value: "Turns crystal and grating questions into normal interference questions with one extra term.",
        },
        {
          label: "Study hardest",
          value: "Center-point logic with a crystal and the shortest extra delay or path difference for bright or dark conditions.",
        },
        {
          label: "First move",
          value: "At the center, Δx = 0. That means the crystal's Δφ₀ is doing all the work there.",
        },
        {
          label: "Watch for",
          value: "Blue is closer to the center than red because shorter wavelength needs a smaller angle for the same order.",
        },
      ],
      sections: [
        {
          id: "quiz2-chapter-5-hook",
          kicker: "Topic preview",
          badge: "Hook",
          badgeTone: "review",
          title: "Topic Preview - Why A Crystal Changes The Center",
          html: `
            <p>Picture two runners moving at the same speed toward the same finish line. If they start together, the middle of the race feels perfectly symmetric. But if one runner starts a fraction of a second late, that symmetry is gone even though their speeds are still identical.</p>
            <p>That is exactly what the crystal does in the double-slit setup. It does not change the slit geometry. It just delays one wave before the race to the screen begins, and suddenly even the center point can change from bright to dark.</p>
          `,
        },
        {
          id: "quiz2-chapter-5-young",
          kicker: "DL6 Activity 8.16",
          badge: "Must know",
          badgeTone: "priority",
          title: "A Crystal Adds Source Phase Difference",
          html: `
            <p>The crystal does not change the path geometry from the slits to the wall. Instead, it delays one wave before the two slit-sources even begin their race to the screen. That delay becomes a source phase difference.</p>
            <div class="formula-box">Δφ₀ = 2πΔt / T</div>
            <div class="callout callout-trap">
              <strong>Critical idea:</strong> at the center of the screen, Δx = 0, so the total phase there is coming entirely from Δφ₀. The center is no longer automatically bright.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Double slit with a phase-shifting crystal in front of one slit" />
              <figcaption>Mentally file the crystal under “Δφ₀ term,” not under “new geometry.” That one translation makes the whole problem easier.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-5-fringe-math",
          kicker: "Worked reasoning",
          badge: "Study hardest",
          badgeTone: "priority",
          title: "Shortest Delay Or Path Difference Questions",
          html: `
            <div class="worked-example">
              <div class="worked-example-head">
                <p class="quiz-kicker">Prompt pattern</p>
                <h4>The crystal delays one slit and the question asks for the shortest extra time or path difference that makes the point bright</h4>
              </div>
              <div class="worked-example-grid">
                <div class="worked-step">
                  <strong>1. Convert delay into phase.</strong>
                  <p>Use Δφ₀ = 2πΔt/T. If the delay is one-eighth of a cycle, then Δφ₀ = π/4.</p>
                </div>
                <div class="worked-step">
                  <strong>2. Decide the target condition.</strong>
                  <p>Bright means total phase 2nπ. Dark means (2n + 1)π.</p>
                </div>
                <div class="worked-step">
                  <strong>3. Solve for the missing path difference.</strong>
                  <p>Use ΔΦ = -2πΔx/λ + Δφ₀. The smallest answer usually comes from the lowest allowed integer.</p>
                </div>
                <div class="worked-step">
                  <strong>4. Sanity check the size.</strong>
                  <p>A tiny fraction of a cycle should lead to a tiny fraction of a wavelength, not something huge like 3λ.</p>
                </div>
              </div>
            </div>
            <div class="takeaway-line">
              <strong>Delay first, phase second, path difference third.</strong> That order keeps crystal questions from turning into algebra soup.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-5-crystal",
          kicker: "DL6 FNT 2",
          badge: "Review",
          badgeTone: "review",
          title: "White Light And Color Ordering",
          html: `
            <p>A diffraction grating sends different wavelengths to different angles because the same order condition, d sin θ = nλ, must hold for each color. For the same order number n and the same grating spacing d, a shorter wavelength needs a smaller angle.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-multislit-maxima.png" alt="Diffraction grating maxima and color spread" />
              <figcaption>Blue sits closer to the center than red because blue has the shorter wavelength, so it reaches a given bright order at a smaller angle.</figcaption>
            </figure>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Question wording</th>
                  <th>What it is really asking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Why is the light straight through still white?</td>
                  <td>At the center, all wavelengths share the zero-order direction.</td>
                </tr>
                <tr>
                  <td>Why is blue closer to the center than red?</td>
                  <td>Shorter wavelength means smaller angle for the same bright order.</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz2-chapter-5-review",
          kicker: "Tonight's plan",
          badge: "Checklist",
          badgeTone: "method",
          title: "What To Drill Before The Quiz",
          html: `
            <div class="study-map-grid">
              <div class="study-map-card">
                <p class="quiz-kicker">1</p>
                <h4>Two-source phase problems</h4>
                <p>Do several line and 2D interference setups until Δx and Δφ₀ feel automatic.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">2</p>
                <h4>Crystal-shifted double slit</h4>
                <p>Practice center-point questions and shortest extra delay or path-difference questions.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">3</p>
                <h4>Beats</h4>
                <p>Make sure you can separate beat rate from average pitch without hesitation.</p>
              </div>
              <div class="study-map-card">
                <p class="quiz-kicker">4</p>
                <h4>White-light grating</h4>
                <p>Know the center white ray and why blue stays closer to the middle than red.</p>
              </div>
            </div>
            <div class="callout callout-review">
              <strong>Best use of time:</strong> work the repeated problem families until you can say the setup steps out loud before you touch the algebra.
            </div>
          `,
        },
      ],
    },
  ],
  recap: {
    id: "quiz2-formula-sheet",
    title: "Last-Minute Quiz 2 Sheet",
    plainText: `
Quiz 2 rapid sheet.
Same-frequency interference means use total phase.
Different-frequency sound means use beats.
Double slit means convert the picture into path difference.
Crystal means add a source phase shift.
    `.trim(),
    sections: [
      {
        id: "quiz2-formula-sheet-core",
        kicker: "Core formulas",
        badge: "Review",
        badgeTone: "review",
        title: "What You Should Reach For First",
        html: `
          <table class="data-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Formula</th>
                <th>Use it when...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total phase</td>
                <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                <td>You compare two same-frequency waves at one place and time</td>
              </tr>
              <tr>
                <td>Wave speed</td>
                <td>v = λf</td>
                <td>You need wavelength from a frequency or vice versa</td>
              </tr>
              <tr>
                <td>Beat rate</td>
                <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                <td>You need the loud-soft-loud pulse rate</td>
              </tr>
              <tr>
                <td>Average pitch</td>
                <td>f<sub>avg</sub> = (f₁ + f₂) / 2</td>
                <td>You need the note heard under the beat envelope</td>
              </tr>
              <tr>
                <td>Doppler</td>
                <td>f<sub>obs</sub> = f<sub>s</sub>((v ± v<sub>o</sub>)/(v ∓ v<sub>s</sub>))</td>
                <td>One practice-style source moves before a beat question is asked</td>
              </tr>
              <tr>
                <td>Double slit path difference</td>
                <td>Δx = d sin θ</td>
                <td>You relate slit geometry to bright and dark spots</td>
              </tr>
              <tr>
                <td>Bright fringe</td>
                <td>d sin θ = nλ</td>
                <td>You want constructive interference</td>
              </tr>
              <tr>
                <td>Dark fringe</td>
                <td>d sin θ = (n + 1/2)λ</td>
                <td>You want destructive interference</td>
              </tr>
              <tr>
                <td>Crystal shift</td>
                <td>Δφ₀ = 2πΔt / T</td>
                <td>A crystal delays one slit before the waves head to the screen</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "quiz2-formula-sheet-translate",
        kicker: "Translation table",
        badge: "Use this",
        badgeTone: "method",
        title: "If The Prompt Says This, Do This",
        html: `
          <table class="data-table">
            <thead>
              <tr>
                <th>Prompt wording</th>
                <th>Your move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No signal, silence, dark spot</td>
                <td>Use the destructive condition</td>
              </tr>
              <tr>
                <td>Loudest, brightest, maximum</td>
                <td>Use the constructive condition</td>
              </tr>
              <tr>
                <td>Out of phase, opposite wiring, source ahead by half a cycle</td>
                <td>Treat it as a nonzero Δφ₀</td>
              </tr>
              <tr>
                <td>Wobbling loudness or throbbing sound</td>
                <td>Think beats, not same-frequency interference</td>
              </tr>
              <tr>
                <td>One source moves before the beat question</td>
                <td>Do Doppler first, then compute the beat rate</td>
              </tr>
              <tr>
                <td>Crystal in one slit</td>
                <td>Check the center using Δx = 0 and the new Δφ₀</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "quiz2-formula-sheet-traps",
        kicker: "Trap check",
        badge: "Avoid",
        badgeTone: "trap",
        title: "Fast Trap Check",
        html: `
          <ul>
            <li>Beat rate and heard pitch are different quantities.</li>
            <li>For double slit with a crystal, evaluate the center with the new Δφ₀ before assuming it is bright.</li>
            <li>Same-frequency problems are phase problems; different-frequency problems are beat problems.</li>
            <li>Standing waves and de Broglie are not the official Quiz 2 priority based on the packet you gave me.</li>
          </ul>
        `,
      },
    ],
  },
}, QUIZ_2_SECTION_LOCATORS);

const QUIZ_2_PW_SECTION_LOCATORS = {
  "quiz2-pw-chapter-1-hook": "Big picture • why Quiz 2 feels new the first time you study it",
  "quiz2-pw-chapter-1-scope": "Official scope • DL3 8.9-8.10, all of DL4 and DL5, and DL6 Activity 8.16",
  "quiz2-pw-chapter-1-background": "Bridge note • wavelength, path difference, phase, and source offset in plain English",
  "quiz2-pw-chapter-1-order": "Study order • how to move through this page without getting lost",
  "quiz2-pw-chapter-1-traps": "Trap check • the mistakes that waste time before the real physics starts",
  "quiz2-pw-chapter-2-hook": "DL3 8.9-8.10 • first intuition for two-source interference",
  "quiz2-pw-chapter-2-build": "DL3 8.9 • same-place same-time logic and total phase",
  "quiz2-pw-chapter-2-analogy": "DL3 8.10 • path difference and source offset pictured in a beginner-friendly way",
  "quiz2-pw-chapter-2-formula": "DL3 8.9 + DL4 8.11 • phase chart, total phase, and interference conditions",
  "quiz2-pw-chapter-2-example": "Q2-3 Practice 1 and KDVS-style starters • where the signal disappears",
  "quiz2-pw-chapter-2-recap": "Mixed recap • the short version of interference core",
  "quiz2-pw-chapter-3-hook": "DL4 8.11-8.12 • same tone versus almost same tone",
  "quiz2-pw-chapter-3-build": "DL4 8.11 • speaker scenarios, reversed leads, and lambda-over-two shifts",
  "quiz2-pw-chapter-3-analogy": "DL4 8.12 • beats explained through drifting timing",
  "quiz2-pw-chapter-3-formula": "DL4 8.12 and Q2-5(c) • beat rate, heard pitch, and Doppler-before-beats",
  "quiz2-pw-chapter-3-example": "DL4 challenge • bagpipers, Doppler shift, and making beats disappear",
  "quiz2-pw-chapter-3-recap": "Mixed recap • what to remember about speakers and beats",
  "quiz2-pw-chapter-4-hook": "DL5 8.14 • why a tiny opening behaves like a source",
  "quiz2-pw-chapter-4-build": "DL5 8.14-8.15 • why two slits interfere and what the stripes mean",
  "quiz2-pw-chapter-4-analogy": "DL5 8.15 • double slit reduced to a normal two-source story",
  "quiz2-pw-chapter-4-formula": "DL5 8.15 and Problem Starts 3-4 • d sin theta, bright, dark, and small-angle logic",
  "quiz2-pw-chapter-4-example": "Problem Starts 3-4 • screen spacing and fringe-reading questions",
  "quiz2-pw-chapter-4-recap": "Mixed recap • the short version of double-slit geometry",
  "quiz2-pw-chapter-5-hook": "DL6 8.16 • why delaying one slit shifts the whole pattern",
  "quiz2-pw-chapter-5-build": "DL6 8.16 • crystal delay, center-point logic, and source phase shift",
  "quiz2-pw-chapter-5-analogy": "DL6 8.16 • one runner starts late, so the finish-line story changes",
  "quiz2-pw-chapter-5-formula": "Q2-1 #2 and Q2-6 #1 • shortest delay or path-difference questions",
  "quiz2-pw-chapter-5-example": "DL6 8.16 • center-point and first-bright-spot reasoning",
  "quiz2-pw-chapter-5-white-light": "DL6 8.16 FNT 2 • zero order and color ordering through many slits",
  "quiz2-pw-chapter-5-recap": "Tonight's drill • best final order for the crystal and white-light material",
  "quiz2-pw-recap-core": "Chapter 12 style recap • core formulas for the official Quiz 2 scope",
  "quiz2-pw-recap-translate": "Prompt translation • what the wording is secretly asking you to do",
  "quiz2-pw-recap-traps": "Last check • the final mistakes to catch before the quiz",
};

export const QUIZ_2_PW_GUIDE = withSectionLocators(
  {
    title: "Physics Wallah Quiz 2",
    subtitle: "Quiz 2 retaught from scratch: DL3 8.9-8.10, DL4, DL5, and DL6 Activity 8.16",
    chapters: [
      {
        id: "quiz2-pw-chapter-1",
        number: "01",
        title: "Read This First",
        plainText: `
Quiz 2 feels hard because it asks you to care about tiny differences in path length, timing, and phase before those words feel natural. This chapter fixes that first. It shows the official scope, the tiny background you need, the best study order, and the traps to avoid before you start drilling the real topics.
        `.trim(),
        studyCard: [
          {
            label: "Official scope",
            value: "DL3 8.9-8.10, all of DL4 and DL5, and DL6 Activity 8.16 only.",
          },
          {
            label: "Why this tab exists",
            value: "It keeps the friendlier PW-style teaching but fills in the missing background so the ideas do not feel half-explained.",
          },
          {
            label: "Best order tonight",
            value: "Read this chapter once, then Chapters 2 -> 5, then finish with the last-night recap sheet.",
          },
          {
            label: "Biggest trap",
            value: "Do not memorize formulas before asking what changed the relative phase of the two waves.",
          },
        ],
        sections: [
          {
            id: "quiz2-pw-chapter-1-hook",
            kicker: "Real-world hook",
            badge: "Hook",
            badgeTone: "review",
            title: "Why Quiz 2 Feels New And Hard At First",
            html: `
              <p>Think about walking through a room with two speakers playing. At one spot the sound feels full. Two steps later it suddenly feels thin. Nothing visible changed. The speakers did not stop. You just moved.</p>
              <p>That is why Quiz 2 can feel weird at first. It is built around tiny differences that your brain normally ignores: one path was a little longer, one source started a little earlier, one slit got delayed by a crystal. Those tiny differences decide everything.</p>
              <p>So here is the question to keep in your head from the start: <strong>what changed the relative phase of the two waves?</strong> Once you keep asking that, the quiz stops feeling like random formulas.</p>
              <div class="takeaway-line">
                <strong>Big picture:</strong> Quiz 2 is not five unrelated topics. It is one phase story showing up as speakers, beats, double slits, and crystal shifts.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-1-scope",
            kicker: "Official scope",
            badge: "Must know",
            badgeTone: "priority",
            title: "What Is Actually On The Quiz",
            html: `
              <p>Before we teach anything, we need to clean up the scope. This quiz is narrower than "all of waves," and that matters because it tells you what deserves your time.</p>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Packet</th>
                    <th>What you need from it</th>
                    <th>What that becomes on the quiz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DL3</td>
                    <td>Activity 8.9 superposition and Activity 8.10 two-source geometry</td>
                    <td>Total phase, path difference, constructive vs destructive interference</td>
                  </tr>
                  <tr>
                    <td>DL4</td>
                    <td>Speaker scenarios and beats</td>
                    <td>Loud vs quiet, reversed leads, beat rate, heard pitch</td>
                  </tr>
                  <tr>
                    <td>DL5</td>
                    <td>Diffraction and Young's double slit</td>
                    <td>Why light makes stripes, d sin theta, bright and dark conditions</td>
                  </tr>
                  <tr>
                    <td>DL6</td>
                    <td>Activity 8.16 only</td>
                    <td>Crystal phase shift, center-point logic, and white-light color order</td>
                  </tr>
                  <tr>
                    <td>Not the priority</td>
                    <td>Later DL6 standing waves and de Broglie material</td>
                    <td>Do not spend your best study time there for Quiz 2</td>
                  </tr>
                </tbody>
              </table>
              <div class="callout callout-review">
                <strong>Translation:</strong> the highest-payoff families are two-source interference, speaker setups, beats, double-slit geometry, and crystal-shift questions.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-1-background",
            kicker: "Mini background",
            badge: "Must know",
            badgeTone: "priority",
            title: "The Tiny Background You Need Before The Physics Starts Working",
            html: `
              <p>You do not need a huge background for Quiz 2. You just need a few words to feel normal instead of scary. Let's make them normal now.</p>
              <h4>Part 1 - Wavelength is just spacing.</h4>
              <p><strong>What this means:</strong> wavelength tells you how far apart matching points on a wave are, like crest to crest or compression to compression.</p>
              <p><strong>Think of it like this:</strong> if you painted every crest blue, wavelength is the distance from one blue crest to the next blue crest.</p>
              <p><strong>Watch out:</strong> wavelength is not how far the wave travels in one second. That is wave speed.</p>

              <h4>Part 2 - Path difference is just extra distance.</h4>
              <p><strong>What this means:</strong> if one wave travels farther than the other before they meet at the same point, that extra distance creates a phase difference.</p>
              <p><strong>Think of it like this:</strong> two runners can have the same speed, but if one has a longer route, they do not arrive together.</p>
              <p><strong>Watch out:</strong> path difference is not "which source is stronger." It is only about distance traveled.</p>

              <h4>Part 3 - Phase means where the wave is inside its cycle.</h4>
              <p><strong>What this means:</strong> are you at a crest, a trough, or somewhere in between? That location inside the cycle is the phase.</p>
              <p><strong>Think of it like this:</strong> phase is the hand position on a clock of oscillation.</p>
              <p><strong>Watch out:</strong> saying two waves have the same frequency does <em>not</em> mean they have the same phase.</p>

              <h4>Part 4 - Source phase difference means the sources did not start together.</h4>
              <p><strong>What this means:</strong> even before geometry matters, one source might already be ahead because of reversed wiring, a timing lead, or a crystal delay.</p>
              <p><strong>Think of it like this:</strong> two runners may have equal tracks, but if one starts late, the finish-line story changes immediately.</p>
              <p><strong>Watch out:</strong> many students only look for path difference and completely miss the built-in source offset.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-1-order",
            kicker: "Study order",
            badge: "Checklist",
            badgeTone: "method",
            title: "How To Study This Page Without Getting Lost",
            html: `
              <p>If you jump around randomly, Quiz 2 starts to feel like disconnected packet pieces. If you move in the right order, each chapter unlocks the next one.</p>
              <div class="study-map-grid">
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 1</p>
                  <h4>Read this chapter once</h4>
                  <p>Lock the scope, vocabulary, and big idea before you try to solve anything.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 2</p>
                  <h4>Chapter 2 - Interference core</h4>
                  <p>Learn total phase, path difference, and source phase difference first. This is the backbone.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 3</p>
                  <h4>Chapter 3 - Speakers and beats</h4>
                  <p>Separate same-frequency interference from close-frequency beats so the sound questions stop blurring together.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 4</p>
                  <h4>Chapter 4 - Double slit</h4>
                  <p>Turn the screen picture into normal interference plus geometry.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 5</p>
                  <h4>Chapter 5 - Crystal and white light</h4>
                  <p>Finish by learning how a crystal adds source phase difference and why colors spread to different angles.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Step 6</p>
                  <h4>Last-night sheet</h4>
                  <p>Use the recap at the end only after the ideas make sense. It is a reminder, not a replacement.</p>
                </div>
              </div>
              <div class="takeaway-line">
                <strong>If you are short on time,</strong> spend the most time on Chapters 2 and 5. Those topics show up everywhere and flip answers fast.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-1-traps",
            kicker: "Trap check",
            badge: "Avoid",
            badgeTone: "trap",
            title: "What Usually Goes Wrong Before The Real Question Even Starts",
            html: `
              <ul>
                <li>Students memorize "constructive" and "destructive" before deciding what created the phase difference in the first place.</li>
                <li>They see two sound sources and assume beats, even when the sources have the <strong>same</strong> frequency and the question is really an interference question.</li>
                <li>They assume the center of a double-slit pattern must be bright, even after a crystal adds a source phase shift.</li>
                <li>They confuse beat rate with the pitch they hear underneath the beat envelope.</li>
                <li>They study later DL6 material that is interesting but not the official Quiz 2 target list.</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "quiz2-pw-chapter-2",
        number: "02",
        title: "Interference Without Panic",
        plainText: `
This chapter teaches the core idea of Quiz 2 slowly. Two waves reach one place. You compare their phases. The difference can come from extra distance, a built-in source offset, or both. Once that picture is clear, constructive and destructive interference stop feeling random.
        `.trim(),
        studyCard: [
          {
            label: "Core idea",
            value: "Interference is not mysterious. It is just a timing comparison between two waves at the same place.",
          },
          {
            label: "Study hardest",
            value: "Path difference, source phase difference, and the same-place same-time shortcut.",
          },
          {
            label: "Question to ask first",
            value: "What changed the relative phase: extra distance, source offset, or both?",
          },
          {
            label: "Most common confusion",
            value: "Students see the formula before the picture and miss what each term is trying to say physically.",
          },
        ],
        sections: [
          {
            id: "quiz2-pw-chapter-2-hook",
            kicker: "Real-world hook",
            badge: "Hook",
            badgeTone: "review",
            title: "When Two Speakers Do Not Agree",
            html: `
              <p>You stand in front of two speakers playing the same note. At one spot the sound feels strong. Take a few steps and suddenly it almost disappears. Take a few more and it comes back.</p>
              <p>So what changed? The note did not change. The speakers did not change. <strong>Your location changed</strong>, which changed how the two waves reached you.</p>
              <p>That is the heart of interference. Same two waves. Different phase relationship at different places.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-2-build",
            kicker: "Build it slowly",
            badge: "Must know",
            badgeTone: "priority",
            title: "Take The Idea One Piece At A Time",
            html: `
              <h4>Part 1 - Interference is a timing question.</h4>
              <p><strong>What this means:</strong> when two waves meet, we only care about where each one is inside its cycle at that same place and that same moment.</p>
              <p><strong>Think of it like this:</strong> are both hands of the oscillation clock pointing the same way, or is one ahead of the other?</p>
              <p><strong>Watch out:</strong> same frequency does not automatically mean same phase.</p>

              <h4>Part 2 - Extra distance creates phase difference.</h4>
              <p><strong>What this means:</strong> if one wave had to travel farther, it arrives later in the cycle.</p>
              <p><strong>Think of it like this:</strong> two runners can leave together, but the one on the longer route reaches the finish line later.</p>
              <p><strong>Watch out:</strong> the important thing is the <strong>difference</strong> in distance, not the distances by themselves.</p>

              <h4>Part 3 - The sources may already be out of step.</h4>
              <p><strong>What this means:</strong> even before geometry matters, one source might start ahead because of wiring, timing, or a later crystal delay.</p>
              <p><strong>Think of it like this:</strong> one runner got a head start or a late start before the race even began.</p>
              <p><strong>Watch out:</strong> many quiz questions hide this in words like "out of phase," "opposite wiring," or "ahead by T/4."</p>

              <h4>Part 4 - Constructive and destructive are just "together" and "opposite."</h4>
              <p><strong>What this means:</strong> if the waves line up crest-with-crest, the result is larger. If crest meets trough, they cancel.</p>
              <p><strong>Think of it like this:</strong> two pushes in the same direction help each other; opposite pushes fight each other.</p>
              <p><strong>Watch out:</strong> do not choose constructive or destructive until you know the total phase difference.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-2-analogy",
            kicker: "Full analogy",
            badge: "Must know",
            badgeTone: "priority",
            title: "The Runner Analogy That Makes The Formula Feel Human",
            html: `
              <p>Imagine two runners trying to hit the same finish line at exactly the same instant.</p>
              <ul class="long-list">
                <li>The <strong>finish line</strong> is the observation point where you are checking the waves.</li>
                <li>The <strong>route length</strong> is the path each wave travels.</li>
                <li>A <strong>late start or early start</strong> is the source phase difference.</li>
                <li>The <strong>arrival mismatch</strong> at the finish line is the total phase difference.</li>
              </ul>
              <p>If both runners start together and take equal routes, they arrive together. That is constructive interference. If one runner starts late or takes a longer route, they can reach the line out of sync. That is partial or destructive interference depending on how large the mismatch is.</p>
              <p>Where does this analogy break down? Runners move in one clean straight story, while waves are oscillations and phase is cyclic. But for seeing why <strong>extra distance</strong> and <strong>starting offset</strong> both matter, the analogy is strong.</p>
              <div class="concept-gallery">
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter6-pond-problem.png" alt="Two-dimensional pond-source geometry for interference" />
                  <figcaption>Once you know the point where the waves meet, the real job is just comparing the two travel distances.</figcaption>
                </figure>
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter8-kdvs-antennas.png" alt="KDVS antenna worksheet figure for two-source interference" />
                  <figcaption>The KDVS antenna setup is the same story in worksheet form: one location, two routes, and a built-in source offset.</figcaption>
                </figure>
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-2-formula",
            kicker: "Formula after idea",
            badge: "Formula after idea",
            badgeTone: "method",
            title: "Now The Total-Phase Formula Actually Means Something",
            html: `
              <div class="formula-box">ΔΦ = -2πΔx/λ + Δφ₀</div>
              <p>Read that formula in plain English like this: <strong>total phase difference = phase from extra distance + phase already built into the sources.</strong></p>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Plain-English meaning</th>
                    <th>What to ask yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Δx</td>
                    <td>The extra distance one wave traveled</td>
                    <td>Which wave had the longer route to the same point?</td>
                  </tr>
                  <tr>
                    <td>λ</td>
                    <td>The spacing of the wave cycle</td>
                    <td>How much distance equals one full cycle?</td>
                  </tr>
                  <tr>
                    <td>Δφ₀</td>
                    <td>The built-in source offset</td>
                    <td>Did the sources begin out of step?</td>
                  </tr>
                  <tr>
                    <td>ΔΦ</td>
                    <td>The final phase mismatch at the observation point</td>
                    <td>Do the waves arrive together or opposite each other?</td>
                  </tr>
                </tbody>
              </table>
              <div class="callout callout-method">
                <strong>Same-place same-time shortcut:</strong> in the most common Quiz 2 questions, you compare both waves at one location and one instant, so the time-difference term is already gone. That is why this shortened formula is the workhorse.
              </div>
              <div class="concept-gallery">
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter8-simplified-phase-chart.png" alt="Simplified phase chart for comparing two interfering waves" />
                  <figcaption>The phase chart is not a separate trick. It is just a clean way to keep the path part and source-offset part from getting mixed up.</figcaption>
                </figure>
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two-source path difference geometry for interference" />
                  <figcaption>The geometry gives you Δx. The wording gives you Δφ0. Add them only at the end.</figcaption>
                </figure>
              </div>
              <p>Once you know ΔΦ, the conditions are short:</p>
              <div class="formula-inline">Constructive: ΔΦ = 2nπ</div>
              <div class="formula-inline">Destructive: ΔΦ = (2n + 1)π</div>
            `,
          },
          {
            id: "quiz2-pw-chapter-2-example",
            kicker: "Think it through",
            badge: "Think it through",
            badgeTone: "review",
            title: "Take A Radio-Tower Question Step By Step",
            html: `
              <div class="problem-prompt">
                <p><strong>Starter:</strong> two sources send waves of the same frequency toward one observation point. The prompt asks where the signal disappears, and it also tells you one source is already ahead by some phase amount.</p>
              </div>
              <div class="worked-example">
                <div class="worked-example-head">
                  <p class="quiz-kicker">Thinking out loud</p>
                  <h4>We are not hunting for a formula first. We are hunting for the source of the phase difference.</h4>
                </div>
                <div class="worked-example-grid">
                  <div class="worked-step">
                    <strong>1. What is given? What is needed?</strong>
                    <p>Same frequency sources, one observation point, and a built-in source offset. The target is zero signal, so we are aiming for destructive interference.</p>
                  </div>
                  <div class="worked-step">
                    <strong>2. Which concept controls it?</strong>
                    <p>This is a total-phase question, so the core relation is ΔΦ = -2πΔx/λ + Δφ0.</p>
                  </div>
                  <div class="worked-step">
                    <strong>3. What do we do with the geometry?</strong>
                    <p>Write the two travel distances to the point, subtract them carefully, and that gives Δx.</p>
                  </div>
                  <div class="worked-step">
                    <strong>4. What condition are we matching?</strong>
                    <p>Because the signal disappears, set the total phase equal to (2n + 1)π, not 2nπ.</p>
                  </div>
                  <div class="worked-step">
                    <strong>5. What is the final check?</strong>
                    <p>If your answer gives only a phase and not an actual location or distance, you probably stopped one step too early.</p>
                  </div>
                </div>
              </div>
              <div class="callout callout-trap">
                <strong>Most common miss:</strong> students spot the built-in source phase shift and then forget the path-difference part, or they do the opposite. You need both before deciding the interference type.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-2-recap",
            kicker: "Phone-friend recap",
            badge: "Recap",
            badgeTone: "review",
            title: "So What Should You Remember From This Chapter",
            html: `
              <p>So here is the short version. Interference is just a timing comparison between two waves at the same place. The mismatch can come from extra path length, a built-in source offset, or both.</p>
              <p>The main formula says exactly that: total phase difference equals the path part plus the source-offset part. After that, constructive means the waves arrive together and destructive means they arrive opposite each other.</p>
              <p>Honestly, this is the chapter that makes the rest of Quiz 2 much easier. Once this part lands, later topics feel like variations instead of brand-new ideas.</p>
            `,
          },
        ],
      },
      {
        id: "quiz2-pw-chapter-3",
        number: "03",
        title: "Speakers, Beats, And Moving Sound",
        plainText: `
This chapter separates two ideas students often mix up. Same-frequency sound sources create interference patterns. Close but different frequencies create beats. If one source moves, Doppler can change the heard frequency before you even compute the beats.
        `.trim(),
        studyCard: [
          {
            label: "What this chapter fixes",
            value: "It separates same-tone interference from almost-same-tone beats so the sound questions stop blurring together.",
          },
          {
            label: "Study hardest",
            value: "Reversed leads, lambda-over-two speaker shifts, beat rate versus pitch, and Doppler-before-beats.",
          },
          {
            label: "Ask this first",
            value: "Do the two sources have the same frequency or not?",
          },
          {
            label: "Common confusion",
            value: "Students hear 'two sources' and jump straight to beats even when the setup is a same-frequency interference problem.",
          },
        ],
        sections: [
          {
            id: "quiz2-pw-chapter-3-hook",
            kicker: "Real-world hook",
            badge: "Hook",
            badgeTone: "review",
            title: "Why Musicians Listen For That Wobbling Sound",
            html: `
              <p>When two guitar strings are almost tuned together, you do not hear two clean notes fighting each other. You hear one note whose loudness swells and fades: loud, soft, loud, soft.</p>
              <p>That wobble is useful because it tells you how far apart the frequencies still are. The slower the wobble, the closer the strings are to matching.</p>
              <p>Now pause and ask the right question: if two speakers play the <strong>same</strong> note, should you expect that same wobble? No. That is where this chapter starts to separate ideas cleanly.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-3-build",
            kicker: "Build it slowly",
            badge: "Must know",
            badgeTone: "priority",
            title: "Same Tone And Almost Same Tone Are Not The Same Physics",
            html: `
              <h4>Part 1 - Same frequency means interference, not beats.</h4>
              <p><strong>What this means:</strong> if the speakers play exactly the same frequency, you are back in the phase-difference world from Chapter 2.</p>
              <p><strong>Think of it like this:</strong> the issue is where the waves line up in space, not whether they drift apart in time.</p>
              <p><strong>Watch out:</strong> two sources does not automatically mean beats.</p>

              <h4>Part 2 - Reversing one speaker's leads adds a built-in phase shift.</h4>
              <p><strong>What this means:</strong> one speaker cone pushes when the other pulls, which acts like a source phase difference of pi.</p>
              <p><strong>Think of it like this:</strong> one person pushes a swing forward while the other pushes backward.</p>
              <p><strong>Watch out:</strong> this is a source-offset effect, not a path-difference effect.</p>

              <h4>Part 3 - Moving one speaker by lambda-over-two also adds a phase mismatch.</h4>
              <p><strong>What this means:</strong> a geometric shift of λ/2 produces a path-based phase shift of pi.</p>
              <p><strong>Think of it like this:</strong> one runner took half a cycle more route than the other.</p>
              <p><strong>Watch out:</strong> in some setups a path shift of pi can cancel a source shift of pi, so do not decide too early.</p>

              <figure class="concept-figure">
                <img src="./assets/figures/chapter8-speaker-scenario.png" alt="Speaker-interference worksheet scenario" />
                <figcaption>The speaker scenarios are just Chapter 2's interference logic wearing headphones.</figcaption>
              </figure>
            `,
          },
          {
            id: "quiz2-pw-chapter-3-analogy",
            kicker: "Full analogy",
            badge: "Must know",
            badgeTone: "priority",
            title: "The Clapping Analogy For Beats",
            html: `
              <p>Imagine two people clapping almost, but not quite, at the same rhythm.</p>
              <ul class="long-list">
                <li>The <strong>two clappers</strong> are the two sound sources.</li>
                <li>Their <strong>slightly different clap rates</strong> are the two nearby frequencies.</li>
                <li>The moments when the claps land together feel strong and loud.</li>
                <li>The moments when they land out of step feel weak and messy.</li>
              </ul>
              <p>Because the rates are close, the alignment slowly drifts. Together... apart... together again. That slow drift creates the beat envelope.</p>
              <p>Where does this analogy break down? Real beats are waves adding continuously, not hand claps hitting in isolated bursts. But for understanding why the loudness pulses slowly even while the note itself stays fairly high, it works really well.</p>
              <div class="concept-gallery">
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two nearby frequencies producing beats" />
                  <figcaption>The two source waves slide in and out of alignment because their frequencies are close, not equal.</figcaption>
                </figure>
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope and carrier oscillation" />
                  <figcaption>The slow envelope is the beat pattern. The fast wiggle inside it is the carrier tone you still hear.</figcaption>
                </figure>
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-3-formula",
            kicker: "Formula after idea",
            badge: "Formula after idea",
            badgeTone: "method",
            title: "Now The Sound Formulas Have Somewhere To Land",
            html: `
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Question type</th>
                    <th>Formula</th>
                    <th>Plain-English meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Beat rate</td>
                    <td>f<sub>beat</sub> = |f<sub>1</sub> - f<sub>2</sub>|</td>
                    <td>How many loud-soft-loud pulses happen each second</td>
                  </tr>
                  <tr>
                    <td>Heard pitch inside the beats</td>
                    <td>f<sub>avg</sub> = (f<sub>1</sub> + f<sub>2</sub>) / 2</td>
                    <td>The note underneath the envelope</td>
                  </tr>
                  <tr>
                    <td>Moving source or observer before beats</td>
                    <td>f<sub>obs</sub> = f<sub>s</sub> ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>))</td>
                    <td>First find the shifted heard frequency, then compare frequencies for beats</td>
                  </tr>
                </tbody>
              </table>
              <div class="callout callout-trap">
                <strong>Misconception correction:</strong> here is where most people go wrong with this. They answer a beat-rate question with the heard pitch, or they answer a pitch question with the beat rate. Beat rate tells you how fast the loudness pulses. Average pitch tells you the note you hear underneath.
              </div>
              <div class="callout callout-method">
                <strong>Order matters:</strong> if one source moves, do the Doppler step first. The beat formula only comes after you know the two heard frequencies.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-3-example",
            kicker: "Think it through",
            badge: "Think it through",
            badgeTone: "review",
            title: "Walk Through The Bagpiper Question Slowly",
            html: `
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Bagpiper problem combining beats and Doppler" />
                <figcaption>The moment one source is moving relative to the listener, the frequencies you compare are the <em>heard</em> frequencies, not the original source frequencies.</figcaption>
              </figure>
              <div class="worked-example">
                <div class="worked-example-head">
                  <p class="quiz-kicker">Thinking out loud</p>
                  <h4>We want the beats to disappear, so we want the two heard frequencies to become equal.</h4>
                </div>
                <div class="worked-example-grid">
                  <div class="worked-step">
                    <strong>1. What is the easy part?</strong>
                    <p>Before anyone moves, the beat rate is just the absolute difference of the two source frequencies.</p>
                  </div>
                  <div class="worked-step">
                    <strong>2. What changes when the listener runs?</strong>
                    <p>The heard frequencies change by Doppler shift. One can move up while the other moves down.</p>
                  </div>
                  <div class="worked-step">
                    <strong>3. Which direction should the listener run?</strong>
                    <p>Toward the lower-frequency source and away from the higher-frequency source, so the gap between them shrinks.</p>
                  </div>
                  <div class="worked-step">
                    <strong>4. What equation captures that goal?</strong>
                    <p>Set the two <em>heard</em> frequencies equal. That is the condition for zero beat rate.</p>
                  </div>
                  <div class="worked-step">
                    <strong>5. Final sanity check</strong>
                    <p>If the beats disappear, the heard note should sit near the average of the original two notes, not somewhere wildly different.</p>
                  </div>
                </div>
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-3-recap",
            kicker: "Phone-friend recap",
            badge: "Recap",
            badgeTone: "review",
            title: "So What Do You Really Need To Remember Here",
            html: `
              <p>Short version: same-frequency sound sources are interference questions, not beat questions. Close-but-different frequencies create beats, and the beat rate is the difference of the frequencies while the heard pitch is their average.</p>
              <p>If motion shows up, shift the heard frequency first with Doppler and only then do the beat comparison. That one order rule saves a lot of mistakes.</p>
              <p>This chapter trips people up because it sounds like one topic, but it is really two: same-tone interference and almost-same-tone beats. Now that split should feel clear.</p>
            `,
          },
        ],
      },
      {
        id: "quiz2-pw-chapter-4",
        number: "04",
        title: "Double Slit Finally Makes Sense",
        plainText: `
This chapter turns the double-slit experiment into something less mystical. Each slit acts like a source. The screen is just a place where the two waves meet with different path lengths. After that, the bright and dark stripes are ordinary interference with special geometry.
        `.trim(),
        studyCard: [
          {
            label: "What this chapter is really saying",
            value: "Double slit is normal two-source interference plus one geometry picture you need to read correctly.",
          },
          {
            label: "Study hardest",
            value: "Delta x = d sin theta, bright vs dark conditions, and the small-angle link to screen position.",
          },
          {
            label: "Keep asking",
            value: "Which point on the screen am I talking about, and what path difference belongs to that point?",
          },
          {
            label: "Common confusion",
            value: "Students memorize d sin theta = n lambda without first understanding why two slits act like two sources.",
          },
        ],
        sections: [
          {
            id: "quiz2-pw-chapter-4-hook",
            kicker: "Real-world hook",
            badge: "Hook",
            badgeTone: "review",
            title: "Why Two Tiny Openings Make A Whole Stripe Pattern",
            html: `
              <p>If light were only a stream of tiny pellets, then two narrow slits should make two bright patches on the wall. That is the simple guess most of us would make the first time.</p>
              <p>But the real experiment does something more interesting. It paints a whole pattern of bright and dark stripes. So pause for a second and ask the right question: what could make some places bright and other places dark if the light going in was the same?</p>
              <p>The answer is wave interference. Each slit behaves like a source, and the wall becomes a map of places where the two outgoing waves either help or cancel each other.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-4-build",
            kicker: "Build it slowly",
            badge: "Must know",
            badgeTone: "priority",
            title: "Take The Double-Slit Story In The Right Order",
            html: `
              <h4>Part 1 - A tiny opening can behave like a source.</h4>
              <p><strong>What this means:</strong> by Huygens' principle, each point on a wavefront can act like a tiny emitter, so a narrow slit sends out a fresh wave.</p>
              <p><strong>Think of it like this:</strong> the slit is not just a hole. It is a doorway where the disturbance gets re-emitted.</p>
              <p><strong>Watch out:</strong> if you skip this idea, the rest of the double-slit story feels magical for no reason.</p>

              <h4>Part 2 - Two slits means two sources.</h4>
              <p><strong>What this means:</strong> once the wave passes the barrier, you now have two outgoing waves reaching the screen.</p>
              <p><strong>Think of it like this:</strong> one incoming wave became two synchronized messengers.</p>
              <p><strong>Watch out:</strong> the screen is not making the pattern. The interference is already decided by how the waves arrive there.</p>

              <h4>Part 3 - Different points on the screen have different path differences.</h4>
              <p><strong>What this means:</strong> the center point has equal path lengths, but points above or below center do not.</p>
              <p><strong>Think of it like this:</strong> each seat in the theater hears a slightly different route story from the two sources.</p>
              <p><strong>Watch out:</strong> do not talk about "the pattern" as one thing. Every point on the screen has its own Δx.</p>

              <h4>Part 4 - Bright and dark are just constructive and destructive.</h4>
              <p><strong>What this means:</strong> bright stripes happen when the two slit waves arrive together. Dark stripes happen when they arrive opposite each other.</p>
              <p><strong>Think of it like this:</strong> the stripes are just light's version of loud and quiet zones for sound.</p>
              <p><strong>Watch out:</strong> bright and dark are not new laws. They are the old interference laws translated into a screen picture.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-4-analogy",
            kicker: "Full analogy",
            badge: "Must know",
            badgeTone: "priority",
            title: "The Best Analogy Is Actually A Sound Analogy",
            html: `
              <p>Imagine two identical speakers playing the same note toward a wall of seats.</p>
              <ul class="long-list">
                <li>The <strong>two speakers</strong> are the two slits.</li>
                <li>The <strong>audience seats</strong> are the different points on the screen.</li>
                <li>The <strong>distance from each speaker to one seat</strong> plays the role of the two path lengths.</li>
                <li>A <strong>loud seat</strong> is the sound version of a bright fringe.</li>
                <li>A <strong>quiet seat</strong> is the sound version of a dark fringe.</li>
              </ul>
              <p>So the double-slit experiment is not a brand-new species of physics. It is the same two-source interference story from sound, but now the sources are slits and the output is brightness on a screen.</p>
              <p>Where does this analogy break down? Sound is mechanical and light is electromagnetic. But for understanding why different positions give different interference results, it is almost perfect.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-4-formula",
            kicker: "Formula after idea",
            badge: "Formula after idea",
            badgeTone: "method",
            title: "Now The Geometry Equations Are Easy To Read",
            html: `
              <div class="concept-gallery">
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter10-huygens-hole.png" alt="Huygens principle and diffraction through a small opening" />
                  <figcaption>Diffraction is the doorway idea: a narrow opening behaves like a source.</figcaption>
                </figure>
                <figure class="concept-figure">
                  <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Young's double-slit geometry with screen distance and fringe spacing" />
                  <figcaption>This picture is the one you translate into path difference and screen position.</figcaption>
                </figure>
              </div>
              <div class="formula-inline">Δx = d sin θ</div>
              <p>This says the path difference depends on slit spacing <strong>d</strong> and the angle <strong>θ</strong> of the point on the screen.</p>
              <div class="formula-inline">Bright: d sin θ = nλ</div>
              <div class="formula-inline">Dark: d sin θ = (n + 1/2)λ</div>
              <p>That is just constructive and destructive interference rewritten for slit geometry.</p>
              <div class="formula-inline">tan θ = y / D</div>
              <p>So if a question gives you screen distance <strong>D</strong> and a vertical location <strong>y</strong>, you can turn the wall picture into an angle and then into path difference.</p>
              <div class="callout callout-method">
                <strong>Small-angle shortcut:</strong> when the screen is far away, use sin θ ≈ tan θ ≈ y/D. That is what turns a messy-looking picture into quick algebra.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-4-example",
            kicker: "Think it through",
            badge: "Think it through",
            badgeTone: "review",
            title: "Read A Screen-Spacing Question Like A Calm Person",
            html: `
              <div class="worked-example">
                <div class="worked-example-head">
                  <p class="quiz-kicker">Thinking out loud</p>
                  <h4>The question usually gives you a point on the screen and asks whether it is bright, dark, or useful for finding d or lambda.</h4>
                </div>
                <div class="worked-example-grid">
                  <div class="worked-step">
                    <strong>1. What is the point on the screen?</strong>
                    <p>Mark its position relative to the center. That tells you which y-value and angle you care about.</p>
                  </div>
                  <div class="worked-step">
                    <strong>2. What kind of fringe is it?</strong>
                    <p>If the prompt says bright, use the bright condition. If it says dark, use the dark condition. Do not switch them out of habit.</p>
                  </div>
                  <div class="worked-step">
                    <strong>3. How do we connect the picture to the formula?</strong>
                    <p>Use y and D to get the angle information, then use Δx = d sin θ or the small-angle shortcut.</p>
                  </div>
                  <div class="worked-step">
                    <strong>4. What are we actually solving for?</strong>
                    <p>Sometimes it is d. Sometimes it is lambda. Sometimes it is the fringe index. Say that clearly before you substitute.</p>
                  </div>
                  <div class="worked-step">
                    <strong>5. Final check</strong>
                    <p>If the answer says a dark fringe but your algebra used the bright condition, the setup was wrong no matter how clean the arithmetic looks.</p>
                  </div>
                </div>
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-4-recap",
            kicker: "Phone-friend recap",
            badge: "Recap",
            badgeTone: "review",
            title: "So What Is The Double-Slit Story In One Breath",
            html: `
              <p>Two slits behave like two sources. Different points on the screen give different path differences. Bright means the waves arrive together, dark means they arrive opposite each other.</p>
              <p>The geometry line you keep coming back to is Δx = d sin theta, and the screen-position shortcut is y over D for small angles. That is really the whole machine.</p>
              <p>If this chapter felt more manageable than the packet, that is a good sign. It means the picture is finally supporting the formulas instead of fighting them.</p>
            `,
          },
        ],
      },
      {
        id: "quiz2-pw-chapter-5",
        number: "05",
        title: "Crystal Shift And White-Light Questions",
        plainText: `
This chapter keeps the double-slit picture but adds one twist that changes everything: one slit can be delayed by a crystal. That creates a source phase difference, which means even the center of the screen may no longer be bright. The chapter also covers the white-light color-ordering idea from DL6 Activity 8.16.
        `.trim(),
        studyCard: [
          {
            label: "What this chapter changes",
            value: "It keeps the same double-slit geometry but adds a built-in source phase shift before the waves race to the screen.",
          },
          {
            label: "Study hardest",
            value: "Center-point logic, shortest extra delay or path difference, and why blue stays closer to the center than red.",
          },
          {
            label: "Question to ask first",
            value: "At this point on the screen, is the geometry doing the work, or is the crystal doing the work, or both?",
          },
          {
            label: "Common confusion",
            value: "Students assume the center must still be bright even after the crystal changes the source phase difference.",
          },
        ],
        sections: [
          {
            id: "quiz2-pw-chapter-5-hook",
            kicker: "Real-world hook",
            badge: "Hook",
            badgeTone: "review",
            title: "If One Runner Starts Late, The Finish-Line Story Changes",
            html: `
              <p>Picture two runners heading toward the same finish line at the same speed. If they start together and take equal routes, they arrive together. Simple.</p>
              <p>Now change one thing only: make one runner start a little late. Suddenly the finish line no longer feels symmetric, even though the track lengths are still equal.</p>
              <p>That is exactly what a crystal does in this chapter. It does not move the slits. It changes the starting phase of one wave before the normal double-slit geometry even begins.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-build",
            kicker: "Build it slowly",
            badge: "Must know",
            badgeTone: "priority",
            title: "Take The Crystal Idea One Piece At A Time",
            html: `
              <h4>Part 1 - The crystal adds source phase difference.</h4>
              <p><strong>What this means:</strong> one wave gets delayed before leaving its slit, so the two outgoing waves are no longer starting together.</p>
              <p><strong>Think of it like this:</strong> the race begins with one runner already behind in timing.</p>
              <p><strong>Watch out:</strong> the crystal does not change the slit spacing. It changes the starting phase.</p>

              <h4>Part 2 - The center is no longer automatically bright.</h4>
              <p><strong>What this means:</strong> at the center of the screen, the path lengths are equal, so the geometry contribution is zero. If the crystal added a source offset, that offset decides the result there.</p>
              <p><strong>Think of it like this:</strong> equal routes do not guarantee equal arrival if one runner started late.</p>
              <p><strong>Watch out:</strong> this is the most repeated DL6 trap.</p>

              <h4>Part 3 - Shortest-delay questions are really phase-balance questions.</h4>
              <p><strong>What this means:</strong> the question is usually asking how much extra path or delay is needed to cancel or complete the built-in source offset.</p>
              <p><strong>Think of it like this:</strong> if one runner started late, how much shorter must their route be to tie at the finish line?</p>
              <p><strong>Watch out:</strong> the smallest allowed answer usually comes from the smallest integer choice, not from the first number that drops out of your algebra.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-analogy",
            kicker: "Full analogy",
            badge: "Must know",
            badgeTone: "priority",
            title: "The Late-Start Analogy Is Almost The Whole Chapter",
            html: `
              <p>Use the runner picture again, but now be very explicit.</p>
              <ul class="long-list">
                <li>The <strong>finish line</strong> is the observation point on the screen.</li>
                <li>The <strong>equal routes from the slits to the center</strong> mean Δx = 0 at the center.</li>
                <li>The <strong>late start</strong> is the crystal's source phase difference.</li>
                <li>The <strong>question "bright or dark?"</strong> becomes a question about whether the total mismatch is a constructive or destructive condition.</li>
              </ul>
              <p>Where does the analogy break down? Real waves wrap around cyclic phase, while runner arrival is a one-time event. But for the center-point logic and the idea of "compensating" a built-in delay with path difference, this analogy is excellent.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-formula",
            kicker: "Formula after idea",
            badge: "Formula after idea",
            badgeTone: "method",
            title: "Now The Crystal Formulas Read Like Sentences",
            html: `
              <figure class="concept-figure">
                <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Double slit with a phase-shifting crystal in front of one slit" />
                <figcaption>The crystal shifts the whole pattern because it changes the source phase difference before the waves travel to the screen.</figcaption>
              </figure>
              <div class="formula-inline">Δφ<sub>0</sub> = 2πΔt / T</div>
              <p>This turns a time delay into a phase difference.</p>
              <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ<sub>0</sub></div>
              <p>This is the same total-phase formula from Chapter 2, but now the crystal is the reason Δφ0 is not zero.</p>
              <div class="callout callout-method">
                <strong>Center-point rule:</strong> at the center, Δx = 0. So the total phase there is just Δφ0. That means the center is only bright if the crystal's phase shift lands on a constructive condition.
              </div>
              <p>If a question asks for the shortest extra path difference that makes a point bright, you are solving for the path part that balances the existing source-phase part.</p>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-example",
            kicker: "Think it through",
            badge: "Think it through",
            badgeTone: "review",
            title: "Handle A Center-Point Or First-Bright-Spot Question Calmly",
            html: `
              <div class="worked-example">
                <div class="worked-example-head">
                  <p class="quiz-kicker">Thinking out loud</p>
                  <h4>The question usually asks whether the center is bright or dark, or what extra delay or path difference is needed to make a point bright.</h4>
                </div>
                <div class="worked-example-grid">
                  <div class="worked-step">
                    <strong>1. Start at the point itself</strong>
                    <p>If the point is the center, say out loud that Δx = 0 before doing anything else.</p>
                  </div>
                  <div class="worked-step">
                    <strong>2. Name the source of phase difference</strong>
                    <p>At the center, the crystal is doing the whole job. Away from the center, the crystal and geometry both contribute.</p>
                  </div>
                  <div class="worked-step">
                    <strong>3. Pick the target condition</strong>
                    <p>Bright means 2nπ. Dark means (2n + 1)π. The algebra only makes sense after that choice is made.</p>
                  </div>
                  <div class="worked-step">
                    <strong>4. Solve for the missing piece</strong>
                    <p>If the crystal already gives part of the phase mismatch, solve for the extra path or delay that completes the condition.</p>
                  </div>
                  <div class="worked-step">
                    <strong>5. Final check</strong>
                    <p>A tiny phase delay should usually lead to a small fraction of a wavelength, not some giant multi-wavelength correction.</p>
                  </div>
                </div>
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-white-light",
            kicker: "DL6 white light",
            badge: "Must know",
            badgeTone: "priority",
            title: "Why Blue Stays Closer To The Center Than Red",
            html: `
              <figure class="concept-figure">
                <img src="./assets/figures/chapter11-multislit-maxima.png" alt="Diffraction grating maxima and color spread" />
                <figcaption>All colors overlap at zero order, but once you move away from the center the longer wavelengths spread farther out.</figcaption>
              </figure>
              <p>White light is many wavelengths together. Through many slits or a grating, each wavelength satisfies the bright condition at a different angle.</p>
              <div class="formula-inline">d sin θ = nλ</div>
              <p>For the same order <strong>n</strong> and the same slit or grating spacing <strong>d</strong>, a longer wavelength needs a larger angle.</p>
              <ul>
                <li><strong>Zero order:</strong> straight through the center, all colors overlap, so it looks white.</li>
                <li><strong>Away from center:</strong> blue is closer to the middle because blue has a shorter wavelength.</li>
                <li><strong>Farther out:</strong> red spreads more because red has a longer wavelength.</li>
              </ul>
              <div class="callout callout-review">
                <strong>Memory trick:</strong> shorter wavelength means smaller angle for the same order. So blue stays closer in than red.
              </div>
            `,
          },
          {
            id: "quiz2-pw-chapter-5-recap",
            kicker: "Phone-friend recap",
            badge: "Recap",
            badgeTone: "review",
            title: "So What Is The Short Version Of DL6 Activity 8.16",
            html: `
              <p>Short version: a crystal adds source phase difference, which means the center of the double-slit pattern is no longer automatically bright. The total phase formula is still the same, but now Δφ0 matters a lot.</p>
              <p>For white light, the zero-order center stays white because every wavelength goes straight through together. Away from the center, shorter wavelengths stay closer in and longer wavelengths spread farther out.</p>
              <div class="study-map-grid">
                <div class="study-map-card">
                  <p class="quiz-kicker">Drill 1</p>
                  <h4>Center-point crystal questions</h4>
                  <p>Say "Δx = 0 at the center" out loud until it feels automatic.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Drill 2</p>
                  <h4>Shortest extra delay or path difference</h4>
                  <p>Practice balancing the crystal's phase shift with the geometry term.</p>
                </div>
                <div class="study-map-card">
                  <p class="quiz-kicker">Drill 3</p>
                  <h4>White-light color order</h4>
                  <p>Know why the center is white and why blue sits closer than red.</p>
                </div>
              </div>
            `,
          },
        ],
      },
    ],
    recap: {
      id: "quiz2-pw-recap",
      title: "Last-Night Quiz 2 Sheet",
      plainText: `
Last-night Quiz 2 sheet.
Two-source same-frequency questions are phase questions.
Close-frequency sound questions are beat questions.
Double slit is just two-source interference with special geometry.
Crystal questions are the same total-phase story with a source phase shift.
White-light ordering comes from d sin theta = n lambda.
      `.trim(),
      sections: [
        {
          id: "quiz2-pw-recap-core",
          kicker: "Core formulas",
          badge: "Recap",
          badgeTone: "review",
          title: "What You Reach For After The Idea Is Already Clear",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Formula</th>
                  <th>Use it when</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total phase</td>
                  <td>ΔΦ = -2πΔx/λ + Δφ<sub>0</sub></td>
                  <td>You compare two same-frequency waves at one place</td>
                </tr>
                <tr>
                  <td>Constructive</td>
                  <td>ΔΦ = 2nπ</td>
                  <td>You need loud or bright</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = (2n + 1)π</td>
                  <td>You need quiet, dark, or zero signal</td>
                </tr>
                <tr>
                  <td>Beat rate</td>
                  <td>f<sub>beat</sub> = |f<sub>1</sub> - f<sub>2</sub>|</td>
                  <td>You need the pulse rate of loud-soft-loud</td>
                </tr>
                <tr>
                  <td>Heard pitch</td>
                  <td>f<sub>avg</sub> = (f<sub>1</sub> + f<sub>2</sub>) / 2</td>
                  <td>You need the note under the beat envelope</td>
                </tr>
                <tr>
                  <td>Doppler</td>
                  <td>f<sub>obs</sub> = f<sub>s</sub> ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>))</td>
                  <td>Motion changes the heard frequency before a beat comparison</td>
                </tr>
                <tr>
                  <td>Double-slit path difference</td>
                  <td>Δx = d sin θ</td>
                  <td>You connect slit geometry to the interference condition</td>
                </tr>
                <tr>
                  <td>Bright fringe</td>
                  <td>d sin θ = nλ</td>
                  <td>You are on a bright line</td>
                </tr>
                <tr>
                  <td>Dark fringe</td>
                  <td>d sin θ = (n + 1/2)λ</td>
                  <td>You are on a dark line</td>
                </tr>
                <tr>
                  <td>Crystal delay</td>
                  <td>Δφ<sub>0</sub> = 2πΔt / T</td>
                  <td>You must turn time delay into phase shift</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz2-pw-recap-translate",
          kicker: "Prompt translation",
          badge: "Checklist",
          badgeTone: "method",
          title: "If The Question Says This, Your Brain Should Translate It Like This",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>If the prompt says...</th>
                  <th>Your translation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Silence, zero signal, dark spot</td>
                  <td>This is a destructive condition</td>
                </tr>
                <tr>
                  <td>Loudest, brightest, maximum</td>
                  <td>This is a constructive condition</td>
                </tr>
                <tr>
                  <td>Out of phase, reversed leads, one source ahead</td>
                  <td>There is a nonzero Δφ0</td>
                </tr>
                <tr>
                  <td>Two sources with the same frequency</td>
                  <td>Think phase and interference, not beats</td>
                </tr>
                <tr>
                  <td>Throbbing loudness or wobbling sound</td>
                  <td>Think beats</td>
                </tr>
                <tr>
                  <td>One source moves before the beat question</td>
                  <td>Do Doppler first, beats second</td>
                </tr>
                <tr>
                  <td>Crystal in one slit</td>
                  <td>Check the center using Δx = 0 before assuming anything</td>
                </tr>
                <tr>
                  <td>Blue closer to center than red</td>
                  <td>Shorter wavelength means smaller angle for the same order</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz2-pw-recap-traps",
          kicker: "Final trap check",
          badge: "Avoid",
          badgeTone: "trap",
          title: "Last Mistakes To Catch Before You Walk Into The Quiz",
          html: `
            <ul>
              <li>Do not answer a beat-rate question with the average pitch, or an average-pitch question with the beat rate.</li>
              <li>Do not forget that the center of a crystal-shifted double-slit pattern can be dark or partially bright.</li>
              <li>Do not use the constructive condition just because the algebra looks cleaner. The wording decides the condition.</li>
              <li>Do not treat every two-source sound question as beats. Same frequency means interference.</li>
              <li>Do not let later DL6 standing-wave content steal time from the actual Quiz 2 scope.</li>
            </ul>
            <div class="callout callout-review">
              <strong>Motivational close:</strong> this material is genuinely not obvious the first time. If you made it through this page carefully, the second pass through the packets will feel much more readable.
            </div>
          `,
        },
      ],
    },
  },
  QUIZ_2_PW_SECTION_LOCATORS,
);

const QUIZ_1_CHAPTER_LOCATORS = {
  "chapter-1": "DL1 • Activity 8.1 what is a wave",
  "chapter-2": "DL1 • Activity 8.2 1-D sinusoidal continuous waves",
  "chapter-3": "DL2 • Activities 8.3-8.4 wave graphs and wave-equation reading",
  "chapter-4": "DL2 • Activity 8.5 higher-dimensional waves",
  "chapter-5": "DL3 • Activity 8.8 Doppler effect",
  "chapter-6": "DL3 • Activity 8.9 superposition of waves",
  "chapter-7": "Core reference • DL1-DL3 formulas",
  "chapter-8": "DL4 • Activity 8.11 interference in 1D and 2D",
  "chapter-9": "DL4 • Activity 8.12 beats",
  "chapter-10": "DL5 • Activities 8.14-8.15 diffraction and Young's double slit",
  "chapter-11": "DL5 • Activity 8.15 diffraction gratings and wave behavior of light",
  "chapter-12": "Complete reference • DL1-DL5 formulas",
  "chapter-13": "Textbook supplement • Sections 8.1-8.6",
  "final-recap": "Mixed recap • DL1-DL5 plus textbook supplement 8.1-8.6",
};

const QUIZ_1_SECTION_LOCATORS = {
  "chapter-3-tricky": "DL3 • Activity 8.7 wave equation wrap-up mock quiz",
  "chapter-4-decibels": "DL2 • Activity 8.6 human hearing and decibels",
  "chapter-4-two-speakers": "DL2 • Activity 8.6 decibel combination example",
  "chapter-6-pond-problem": "DL3 • Activity 8.10 superposition of waves in two dimensions",
  "chapter-8-kdvs": "DL5 • Activity 8.13 KDVS radio antennas wrap-up",
  "chapter-9-challenge": "DL5 • Activity 8.13 beats + Doppler combined",
  "chapter-11-phase-shift": "DL6 • Activity 8.16 crystal phase-shift extension",
  "chapter-13-8-1": "Textbook supplement • Section 8.1 introduction to waves",
  "chapter-13-8-2": "Textbook supplement • Section 8.2 wave representation",
  "chapter-13-8-3": "Textbook supplement • Section 8.3 multi-dimensional waves",
  "chapter-13-8-4": "Textbook supplement • Section 8.4 Doppler effect",
  "chapter-13-8-5": "Textbook supplement • Section 8.5 superposition and interference",
  "chapter-13-8-6": "Textbook supplement • Section 8.6 beats",
  "chapter-13-summary": "Textbook supplement • Sections 8.1-8.6 big-picture add-ons",
  "final-recap-10": "Mixed recap • all of Unit 8 in 15 sentences",
};

export const QUIZ_1_GUIDE = withSectionLocators(STUDY_GUIDE, QUIZ_1_SECTION_LOCATORS, QUIZ_1_CHAPTER_LOCATORS);

const STUDY_GUIDE_SECTION_INDEX = Object.fromEntries(
  [
    ...STUDY_GUIDE.chapters.flatMap((chapter) => chapter.sections),
    ...(STUDY_GUIDE.recap?.sections || []),
  ].map((section) => [section.id, section]),
);

function cloneStudyGuideSection(sourceId, id, overrides = {}) {
  const source = STUDY_GUIDE_SECTION_INDEX[sourceId];
  if (!source) {
    throw new Error(`Unknown study-guide section: ${sourceId}`);
  }

  return {
    ...source,
    id,
    ...overrides,
  };
}

const QUIZ_2_CLASSIC_CHAPTER_LOCATORS = {
  "quiz2-classic-chapter-1": "DL3 • Activities 8.9-8.10 superposition and two-dimensional interference",
  "quiz2-classic-chapter-2": "DL4 • Activity 8.11 same-frequency interference scenarios",
  "quiz2-classic-chapter-3": "DL4-DL5 • beats plus wrap-up applications",
  "quiz2-classic-chapter-4": "DL5 • Activities 8.14-8.15 diffraction and Young's double slit",
  "quiz2-classic-chapter-5": "DL4 FNT 2 plus DL6 • thin film, gratings, and crystal phase shifts",
  "quiz2-classic-chapter-6": "Mixed reference • official Quiz 2 formulas from DL3 through DL6 Activity 8.16",
  "quiz2-classic-recap": "Mixed recap • official Quiz 2 scope in one last pass",
};

const QUIZ_2_CLASSIC_SECTION_LOCATORS = {
  "quiz2-classic-ch1-pond": "DL3 • Activity 8.10 superposition of waves in two dimensions",
  "quiz2-classic-ch2-fnt-table": "DL4 • FNT 2 five speaker parameter sets",
  "quiz2-classic-ch2-kdvs": "DL5 • Activity 8.13 KDVS radio antennas wrap-up",
  "quiz2-classic-ch3-doppler-signs": "DL5 • Doppler sign-choice explainer for mixed beats problems",
  "quiz2-classic-ch3-challenge": "DL5 • Activity 8.13 beats + Doppler combined",
  "quiz2-classic-ch4-hook": "DL5 • Activity 8.14 diffraction and two-slit interference",
  "quiz2-classic-ch4-wavefront-ray": "DL5 • Activity 8.14 diffraction and two-slit interference",
  "quiz2-classic-ch4-young": "DL5 • Activity 8.15 why do we think light is a wave",
  "quiz2-classic-ch4-geometry": "DL5 • Activity 8.15 double-slit geometry and bright or dark conditions",
  "quiz2-classic-ch4-small-angle": "DL5 • Activity 8.15 small-angle fringe spacing",
  "quiz2-classic-ch4-worked": "DL5 • Activity 8.15 red-versus-blue fringe spacing application",
  "quiz2-classic-ch5-hook": "DL5 • Activity 8.15 diffraction grating intuition",
  "quiz2-classic-ch5-multislit": "DL5 • Activity 8.15 many-slit diffraction and sharper maxima",
  "quiz2-classic-ch5-grating-formula": "DL5 • Activity 8.15 diffraction grating formula",
  "quiz2-classic-ch5-white-light": "DL6 • Activity 8.16 white light through a diffraction grating",
  "quiz2-classic-ch5-phase-shift": "DL6 • Activity 8.16 crystal phase-shift mock quiz",
  "quiz2-classic-ch5-thin-film": "DL4 • FNT 2 blue morpho butterfly thin-film interference",
  "quiz2-classic-ch6-reference": "Mixed reference • official Quiz 2 formulas from DL3 8.9-8.10, DL4, DL5, and DL6 8.16",
  "quiz2-classic-recap-12": "Mixed recap • Quiz 2 in 12 sentences",
};

export const QUIZ_2_CLASSIC_GUIDE = withSectionLocators(
  {
    title: "Quiz 2 Study Guide",
    subtitle: "Quiz 1-style guide | DL3 8.9-8.10, DL4, DL5, and DL6 Activity 8.16",
    chapters: [
      {
        id: "quiz2-classic-chapter-1",
        number: "01",
        title: "Chapter 1 - Superposition and Interference",
        plainText: `
Chapter 1 Superposition and Interference for Quiz 2.
This chapter teaches the official DL3 core for Quiz 2: Act 8.9 and Act 8.10.
The key ideas are superposition, constructive and destructive interference, total phase difference, and two-dimensional path-difference geometry.
        `.trim(),
        sections: [
          cloneStudyGuideSection("chapter-6-hook", "quiz2-classic-ch1-hook"),
          cloneStudyGuideSection("chapter-6-superposition", "quiz2-classic-ch1-superposition"),
          cloneStudyGuideSection("chapter-6-types", "quiz2-classic-ch1-types"),
          cloneStudyGuideSection("chapter-6-phase-chart", "quiz2-classic-ch1-phase-chart"),
          {
            id: "quiz2-classic-ch1-conditions",
            title: "General Interference Conditions - The Formula Anchor",
            html: `
              <p>This is the version worth memorizing because it already includes built-in source phase difference. It works whether the offset comes from opposite wiring, a timing lead, or a crystal.</p>
              <div class="formula-box">Constructive: Δx = nλ - (Δφ₀λ)/(2π)</div>
              <div class="formula-box">Destructive: Δx = (n + 1/2)λ - (Δφ₀λ)/(2π)</div>
              <p><strong>Special case 1:</strong> if <code>Δφ₀ = 0</code>, these collapse to the familiar same-phase rules:</p>
              <ul>
                <li>Constructive: <code>Δx = nλ</code></li>
                <li>Destructive: <code>Δx = (n + 1/2)λ</code></li>
              </ul>
              <p><strong>Special case 2:</strong> if <code>Δφ₀ = π</code>, the conditions flip:</p>
              <ul>
                <li>Constructive: <code>Δx = (n + 1/2)λ</code></li>
                <li>Destructive: <code>Δx = nλ</code></li>
              </ul>
              <div class="callout">
                <strong>Why this matters:</strong> the general formula is the safer starting point whenever the prompt hides a source offset in words like <em>out of phase</em>, <em>reversed leads</em>, or <em>one source delayed</em>.
              </div>
            `,
          },
          cloneStudyGuideSection("chapter-6-pond-problem", "quiz2-classic-ch1-pond"),
        ],
      },
      {
        id: "quiz2-classic-chapter-2",
        number: "02",
        title: "Chapter 2 - Interference Scenarios and Simplified Phase Charts",
        plainText: `
Chapter 2 Interference Scenarios and Simplified Phase Charts for Quiz 2.
This chapter covers the same-frequency interference setups from DL4 Activity 8.11 and keeps the KDVS-style wrap-up application that connects fixed phase offsets to path difference.
        `.trim(),
        sections: [
          cloneStudyGuideSection("chapter-8-hook", "quiz2-classic-ch2-hook"),
          cloneStudyGuideSection("chapter-8-simplified-phase-chart", "quiz2-classic-ch2-phase-chart"),
          {
            id: "quiz2-classic-ch2-fnt-table",
            title: "The Full FNT 2 Speaker Parameter Sets",
            html: `
              <p>The FNT does not just ask for “same wiring” or “opposite wiring” in words. It gives specific parameter sets, so it helps to see all five in one table.</p>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>Parameters</th>
                    <th>Phase logic</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><code>x₁ = x</code>, <code>x₂ = x + λ</code>, <code>Δφ₀ = 0</code></td>
                    <td>Path difference adds <code>2π</code></td>
                    <td>Constructive</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><code>x₁ = x</code>, <code>x₂ = x</code>, <code>Δφ₀ = π</code></td>
                    <td>No path term, only opposite wiring</td>
                    <td>Destructive</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><code>x₁ = x</code>, <code>x₂ = x + λ/2</code>, <code>Δφ₀ = 0</code></td>
                    <td>Path difference adds <code>π</code></td>
                    <td>Destructive</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><code>x₁ = x</code>, <code>x₂ = x</code>, <code>Δφ₀ = 0</code></td>
                    <td>No path term and no source offset</td>
                    <td>Constructive</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><code>x₁ = x + λ/2</code>, <code>x₂ = x</code>, <code>Δφ₀ = π</code></td>
                    <td><code>-π + π = 0</code>, so the two out-of-phase effects cancel</td>
                    <td>Constructive</td>
                  </tr>
                </tbody>
              </table>
              <div class="callout callout-trap">
                <strong>Set 5 trap:</strong> opposite wiring does <em>not</em> automatically mean destructive. If the geometry contributes the opposite phase shift, the total phase can come back to zero.
              </div>
            `,
          },
          cloneStudyGuideSection("chapter-8-four-scenarios", "quiz2-classic-ch2-scenarios"),
          cloneStudyGuideSection("chapter-8-walking-around", "quiz2-classic-ch2-walking"),
          cloneStudyGuideSection("chapter-8-kdvs", "quiz2-classic-ch2-kdvs"),
        ],
      },
      {
        id: "quiz2-classic-chapter-3",
        number: "03",
        title: "Chapter 3 - Beats and Moving Sound",
        plainText: `
Chapter 3 Beats and Moving Sound for Quiz 2.
This chapter covers DL4 Activity 8.12 and the DL5 wrap-up application where Doppler shift changes the heard frequencies before you compute the beats.
        `.trim(),
        sections: [
          cloneStudyGuideSection("chapter-9-hook", "quiz2-classic-ch3-hook"),
          cloneStudyGuideSection("chapter-9-what-happening", "quiz2-classic-ch3-what-happening"),
          cloneStudyGuideSection("chapter-9-derivation", "quiz2-classic-ch3-derivation"),
          cloneStudyGuideSection("chapter-9-reading-graphs", "quiz2-classic-ch3-reading-graphs"),
          {
            id: "quiz2-classic-ch3-doppler-signs",
            title: "How The Linked Doppler Signs Actually Work",
            html: `
              <p>The symbols <code>±</code> and <code>∓</code> are linked opposites. You do <em>not</em> choose them independently. Once you choose the sign in the numerator, the denominator must take the opposite-style sign.</p>
              <div class="formula-box">f<sub>obs</sub> = ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>)) f<sub>s</sub></div>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Motion</th>
                    <th>Sign choice</th>
                    <th>Physical effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Observer toward source</td>
                    <td><code>+v_o</code></td>
                    <td>You run into wavefronts faster, so the heard frequency goes up.</td>
                  </tr>
                  <tr>
                    <td>Observer away from source</td>
                    <td><code>-v_o</code></td>
                    <td>You meet wavefronts less often, so the heard frequency goes down.</td>
                  </tr>
                  <tr>
                    <td>Source toward observer</td>
                    <td><code>-v_s</code></td>
                    <td>The source bunches wavefronts together, so the heard frequency goes up.</td>
                  </tr>
                  <tr>
                    <td>Source away from observer</td>
                    <td><code>+v_s</code></td>
                    <td>The source stretches wavefront spacing, so the heard frequency goes down.</td>
                  </tr>
                </tbody>
              </table>
              <div class="takeaway-line">
                <strong>Memory rule:</strong> motion that brings source and observer closer raises the heard frequency. Motion that separates them lowers it. Do the Doppler step first, then do the beat step.
              </div>
            `,
          },
          cloneStudyGuideSection("chapter-9-challenge", "quiz2-classic-ch3-challenge"),
        ],
      },
      {
        id: "quiz2-classic-chapter-4",
        number: "04",
        title: "Chapter 4 - Diffraction and Young's Double Slit Interference",
        plainText: `
Chapter 4 Diffraction and Young's Double Slit Interference for Quiz 2.
This chapter covers the DL5 material on diffraction, two-slit interference, the wave behavior of light, and the geometry that turns path difference into bright and dark fringes.
        `.trim(),
        sections: [
          cloneStudyGuideSection("chapter-10-hook", "quiz2-classic-ch4-hook"),
          cloneStudyGuideSection("chapter-10-wavefront-ray", "quiz2-classic-ch4-wavefront-ray"),
          cloneStudyGuideSection("chapter-10-young", "quiz2-classic-ch4-young"),
          cloneStudyGuideSection("chapter-10-geometry", "quiz2-classic-ch4-geometry"),
          cloneStudyGuideSection("chapter-10-small-angle", "quiz2-classic-ch4-small-angle"),
          cloneStudyGuideSection("chapter-10-worked-example", "quiz2-classic-ch4-worked"),
          {
            id: "quiz2-classic-ch4-videos",
            title: "Watch It Once - Organic Chemistry Tutor",
            html: `
              <p>If you want a quick outside explanation after reading this chapter, these are the closest Organic Chemistry Tutor matches for the Quiz 2 optics material.</p>
              <div class="resource-actions">
                <a class="resource-button" href="https://www.youtube.com/watch?v=ANsHXbIoA6U" target="_blank" rel="noreferrer noopener">Huygens Principle</a>
                <a class="resource-button" href="https://www.youtube.com/watch?v=xaAthgG0o8o" target="_blank" rel="noreferrer noopener">Young's Double Slit</a>
                <a class="resource-button" href="https://www.youtube.com/watch?v=9hCrhllI0ck" target="_blank" rel="noreferrer noopener">Single Slit Diffraction</a>
              </div>
            `,
          },
        ],
      },
      {
        id: "quiz2-classic-chapter-5",
        number: "05",
        title: "Chapter 5 - Gratings, Crystal Phase Shifts, and Thin Film",
        plainText: `
Chapter 5 Gratings, Crystal Phase Shifts, and Thin Film for Quiz 2.
This chapter keeps the later optics pieces that matter for the quiz: many-slit intuition, white-light color ordering, the crystal-shifted double-slit setup from DL6 Activity 8.16, and the butterfly thin-film interference idea.
        `.trim(),
        sections: [
          cloneStudyGuideSection("chapter-11-hook", "quiz2-classic-ch5-hook"),
          cloneStudyGuideSection("chapter-11-multislit", "quiz2-classic-ch5-multislit"),
          cloneStudyGuideSection("chapter-11-grating-formula", "quiz2-classic-ch5-grating-formula"),
          cloneStudyGuideSection("chapter-11-white-light", "quiz2-classic-ch5-white-light"),
          {
            id: "quiz2-classic-ch5-grating-video",
            title: "Diffraction Grating Video",
            html: `
              <p>If you want practice right after this section, this Organic Chemistry Tutor video lines up well with the grating part of Quiz 2.</p>
              <div class="resource-actions">
                <a class="resource-button" href="https://www.youtube.com/watch?v=gf7j2fumz70" target="_blank" rel="noreferrer noopener">Diffraction Grating Problems</a>
              </div>
            `,
          },
          {
            id: "quiz2-classic-ch5-phase-shift",
            title: "Crystal Shift - The Formula You Want To See",
            html: `
              <p>A crystal in front of one slit does not change the slit geometry. It adds a source phase difference before the waves head to the screen.</p>
              <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ₀</div>
              <p>At the center of the screen, <code>Δx = 0</code>, so the center is no longer automatically bright. The crystal can decide the whole result there.</p>
              <div class="formula-box">y<sub>shift</sub> = Δφ₀λD / (2πd)</div>
              <p><strong>Interpretation:</strong> this is the shift of the whole interference pattern. It <strong>shifts the pattern and does not change fringe spacing</strong>.</p>
              <p>If you want the nearest bright spot above center, use the constructive condition closest to the center and convert the required path difference into a screen position with the small-angle approximation.</p>
            `,
          },
          {
            id: "quiz2-classic-ch5-thin-film",
            title: "Thin Film Interference - The Butterfly Problem",
            html: `
              <p>In the butterfly setup, one reflected ray bounces straight off the top layer while another ray goes down to the next layer and comes back up. That second ray travels an extra round-trip distance.</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter11-butterfly-thin-film.svg" alt="Butterfly thin-film diagram showing incoming light reflecting from successive scale layers separated by distance d" />
                <figcaption>The key picture is the two reflected rays: top-layer reflection versus the deeper round-trip reflection that adds the extra path <code>2d</code>.</figcaption>
              </figure>
              <div class="formula-box">extra path = d + d = 2d</div>
              <p>If there is no extra reflection phase offset, constructive interference happens when that extra path is a whole number of wavelengths:</p>
              <div class="formula-box">2d = nλ</div>
              <div class="formula-inline">d = nλ / 2</div>
              <p>For the smallest blue-light spacing, use <code>n = 1</code>. With blue light around <code>450 nm</code>, that gives <code>d = 225 nm</code>.</p>
              <p><strong>Why the wing looks blue:</strong> if the layer spacing reinforces blue especially well, blue reflections add strongly while other wavelengths are weaker or partially cancelled.</p>
            `,
          },
        ],
      },
      {
        id: "quiz2-classic-chapter-6",
        number: "06",
        title: "Chapter 6 - Quiz 2 Formula Reference",
        plainText: `
Chapter 6 Quiz 2 Formula Reference.
This reference keeps only the formulas that actually matter for the official Quiz 2 scope: total phase, beats, Doppler before beats, double-slit geometry, crystal phase shifts, and thin-film interference.
        `.trim(),
        sections: [
          {
            id: "quiz2-classic-ch6-reference",
            title: "Quiz 2 Formula Reference",
            html: `
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Formula</th>
                    <th>What it means</th>
                    <th>Watch out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                    <td>Core two-source phase-difference formula</td>
                    <td>This is the backbone for same-frequency interference questions</td>
                  </tr>
                  <tr>
                    <td>Constructive: ΔΦ = 2nπ</td>
                    <td>In-phase condition</td>
                    <td>Use it for loud or bright results</td>
                  </tr>
                  <tr>
                    <td>Destructive: ΔΦ = (2n+1)π</td>
                    <td>Anti-phase condition</td>
                    <td>Use it for quiet, dark, or zero-signal results</td>
                  </tr>
                  <tr>
                    <td>Constructive: Δx = nλ - (Δφ₀λ)/(2π)</td>
                    <td>General constructive condition with a built-in source offset</td>
                    <td>Use this when the prompt includes opposite wiring, a timing lead, or a crystal</td>
                  </tr>
                  <tr>
                    <td>Destructive: Δx = (n + 1/2)λ - (Δφ₀λ)/(2π)</td>
                    <td>General destructive condition with a built-in source offset</td>
                    <td>This is the safer version when Δφ₀ is not zero</td>
                  </tr>
                  <tr>
                    <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                    <td>Beat frequency</td>
                    <td>Always take the absolute value</td>
                  </tr>
                  <tr>
                    <td>f<sub>carrier</sub> = (f₁ + f₂)/2</td>
                    <td>Carrier or heard pitch inside the beat envelope</td>
                    <td>This is not the same thing as the beat rate</td>
                  </tr>
                  <tr>
                    <td>f<sub>obs</sub> = (v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>) × f<sub>s</sub></td>
                    <td>Full Doppler formula</td>
                    <td>For mixed Doppler-and-beats problems, use this before the beat formula</td>
                  </tr>
                  <tr>
                    <td>Δx = d sin θ</td>
                    <td>Double-slit path-length difference</td>
                    <td>d is slit spacing, not screen distance</td>
                  </tr>
                  <tr>
                    <td>nλ = d sin θ</td>
                    <td>Bright-fringe condition</td>
                    <td>n = 0 is the center only when there is no extra phase shift</td>
                  </tr>
                  <tr>
                    <td>(n + 1/2)λ = d sin θ</td>
                    <td>Dark-fringe condition</td>
                    <td>Use this when the prompt asks for dark, quiet, or cancellation</td>
                  </tr>
                  <tr>
                    <td>d = λD / Δy</td>
                    <td>Small-angle fringe-spacing result</td>
                    <td>Use only when the screen is far away compared with the slit spacing</td>
                  </tr>
                  <tr>
                    <td>Δφ₀ = 2πΔt/T</td>
                    <td>Convert a crystal time delay into a phase shift</td>
                    <td>At the center of the screen, this term can decide the whole answer</td>
                  </tr>
                  <tr>
                    <td>y<sub>shift</sub> = Δφ₀λD / (2πd)</td>
                    <td>Shift of a double-slit pattern when a crystal adds source phase difference</td>
                    <td>The whole pattern moves, but the fringe spacing stays the same</td>
                  </tr>
                  <tr>
                    <td>2d = nλ</td>
                    <td>Thin-film constructive condition in the simplified butterfly model</td>
                    <td>The extra path is the down-and-back round trip, so it is <code>2d</code></td>
                  </tr>
                </tbody>
              </table>
            `,
          },
        ],
      },
    ],
    recap: {
      id: "quiz2-classic-recap",
      title: "Final Recap - Quiz 2 in 12 Sentences",
      plainText: `
Quiz 2 in 12 sentences.
Interference compares the phases of two waves at the same place.
Path difference and source phase difference are the main causes of a total phase mismatch.
Same-frequency sound questions are interference questions.
Different-frequency sound questions are beat questions.
Beat rate is the absolute frequency difference and carrier pitch is the average.
Doppler can change a heard frequency before you compute the beat rate.
Two slits act like two sources.
Bright fringes satisfy d sin theta equals n lambda and dark fringes satisfy d sin theta equals n plus one-half lambda.
Thin film picks colors by an extra round-trip path of 2d, while a diffraction grating separates colors by angle.
White light stays white straight through because all wavelengths share the zero-order direction.
Blue stays closer to the center than red because shorter wavelength needs a smaller angle for the same order.
A crystal in one slit adds a source phase shift, so the center is not automatically bright.
        `.trim(),
      sections: [
        {
          id: "quiz2-classic-recap-12",
          title: "Quiz 2 in 12 Sentences",
          html: `
            <ol class="long-list">
              <li>Interference compares the phases of two waves at the same place and time.</li>
              <li>The most important formula is ΔΦ = -2πΔx/λ + Δφ₀, which says total phase difference comes from path difference and source phase difference.</li>
              <li>Constructive interference means ΔΦ = 2nπ, while destructive interference means ΔΦ = (2n + 1)π.</li>
              <li>DL3 Activity 8.10 is not a new kind of physics; it is the same interference story in a two-dimensional geometry picture.</li>
              <li>Same-frequency speaker questions are interference questions, not beat questions.</li>
              <li>Beats happen only when the two frequencies are close but not equal, and the beat rate is |f₁ - f₂|.</li>
              <li>The carrier pitch inside the beat envelope is (f₁ + f₂)/2, so beat rate and heard pitch are different quantities.</li>
              <li>If motion changes one of the sounds first, do the Doppler step before you do the beat step.</li>
              <li>In the double-slit experiment, each slit acts like a source and the screen pattern is just constructive and destructive interference laid out in space.</li>
              <li>For bright fringes use d sin θ = nλ, and for dark fringes use d sin θ = (n + 1/2)λ.</li>
              <li>Thin-film questions use an extra round-trip path of 2d, while white light through a grating stays white straight through and then spreads by color away from the center.</li>
              <li>A crystal in one slit adds Δφ₀, so even the center of the pattern can change from bright to dark or partial interference.</li>
            </ol>
          `,
        },
      ],
    },
  },
  QUIZ_2_CLASSIC_SECTION_LOCATORS,
  QUIZ_2_CLASSIC_CHAPTER_LOCATORS,
);

const QUIZ_22_CHAPTER_LOCATORS = {
  "quiz22-chapter-1": "Physics7C_WaveQuizGuide.docx • 1. Superposition & Interference (Act 8.9)",
  "quiz22-chapter-2": "Physics7C_WaveQuizGuide.docx • 2. Superposition in Two Dimensions (Act 8.10)",
  "quiz22-chapter-3": "Physics7C_WaveQuizGuide.docx • 3. Interference with Speakers (Act 8.11)",
  "quiz22-chapter-4": "Physics7C_WaveQuizGuide.docx • 4. Beats (Act 8.12)",
  "quiz22-chapter-5": "Physics7C_WaveQuizGuide.docx • 5. Beats + Doppler Combined",
  "quiz22-chapter-6": "Physics7C_WaveQuizGuide.docx • 6. Diffraction & Two-Slit Interference",
  "quiz22-chapter-7": "Physics7C_WaveQuizGuide.docx • 7. Double Slit with Crystal Phase Shift (Act 8.16)",
  "quiz22-chapter-8": "Physics7C_WaveQuizGuide.docx • 8. Thin Film Interference",
  "quiz22-recap": "Physics7C_WaveQuizGuide.docx • Master formula sheet and final traps",
};

const QUIZ_22_SECTION_LOCATORS = {
  "quiz22-ch1-hook": "Physics7C_WaveQuizGuide.docx • Superposition hook and rule",
  "quiz22-ch1-types": "Physics7C_WaveQuizGuide.docx • The three types of interference",
  "quiz22-ch1-phase": "Physics7C_WaveQuizGuide.docx • The phase chart and simplified rule",
  "quiz22-ch1-path": "Physics7C_WaveQuizGuide.docx • The path length difference rule",
  "quiz22-ch2-core": "Physics7C_WaveQuizGuide.docx • Everything still works in 2D",
  "quiz22-ch2-wavefront": "Physics7C_WaveQuizGuide.docx • Wavefront representation and terms",
  "quiz22-ch2-example": "Physics7C_WaveQuizGuide.docx • The Bob-An-Carla problem",
  "quiz22-ch3-core": "Physics7C_WaveQuizGuide.docx • Speaker setup and wiring logic",
  "quiz22-ch3-scenarios": "Physics7C_WaveQuizGuide.docx • The five speaker scenarios",
  "quiz22-ch3-trap": "Physics7C_WaveQuizGuide.docx • Set 5 trap explanation",
  "quiz22-ch4-why": "Physics7C_WaveQuizGuide.docx • Why beats happen",
  "quiz22-ch4-derivation": "Physics7C_WaveQuizGuide.docx • Beat-period derivation",
  "quiz22-ch4-graphs": "Physics7C_WaveQuizGuide.docx • Reading the beats graph",
  "quiz22-ch5-doppler": "Physics7C_WaveQuizGuide.docx • Quick Doppler refresher",
  "quiz22-ch5-example": "Physics7C_WaveQuizGuide.docx • The Angharad bagpiper problem",
  "quiz22-ch6-source": "Physics7C_WaveQuizGuide.docx • Why slits act like sources",
  "quiz22-ch6-geometry": "Physics7C_WaveQuizGuide.docx • Young's double slit geometry",
  "quiz22-ch6-color": "Physics7C_WaveQuizGuide.docx • Wavelength, white light, and gratings",
  "quiz22-ch7-core": "Physics7C_WaveQuizGuide.docx • Phase difference with a crystal",
  "quiz22-ch7-strategy": "Physics7C_WaveQuizGuide.docx • Crystal problem strategy",
  "quiz22-ch7-example": "Physics7C_WaveQuizGuide.docx • Crystal double slit solution template",
  "quiz22-ch8-core": "Physics7C_WaveQuizGuide.docx • Thin-film setup and constructive condition",
  "quiz22-ch8-blue": "Physics7C_WaveQuizGuide.docx • Why the wing looks blue",
  "quiz22-recap-formulas": "Physics7C_WaveQuizGuide.docx • Master formula and concept sheet",
  "quiz22-recap-traps": "Physics7C_WaveQuizGuide.docx • 7 things that will trip you up",
};

export const QUIZ_22_GUIDE = withSectionLocators(
  {
    title: "Quiz 2.2 Study Guide",
    subtitle: "Built from Physics7C_WaveQuizGuide.docx",
    chapters: [
      {
        id: "quiz22-chapter-1",
        number: "01",
        title: "Chapter 1 - Superposition and Interference",
        plainText: `
Chapter 1 in the docx guide introduces superposition, the three kinds of interference, the phase chart, and the path-length rules for in-phase and out-of-phase sources.
        `.trim(),
        studyCard: [
          { label: "Start with", value: "What superposition means at one point in space" },
          { label: "Core formula", value: "ΔΦ = -2πΔx/λ + Δφ₀" },
          { label: "Trap", value: "Total phase difference includes both path and source phase" },
        ],
        sections: [
          {
            id: "quiz22-ch1-hook",
            title: "Hook and the Superposition Rule",
            html: `
              <p>Two people can talk at the same time, and the air does not "pick" one sound. The air simply carries both disturbances at once, and your ear receives the combined result. That is the idea behind superposition.</p>
              <p>When two waves exist at the same place at the same time, the total displacement is the algebraic sum of what each wave would have done by itself.</p>
              <div class="formula-box">y<sub>tot</sub>(x, t) = y₁(x, t) + y₂(x, t)</div>
              <p><strong>Meaning of the symbols:</strong> <code>y_tot</code> is the actual displacement of the medium, <code>y₁</code> is wave 1's contribution, and <code>y₂</code> is wave 2's contribution. These are signed values, so a positive displacement and a negative displacement can cancel.</p>
            `,
          },
          {
            id: "quiz22-ch1-types",
            title: "Constructive, Destructive, and Partial Interference",
            html: `
              <p>Interference just means the result of superposition. The type depends on how lined up the two waves are at the instant they meet.</p>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>What it looks like</th>
                    <th>Phase condition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Constructive</td>
                    <td>Crest meets crest, so the total amplitude gets bigger.</td>
                    <td>ΔΦ = 0, 2π, 4π, ...</td>
                  </tr>
                  <tr>
                    <td>Destructive</td>
                    <td>Crest meets trough, so equal waves can cancel to zero.</td>
                    <td>ΔΦ = π, 3π, 5π, ...</td>
                  </tr>
                  <tr>
                    <td>Partial</td>
                    <td>The waves are offset by some other phase, so the result sits between the two extremes.</td>
                    <td>Anything else</td>
                  </tr>
                </tbody>
              </table>
              <div class="callout">
                <strong>Watch out:</strong> ΔΦ is the total phase difference at the point where the waves meet. It is not just a position story and it is not just a timing story.
              </div>
            `,
          },
          {
            id: "quiz22-ch1-phase",
            title: "The Phase Chart and the Simplified Rule",
            html: `
              <p>The phase chart is the bookkeeping tool for interference. It adds every reason two waves might be out of step.</p>
              <div class="formula-box">Φ = (2πt / T) - (2πx / λ) + φ₀</div>
              <ul>
                <li><strong>2πt/T:</strong> the time contribution.</li>
                <li><strong>-2πx/λ:</strong> the position contribution. The sign is negative because greater travel distance means more phase lag.</li>
                <li><strong>φ₀:</strong> the fixed phase constant from the source or wiring.</li>
              </ul>
              <p>The difference between two waves is <code>ΔΦ = Φ₁ - Φ₂</code>. In most interference problems the waves are being compared at the same time, so the time column cancels out and you get the simplified rule:</p>
              <div class="formula-inline">ΔΦ = -(2πΔx/λ) + Δφ₀</div>
              <p>If the result is a multiple of <code>2π</code>, the interference is constructive. If it is an odd multiple of <code>π</code>, the interference is destructive.</p>
            `,
          },
          {
            id: "quiz22-ch1-path",
            title: "The Path-Length Difference Rules",
            html: `
              <p>The most-used shortcut comes from the simplified phase formula.</p>
              <p><strong>For in-phase sources</strong> (<code>Δφ₀ = 0</code>):</p>
              <div class="formula-inline">Constructive: Δx = nλ</div>
              <div class="formula-inline">Destructive: Δx = (n + 1/2)λ</div>
              <p><strong>For out-of-phase sources</strong> (<code>Δφ₀ = π</code>), those conditions flip:</p>
              <div class="formula-inline">Constructive: Δx = (n + 1/2)λ</div>
              <div class="formula-inline">Destructive: Δx = nλ</div>
              <p>That flip is one of the easiest places to lose points, so always check the source phase before doing the rest of the math.</p>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-2",
        number: "02",
        title: "Chapter 2 - Superposition in Two Dimensions",
        plainText: `
Chapter 2 extends the same interference story into a 2D geometry picture, adds wavefront language, and walks through the Bob-An-Carla problem.
        `.trim(),
        studyCard: [
          { label: "Same idea", value: "Only the geometry changes in 2D" },
          { label: "Main move", value: "Compute x₁, x₂, then Δx" },
          { label: "Look for", value: "Crest-crest vs crest-trough intersections" },
        ],
        sections: [
          {
            id: "quiz22-ch2-core",
            title: "Everything Still Works in 2D",
            html: `
              <p>Dropping two pebbles in a pond creates a permanent map of loud-type and quiet-type locations. Some points always get reinforced, and some points always cancel.</p>
              <p>The physics is the same as in 1D. The only difference is that the path lengths now come from distances across a two-dimensional picture.</p>
              <ol class="long-list">
                <li>Find the distance from source 1 to the point: <code>x₁</code>.</li>
                <li>Find the distance from source 2 to the point: <code>x₂</code>.</li>
                <li>Compute <code>Δx = x₁ - x₂</code>.</li>
                <li>Apply the same constructive or destructive rule as before.</li>
              </ol>
            `,
          },
          {
            id: "quiz22-ch2-wavefront",
            title: "Wavefront Representation",
            html: `
              <p>A wavefront is a line connecting points that all have the same phase. For a point source in 2D, those wavefronts are circles spreading outward.</p>
              <ul>
                <li><strong>Crest:</strong> a high point in the cycle.</li>
                <li><strong>Trough:</strong> a low point in the cycle.</li>
                <li><strong>Consecutive crests from one source:</strong> one wavelength apart.</li>
                <li><strong>Crest meeting crest:</strong> constructive interference.</li>
                <li><strong>Crest meeting trough:</strong> destructive interference.</li>
              </ul>
            `,
          },
          {
            id: "quiz22-ch2-example",
            title: "The Bob-An-Carla Problem",
            html: `
              <p>An is 3 m from Bob, Carla is 2 m from Bob, and both sources bob with the same frequency and the same phase. Bob wants constructive interference.</p>
              <p><strong>Step 1:</strong> <code>Δx = 3 - 2 = 1 m</code>.</p>
              <p><strong>Step 2:</strong> Same-phase constructive interference means <code>Δx = nλ</code>.</p>
              <p><strong>Step 3:</strong> So possible wavelengths are <code>1 m</code>, <code>0.5 m</code>, <code>1/3 m</code>, and so on.</p>
              <p><strong>Step 4:</strong> With wave speed <code>v = 3 m/s</code>, the matching frequencies are <code>3 Hz</code>, <code>6 Hz</code>, <code>9 Hz</code>, and so on because <code>f = v/λ</code>.</p>
              <div class="callout">
                <strong>Result:</strong> Bob is at a constructive point, so equal-amplitude sources would make his oscillation amplitude double.
              </div>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-3",
        number: "03",
        title: "Chapter 3 - Interference with Speakers",
        plainText: `
Chapter 3 applies interference to speaker setups, focusing on path difference, source wiring, and the five scenario logic from the guide.
        `.trim(),
        studyCard: [
          { label: "Two ingredients", value: "Path difference and wiring phase" },
          { label: "Same wiring", value: "Constructive at Δx = nλ" },
          { label: "Trap", value: "Two out-of-phase effects can cancel each other" },
        ],
        sections: [
          {
            id: "quiz22-ch3-core",
            title: "What Matters in a Two-Speaker Setup",
            html: `
              <p>When two speakers play the same note, the total phase difference depends on two things: the difference in path length to your ears and any source phase offset from the wiring.</p>
              <p><strong>Same wiring</strong> (<code>Δφ₀ = 0</code>): constructive at <code>Δx = nλ</code>, destructive at <code>Δx = (n + 1/2)λ</code>.</p>
              <p><strong>Opposite wiring</strong> (<code>Δφ₀ = π</code>): those conditions flip.</p>
              <p>That means two physically similar speaker setups can behave differently if one speaker is wired backward.</p>
            `,
          },
          {
            id: "quiz22-ch3-scenarios",
            title: "The Five Speaker Scenarios",
            html: `
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>Physical meaning</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><code>x₁ = x</code>, <code>x₂ = x + λ</code>, same wiring</td>
                    <td>Constructive, because one extra wavelength changes phase by <code>2π</code>.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Same position, opposite wiring</td>
                    <td>Destructive, because <code>ΔΦ = π</code>.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Same wiring, one speaker is <code>λ/2</code> farther</td>
                    <td>Destructive, because the path difference gives <code>π</code>.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Same position, same wiring</td>
                    <td>Constructive, because <code>ΔΦ = 0</code>.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Opposite wiring, but one speaker is <code>λ/2</code> farther</td>
                    <td>Constructive, because the path term and wiring term cancel.</td>
                  </tr>
                </tbody>
              </table>
            `,
          },
          {
            id: "quiz22-ch3-trap",
            title: "Why Set 5 Is the Classic Trap",
            html: `
              <p>Set 5 looks like it should be "double destructive" because there is both opposite wiring and a half-wavelength offset. But the math says otherwise.</p>
              <div class="formula-box">ΔΦ = -(2π(λ/2)/λ) + π = -π + π = 0</div>
              <p>So the two out-of-phase effects cancel each other, and the result is constructive interference. This is exactly why writing the total phase is safer than guessing from intuition alone.</p>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-4",
        number: "04",
        title: "Chapter 4 - Beats",
        plainText: `
Chapter 4 explains why beats happen, derives the beat period and frequency, and shows how to read beats from graphs.
        `.trim(),
        studyCard: [
          { label: "Beats happen in", value: "Time, not space" },
          { label: "Rate", value: "f_beat = |f₁ - f₂|" },
          { label: "Pitch inside", value: "f_carrier = (f₁ + f₂)/2" },
        ],
        sections: [
          {
            id: "quiz22-ch4-why",
            title: "Why Beats Happen",
            html: `
              <p>If two nearby frequencies are played at the same location, the waves drift in and out of sync over time. Sometimes they reinforce and sometimes they cancel, which creates the loud-quiet-loud pulsing sound called beats.</p>
              <p>The beat frequency tells you how fast that pulsing happens. The carrier frequency tells you the average pitch you hear underneath the pulse.</p>
              <div class="formula-inline">f<sub>beat</sub> = |f₁ - f₂|</div>
              <div class="formula-inline">f<sub>carrier</sub> = (f₁ + f₂)/2</div>
            `,
          },
          {
            id: "quiz22-ch4-derivation",
            title: "Beat-Period Derivation",
            html: `
              <p>Suppose two sources start in sync at the same location. The next time they line up, the faster wave has completed exactly one extra cycle.</p>
              <div class="formula-box">2πT_b/T₁ - 2πT_b/T₂ = 2π</div>
              <p>Divide through by <code>2π</code> and use <code>f = 1/T</code>:</p>
              <div class="formula-box">T_b(f₁ - f₂) = 1</div>
              <div class="formula-inline">T_b = 1 / |f₁ - f₂|</div>
              <p>So the beat frequency is the reciprocal of the beat period.</p>
            `,
          },
          {
            id: "quiz22-ch4-graphs",
            title: "Beats vs. Normal Interference and How to Read the Graphs",
            html: `
              <p><strong>Normal interference</strong> makes different places stay loud or quiet in space. <strong>Beats</strong> make one place alternate between loud and quiet in time.</p>
              <p>When a graph shows the two original waves, count cycles to find each frequency. Then subtract to get <code>f_beat</code>.</p>
              <p>When a graph shows the sum, measure the time from one large envelope peak to the next. That distance is the beat period <code>T_beat</code>.</p>
              <div class="callout">
                <strong>Important:</strong> the fast wiggles inside the envelope are tied to the carrier frequency, not the beat frequency.
              </div>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-5",
        number: "05",
        title: "Chapter 5 - Beats Plus Doppler",
        plainText: `
Chapter 5 combines Doppler and beats in the Angharad bagpiper problem, where motion changes the heard frequencies before the beat calculation.
        `.trim(),
        studyCard: [
          { label: "Order matters", value: "Doppler first, beats second" },
          { label: "Goal", value: "Make the heard frequencies match" },
          { label: "Accuracy note", value: "Use the full Doppler formula, then simplify only if allowed" },
        ],
        sections: [
          {
            id: "quiz22-ch5-doppler",
            title: "Quick Doppler Refresher",
            html: `
              <p>Doppler changes the frequency you hear when either the observer or the source is moving. For the most general sign-safe version, use the full formula:</p>
              <div class="formula-box">f<sub>obs</sub> = ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>)) f<sub>s</sub></div>
              <ul>
                <li>If observer and source move toward each other, the heard frequency goes up.</li>
                <li>If they move away from each other, the heard frequency goes down.</li>
                <li>If the source is stationary, this reduces to the moving-observer shortcut from class.</li>
              </ul>
            `,
          },
          {
            id: "quiz22-ch5-example",
            title: "The Angharad Bagpiper Problem",
            html: `
              <p>Angharad hears 258 Hz from one bagpiper and 262 Hz from the other. Standing still, the beat frequency is simply <code>|262 - 258| = 4 Hz</code>, and the carrier pitch is <code>260 Hz</code>.</p>
              <p>If she runs toward the higher-pitched player, the sound from that side shifts upward while the sound from the opposite side shifts downward. To kill the beats, she wants the two heard frequencies to become equal.</p>
              <div class="formula-box">258(340 - u) = 262(340 + u)</div>
              <p>Solving gives <code>u ≈ 2.615 m/s</code>, directed toward the 262 Hz player.</p>
              <p>After that motion, the matched heard frequency is about <code>256 Hz</code>. The lesson is the important part: adjust the heard frequencies with Doppler first, then compare them with the beat formula.</p>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-6",
        number: "06",
        title: "Chapter 6 - Diffraction and Two-Slit Interference",
        plainText: `
Chapter 6 explains why slits behave like wave sources, introduces the geometry of Young's double slit, and connects wavelength to fringe spacing and color ordering.
        `.trim(),
        studyCard: [
          { label: "Mental model", value: "Two slits behave like two coherent sources" },
          { label: "Geometry", value: "Δx = d sin θ ≈ dΔy/D" },
          { label: "Color rule", value: "Longer wavelength means wider spacing" },
        ],
        sections: [
          {
            id: "quiz22-ch6-source",
            title: "Why Slits Behave Like Sources",
            html: `
              <p>When a wave passes through a narrow slit, the slit becomes a new source of spreading waves. This is the Huygens idea behind diffraction.</p>
              <p>With two slits, you effectively create two sources that have the same frequency and phase, so all of the earlier interference rules apply again. The only new piece is the screen geometry.</p>
            `,
          },
          {
            id: "quiz22-ch6-geometry",
            title: "Young's Double Slit Geometry",
            html: `
              <div class="formula-box">Δx = d sin θ ≈ d tan θ = d(Δy / D)</div>
              <div class="formula-inline">Bright: d sin θ = nλ</div>
              <div class="formula-inline">Dark: d sin θ = (n + 1/2)λ</div>
              <div class="formula-inline">Fringe spacing: Δy = λD / d</div>
              <p>Here <code>d</code> is slit separation, <code>D</code> is screen distance, <code>Δy</code> is spacing on the screen, and the small-angle approximation works when the screen is far away compared with the slit spacing.</p>
              <p>If the problem gives you measured screen spacing and wavelength, you can rearrange to solve for the slit spacing.</p>
            `,
          },
          {
            id: "quiz22-ch6-color",
            title: "Wavelength, White Light, and Diffraction Gratings",
            html: `
              <p>Longer wavelengths spread the pattern farther because they need a larger angle to reach the same fringe order. That is why red light gives a wider pattern than blue light.</p>
              <p>At the center of a white-light pattern, <code>θ = 0</code>, so every wavelength has <code>Δx = 0</code> and all colors overlap into white.</p>
              <p>Away from the center, shorter wavelengths like blue stay closer in and longer wavelengths like red move farther out.</p>
              <p>A diffraction grating works on the same angle rule as a double slit, but many slits make the bright regions much sharper and the dark regions much darker.</p>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-7",
        number: "07",
        title: "Chapter 7 - Double Slit with Crystal Phase Shift",
        plainText: `
Chapter 7 adds a crystal to one slit, creating a nonzero source phase difference that shifts the whole pattern without changing fringe spacing.
        `.trim(),
        studyCard: [
          { label: "New ingredient", value: "Δφ₀ is no longer zero" },
          { label: "Main effect", value: "Pattern shifts, spacing stays the same" },
          { label: "Center point", value: "No longer automatically bright" },
        ],
        sections: [
          {
            id: "quiz22-ch7-core",
            title: "What Changes When a Crystal Is Added",
            html: `
              <p>Putting a crystal in one slit changes the phase constant of that path, so the total phase difference becomes:</p>
              <div class="formula-box">ΔΦ = -(2πΔx/λ) + Δφ₀</div>
              <p>Without the crystal, the center of the screen has <code>Δx = 0</code> and is bright because <code>ΔΦ = 0</code>. With the crystal, the center instead has <code>ΔΦ = Δφ₀</code>, so the whole pattern can slide upward or downward.</p>
            `,
          },
          {
            id: "quiz22-ch7-strategy",
            title: "Step-by-Step Crystal Strategy",
            html: `
              <ol class="long-list">
                <li>At the screen center, set <code>Δx = 0</code> and check what the crystal alone does to the phase.</li>
                <li>For the nearest bright spot, set the total phase equal to the correct constructive value.</li>
                <li>Use <code>Δx = d sin θ ≈ dy/D</code> to convert that phase condition into a screen position.</li>
              </ol>
              <div class="formula-inline">y = Δφ₀λD / (2πd)</div>
              <p>This gives the shift of the pattern. The spacing between adjacent bright fringes still remains <code>Δy = λD/d</code>.</p>
            `,
          },
          {
            id: "quiz22-ch7-example",
            title: "Crystal Double Slit Solution Template",
            html: `
              <p>For the first bright spot above the center, choose the constructive condition closest to the center and solve:</p>
              <div class="formula-box">-2π(dy/λD) + Δφ₀ = 0</div>
              <div class="formula-box">y = Δφ₀λD / (2πd)</div>
              <p>The big idea is more important than the algebra: the crystal shifts the whole interference pattern but does not stretch it out or squeeze it together.</p>
            `,
          },
        ],
      },
      {
        id: "quiz22-chapter-8",
        number: "08",
        title: "Chapter 8 - Thin Film Interference",
        plainText: `
Chapter 8 uses the butterfly example to explain how path difference between reflected rays can select one color and cancel others.
        `.trim(),
        studyCard: [
          { label: "Picture", value: "One ray reflects off the top, one travels down and back" },
          { label: "Extra path", value: "2d" },
          { label: "Constructive rule", value: "2d = nλ" },
        ],
        sections: [
          {
            id: "quiz22-ch8-core",
            title: "How Thin-Film Interference Works",
            html: `
              <p>In the butterfly example, one ray reflects from the top surface while another enters the layer, reflects from below, and then returns. The second ray travels an extra distance of <code>2d</code>.</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter11-butterfly-thin-film.svg" alt="Butterfly thin-film diagram showing incoming light reflecting from successive scale layers separated by distance d" />
                <figcaption>This is the same butterfly thin-film geometry used in Quiz 2: the lower ray travels an extra down-and-up distance through the layered structure.</figcaption>
              </figure>
              <p>If that extra distance matches a whole number of wavelengths, the reflected light reinforces:</p>
              <div class="formula-inline">2d = nλ</div>
              <p>For the first constructive case, <code>n = 1</code>, so <code>d = λ/2</code>.</p>
            `,
          },
          {
            id: "quiz22-ch8-blue",
            title: "Why the Blue Morpho Looks Blue",
            html: `
              <p>If the spacing in the wing layers matches blue light well but not red light, blue reflects constructively while red is weakened. That is why the wing can look vividly blue without relying on blue pigment.</p>
              <p>The butterfly chapter is still the same interference story as the rest of the guide: path difference chooses which wavelengths survive strongly.</p>
            `,
          },
        ],
      },
    ],
    recap: {
      id: "quiz22-recap",
      title: "Final Recap - Formula Sheet and Trap Check",
      plainText: `
The recap for Quiz 2.2 contains a master concept and formula table plus seven final mistakes to avoid before the quiz.
      `.trim(),
      sections: [
        {
          id: "quiz22-recap-formulas",
          title: "Master Formula and Concept Sheet",
          html: `
            <p>This section condenses the big rules from the doc into one page for final review.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Formula or rule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Superposition</td>
                  <td><code>y_tot = y₁ + y₂</code>; constructive at even multiples of <code>π</code>, destructive at odd multiples.</td>
                </tr>
                <tr>
                  <td>Phase difference</td>
                  <td><code>ΔΦ = -2πΔx/λ + Δφ₀</code></td>
                </tr>
                <tr>
                  <td>In-phase sources</td>
                  <td>Constructive at <code>Δx = nλ</code>, destructive at <code>Δx = (n + 1/2)λ</code></td>
                </tr>
                <tr>
                  <td>Out-of-phase sources</td>
                  <td>Those two conditions flip.</td>
                </tr>
                <tr>
                  <td>Beats</td>
                  <td><code>f_beat = |f₁ - f₂|</code>, <code>f_carrier = (f₁ + f₂)/2</code>, <code>T_beat = 1/f_beat</code></td>
                </tr>
                <tr>
                  <td>Doppler</td>
                  <td><code>f_obs = ((v ± v_o)/(v ∓ v_s)) f_s</code>; use this before the beat formula in mixed problems.</td>
                </tr>
                <tr>
                  <td>Young's double slit</td>
                  <td><code>d sin θ = nλ</code> for bright, <code>d sin θ = (n + 1/2)λ</code> for dark, and <code>Δy = λD/d</code></td>
                </tr>
                <tr>
                  <td>Crystal double slit</td>
                  <td><code>y_bright = Δφ₀λD / (2πd)</code>; the pattern shifts but the spacing does not change.</td>
                </tr>
                <tr>
                  <td>Thin film</td>
                  <td><code>2d = nλ</code> when the reflected rays interfere constructively in the simplified no-phase-flip version.</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz22-recap-traps",
          title: "7 Things That Will Trip You Up",
          html: `
            <ol class="long-list">
              <li>Check whether the sources are in phase or out of phase before doing anything else, because that flips the path-difference rules.</li>
              <li>Keep the negative sign on the path term in <code>ΔΦ = -2πΔx/λ + Δφ₀</code>.</li>
              <li>Beats happen in time, while ordinary interference patterns live in space.</li>
              <li>In double slit, a bigger wavelength means wider fringe spacing.</li>
              <li>Adding a crystal changes the pattern position, not the spacing between neighboring fringes.</li>
              <li>For 2D problems, compute the actual two distances first and only then take their difference.</li>
              <li>When using a phase chart, the difference row is always row 1 minus row 2, so the sign bookkeeping matters.</li>
            </ol>
            <p>The math in this unit usually becomes manageable once the physical story is clear. If a problem feels messy, slow down and ask: what is creating the phase difference here?</p>
          `,
        },
      ],
    },
  },
  QUIZ_22_SECTION_LOCATORS,
  QUIZ_22_CHAPTER_LOCATORS,
);

export const QUIZ_BANK = {
  "quiz2-classic-chapter-1": [
    {
      id: "q2c1-mc-1",
      type: "mc",
      prompt: "What does the superposition principle actually tell you to do at a point where two waves overlap?",
      choices: [
        "Add the source frequencies and ignore displacement.",
        "Add the instantaneous displacements from each wave.",
        "Average the amplitudes and keep the larger one.",
        "Assume the waves permanently destroy each other.",
      ],
      answer: 1,
      explanation: "Superposition says the total displacement at that instant is the algebraic sum of the individual displacements.",
    },
    {
      id: "q2c1-mc-2",
      type: "mc",
      prompt: "In the Quiz 2 interference formula, which pair of ideas together determines the total phase difference?",
      choices: [
        "Amplitude and intensity",
        "Wave speed and period",
        "Path difference and source phase difference",
        "Frequency and screen distance only",
      ],
      answer: 2,
      explanation: "The guide's anchor formula is ΔΦ = -2πΔx/λ + Δφ₀, so both geometry and built-in source offset matter.",
    },
    {
      id: "q2c1-mc-3",
      type: "mc",
      prompt: "If two points have the same path difference as before, but one source is now wired half a cycle out of phase, what changed physically?",
      choices: [
        "Only the wavelength changed",
        "Only the source phase offset changed",
        "Only the distance to the screen changed",
        "Nothing changed because path difference stayed the same",
      ],
      answer: 1,
      explanation: "Reversing the wiring adds a built-in phase offset, so Δφ₀ changes even if the geometry does not.",
    },
    {
      id: "q2c1-mc-4",
      type: "mc",
      prompt: "A point can be dark even when both waves arrive there strongly because:",
      choices: [
        "Dark means no waves reached the point",
        "The amplitudes must both be zero there",
        "The waves arrive with a total phase difference of an odd multiple of π",
        "One wave must always travel faster than the other",
      ],
      answer: 2,
      explanation: "Destructive interference is about phase mismatch, not about the waves failing to arrive.",
    },
    {
      id: "q2c1-short-1",
      type: "short",
      prompt: "Why can flipping one source's wiring change a point from constructive to destructive even if the distances to that point stay the same?",
      expected:
        "Because the path difference can stay the same while the built-in source phase difference changes, so the total phase difference changes.",
      rubric:
        "Mark correct if the answer says the geometry can stay unchanged while a source offset like Δφ₀ changes the total phase and flips the interference result.",
      requiredConcepts: [
        { label: "source phase difference", terms: ["source phase", "phase difference", "delta phi", "phi0", "offset"] },
        { label: "total phase", terms: ["total phase", "overall phase", "interference result", "constructive", "destructive"] },
      ],
    },
    {
      id: "q2c1-short-2",
      type: "short",
      prompt: "What is the difference between path difference Δx and source phase difference Δφ₀ in words?",
      expected:
        "Path difference comes from geometry and distance traveled, while source phase difference is a built-in starting offset between the sources.",
      rubric:
        "Mark correct if the answer distinguishes geometry or distance traveled from a built-in starting phase offset at the sources.",
      requiredConcepts: [
        { label: "geometry", terms: ["geometry", "distance", "path", "travel"] },
        { label: "starting offset", terms: ["starting", "source", "offset", "phase constant", "wired"] },
      ],
    },
  ],
  "quiz2-classic-chapter-2": [
    {
      id: "q2c2-mc-1",
      type: "mc",
      prompt: "Which habit is safest when a same-frequency speaker problem gives both distances and a source offset?",
      choices: [
        "Judge only from the picture because destructive points look obvious",
        "Use only path difference and ignore source phase",
        "Compute the total phase difference before deciding constructive or destructive",
        "Assume equal distances always means constructive",
      ],
      answer: 2,
      explanation: "The whole point of the FNT-style table is that path difference and source offset must be combined into one total phase decision.",
    },
    {
      id: "q2c2-mc-2",
      type: "mc",
      prompt: "For the parameter set x₁ = x, x₂ = x + λ/2, and Δφ₀ = 0, the result is:",
      choices: ["Constructive", "Destructive", "No interference", "Impossible to tell"],
      answer: 1,
      explanation: "A half-wavelength path difference contributes a phase difference of π, so same-phase sources cancel there.",
    },
    {
      id: "q2c2-mc-3",
      type: "mc",
      prompt: "For the parameter set x₁ = x, x₂ = x, and Δφ₀ = π, the result is:",
      choices: ["Constructive", "Destructive", "A beat pattern", "Always louder than either speaker alone"],
      answer: 1,
      explanation: "Equal paths remove the geometry contribution, leaving only the built-in π offset.",
    },
    {
      id: "q2c2-mc-4",
      type: "mc",
      prompt: "Why is FNT Set 5 constructive even though the sources are out of phase?",
      choices: [
        "Because opposite wiring always wins over geometry",
        "Because the λ/2 path shift and the π source shift cancel in the total phase",
        "Because equal amplitudes automatically force constructive interference",
        "Because the observer is moving",
      ],
      answer: 1,
      explanation: "Set 5 is the trap: one π comes from geometry and one π comes from the sources, so the total phase returns to zero mod 2π.",
    },
    {
      id: "q2c2-short-1",
      type: "short",
      prompt: "In plain language, why is Set 5 constructive instead of destructive?",
      expected:
        "Because one half-cycle mismatch comes from the extra half-wavelength path, but the sources also start half a cycle apart, so those two mismatches cancel in the total phase.",
      rubric:
        "Mark correct if the answer says there are two phase shifts of size π or half a cycle and they cancel each other, leaving an in-phase result.",
      requiredConcepts: [
        { label: "path shift", terms: ["path", "half wavelength", "lambda/2", "geometry"] },
        { label: "source shift", terms: ["source", "wiring", "pi", "half cycle", "out of phase"] },
      ],
    },
    {
      id: "q2c2-short-2",
      type: "short",
      prompt: "If reversing one speaker lead flips a location from loud to quiet and nothing else changes, what quantity did you change in the math?",
      expected: "You changed the built-in source phase difference, usually by adding a π offset.",
      rubric:
        "Mark correct if the answer mentions source phase difference, Δφ₀, or adding a π / half-cycle offset while the path difference stays the same.",
      requiredConcepts: [
        { label: "source phase difference", terms: ["delta phi", "phi0", "source phase", "offset", "pi"] },
      ],
    },
  ],
  "quiz2-classic-chapter-3": [
    {
      id: "q2c3-mc-1",
      type: "mc",
      prompt: "What produces beats in the first place?",
      choices: [
        "Two identical in-phase waves from the same source",
        "Two slightly different frequencies superposing",
        "Any single wave with a large amplitude",
        "A wave reflecting from a wall",
      ],
      answer: 1,
      explanation: "Beats come from adding two nearby frequencies, which creates a slow envelope riding on a faster oscillation.",
    },
    {
      id: "q2c3-mc-2",
      type: "mc",
      prompt: "If two moving sound sources are involved, which frequencies should you compare to get the beat frequency you actually hear?",
      choices: [
        "The emitted source frequencies before any motion is considered",
        "The observed frequencies after each Doppler shift is found",
        "Only the lower frequency",
        "Only the average frequency",
      ],
      answer: 1,
      explanation: "The guide's rule is Doppler first, beats second, because your ears compare what actually arrives.",
    },
    {
      id: "q2c3-mc-3",
      type: "mc",
      prompt: "In the full Doppler formula, if the observer moves toward the source and the source moves toward the observer, which sign choices go with those two motions?",
      choices: [
        "+vₒ and -vₛ",
        "-vₒ and +vₛ",
        "+vₒ and +vₛ",
        "-vₒ and -vₛ",
      ],
      answer: 0,
      explanation: "Toward the source raises the numerator with +vₒ, and a source moving toward the observer lowers the denominator with -vₛ.",
    },
    {
      id: "q2c3-mc-4",
      type: "mc",
      prompt: "What is the conceptual difference between beat frequency and heard pitch?",
      choices: [
        "They are always the same number",
        "Beat frequency is the slow loud-soft rate, while pitch tracks the faster oscillation you hear as the note",
        "Pitch is only for light, not sound",
        "Beat frequency depends only on amplitude",
      ],
      answer: 1,
      explanation: "Beats tell you how fast the envelope rises and falls, while pitch is tied to the much faster carrier frequency.",
    },
    {
      id: "q2c3-short-1",
      type: "short",
      prompt: "Why should you do the Doppler calculation before the beat calculation in a mixed problem?",
      expected:
        "Because the beat frequency must be found from the frequencies that actually reach the listener, and motion changes those frequencies first.",
      rubric:
        "Mark correct if the answer says the listener hears Doppler-shifted frequencies first and the beat calculation uses those observed frequencies, not the original emitted ones.",
      requiredConcepts: [
        { label: "observed frequencies", terms: ["observed", "heard", "listener", "reach", "arrive"] },
        { label: "order of steps", terms: ["first", "before", "doppler", "then", "beat"] },
      ],
    },
    {
      id: "q2c3-short-2",
      type: "short",
      prompt: "In easy words, what do the linked signs ± and ∓ mean in the Doppler formula?",
      expected:
        "They mean the sign choices are paired opposites, so once you pick the correct sign for one part based on the motion, the other part uses the opposite-style sign.",
      rubric:
        "Mark correct if the answer says the signs are linked or paired opposites and are not chosen independently.",
      requiredConcepts: [
        { label: "linked signs", terms: ["linked", "paired", "opposite", "not independent", "together"] },
      ],
    },
  ],
  "quiz2-classic-chapter-4": [
    {
      id: "q2c4-mc-1",
      type: "mc",
      prompt: "When does diffraction become especially noticeable?",
      choices: [
        "When the opening is much larger than the wavelength",
        "When the opening size is comparable to the wavelength",
        "Only when the amplitude is zero",
        "Only for sound and never for light",
      ],
      answer: 1,
      explanation: "Diffraction becomes strong when the gap size is on the order of the wavelength.",
    },
    {
      id: "q2c4-mc-2",
      type: "mc",
      prompt: "Why can two narrow slits create an interference pattern on the screen?",
      choices: [
        "Because each slit acts like a source of waves that can superpose at the screen",
        "Because light from one slit blocks the other slit completely",
        "Because the slits change the speed of light in vacuum",
        "Because only one slit really matters",
      ],
      answer: 0,
      explanation: "Young's experiment works because the two slits act like coherent wave sources whose phases can add or cancel.",
    },
    {
      id: "q2c4-mc-3",
      type: "mc",
      prompt: "If you increase the slit separation d while keeping λ and D fixed, the fringe spacing on the screen will:",
      choices: ["Increase", "Decrease", "Stay the same", "Become impossible to predict"],
      answer: 1,
      explanation: "Fringe spacing scales like λD/d, so larger d squeezes the pattern together.",
    },
    {
      id: "q2c4-mc-4",
      type: "mc",
      prompt: "For same-phase slits, a dark fringe occurs when the path difference is:",
      choices: ["nλ", "(n + 1/2)λ", "2nπ", "always zero"],
      answer: 1,
      explanation: "A half-integer number of wavelengths gives a π mismatch and therefore destructive interference.",
    },
    {
      id: "q2c4-short-1",
      type: "short",
      prompt: "Why is the center of the screen usually bright in the ordinary double-slit setup with no added source offset?",
      expected:
        "Because at the center both slits are the same distance away, so the path difference is zero and the waves arrive in phase.",
      rubric:
        "Mark correct if the answer mentions equal distances or zero path difference at the center leading to in-phase arrival and constructive interference.",
      requiredConcepts: [
        { label: "zero path difference", terms: ["zero", "same distance", "equal path", "path difference"] },
        { label: "constructive", terms: ["in phase", "constructive", "bright"] },
      ],
    },
    {
      id: "q2c4-short-2",
      type: "short",
      prompt: "If the wavelength gets larger while the slit setup stays the same, what happens to the pattern and why?",
      expected:
        "The fringes spread farther apart because a larger wavelength needs a larger angle or position shift to produce the same interference order.",
      rubric:
        "Mark correct if the answer says the fringes get farther apart or more spread out and connects that to the larger wavelength in the interference geometry.",
      requiredConcepts: [
        { label: "spread out", terms: ["farther apart", "spread", "wider", "larger spacing"] },
        { label: "wavelength role", terms: ["wavelength", "lambda", "angle", "geometry"] },
      ],
    },
  ],
  "quiz2-classic-chapter-5": [
    {
      id: "q2c5-mc-1",
      type: "mc",
      prompt: "In white-light diffraction from a grating, which color lands farther from the center?",
      choices: ["Blue, because it has the shorter wavelength", "Red, because the larger wavelength needs a larger angle", "They land in the same place", "Whichever color has the greater amplitude"],
      answer: 1,
      explanation: "From d sin θ = nλ, a larger wavelength requires a larger angle for the same order, so red spreads farther out than blue.",
    },
    {
      id: "q2c5-mc-2",
      type: "mc",
      prompt: "What is the main effect of putting a crystal in front of one slit in the Quiz 2 setup?",
      choices: [
        "It changes the slit spacing d",
        "It changes the screen distance D",
        "It adds a source phase difference that shifts the whole pattern",
        "It removes interference completely",
      ],
      answer: 2,
      explanation: "The crystal adds a phase offset before the waves interfere, which shifts the pattern without changing fringe spacing.",
    },
    {
      id: "q2c5-mc-3",
      type: "mc",
      prompt: "Why is the extra path in the thin-film butterfly picture written as 2d?",
      choices: [
        "Because the wavelength doubles inside the film",
        "Because the second ray goes down through the layer and then back up",
        "Because there are always exactly two bright colors",
        "Because d means diameter, not thickness",
      ],
      answer: 1,
      explanation: "The lower ray travels one thickness downward and one thickness upward, giving a round-trip extra distance of 2d.",
    },
    {
      id: "q2c5-mc-4",
      type: "mc",
      prompt: "If the center of a double-slit screen stops being bright after a crystal is added, what is the best explanation?",
      choices: [
        "The center moved, but the crystal has no effect there",
        "The crystal changed the wavelength to zero",
        "At Δx = 0 the added source phase difference can still make the center constructive or destructive",
        "The slits are no longer coherent only at the center",
      ],
      answer: 2,
      explanation: "Zero path difference does not guarantee brightness once a nonzero Δφ₀ is built into the sources.",
    },
    {
      id: "q2c5-short-1",
      type: "short",
      prompt: "Why can a thin film make a butterfly wing look strongly blue?",
      expected:
        "Because the film thickness can make blue reflections add constructively while other wavelengths are weaker or partly cancel, so blue stands out more strongly.",
      rubric:
        "Mark correct if the answer says the film reinforces blue by constructive interference and mentions that other wavelengths are less reinforced or more canceled.",
      requiredConcepts: [
        { label: "constructive blue", terms: ["blue", "constructive", "reinforce", "add"] },
        { label: "other wavelengths", terms: ["other wavelengths", "others", "cancel", "weaker"] },
      ],
    },
    {
      id: "q2c5-short-2",
      type: "short",
      prompt: "What changes in a crystal-shift problem, and what stays the same?",
      expected:
        "The whole interference pattern shifts because the source phase offset changes, but the fringe spacing stays the same because the slit geometry is unchanged.",
      rubric:
        "Mark correct if the answer says the pattern position shifts while fringe spacing stays the same, and connects that to added phase offset rather than changed geometry.",
      requiredConcepts: [
        { label: "shift", terms: ["shift", "move", "position"] },
        { label: "spacing unchanged", terms: ["spacing", "fringe spacing", "same", "unchanged"] },
      ],
    },
  ],
  "quiz2-classic-chapter-6": [
    {
      id: "q2c6-mc-1",
      type: "mc",
      prompt: "If a prompt says the sources are not starting in phase, which formula anchor is the safest place to begin?",
      choices: [
        "Δx = nλ only",
        "ΔΦ = -2πΔx/λ + Δφ₀",
        "f_beat = |f₁ - f₂| only",
        "2d = nλ only",
      ],
      answer: 1,
      explanation: "The total-phase formula keeps both geometry and built-in source offset visible from the start.",
    },
    {
      id: "q2c6-mc-2",
      type: "mc",
      prompt: "Which formula belongs specifically to the thin-film butterfly-style condition highlighted in Quiz 2?",
      choices: ["d sin θ = nλ", "2d = nλ", "f = 1/T", "Δx = (n + 1/2)λ only"],
      answer: 1,
      explanation: "The thin-film section uses the extra round-trip path 2d and sets it equal to a whole number of wavelengths for constructive interference.",
    },
    {
      id: "q2c6-mc-3",
      type: "mc",
      prompt: "Which formula directly tells you the amount of screen shift caused by a crystal phase offset?",
      choices: [
        "y_shift = Δφ₀λD / (2πd)",
        "f_obs = ((v ± vₒ)/(v ∓ vₛ)) fₛ",
        "v = λf",
        "ΔΦ = 2nπ",
      ],
      answer: 0,
      explanation: "That is the boxed crystal-shift result added to the Quiz 2 optics chapter and the formula reference.",
    },
    {
      id: "q2c6-short-1",
      type: "short",
      prompt: "If a problem has opposite wiring and unequal path lengths, why is starting from the total-phase formula smarter than jumping straight to Δx = nλ or Δx = (n + 1/2)λ?",
      expected:
        "Because the total-phase formula keeps both the path contribution and the source offset in one expression, so you do not accidentally ignore the built-in phase difference.",
      rubric:
        "Mark correct if the answer says the total-phase formula includes both geometry and source offset and prevents you from forgetting a nonzero Δφ₀.",
      requiredConcepts: [
        { label: "both contributions", terms: ["both", "path", "source", "offset", "delta phi"] },
        { label: "safer start", terms: ["safe", "safer", "forget", "ignore", "one expression"] },
      ],
    },
  ],
  "chapter-1": [
    {
      id: "c1-mc-1",
      type: "mc",
      prompt: "Which statement best defines a mechanical wave in the opening model of the guide?",
      choices: [
        "A medium physically moves from the source to the observer.",
        "A disturbance carries energy without transporting the medium itself.",
        "Only matter moves, not energy.",
        "Waves only exist in water.",
      ],
      answer: 1,
      explanation: "In the opening mechanical-wave model, the wave carries energy while the medium only oscillates around its position.",
    },
    {
      id: "c1-mc-2",
      type: "mc",
      prompt: "In a transverse wave, the medium moves:",
      choices: [
        "Parallel to the wave's travel.",
        "In a circular path only.",
        "Perpendicular to the wave's travel.",
        "Only forward with the wave.",
      ],
      answer: 2,
      explanation: "Transverse means the medium motion is perpendicular to the direction the wave travels.",
    },
    {
      id: "c1-mc-3",
      type: "mc",
      prompt: "Which example from the guide is longitudinal?",
      choices: ["A rope wave", "Water ripples", "Sound in air", "A pendulum"],
      answer: 2,
      explanation: "Sound is longitudinal because the air molecules move back and forth parallel to the wave direction.",
    },
    {
      id: "c1-mc-4",
      type: "mc",
      prompt: "Wave dimensionality depends on:",
      choices: [
        "The shape of the source",
        "The dimensions of the medium",
        "The number of directions the wave spreads",
        "How fast the wave moves",
      ],
      answer: 2,
      explanation: "The guide says dimensionality means how many directions the wave travels, not the dimensions of the medium.",
    },
    {
      id: "c1-short-1",
      type: "short",
      prompt: "In a longitudinal wave, how do particles move compared with the wave's travel direction?",
      expected: "They move parallel to the direction of wave travel, oscillating back and forth.",
      rubric: "Mark correct if the answer says parallel, same direction, or back-and-forth along the direction of travel.",
    },
    {
      id: "c1-short-2",
      type: "short",
      prompt: "What does the boat-on-a-wave example show?",
      expected: "It shows that energy travels while the water mostly stays in place.",
      rubric: "Mark correct if the answer mentions that the disturbance or energy moves, but the water or medium does not travel with the wave.",
    },
  ],
  "chapter-2": [
    {
      id: "c2-mc-1",
      type: "mc",
      prompt: "Which wave property is medium-dependent?",
      choices: ["Frequency", "Period", "Wave speed", "Amplitude from the source"],
      answer: 2,
      explanation: "Wave speed depends on the medium, while frequency and period are set by the source.",
    },
    {
      id: "c2-mc-2",
      type: "mc",
      prompt: "In the wave equation, a minus sign on the x-term means the wave moves:",
      choices: ["To the left", "To the right", "Nowhere", "Only upward"],
      answer: 1,
      explanation: "The guide's direction rule says the minus sign means a right-moving wave, or motion in the +x direction.",
    },
    {
      id: "c2-mc-3",
      type: "mc",
      prompt: "Which formula gives wave speed?",
      choices: ["v = f/T", "v = λf = λ/T", "v = A/T", "v = φ/T"],
      answer: 1,
      explanation: "Wave speed equals wavelength times frequency, and also wavelength divided by period.",
    },
    {
      id: "c2-mc-4",
      type: "mc",
      prompt: "Wavelength depends on:",
      choices: ["Only the source", "Only the medium", "Both the source and the medium", "Neither"],
      answer: 2,
      explanation: "Because λ = v/f, wavelength depends on both speed in the medium and the source frequency.",
    },
    {
      id: "c2-short-1",
      type: "short",
      prompt: "What is amplitude?",
      expected: "Amplitude is the maximum displacement from equilibrium.",
      rubric: "Mark correct if the answer says maximum displacement, distance from equilibrium at the largest point, or wave height from equilibrium.",
    },
    {
      id: "c2-short-2",
      type: "short",
      prompt: "If the same source drives a wave in a different medium, which wave properties are guaranteed to stay the same?",
      expected: "Frequency stays the same, and period stays the same because it is tied to frequency.",
      rubric:
        "Mark correct only if the answer includes both frequency and period. Do not require amplitude or phase constant here.",
      requiredConcepts: [
        { label: "frequency", terms: ["frequency"] },
        { label: "period", terms: ["period"] },
      ],
    },
  ],
  "chapter-3": [
    {
      id: "c3-mc-1",
      type: "mc",
      prompt: "A y(x) graph is mainly used to read:",
      choices: ["Frequency", "Wavelength", "Power", "Intensity"],
      answer: 1,
      explanation: "A y(x) graph is a snapshot in space, so it lets you read wavelength.",
    },
    {
      id: "c3-mc-2",
      type: "mc",
      prompt: "A y(t) graph is mainly used to read:",
      choices: ["Wavelength", "Amplitude only", "Period", "Wavefront area"],
      answer: 2,
      explanation: "A y(t) graph shows how one point changes in time, so it gives you the period.",
    },
    {
      id: "c3-mc-3",
      type: "mc",
      prompt: "If the graph at the larger x-value is shifted later in time, the wave is moving:",
      choices: ["In the +x direction", "In the -x direction", "Straight up", "In a circle"],
      answer: 0,
      explanation:
        "The larger-x point is farther to the right. If it sees the same crest or trough later, the disturbance is arriving there after it passed the smaller-x point, so the wave is traveling in the +x direction.",
    },
    {
      id: "c3-mc-4",
      type: "mc",
      prompt: "To determine φ₀ from graphs, you should:",
      choices: [
        "Ignore all known points",
        "Use only the chapter title",
        "Plug in a known x, t, y point",
        "Always set it to zero",
      ],
      answer: 2,
      explanation: "The guide says to solve for φ₀ by plugging in a known point from the graph.",
    },
    {
      id: "c3-short-1",
      type: "short",
      prompt: "From which graph do you read λ?",
      expected: "You read λ from the y(x) graph.",
      rubric: "Mark correct if the answer says y(x), position graph, or spatial snapshot.",
    },
    {
      id: "c3-short-2",
      type: "short",
      prompt: "From which graph do you read T?",
      expected: "You read T from the y(t) graph.",
      rubric: "Mark correct if the answer says y(t), time graph, or time history.",
    },
  ],
  "chapter-4": [
    {
      id: "c4-mc-1",
      type: "mc",
      prompt: "For a 3D wave with no dissipation, intensity falls as:",
      choices: ["1/r", "1/r²", "r²", "constant"],
      answer: 1,
      explanation: "In 3D the wavefront is spherical, so intensity follows the inverse square law.",
    },
    {
      id: "c4-mc-2",
      type: "mc",
      prompt: "Rays are always:",
      choices: ["Parallel to wavefronts", "Perpendicular to wavefronts", "Circular", "Random"],
      answer: 1,
      explanation: "The guide states that rays point in the direction of travel and are perpendicular to wavefronts.",
    },
    {
      id: "c4-mc-3",
      type: "mc",
      prompt: "A +10 dB increase means the sound is:",
      choices: ["10 times more intense", "2 times more intense", "100 times more intense", "Unchanged"],
      answer: 0,
      explanation: "+10 dB means intensity increases by a factor of 10.",
    },
    {
      id: "c4-mc-4",
      type: "mc",
      prompt: "In the guide's in-phase 70 dB speaker example, the combined level is about:",
      choices: ["73 dB", "74 dB", "76 dB", "80 dB"],
      answer: 2,
      explanation: "Under the worked example's in-phase assumption, the guide gives a combined level of 76 dB.",
    },
    {
      id: "c4-short-1",
      type: "short",
      prompt: "Why does a speaker sound quieter when you move farther away?",
      expected: "Because the same energy spreads over a larger area, so intensity decreases.",
      rubric: "Mark correct if the answer mentions the wave spreading out over a larger area or lower intensity at greater distance.",
    },
    {
      id: "c4-short-2",
      type: "short",
      prompt: "How does amplitude fall with distance in 3D?",
      expected: "Amplitude falls as 1/r in 3D.",
      rubric: "Mark correct if the answer says 1/r or inversely with distance in 3D.",
    },
  ],
  "chapter-5": [
    {
      id: "c5-mc-1",
      type: "mc",
      prompt: "For a source moving toward the observer, the Doppler denominator uses:",
      choices: ["A plus sign", "A minus sign", "No sign", "A square root"],
      answer: 1,
      explanation: "Toward the observer means a smaller denominator, so you use the minus sign.",
    },
    {
      id: "c5-mc-2",
      type: "mc",
      prompt: "For an observer moving toward the source, the numerator uses:",
      choices: ["A plus sign", "A minus sign", "Zero", "A division by λ"],
      answer: 0,
      explanation: "The full Doppler formula uses a plus in the numerator for an observer moving toward the source.",
    },
    {
      id: "c5-mc-3",
      type: "mc",
      prompt: "When an ambulance approaches you, the observed pitch is:",
      choices: ["Lower", "Higher", "Zero", "Always unchanged"],
      answer: 1,
      explanation: "Approaching means the wavefronts are squeezed together, so the observed frequency is higher.",
    },
    {
      id: "c5-mc-4",
      type: "mc",
      prompt: "A moving source toward a stationary observer compared with a moving observer toward a stationary source is:",
      choices: ["Exactly symmetric", "Not symmetric", "Always equal to zero", "Only different for light"],
      answer: 1,
      explanation: "The guide explicitly says these situations are not symmetric.",
    },
    {
      id: "c5-short-1",
      type: "short",
      prompt: "Why are the forward wave crests closer together when the source moves toward you?",
      expected: "Because each new crest is emitted from a position closer to the observer, compressing the wavelength.",
      rubric: "Mark correct if the answer says the source moves forward between emissions so the crests are squeezed together or the wavelength is shorter.",
    },
    {
      id: "c5-short-2",
      type: "short",
      prompt: "In the Doppler effect, what changes for you: the source frequency or the observed frequency?",
      expected: "The observed frequency changes.",
      rubric: "Mark correct if the answer says observed frequency, heard frequency, or perceived pitch changes while the source frequency stays the same.",
    },
  ],
  "chapter-6": [
    {
      id: "c6-mc-1",
      type: "mc",
      prompt: "The superposition principle says:",
      choices: [
        "Waves destroy each other permanently",
        "Total displacement is the algebraic sum of the individual displacements",
        "Only amplitudes multiply",
        "Waves stop when they meet",
      ],
      answer: 1,
      explanation: "Superposition means y_total = y₁ + y₂.",
    },
    {
      id: "c6-mc-2",
      type: "mc",
      prompt: "If two sources start in phase, constructive interference occurs when path difference is:",
      choices: ["nλ", "(n + 1/2)λ", "π only", "zero intensity only"],
      answer: 0,
      explanation: "With no phase-constant difference, constructive interference happens when Δx = nλ.",
    },
    {
      id: "c6-mc-3",
      type: "mc",
      prompt: "Destructive interference occurs when phase difference is:",
      choices: ["0, 2π, 4π", "π, 3π, 5π", "Any value", "Only λ"],
      answer: 1,
      explanation: "Destructive interference happens at odd multiples of π.",
    },
    {
      id: "c6-mc-4",
      type: "mc",
      prompt: "In the phase chart method, what cancels when comparing the two waves?",
      choices: ["The time term", "The wavelength", "The amplitude", "The phase constant"],
      answer: 0,
      explanation: "The time term cancels because both waves are compared at the same place and time.",
    },
    {
      id: "c6-short-1",
      type: "short",
      prompt: "What happens if two identical waves arrive exactly out of phase?",
      expected: "They destructively interfere and cancel to zero amplitude.",
      rubric: "Mark correct if the answer says cancellation, destructive interference, or zero net amplitude.",
    },
    {
      id: "c6-short-2",
      type: "short",
      prompt: "If Δφ₀ = 0 and the path difference is half a wavelength, what kind of interference do you get?",
      expected: "Destructive interference.",
      rubric: "Mark correct if the answer says destructive interference or complete cancellation.",
    },
  ],
  "chapter-7": [
    {
      id: "c7-mc-1",
      type: "mc",
      prompt: "Which is a correct wave speed formula?",
      choices: ["v = λf", "v = A/T", "v = φ/T", "v = I/r"],
      answer: 0,
      explanation: "The master reference gives v = λf = λ/T.",
    },
    {
      id: "c7-mc-2",
      type: "mc",
      prompt: "Which formula is the full wave equation?",
      choices: [
        "I = P/Area",
        "f = 1/T",
        "y(x,t) = A sin(2πt/T ± 2πx/λ + φ₀)",
        "ΔΦ = 2nπ",
      ],
      answer: 2,
      explanation: "That full sine expression is the complete 1-D wave equation from the reference table.",
    },
    {
      id: "c7-mc-3",
      type: "mc",
      prompt: "Which formula defines decibels?",
      choices: [
        "D - D₀ = 10 log₁₀(I/I₀)",
        "D = I/A",
        "D = 2π/T",
        "D = λf",
      ],
      answer: 0,
      explanation: "The reference table defines decibels with D - D₀ = 10 log₁₀(I/I₀).",
    },
    {
      id: "c7-mc-4",
      type: "mc",
      prompt: "Which formula gives phase difference for interference?",
      choices: [
        "ΔΦ = -2πΔx/λ + Δφ₀",
        "ΔΦ = λ/T",
        "ΔΦ = A²/r²",
        "ΔΦ = f/T",
      ],
      answer: 0,
      explanation: "That is the key phase-difference formula used throughout interference problems.",
    },
    {
      id: "c7-short-1",
      type: "short",
      prompt: "Which depends on the medium: v or f?",
      expected: "v depends on the medium.",
      rubric: "Mark correct if the answer says v, wave speed, or speed depends on the medium.",
    },
    {
      id: "c7-short-2",
      type: "short",
      prompt: "If amplitude doubles, what happens to intensity?",
      expected: "Intensity becomes four times as large.",
      rubric: "Mark correct if the answer says it quadruples, becomes 4 times larger, or 4× intensity.",
    },
  ],
  "chapter-8": [
    {
      id: "c8-mc-1",
      type: "mc",
      prompt: "If one speaker's leads are reversed while both speakers are in the same place, the fixed phase difference is:",
      choices: ["0", "π/2", "π", "2π"],
      answer: 2,
      explanation: "Reversing the leads flips the speaker's motion, which corresponds to a fixed phase difference of π.",
    },
    {
      id: "c8-mc-2",
      type: "mc",
      prompt: "In the simplified phase chart, which term is removed because both waves are compared at the same place and time?",
      choices: ["The time-term difference", "The path difference", "The wavelength", "The fixed phase constant"],
      answer: 0,
      explanation: "The time-term difference is zero in the simplified phase chart, so only path difference and fixed phase difference remain.",
    },
    {
      id: "c8-mc-3",
      type: "mc",
      prompt: "Scenario 3 in the guide, with λ/2 separation and reversed leads, produces:",
      choices: ["Destructive interference", "No interference", "Constructive interference", "Only partial interference"],
      answer: 2,
      explanation: "The path contribution is -π and the wiring contribution is +π, so the total phase difference is zero and the result is constructive.",
    },
    {
      id: "c8-short-1",
      type: "short",
      prompt: "What is the simplified formula for total phase difference?",
      expected: "ΔΦ = -2πΔx/λ + Δφ₀.",
      rubric: "Mark correct if the answer gives the phase-difference formula with path-difference and fixed phase-constant terms.",
    },
    {
      id: "c8-short-2",
      type: "short",
      prompt: "Why do you hear loud, quiet, loud as you walk around λ-separated speakers?",
      expected: "Because the path length difference changes with position, so the phase difference changes through constructive and destructive values.",
      rubric: "Mark correct if the answer mentions changing path difference, changing phase difference, or moving through the interference pattern in space.",
    },
  ],
  "chapter-9": [
    {
      id: "c9-mc-1",
      type: "mc",
      prompt: "Beat frequency is given by:",
      choices: ["f₁ + f₂", "|f₁ - f₂|", "(f₁ + f₂)/2", "1/(f₁ + f₂)"],
      answer: 1,
      explanation: "Beat frequency is the absolute difference between the two frequencies.",
    },
    {
      id: "c9-mc-2",
      type: "mc",
      prompt: "Carrier frequency is:",
      choices: ["The larger of the two frequencies", "The smaller of the two frequencies", "|f₁ - f₂|", "(f₁ + f₂)/2"],
      answer: 3,
      explanation: "Carrier frequency is the average of the two source frequencies.",
    },
    {
      id: "c9-mc-3",
      type: "mc",
      prompt: "Beats happen because the two waves:",
      choices: ["Move in different media", "Start at different amplitudes only", "Gradually drift in and out of phase", "Have no wavelength"],
      answer: 2,
      explanation: "Beats are the loud-quiet-loud pattern caused by nearby frequencies drifting in and out of phase.",
    },
    {
      id: "c9-short-1",
      type: "short",
      prompt: "What is the difference between beat frequency and carrier frequency?",
      expected: "Beat frequency is the pulsing rate, while carrier frequency is the average pitch inside the envelope.",
      rubric: "Mark correct if the answer says beats are the slow loud-quiet pulse and carrier is the faster average tone or pitch.",
    },
    {
      id: "c9-short-2",
      type: "short",
      prompt: "If one source is 258 Hz and the other is 262 Hz, what beat frequency do you hear?",
      expected: "4 Hz.",
      rubric: "Mark correct if the answer says 4 Hz or four beats per second.",
    },
  ],
  "chapter-10": [
    {
      id: "c10-mc-1",
      type: "mc",
      prompt: "Huygens's principle says that each point on a wavefront acts like:",
      choices: ["A wall", "A new source of waves", "A fixed node", "A particle beam"],
      answer: 1,
      explanation: "Huygens's principle treats each point on a wavefront as a source of secondary waves.",
    },
    {
      id: "c10-mc-2",
      type: "mc",
      prompt: "The path length difference in the double-slit setup is:",
      choices: ["Δx = λ/D", "Δx = d sin θ", "Δx = D/d", "Δx = n/λ"],
      answer: 1,
      explanation: "The geometry gives Δx = d sin θ.",
    },
    {
      id: "c10-mc-3",
      type: "mc",
      prompt: "Bright fringes in a double-slit pattern satisfy:",
      choices: ["d sin θ = nλ", "d sin θ = (n + 1/2)λ", "d = λ/θ", "ΔΦ = π/2 only"],
      answer: 0,
      explanation: "Constructive interference produces bright fringes when d sin θ = nλ.",
    },
    {
      id: "c10-short-1",
      type: "short",
      prompt: "Why did Young's experiment support the wave model of light?",
      expected: "Because two slits produced alternating bright and dark stripes, which require interference.",
      rubric: "Mark correct if the answer mentions alternating bright/dark bands, interference, or a pattern classical particles alone would not produce.",
    },
    {
      id: "c10-short-2",
      type: "short",
      prompt: "What does the small-angle approximation let you calculate from fringe spacing?",
      expected: "It lets you calculate slit spacing using d = λD/Δy.",
      rubric: "Mark correct if the answer mentions slit spacing d, the equation d = λD/Δy, or using screen distance and fringe spacing to infer d.",
    },
  ],
  "chapter-11": [
    {
      id: "c11-mc-1",
      type: "mc",
      prompt: "Adding more slits to an interference setup mainly makes the bright peaks:",
      choices: ["Disappear", "Move to new angles", "Sharper and narrower", "All become blue"],
      answer: 2,
      explanation: "More slits sharpen the bright peaks without changing the angle condition for where they occur.",
    },
    {
      id: "c11-mc-2",
      type: "mc",
      prompt: "The diffraction grating formula is:",
      choices: ["f = 1/T", "nλ = d sin θ", "ΔΦ = -2πΔx/λ + Δφ₀", "v = ω/k only"],
      answer: 1,
      explanation: "The grating equation is nλ = d sin θ.",
    },
    {
      id: "c11-mc-3",
      type: "mc",
      prompt: "In white light through a grating, which color is farthest from the center?",
      choices: ["Violet", "Blue", "Green", "Red"],
      answer: 3,
      explanation: "Red has the longest wavelength, so it appears at the largest angle.",
    },
    {
      id: "c11-short-1",
      type: "short",
      prompt: "What does a nonzero phase constant difference do to a double-slit interference pattern?",
      expected: "It shifts the entire pattern.",
      rubric: "Mark correct if the answer says the fringes shift, the central maximum moves, or the whole pattern is displaced.",
    },
    {
      id: "c11-short-2",
      type: "short",
      prompt: "Why does a CD show rainbow colors under white light?",
      expected: "Because it acts like a diffraction grating and sends different wavelengths to different angles.",
      rubric: "Mark correct if the answer mentions diffraction grating behavior, different wavelengths separating, or different colors leaving at different angles.",
    },
  ],
  "chapter-12": [
    {
      id: "c12-mc-1",
      type: "mc",
      prompt: "Which formula gives beat frequency?",
      choices: ["f_beat = |f₁ - f₂|", "f_beat = (f₁ + f₂)/2", "f_beat = d sin θ", "f_beat = v/λ"],
      answer: 0,
      explanation: "Beat frequency is the absolute difference between the two source frequencies.",
    },
    {
      id: "c12-mc-2",
      type: "mc",
      prompt: "Which formula gives the path length difference in a double-slit experiment?",
      choices: ["Δx = d sin θ", "Δx = λ/T", "Δx = 2d = nλ", "Δx = v/(v ± v_s)"],
      answer: 0,
      explanation: "Δx = d sin θ is the geometry formula for double-slit path difference.",
    },
    {
      id: "c12-mc-3",
      type: "mc",
      prompt: "Which formula gives destructive interference for double-slit dark fringes?",
      choices: ["nλ = d sin θ", "(n + 1/2)λ = d sin θ", "ΔΦ = 2nπ", "f = 1/T"],
      answer: 1,
      explanation: "Dark fringes satisfy the half-integer condition (n + 1/2)λ = d sin θ.",
    },
    {
      id: "c12-short-1",
      type: "short",
      prompt: "What does d = λD/Δy help you find?",
      expected: "It helps you find slit spacing from the pattern on the screen.",
      rubric: "Mark correct if the answer says slit spacing d or says it uses wavelength, screen distance, and fringe spacing to infer d.",
    },
    {
      id: "c12-short-2",
      type: "short",
      prompt: "What should you check before using 2d = nλ for a thin-film reflection problem?",
      expected: "You should check whether there is an extra phase flip on reflection.",
      rubric: "Mark correct if the answer mentions reflection phase shift, phase flip, or making sure the simple condition applies.",
    },
  ],
  "chapter-13": [
    {
      id: "c13-mc-1",
      type: "mc",
      prompt: "Only which type of wave can be polarized?",
      choices: ["Longitudinal waves", "Transverse waves", "Sound waves only", "Any wave at all"],
      answer: 1,
      explanation: "Polarization is a property of transverse waves because they can oscillate in different perpendicular directions.",
    },
    {
      id: "c13-mc-2",
      type: "mc",
      prompt: "A graph of displacement versus position at one instant is best used to read:",
      choices: ["Frequency", "Wavelength", "Phase speed only", "Beat frequency"],
      answer: 1,
      explanation: "A snapshot graph shows the spatial pattern of the wave, so it is the graph you use to read wavelength.",
    },
    {
      id: "c13-mc-3",
      type: "mc",
      prompt: "In the Doppler formula, when the observer moves toward the source, which sign is used with vₒ in the numerator?",
      choices: ["Plus", "Minus", "Zero", "It depends only on wavelength"],
      answer: 0,
      explanation: "Observer moving toward the source means they meet crests faster, so the numerator becomes v + vₒ.",
    },
    {
      id: "c13-short-1",
      type: "short",
      prompt: "What two things does the textbook say material waves need in order to exist?",
      expected: "A medium that can be displaced and restoring forces between neighboring parts of the medium.",
      rubric: "Mark correct if the answer mentions a medium plus restoring forces, or particles plus a force pulling them back toward equilibrium.",
    },
    {
      id: "c13-short-2",
      type: "short",
      prompt: "What is the path-length contribution to total phase difference between two sources?",
      expected: "The path-length term is -(2π/λ)Δx.",
      rubric: "Mark correct if the answer gives the path-length term as minus two pi over lambda times delta x, or an equivalent statement inside the total phase-difference formula.",
    },
  ],
};
