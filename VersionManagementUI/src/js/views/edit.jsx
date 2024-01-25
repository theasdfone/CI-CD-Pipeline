import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom/dist';

import Nav from "../../components/nav";
import artifact from "../api/artifacts";

import '../../css/edit.css';

export default function Edit() {
    const [buildArtifact, setBuildArtifact] = useState({
        name: "",
        tags: "",
        buildVersion: ""
    });

    let state = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        async function getBuildArtifactById() {
            let result = await artifact.fetchBuildArtifactsById(state.id);
            setBuildArtifact(result);
        }

        getBuildArtifactById();
    }, []);

    async function updateBuildArtifact() {
        await artifact.updateBuildArtifact(buildArtifact);
        navigate("/");
    }

    async function deleteBuildArtifact() {
        await artifact.deleteBuildArtifact(buildArtifact.id);
        navigate("/");
    }

    return(
        <div>
            <Nav />
            <div className="edit-page">
                <div className="edit-form">
                    <h3 className="header">Server: {buildArtifact.name}</h3>
                    <div className="edit-fields">
                        <h3>Tags</h3>
                        <input className="input" type="text" size="50" onChange={(e) => setBuildArtifact({...buildArtifact, tags: e.target.value})} value={buildArtifact.tags}/>
                    </div>
                    <div className="edit-fields">
                        <h3>Build Version</h3>
                        <input className="input" type="text" size="50" onChange={(e) => setBuildArtifact({...buildArtifact, buildVersion: e.target.value})} value={buildArtifact.buildVersion}/>
                    </div>
                    <div className="edit-button">
                        <button className="btn btn-md btn-success" onClick={updateBuildArtifact}>Update</button>
                        <button className="btn btn-md btn-danger delete-button" onClick={deleteBuildArtifact}> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}