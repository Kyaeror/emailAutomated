//opulate the "name" field once selection has been selected
function doSomething (e){
    const lastName = document.getElementById("lastName").value
    const Gender = document.getElementById("Gender").value
    const Medication = document.getElementById("Medication").value
    const doctorLastName = document.getElementById("doctorLastName").value
    const doctorFirstName = document.getElementById("doctorFirstName").value
    const doctorGender = document.getElementById("doctorGender").value
    const copyPaste = document.getElementById("copyPaste")
    const submitButton = document.getElementById("submitButton")

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

    if (formSelection == "form1"){
        copyPaste.innerHTML =
        `
        Hey ${femaleMale} ${lastName}, <br><br>
    
        As we discussed over the phone, you should qualify to receive your ${Medication} free of charge through the manufacturer's patient assistance program. I've attached the application (mostly completed) as well as the invoice for your prescription(This is not a charge. but to show the affordability of the medication to the program). Please review the application and complete the following sections:
        <ol type = "1">
            <li>add allergies and other medications you take </li>
            <li>add the last 4 digits of your Social Security number </li>
            <li>sign and date </li>
        </ol>
        
        Once you've completed your section of the application, please make arrangements to take your application and supporting documents to Dr. ${doctorLastName} office. ${doctorCapitalHeShe} needs to sign and date. Once ${doctorHeShe}'s signed the application, please have someone in the office help you fax the following to the program:
        <ol type = "1">
            <li>your completed and signed application</li>
            <li>the front and back of your prescription insurance card</li>
            <li>the first page of your most recent tax return (showing line 11 - adjusted gross income)</li>
            <li>the invoice for your prescription (attached to this email)</li>
        </ol>
        
        Once your application has been faxed, please call the number listed on the first page of the application to check its status and to arrange for delivery of your refills once it's approved. If you have any questions, please let us know.
        <br><br>
        Thanks!
        `
    } else if (formSelection == "form2"){
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
} 

submitButton.onclick = doSomething