import { TimelineMax } from "gsap";
import { Targets } from "./targets";

const tl = new TimelineMax();

tl.from(Targets.logoU, 1, { y: -10 })
  .from(
    Targets.logoR,
    2,
    { y: -20, rotation: 250, transformOrigin: "100% 50%" },
    "-=1"
  )
  .from(Targets.logoI, 1, { y: 10 }, "-=2")
  .from(Targets.logoT_top, 1, { x: 100 }, "-=0.5")
  .from(Targets.logoT_bottom, 1, { y: 10 }, "-=1")
  .from(Targets.logoY, 1, { y: -10 }, "-=1");
