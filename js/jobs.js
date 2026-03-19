const defaultJobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Kochi",
        salary: "₹30,000"
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Code Labs",
        location: "Bangalore",
        salary: "₹40,000"
    }
];

if (!localStorage.getItem("jobs")) {
    localStorage.setItem("jobs", JSON.stringify(defaultJobs));
}

const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs(jobList) {
    const jobContainer = document.getElementById("job-list");
    jobContainer.innerHTML = "";

    jobList.forEach(job => {
        jobContainer.innerHTML += `
      <div class="card p-3 mb-3">
        <h5>${job.title}</h5>
        <p>${job.company} - ${job.location}</p>
        <p>${job.salary}</p>
        <a href="job-details.html?id=${job.id}" class="btn btn-primary">View</a>
      </div>
    `;
    });
}

displayJobs(jobs);

function filterJobs() {
    const value = document.getElementById("search").value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value) ||
        job.location.toLowerCase().includes(value)
    );

    displayJobs(filtered);
}