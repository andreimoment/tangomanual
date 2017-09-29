---
title: "Test Flight!"

# make sure to use the exact same identations
# for the list below. Each level is indented by 2 additional spaces.

toc:                    # Think of the TOC as nested lists:
  - Area: "Music"    # "level"s and the "missions" list are under "toc"
    missions:           # Mission numbers are under "missions".
      - 86               # Note the indentation! ("I belong to the parent above")
      - 87               # And the dashes! ("I am an item in a list")
      - 88               # 
      - 85               # For mission reference, see
      -                 # tangomanual.com/info/reference-all-missions/
  - Area: "Culture"
    missions:
      - 78
      - 79
      - 80
      - 81
      - 89
      - 82
      - 83
      - 76
      - 84
  - Area: "Dance"
    missions:
      - 8
      - 9
      - 10
      - 20
      - 21
      - 28
      - 22
      - 13
      - 14
      - 16
      - 77
      - 12
      - 90
      - 11

org_name: "The Tango Challenge"

# do not change items below this line!
layout: org-toc
org_url: challenge
---

{% include org/toc_by_id.html %}
