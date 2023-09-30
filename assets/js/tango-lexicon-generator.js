// Tango Lexicon Generator
// by Andrei Andreev andreinla@gmail.com
// based on the Tango Lexicon system by Mitra Martin and David Lampson


console.log("tango-lexicon-generator")

var vm = new Vue({
  el: "#root",
  data: {
    "dict": {
      "parallel-forward-forward": "fool",
      "parallel-forward-open": "fairy",
      "parallel-forward-back": "fisherman",
      "parallel-open-forward": "oz",
      "parallel-open-open": "orphan",
      "parallel-open-back": "oracle",
      "parallel-back-forward": "boss",
      "parallel-back-open": "buddha",
      "parallel-back-back": "bartender",
      "cross-forward-forward": "finch",
      "cross-forward-open": "ferret",
      "cross-forward-back": "flamingo",
      "cross-open-forward": "ox",
      "cross-open-open": "ostrich",
      "cross-open-back": "octopus",
      "cross-back-forward": "bat",
      "cross-back-open": "baboon",
      "cross-back-back": "butterfly",
      "transition-leader-forward": "frank",
      "transition-leader-open": "oscar",
      "transition-leader-back": "benjamin",
      "transition-follower-forward": "eve",
      "transition-follower-open": "emma",
      "transition-follower-back": "elleanor"
    },
    "parallel": {
      "all": [
        "parallel-forward-forward",
        "parallel-forward-open",
        "parallel-forward-back",
        "parallel-open-forward",
        "parallel-open-open",
        "parallel-open-back",
        "parallel-back-forward",
        "parallel-back-open",
        "parallel-back-back"
      ],
      "divergent": [
        // "pfo", "pof", "pob", "pbo",
        "parallel-forward-open",
        "parallel-open-forward",
        "parallel-open-back",
        "parallel-back-open"
      ]
    },
      "cross": {
        "all": [
          "cross-forward-forward",
          "cross-forward-open",
          "cross-forward-back",
          "cross-open-forward",
          "cross-open-open",
          "cross-open-back",
          "cross-back-forward",
          "cross-back-open",
          "cross-back-back"
        ]
      },
    "transitions": [
      "transition-leader-forward",
      "transition-leader-open",
      "transition-leader-back",
      "transition-follower-forward",
      "transition-follower-open",
      "transition-follower-back"
    ],

    "generated_sequence": [],
    "tooltips": undefined,
    "form_data": {
      "moves": "5",
      "dance_system": "parallel"
    },
    "show": {
      "instructions": true,
      "bullet_list": false,
      "word_list": true
    }


  },

  computed: {
    formatted_sequence: function() {

      var r = [],
        dict = this.dict,
        capitalize = this.capitalize,
        sequence_size = this.generated_sequence.length,
        explanation_from_abbr = this.explanation_from_abbr,
        generated_sequence = this.generated_sequence,
        form_data = this.form_data;

      generated_sequence.forEach( function(step, index) {
        var explanation = explanation_from_abbr(step), connector=", "

        if (index == form_data.moves -1) { connector = "" }

        r.push({
          "title": explanation.title,
          "word": explanation.word,
          "connector": connector
        })

      })
      return r
    }
  },

  methods: {
    generate: function() {
      console.log("generate!!")

      this.show.instructions = false
      this.generated_sequence = []

      var form_data = this.form_data,
          source_list = []

      if (form_data.dance_system == "parallel") { source_list = this.parallel.all  }
      if (form_data.dance_system == "cross") { source_list = this.cross.all  }
      if (form_data.dance_system == "both") { source_list = this.parallel.all.concat(this.cross.all)  }

      console.log(form_data.moves, source_list)
      for (let i = 0; i < form_data.moves; i++) {
        this.generate_step(source_list)
      }
      // console.log( "generated ", form_data.moves, form_data.dance_system, " steps")
    },

    generate_step: function(list) {
      // console.log("generate step")
      var step = this.get_random_step(list),
          prev_step = this.generated_sequence[this.generated_sequence.length - 1]

      this.generated_sequence.push(step)

      // if (!!prev_step) && (prev_step[0] != step[0]) // if the previous step exists and is not the same as this step
      //   transition_step = this.get_random_step(this.transitions) // insert a transition step
      //   this.generated_sequence.push(transition_step)

      // this.generated_sequence.push(step) // add the step
      return true
    },

    explanation_from_abbr: function(abbr) {
      var explanation = "", r
      if ( this.parallel.divergent.indexOf(abbr) > -1 ) {
        explanation = this.dict[abbr].concat( " (↔) ")
      } else {
        explanation = this.dict[abbr]
      }

      return {word: explanation, title: abbr}
    },

    get_random_step: function(list) {
      var min = 0, max = Math.floor(list.length - 1), random_number = 0
      random_number = Math.floor(Math.random() * (max - min + 1)) + min
      // console.log(`random_number between ${min} and ${max}: ${random_number}`)
      return list[random_number]
    },

    toggle_list_type: function() {
      this.show.bullet_list = !this.show.bullet_list
      this.show.word_list = !this.show.word_list
      },

    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

  }

})

