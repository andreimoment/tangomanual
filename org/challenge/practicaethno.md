---
title: "Practica Ethno"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 additional spaces.

toc:                    # Think of the TOC as nested lists:
  - Area: "Music"    # "level"s and the "missions" list are under "toc"
    missions:           # Mission numbers are under "missions".
      - 61               # Note the indentation! ("I belong to the parent above")
      - 62               # And the dashes! ("I am an item in a list")
      - 63               # 
      - 64               # For mission reference, see
      - 65               # tangomanual.com/info/reference-all-missions/
      - 66
      - 67
      - 68
  - Area: "Culture"
    missions:
      - 60
      - 69
      - 70
      - 71
      - 72
  - Area: "Dance"
    missions:
      - 59
      - 1
      - 2
      - 3
      - 4
      - 5
      - 6
      - 7
  - Area: "More"
    missions:
      - 7
      - 8
      - 9
      - 10

org_name: "The Tango Challenge"

# do not change items below this line!
layout: org-toc
org_url: challenge
---

{% include org/toc_by_id.html %}
