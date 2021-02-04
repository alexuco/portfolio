async function getComponents() {
  await fetch("./assets/header.html")
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.querySelector("header").innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });

  // await fetch("./assets/footer.html")
  //   .then(response => {
  //     return response.text();
  //   })
  //   .then(data => {
  //     let year = new Date().getFullYear();
  //     document.querySelector("footer").innerHTML = year + data;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
    let create = document.createElement("small");
    create.className = "copyright";
    create.innerText = "Copyright 2019 - " + new Date().getFullYear() + " @Alex Martin";
    document.querySelector("footer").appendChild(create);
    
}

getComponents();
