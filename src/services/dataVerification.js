function dataVerification(data) {
    let nameOk;
    let activeSectorsOk;
    let termsOk;

    if (data.firstName) {
        nameOk = true
    } else {
        nameOk = false
        alert('Please enter name.')
    }

    if (data.activeSectors) {
        activeSectorsOk = true
    } else {
        activeSectorsOk = false
        alert('Please select sectors you are involved.')
    }

    if (data.terms) {
        termsOk = true
    } else {
        termsOk = false
        alert('Please agree with the terms.')
    }

    if (nameOk && activeSectorsOk && termsOk) {
        return true;
    }

    return false;
}

export default dataVerification;