document.getElementById("continueBtn").addEventListener("click", () => {
  // Simple delay simulating they joined (Telegram doesn't confirm join status on frontend)
  alert("Thanks for joining! Redirecting...");
  window.location.href = "https://result.neaea.gov.et";
});
