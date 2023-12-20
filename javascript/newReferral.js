function emailCreation (e){
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const Gender = document.getElementById("Gender").value
    const Medication = document.getElementById("Medication").value
    const Cost = document.getElementById("Cost").value
    const doctorFirstName = document.getElementById("doctorFirstName").value
    const doctorGender = document.getElementById("doctorGender").value
    const copyPaste = document.getElementById("copyPaste")
    const submitButton = document.getElementById("submitButton")

    e.preventDefault()
    
 
    if (Gender == "female") {
        var herHis = "her"
        var femaleMale = "Ms." 
    }else if(Gender == "male"){
        var herHis = "his"
        var femaleMale = "Mr."
    }

    if (doctorGender == "female") {
        var doctorCapitalHeShe = "She"
        var doctorHeShe = "she" 
    }else if(doctorGender == "male"){
        var doctorCapitalHeShe = "He"
        var doctorHeShe = "he"
    }

    copyPaste.innerHTML =
        `
        Hey ${doctorFirstName},<br> <br>

        Thank you for sending the ${Medication} RX for ${firstName} ${lastName}.  The ${Medication} has been approved and we've applied a copay card to reduce the cost to a $ ${Cost} copay.  We'll reach out to notify the patient and will work on getting ${herHis} setup with the medication.<br><br>
        
        Thanks!
        
        `
} 

submitButton.onclick = emailCreation