function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      location: document.getElementById("location").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_q0ziy1r";
    const templateID = "template_3i0vuek";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("location").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }