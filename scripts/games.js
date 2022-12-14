async function fetchPoints() {
    let points_wrapper = document.querySelector('.pContainer');
    let load = document.querySelector('.load');
    let url = 'https://world-cup.codsfli.com/points.php';
    let data = await fetch(url);
    if (data.ok) {
        setTimeout(async() => {
                    load.remove();
                    let response = await data.json();
                    response.map((groups) => {
                                let sor = groups.teams.sort((a, b) => {
                                    return a.position - b.position;
                                });
                                points_wrapper.innerHTML += `
                <div class="pointsTable">
  <h1 class="groupHeading">${groups.group}</h1>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>MP</th>
        <th>L</th>
        <th>D</th>
        <th>W</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody>
      ${sor
        .map(
          (team) => `
      <tr>
        <td>
          <div class="info">
            <img
              src="${team.flag}"
              alt="${team.Team}"
              class="teamFlag"
            />
            <span>${team.flag
              .split('https://world-cup.codsfli.com/flag/')
              .join('')
              .split('.png')
              .join('')}</span>
          </div>
        </td>
        <td>${team.match_play}</td>
        <td>${team.loss}</td>
        <td>${team.draw}</td>
        <td>${team.win}</td>
        <td>${team.points}</td>
      </tr>
      `
        )
        .join('')}
    </tbody>
  </table>
</div>
                `;
      });
    }, 1000);
  }
}
fetchPoints();