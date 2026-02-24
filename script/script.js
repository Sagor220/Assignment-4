let rejectedList = [];
let interviewList = [];
let total = document.getElementById("total");
let smallTotal = document.getElementById("small-total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const totalCards = document.getElementById("job-section");
const interviewCards = document.getElementById("interview-section");
const rejectedCards = document.getElementById("rejected-section");
const acceptButtons = document.querySelectorAll(".btn-success");
const rejectButtons = document.querySelectorAll(".btn-error");
const allBtn = document.getElementById("allBtn");
const interviewToogle = document.getElementById("interview-btn");
const rejectedToogle = document.getElementById("rejected-btn");

total.innerText = totalCards.children.length;
smallTotal.innerText = totalCards.children.length;
interview.innerText = 0;
rejected.innerText = 0;

acceptButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const parent = btn.parentElement.parentElement;
    const statusBtn = parent.querySelector(".btn-soft");

    rejectedList = rejectedList.filter(function (card) {
      return card !== parent;
    });

    if (!interviewList.includes(parent)) {
      interviewList.push(parent);
    }

    statusBtn.innerText = "INTERVIEW";

    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

    showInterviewJobs();
    showRejectedJobs();
  });
});

rejectButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const parent = btn.parentElement.parentElement;
    const statusBtn = parent.querySelector(".btn-soft");

    interviewList = interviewList.filter(function (card) {
      return card !== parent;
    });

    if (!rejectedList.includes(parent)) {
      rejectedList.push(parent);
    }

    statusBtn.innerText = "REJECTED";

    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

    showInterviewJobs();
    showRejectedJobs();
  });
});

function showInterviewJobs() {
  interviewCards.innerHTML = "";

  if (interviewList.length === 0) {
    interviewCards.innerHTML = `
      <div class="flex flex-col items-center text-center">
        <div><img src="jobs.png" alt="" /></div>
        <h1 class="text-xl font-bold">No Jobs in Interview</h1>
        <p>Check back soon for new opportunities</p>
      </div>
    `;
  } else {
    interviewList.forEach(function (job) {
      interviewCards.appendChild(job.cloneNode(true));
    });
  }
}

function showRejectedJobs() {
  rejectedCards.innerHTML = "";

  if (rejectedList.length === 0) {
    rejectedCards.innerHTML = `
      <div class="flex flex-col items-center text-center">
        <div><img src="jobs.png" alt="" /></div>
        <h1 class="text-xl font-bold">No Rejected Jobs</h1>
        <p>Thanks for visiting.</p>
      </div>
    `;
  } else {
    rejectedList.forEach(function (job) {
      rejectedCards.appendChild(job.cloneNode(true));
    });
  }
}

interviewToogle.addEventListener("click", function () {
  totalCards.classList.add("hidden");
  rejectedCards.classList.add("hidden");
  interviewCards.classList.remove("hidden");
});

allBtn.addEventListener("click", function () {
  rejectedCards.classList.add("hidden");
  interviewCards.classList.add("hidden");
  totalCards.classList.remove("hidden");
});

rejectedToogle.addEventListener("click", function () {
  interviewCards.classList.add("hidden");
  totalCards.classList.add("hidden");
  rejectedCards.classList.remove("hidden");
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-trash-can")) {
    const parent = event.target.closest(".job-cards");
    parent.remove();

    interviewList = interviewList.filter(function (card) {
      return card !== parent;
    });

    rejectedList = rejectedList.filter(function (card) {
      return card !== parent;
    });

    total.innerText = totalCards.children.length;
    smallTotal.innerText = totalCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
  }
});
