---
title: "Caltec - 2017"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 spaces.

toc:                    # think of this as nested bullet lists:
  - level: "Level 1"    # levels are under "toc" (note the dash!)
    missions:           # 
      - 1               # individual missions are under "missions"
      - 2
      - 3
  - level: "Level 2 Name"
    missions:
      - 4
      - 5

# do not change below this line!
layout: org-toc
org_url: test
org_name: "Caltec Tango Club"
---

{% include org/toc_by_id.html %}
