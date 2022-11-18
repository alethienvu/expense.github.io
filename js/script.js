import data from "../data.json" assert { type: "json" };

const chart = document.getElementById("chart");
function getMaxDataPoint(data) {
  return Math.round(Math.max(...data.map((d) => d.amount)));
}

for (let i = 0; i < data.length; i++) {
  const element = document.createElement("li");
  element.setAttribute(
    "style",
    `grid-column: ${i + 1}; grid-row: ${
      getMaxDataPoint(data) - Math.round(data[i].amount) + 1
    } / span ${Math.round(data[i].amount)};`
  );
  element.setAttribute("id", `li-${i}`);

  const span = document.createElement("span");
  span.setAttribute("class", "day");
  const text = document.createTextNode(`${data[i].day}`);
  span.appendChild(text);
  element.appendChild(span);

  const amount = document.createElement("div");
  amount.setAttribute("class", "amount");
  const amountNumber = document.createTextNode(`$${data[i].amount}`);
  amount.appendChild(amountNumber)
  element.appendChild(amount)

  chart.appendChild(element);
}
