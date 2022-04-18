const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

const checkReservation = function()
{
 const Input = document.getElementById("ReservationName")
 const nameInput = Input.value
 const header = document.createElement("h1")
 let check = 0


 for(let i=0;i< Object.keys(reservations).length;i++)
 {
    if(nameInput === Object.keys(reservations)[i])
    {
        check = 1
        if(reservations[nameInput].claimed === false)
        {
            
            header.innerHTML = "Welcome" + nameInput 

        }
        else
        {
            header.innerHTML = "hmm someone already claimed"

        }


    }

 }
 if(check === 0)
 {
     header.innerHTML = "You have no reservation"

 }

 header.style.color = "#c0392b"
 header.style.fontFamily = "Helvetica"
 document.body.appendChild(header)



}

const btn = document.getElementById("myBtn");
btn.addEventListener("click", checkReservation);

  