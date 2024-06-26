let form = document.getElementById("form");
  const submitBtn = document.getElementById("submit_btn");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedConnectors = [{
        url: ":8883/users",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("lucianalopes:admin"),
        },
      }];
  
    await formHandler(e, form, submitBtn, selectedConnectors);
  });
  