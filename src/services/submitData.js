function submitData(method, csrfToken, data) {
    fetch('http://localhost:8080/client', {
        method: method,
        headers: {
            'X-XSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json',
            'credentials': 'include'
        },
        body: JSON.stringify(data)
    })
    window.location.reload(false);

}

export default submitData;