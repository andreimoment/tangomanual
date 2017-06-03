---
---
@APP = do ->

  store =
    generated_sequence: ["pff", "pfb", "pbb"]
    dict:
      "pff": "fool"
      "pfo": "fairy"
      "pfb": "fisherman"
      "pof": "oz"
      "poo": "orphan"
      "pob": "oracle"
      "pbf": "boss"
      "pbo": "buddha"
      "pbb": "bartender"
      "xff": "finch"
      "xfo": "ferret"
      "xfb": "flamingo"
      "xof": "ox"
      "xoo": "ostrich"
      "xob": "octopus"
      "xbf": "bat"
      "xbo": "baboon"
      "xbb": "butterfly"
      "tlf": "frank"
      "tlo": "oscar"
      "tlb": "benjamin"
      "tff": "eve"
      "tfo": "emma"
      "tfb": "elleanor"

    parallel :
      all: ["pff", "pfo", "pfb", "pof", "poo", "pob", "pbf", "pbo", "pbb"]
      divergent: ["pfo", "pof", "pob", "pbo"]

    cross :
      all: ["xff", "xfo", "xfb", "xof", "xoo", "xob", "xbf", "xbo", "xbb"]

    transitions: ["tlf", "tlo", "tlb", "tff", "tfo", "tfb"]
    abbr: "tl": "transition (leader)", "tf": "transition (follower)", "p": "parrallel system", "x": "cross system", "f": "forward", "b": "back", "o": "open"

  step_name_from_abbr = (abbr) ->
    store.dict[abbr]

  generate_step = (list) ->
    step = get_random_step(list)
    prev_step = store.generated_sequence[store.generated_sequence.length - 1]
    if (!!prev_step) && (prev_step[0] != step[0])
      transition_step = get_random_step(store.transitions)
      store.generated_sequence.push(transition_step)

    store.generated_sequence.push(step)
    true

  generate_steps = (data) ->
    store.generated_sequence = [] #reset current sequence
    source_list = store.parallel.all if data.systems == "parallel"
    source_list = store.cross.all if data.systems == "cross"
    source_list = store.parallel.all.concat(store.cross.all) if data.systems == "both"

    generate_step(source_list) for [1..data.moves]
    store.generated_sequence.length = data.moves
    print_steps()

  get_random_step = (list)->
    min = 0
    max = list.length - 1
    min = Math.ceil(min)
    max = Math.floor(max)
    i = Math.floor(Math.random() * (max - min + 1)) + min
    list[i]

  capitalize = (string)->
    string.charAt(0).toUpperCase() + string.slice(1)

  reset_steps_list = ->
    $(".js-steps-bullets").children().remove()
    $(".js-steps-list").html("")
    $(".instructions").addClass("hidden")

  print_step = (abbr, is_last) ->
    step = capitalize(step_name_from_abbr(abbr))
    step_with_comma = step
    step_with_comma = step.concat(', ') if !is_last
    explanation = explanation_from_abbr(abbr)
    $(".js-steps-list").append('<span class="js-tooltip" title="'+explanation+'">'+step_with_comma+"</span>")
    $(".js-steps-bullets").append('<li class="js-tooltip" title="'+explanation+'">'+step+'</li>')

  explanation_from_abbr = (abbr) ->
    explanation = ""
    while abbr.length > 0
      $.each(store.abbr, (i, el) ->
        if abbr.match(i)
          explanation = explanation.concat(" "+el)
          abbr = abbr.substring(i.length)
      )
    explanation


  print_steps = ->
    reset_steps_list()
    last_i = store.generated_sequence.length - 1
    $.each(store.generated_sequence, (i, el) ->
           print_step el, (i == last_i)
    )
    set_tooltips()

  set_tooltips = ->
    Tippy(".js-tooltip", {"arrow": true})

  {
    generate_steps: generate_steps
    print_steps: print_steps
    get_random_step: get_random_step
    set_tooltips: set_tooltips
  }

$(document).ready ->
  console.log "ready"
  $('form.form').submit (e) ->
    e.preventDefault()
    form_data = {}
    form_data.systems = $('#systems').val()
    form_data.magical_elements = $('#magical_elements').val()
    form_data.moves = $('#moves').val()
    steps = APP.generate_steps form_data
    APP.print_steps()

  $("#as_bullets").on('click',  (e)->
    $(".js-steps-bullets").toggleClass("hidden")
    $('.js-steps-list').toggleClass("hidden")
  )

  APP.set_tooltips()
