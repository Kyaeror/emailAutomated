function emailCreation(e){
    const lastName = document.getElementById("lastName").value
    const Gender = document.getElementById("Gender").value
    const doctorLastName = document.getElementById("doctorLastName").value
    const doctorGender = document.getElementById("doctorGender").value
    const copyPaste = document.getElementById("copyPaste")

    e.preventDefault()

    if (Gender == "female") {
        var femaleMale = "Ms." 
    }else if(Gender == "male"){
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
        Good Afternoon ${femaleMale} ${lastName},<br> <br>

        We've gone ahead and emailed you a DocuSign link to an electronic copy of your portion of the application.  Please review the application and once reviewed, if you could sign and date the application and submit it back over to us, we'd greatly appreciate it.<br> <br>

        The patient assistance program will also require the following documents: 
        <ol type = "1">
            <li>A copy of the front and back portion of your prescription insurance card </li>
            <li>A copy of your most recent tax return (W2 or 1040), or your social security benefits letter </li>
        </ol>

        If you could respond to this email and include attachments with copies of these documents, we'd greatly appreciate it.  Once we receive your copy of the application back via DocuSign and the required documents, we'll be sure to combine it with Dr ${doctorLastName} portion of the application and get it submitted to the program for determination.  Once submitted, we'll be sure to follow the status of your application and be sure to update yourself as well as the office.  Please let us know if you have any questions or anything additionally we can assist with.<br> <br>

        Thanks!
        `

}

submitButton.onclick = emailCreation