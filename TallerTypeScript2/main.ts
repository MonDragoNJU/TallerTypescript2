import { Serie } from "./Serie.js";
import { data } from "./data.js";


const tableBody = document.getElementById('series-table-body');

if (tableBody) {

    let totalSeasons: number = 0;

    data.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });

    const averageSeasons = totalSeasons / data.length;

    const summaryRow = document.createElement('tr');
    summaryRow.innerHTML = `
        <td colspan="3">Average Seasons:</td>
        <td>${averageSeasons}</td>
    `;
    tableBody.appendChild(summaryRow);

}