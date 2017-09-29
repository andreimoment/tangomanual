---
title: "First Cabeceo"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 additional spaces.

toc:                    # Think of the TOC as nested lists:
  - level: "Culture"    # "level"s and the "missions" list are under "toc"
    missions:           # Mission numbers are under "missions".
      - 95               # Note the indentation! ("I belong to the parent above")
      - 96               # And the dashes! ("I am an item in a list")
      - 101               # 
      - 102               # For mission reference, see
      - 94                # tangomanual.com/info/reference-all-missions/
      - 104
      - 105
      - 118
      - 108
      - 109
      - 106
      - 107
      - 112
      - 113
      - 114
  - level: "Practice"
    missions:
      - 97
      - 98
      - 99
      - 100
      - 92
      - 93
      - 117
  - level: "Dance"
    missions:
      - 115
      - 110
      - 111
      - 116
      - 27
      - 29
      - 30 
      - 31
      - 32
      - 25
  - level: "Facilitate"
    missions:
      - 91

org_name: "The Tango Challenge"

# do not change items below this line!
layout: org-toc
org_url: challenge
---

{% include org/toc_by_id.html %}
