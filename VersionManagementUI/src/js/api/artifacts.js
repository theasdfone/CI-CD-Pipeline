const artifact = {
    fetchBuildArtifacts() {
        return fetch("/buildartifact/get")
        .then(response => {
            return response.json();
        }).catch((err) => {
            throw err;
        });
    },

    fetchBuildArtifactsById(id) {
        return fetch("/buildartifact/get/" + id)
        .then(response => {
            return response.json();
        }).catch((err) => {
            throw err;
        });
    },

    updateBuildArtifact(buildArtifact) {
        const requestHeader = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(buildArtifact)
        }

        fetch("/buildartifact/update", requestHeader).then((res) => {
            return res.json();
        }).catch((err) => {
            throw err;
        });;
    },

    addBuildArtifact(buildArtifact) {
        const requestHeader = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(buildArtifact)
        }

        return fetch("/buildartifact/add", requestHeader).then((res) => {
            return res.json();
        }).catch((err) => {
            throw err;
        });
    },

    deleteBuildArtifact(id) {
        const requestHeader = {
            method: "DELETE",
        }

        fetch("/buildartifact/delete/" + id, requestHeader);
    }
}

export default artifact;