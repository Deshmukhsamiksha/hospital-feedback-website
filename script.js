
const feedbackForm = document.getElementById("feedbackForm");
const formResult = document.getElementById("formResult");

if (feedbackForm && formResult) {
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the required form fields.
    if (!feedbackForm.reportValidity()) {
      return;
    }

    // This demonstration form does not save or transmit responses.
    formResult.textContent =
      "Demo completed! No feedback was transmitted or saved. " +
      "To collect real responses, connect an approved form service or backend.";

    formResult.hidden = false;

    // Scroll to the confirmation message.
    formResult.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
}
