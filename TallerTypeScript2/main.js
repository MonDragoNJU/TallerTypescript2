import { data } from "./data.js";

const tableBody = document.getElementById('series-table-body');
const seriesDetailContainer = document.getElementById('series-detail-container');

if (tableBody && seriesDetailContainer) {

    let totalSeasons = 0;

    data.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;

        row.addEventListener('click', () => {
            showSeriesDetail(serie);
        });

    });

    const averageSeasons = totalSeasons / data.length;

    const summaryRow = document.createElement('tr');
    summaryRow.innerHTML = `
        <td colspan="3">Average Seasons:</td>
        <td>${averageSeasons}</td>
    `;
    tableBody.appendChild(summaryRow);

    function showSeriesDetail(serie) {
        seriesDetailContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.linkPage}">${serie.linkPage}</a>
                </div>
            </div>
        `;
    }
}



