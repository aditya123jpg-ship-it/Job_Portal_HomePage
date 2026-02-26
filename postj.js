<script>
  const form = document.querySelector(".post-job-form");
  const jobList = document.getElementById("jobList");
  const jobCount = document.getElementById("jobCount");

  let count = 0;

  form.addEventListener("onclick", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, select, textarea");

    const jobTitle = inputs[0].value.trim();
    const company = inputs[1].value.trim();
    const lc = inputs[2].value.trim();
    const type = inputs[3].value;
    const salary = inputs[4].value.trim();
    const description = inputs[5].value.trim();

    if (!jobTitle || !company || !location || !type || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
      <h4>${jobTitle}</h4>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Location:</strong> ${lc}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Salary:</strong> ${salary || "Not specified"}</p>
      <p>${description}</p>
      <button class="delete-btn">Delete Job</button>
    `;

    jobList.appendChild(jobCard);

    count++;
    jobCount.textContent = count;

    jobCard.querySelector(".delete-btn").addEventListener("click", function () {
      jobCard.remove();
      count--;
      jobCount.textContent = count;
    });

    form.reset();
  };
</script>
