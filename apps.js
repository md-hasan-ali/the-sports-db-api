document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => getData(data.teams))
})

const getData = teams => {
    teams.forEach(team => {
        console.log(team)
        const teamContainer = document.getElementById('team-container');
        teamContainer.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${team.strTeam}</h5>
                <p class="card-text"></p>
            </div>
        </div>
        `;
        teamContainer.appendChild(div);
    })
}