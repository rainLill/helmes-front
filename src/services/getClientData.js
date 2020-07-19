function getClientData(callback) {
        fetch('http://localhost:8080/client', {})
            .then(response => response.json())
            .then(data => callback(data));
}

export default getClientData;