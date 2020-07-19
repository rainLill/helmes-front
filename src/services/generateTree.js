function generateTree(callback) {
    fetch('http://localhost:8080/sector', {})
        .then(response => response.json())
        .then(data => createTree(data, callback));
}

function createTree(sectorData, callback) {
    let tree = [];

    sectorData.forEach(item => {
        let depth = 0;
        if (item.parentId === null) {
            tree.push({
                id: item.id,
                sector: item.sector,
                parentId: item.parentId,
                depth: depth
            })

            let children = findChildren(sectorData, item.id, depth+1);

            children.forEach(child => {
                tree.push(child);
            });

        }
    })
    callback(tree)
}

function findChildren(sectorData, parentId, depth) {
    let result = [];
    sectorData.forEach(item => {
        if (item.parentId === parentId) {
            let children = findChildren(sectorData, item.id, depth+1);

            result.push({
                id: item.id,
                sector: item.sector,
                parentId: item.parentId,
                depth: depth
            })

            children.forEach(child =>{
                result.push(child)
            });
        }
    })
    return result;
}

export default generateTree;