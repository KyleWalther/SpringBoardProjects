const BASE_API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
const NUM_CATEGORIES = 6;
const NUM_CLUES_PER_CAT = 5;

let categories = [];

/** Get NUM_CATEGORIES random category from API. */
async function getCategoryIds() {
  let response = await axios.get(`${BASE_API_URL}categories`, { params: { count: 100 } });
  let catIds = response.data.map(c => c.id);
  return _.sampleSize(catIds, NUM_CATEGORIES);
}

/** Return object with data about a category. */
async function getCategory(catId) {
  let response = await axios.get(`${BASE_API_URL}category`, { params: { id: catId } });
  let cat = response.data;
  let randomClues = _.sampleSize(cat.clues, NUM_CLUES_PER_CAT).map(c => ({
    question: c.question,
    answer: c.answer,
    showing: null
  }));
  return { title: cat.title, clues: randomClues };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions. */
async function fillTable() {
  hideLoadingView();

  // Add row with headers for categories
  let $tr = $("<tr>");
  for (let category of categories) {
    $tr.append($("<th>").text(category.title));
  }
  $("#jeopardy thead").append($tr);

  // Add rows with questions for each category
  $("#jeopardy tbody").empty();
  for (let clueIdx = 0; clueIdx < NUM_CLUES_PER_CAT; clueIdx++) {
    let $tr = $("<tr>");
    for (let catIdx = 0; catIdx < NUM_CATEGORIES; catIdx++) {
      let clue = categories[catIdx].clues[clueIdx];
      let $td = $("<td>")
        .attr("id", `${catIdx}-${clueIdx}`)
        .append($("<i>").addClass("fas fa-question-circle fa-3x"))
        .data("categoryIndex", catIdx)
        .data("clueIndex", clueIdx); // Add data attributes for easy access
      $tr.append($td);
    }
    $("#jeopardy tbody").append($tr);
  }
}

/** Handle clicking on a clue: show the question or answer. */
function handleClick(evt) {
  let $tgt = $(evt.target).closest("td");
  let id = $tgt.attr("id");
  let [catId, clueId] = id.split("-");
  catId = parseInt(catId); // Convert to integer
  clueId = parseInt(clueId); // Convert to integer

  if (categories[catId] && categories[catId].clues[clueId]) {
    let clue = categories[catId].clues[clueId];
    let msg;

    if (!clue.showing) {
      msg = clue.question;
      clue.showing = "question";
    } else if (clue.showing === "question") {
      msg = clue.answer;
      clue.showing = "answer";
      $tgt.addClass("disabled");
    } else {
      return; // Already showing answer; ignore
    }

    // Update text of cell
    $tgt.html(msg);
  } else {
    console.error("Clue data not found");
  }
}

/** Wipe the current Jeopardy board, show the loading spinner. */
function showLoadingView() {
  $("#jeopardy thead").empty();
  $("#jeopardy tbody").empty();
  $("#spin-container").show();
  $("#start").addClass("disabled").text("Loading...");
}

/** Remove the loading spinner and update the button. */
function hideLoadingView() {
  $("#start").removeClass("disabled").text("Restart!");
  $("#spin-container").hide();
}

/** Start game: get random category Ids, get data, create HTML table. */
async function setupAndStart() {
  let isLoading = $("#start").text() === "Loading...";
  
  if (!isLoading) {
    showLoadingView();
    let catIds = await getCategoryIds();
    categories = await Promise.all(catIds.map(id => getCategory(id)));
    fillTable();
  }
}

/** On click of start / restart button, set up game. */
$("#start").on("click", setupAndStart);

/** On page load, add event handler for clicking clues */
$(function() {
  $("#jeopardy").on("click", "td", handleClick);
});

