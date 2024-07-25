var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 60%",
    scrub: true,
    // marker: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "5%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "25%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "165%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    rotate: "150deg",
    top: "100%",
    left: "60%",
  },
  "orange");
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 65%",
    scrub: true,
    marker: true,
  },
});
tl2.from(".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
tl2.from("#sprite",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
tl2.from(".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from("#pepsi",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.to("#orange-cut",
    {
      width:"20%",
      left: "40%",
      top: "205%",
    },
    "ca"
  );
  tl2.to("#fanta",
    {
      width:"25%",
      left: "38%",
      top: "215%",
    },
    "ca"
  );
  