document.getElementById("quizForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  let score = 0;

  const questions = ["q1", "q2", "q3", "q4", "q5"];
  questions.forEach((q) => {
    if (form[q].value === "yes") {
      score += 1;
    }
  });

  let autismType = "None";
  if (score >= 4) {
    autismType = "Autism Spectrum Disorder";
  } else if (score === 3) {
    autismType = "Mild Autism Traits";
  } else {
    autismType = "Unlikely";
  }

  const resultData = {
    name: form.name.value,
    age: parseInt(form.age.value),
    score: score,
    autismType: autismType
  };

  try {
    await fetch("/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultData),
    })
    .then(response => response.json())
    .then(data => console.log('Saved to DB:', data))
    .catch(error => console.error('Save failed:', error));


    localStorage.setItem("autismResult", JSON.stringify(resultData));
    window.location.href = "result.html";
  } catch (err) {
    alert("Something went wrong while submitting.");
    console.error(err);
  }
});
