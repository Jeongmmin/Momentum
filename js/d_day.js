const clockTitle = document.querySelector(".js-clock");
const getDate = document.querySelector("#day__input")
const DdayTitle = document.querySelector("#Dday__title")

// ms 변환
const SEC = 1000;
const MIN = 1000 * 60;
const HOUR = 1000 * 60 * 60;
const DAY = 1000 * 60 * 60 * 24;

function getClock() {
    const now = new Date();
    const DDay = new Date(getDate.value);
    const timeDiff = DDay.getTime() - now.getTime();


    const day = String(Math.floor(timeDiff / DAY + 1)).padStart(3, "0");
    const hours = String(Math.floor((timeDiff / HOUR) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((timeDiff / MIN) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(timeDiff / SEC) % 60).padStart(2, "0");
    clockTitle.innerText = `D - ${day}`;
}

getDate.addEventListener("input", getClock )
