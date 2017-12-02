---
title: "First Cabeceo"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 additional spaces.

toc:                    # Think of the TOC as nested lists:
  - level: "Practice"    # "level"s and the "missions" list are under "toc"
    missions:           # Mission numbers are under "missions".
      - 97               # Note the indentation! ("I belong to the parent above")
      - 98               # And the dashes! ("I am an item in a list")
      - 99               # 
      - 100               # For mission reference, see
      - 92                # tangomanual.com/info/reference-all-missions/
      - 93
      - 117
  - level: "Culture"
    missions:
      - 95
      - 96
      - 94
  - level: "Dance"
    missions:
      - 27
      - 29
      - 30 
      - 31
      - 32
      - 25

org_name: "The Tango Challenge"

# do not change items below this line!
layout: org-toc
org_url: challenge
---

{% include org/toc_by_id.html %}
