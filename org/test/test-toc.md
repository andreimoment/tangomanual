---
title: Test TOC2

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 spaces.

toc:                    # think of this as nested bullet lists:
  - level: "Level 1"    # levels and missions are under "toc" (note the dash!)
    missions:           
      1: "Mirror Game"  # individual missions are under "missions"
      2: "Stepping"
      3: "Side-By-Side"
  - level: "Level 2 Name"
    missions:
      4: "Six Count Box"
      5: "The Cross/8-Count/Salida"

# do not change below this line!
layout: org-toc
---

# {{ page.title }}

{% include org/toc.html %}
