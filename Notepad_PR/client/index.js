var note = document.getElementById("note");

var saveTimer;

// Load saved text
var savedText = localStorage.getItem("premiereNotepad");

if (savedText !== null) {
  note.value = savedText;
}

// Auto-save after user stops typing
note.addEventListener("input", function () {
  clearTimeout(saveTimer);

  saveTimer = setTimeout(function () {
    localStorage.setItem("premiereNotepad", note.value);
  }, 1000);
});
