import {useEffect, useState} from 'react';
import artifact from "../api/artifacts"

export default function AddModal(props) {
    const [buildArtifact, setBuildArtifact] = useState({
        name: "",
        tags: "",
        buildVersion: ""
    });

    const addBuildArtifact = (e) => {
        e.preventDefault();

        artifact.addBuildArtifact(buildArtifact).then((res) => {
            props.addArtifact(res);
        });
    }

    return(
        <div>
            <div className="add-form">
                <form>
                    <div className="form-group">
                        <label>Server</label>
                        <input type="text" className="form-control" onChange={(e) => setBuildArtifact({...buildArtifact, name: e.target.value})} value={buildArtifact.name}/>
                    </div>
                    <div className="form-group">
                        <label>Tags</label>
                        <input type="text" className="form-control" onChange={(e) => setBuildArtifact({...buildArtifact, tags: e.target.value})} value={buildArtifact.tags}/>
                    </div>
                    <div className="form-group">
                        <label>Build Number</label>
                        <input type="text" className="form-control" onChange={(e) => setBuildArtifact({...buildArtifact, buildVersion: e.target.value})} value={buildArtifact.buildVersion}/>
                    </div>

                    <button type="submit" className="btn btn-md btn-success" onClick={addBuildArtifact}>Add</button>
                    <button className="btn btn-md btn-danger delete-button" onClick={props.close}>Close</button>
                </form>
            </div>
        </div>
    )
}