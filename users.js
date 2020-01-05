fetch(
  "https://gorest.co.in/public-api/users?access-token=id1Y9DMgGCVB72reFnsn57CTPUIXCBVdz6a_"
)
  .then(response => response.json())
  .then(data => {
    console.log(data.result);
    let users = data.result;
    let output = '<div class="row">';
    users.map(user => {
      output += `
                <div class="column">
                <div class="card">
              <img src=${user._links.avatar.href} class="center">
                  <div class="container">
                    <h2 class="center">${user.first_name} ${user.last_name}</h2>
                 <i class='fas fa-home' style='font-size:15px'>:${user.address}</i><hr>
                 <i class="fa fa-phone" style="font-size:15px">:${user.phone}</i><hr>
                 <i class="fa fa-envelope" style="font-size:15px">:${user.email}</i><hr>
              </div>
              </div>
              </div>
                `;
    });
    output += "</div>";
    document.getElementById("response").innerHTML = output;
  })
  .catch(error => console.error(error));
