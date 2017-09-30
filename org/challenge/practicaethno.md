---
title: "Practica Ethno"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 additional spaces.

toc:                    # Think of the TOC as nested lists:
  - level: "Dance"    # "level"s and the "missions" list are under "toc"
    missions:           # Mission numbers are under "missions".
      - 1               # Note the indentation! ("I belong to the parent above")
      - 59              # And the dashes! ("I am an item in a list")
      - 2               # For mission reference, see
      - 3               # tangomanual.com/info/reference-all-missions/
      - 4
      - 5
      - 6
      - 7
  - level: "Culture"
    missions:
      - 60
      - 69
      - 70
      - 71
      - 72
  - level: "Music"
    missions:
      - 61
      - 62
      - 63
      - 64
      - 65
      - 66
      - 67
      - 68
  - level: "More"
    missions:
      - 73
      - 74
      - 75

org_name: "The Tango Challenge"

# do not change items below this line!
layout: org-toc
org_url: challenge
---

{% include org/toc_by_id.html %}
