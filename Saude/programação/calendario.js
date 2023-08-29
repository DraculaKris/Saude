document.addEventListener("DOMContentLoaded", function () {
    const eventDateInput = document.getElementById("eventDate");
    const eventDescriptionInput = document.getElementById("eventDescription");
    const addEventBtn = document.getElementById("addEventBtn");
    const eventList = document.getElementById("eventList");
    const completedCountSpan = document.getElementById("completedCount");
    const progressBar = document.getElementById("progressBar");

    let completedCount = 0;

    addEventBtn.addEventListener("click", function () {
        const date = eventDateInput.value;
        const description = eventDescriptionInput.value;

        if (date && description) {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.innerHTML = `
                <input type="checkbox" class="event-checkbox">
                <span>${formatDate(date)} - ${description}</span>
            `;
            eventList.appendChild(eventDiv);

            eventDateInput.value = "";
            eventDescriptionInput.value = "";
        }
    });

    eventList.addEventListener("change", function (event) {
        if (event.target.classList.contains("event-checkbox")) {
            const checkbox = event.target;
            const eventSpan = checkbox.nextElementSibling;
            if (checkbox.checked) {
                completedCount++;
                eventSpan.innerHTML += '<span class="completed-symbol">⭐</span>';
            } else {
                completedCount--;
                eventSpan.querySelector('.completed-symbol').remove();
            }
            updateCompletedCount();
            updateProgressBar();
        }
    });

    eventList.addEventListener("click", function (event) {
        if (event.target.classList.contains("event")) {
            const eventDiv = event.target;
            const checkbox = eventDiv.querySelector(".event-checkbox");

            if (checkbox.checked) {
                completedCount--;
                updateCompletedCount();
            }

            eventDiv.remove();
            updateProgressBar();
        }
    });

    function formatDate(date) {
        const parts = date.split("-");
        const day = parts[2];
        const month = parts[1];
        const year = parts[0];
        return `${day}/${month}/${year}`;
    }

    function updateCompletedCount() {
        completedCountSpan.textContent = completedCount;
    }

    
});