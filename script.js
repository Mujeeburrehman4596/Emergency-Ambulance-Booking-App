
        document.getElementById("bookingForm").addEventListener("submit", function(event){
            event.preventDefault();
            
            // Simulate ambulance booking process
            const confirmationMessage = document.getElementById("confirmationMessage");

            // Show confirmation message
            confirmationMessage.style.display = "block";
        });
    