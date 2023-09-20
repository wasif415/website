
//question 2

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

    const roundedAge = Math.floor(ageInYears);

    resultElement.innerHTML = `Your age is approximately ${roundedAge} years.`;
}

// question 3

function calculateDayOfWeek() {
    const dateInput = document.getElementById('dateInput').value;
    const resultElement = document.getElementById('result');

    if (dateInput) {
        const date = new Date(dateInput);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[date.getDay()];

        resultElement.innerHTML = `The day of the week for ${date.toDateString()} is ${dayOfWeek}.`;
    } else {
        resultElement.innerHTML = 'Please enter a valid date.';
    }
}


        // question 4

function calculateDaysUntil() {
    const futureDateInput = document.getElementById('futureDateInput').value;
    const resultElement = document.getElementById('result');

    if (futureDateInput) {
        const futureDate = new Date(futureDateInput);
        const currentDate = new Date();
        const timeDifference = futureDate - currentDate;
        const daysUntil = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysUntil >= 0) {
            resultElement.innerHTML = `There are ${daysUntil} days until ${futureDate.toDateString()}.`;
        } else {
            resultElement.innerHTML = 'The specified date is in the past.';
        }
    } else {
        resultElement.innerHTML = 'Please enter a valid future date.';
    }
}    

               // question 5

function checkWeekend() {
    const dateInput = document.getElementById('dateInput').value;
    const resultElement = document.getElementById('result');

    if (dateInput) {
        const date = new Date(dateInput);
        const dayOfWeek = date.getDay();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            resultElement.innerHTML = `${date.toDateString()} falls on a weekend (Saturday or Sunday).`;
        } else {
            resultElement.innerHTML = `${date.toDateString()} does not fall on a weekend.`;
        }
    } else {
        resultElement.innerHTML = 'Please enter a valid date.';
    }
}


         // question 6

let countdownInterval;

function startCountdown() {
    const futureDateInput = document.getElementById('futureDateInput').valueAsNumber;
    const countdownElement = document.getElementById('countdown');
    
    if (isNaN(futureDateInput)) {
        alert('Please enter a valid future date and time.');
        return;
    }
    
    clearInterval(countdownInterval);

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = futureDateInput - currentDate;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Countdown expired!';
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}



      // question 7

      function checkSeason() {
        const dateInput = document.getElementById('dateInput').value;
        const resultElement = document.getElementById('result');

        if (dateInput) {
            const date = new Date(dateInput);
            const month = date.getMonth() + 1; // Month is 0-based, so we add 1 to get the actual month.

            let season;

            switch (month) {
                case 12:
                case 1:
                case 2:
                    season = 'Winter';
                    break;
                case 3:
                case 4:
                case 5:
                    season = 'Spring';
                    break;
                case 6:
                case 7:
                case 8:
                    season = 'Summer';
                    break;
                case 9:
                case 10:
                case 11:
                    season = 'Fall';
                    break;
                default:
                    season = 'Invalid Date';
            }

            resultElement.innerHTML = `The season for ${date.toDateString()} is ${season}.`;
        } else {
            resultElement.innerHTML = 'Please enter a valid date.';
        }
    }

         // question 8

    function calculateAge() {
        const birthdateInput = document.getElementById('birthdateInput').valueAsDate;
        const futureDateInput = document.getElementById('futureDateInput').valueAsDate;
        const resultElement = document.getElementById('result');

        if (birthdateInput && futureDateInput) {
            const birthdate = new Date(birthdateInput);
            const futureDate = new Date(futureDateInput);

            if (birthdate > futureDate) {
                resultElement.innerHTML = 'Invalid input: Birthdate cannot be after the future date.';
            } else {
                const ageInMilliseconds = futureDate - birthdate;
                const ageInSeconds = ageInMilliseconds / 1000;
                const ageInMinutes = ageInSeconds / 60;
                const ageInHours = ageInMinutes / 60;
                const ageInDays = ageInHours / 24;

                resultElement.innerHTML = `Your age on ${futureDate.toDateString()} will be approximately:<br>`
                    + `In days: ${Math.floor(ageInDays)} days<br>`
                    + `In hours: ${Math.floor(ageInHours)} hours<br>`
                    + `In minutes: ${Math.floor(ageInMinutes)} minutes<br>`
                    + `In seconds: ${Math.floor(ageInSeconds)} seconds`;
            }
        } else {
            resultElement.innerHTML = 'Please enter valid birthdate and future date.';
        }
    }
  
                     // question 9

    function calculateDaysBetween() {
        const startDateInput = document.getElementById('startDateInput').valueAsDate;
        const endDateInput = document.getElementById('endDateInput').valueAsDate;
        const resultElement = document.getElementById('result');

        if (startDateInput && endDateInput) {
            const startDate = new Date(startDateInput);
            const endDate = new Date(endDateInput);

            if (startDate > endDate) {
                resultElement.innerHTML = 'Invalid input: Start date cannot be after the end date.';
            } else {
                const timeDifference = endDate - startDate;
                const daysBetween = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                resultElement.innerHTML = `The number of days between ${startDate.toDateString()} and ${endDate.toDateString()} is ${daysBetween} days.`;
            }
        } else {
            resultElement.innerHTML = 'Please enter valid start and end dates.';
        }
    }