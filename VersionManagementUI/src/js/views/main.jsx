import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from "../../components/nav";
import artifact from "../api/artifacts";
import AddModal from "../../components/addmodal";

import '../../css/main.css';

export default function Main() {
    const [buildArtifactList, setBuildArtifactList] = useState([]);
    const [openAddModule, setOpenAddModule] = useState(false);

    useEffect(() => {
        async function getBuildArtifactList() {
            const result = await artifact.fetchBuildArtifacts();

            setBuildArtifactList(result);
        }

        getBuildArtifactList();
    }, []);

    function handleOpenAddModule() {
        setOpenAddModule(true);
    }

    function handleCloseAddModule() {
        setOpenAddModule(false);
    }

    function addArtifactToList(buildArtifact) {
        setBuildArtifactList([...buildArtifactList, buildArtifact]);
        setOpenAddModule(false);
    }

    async function deleteBuildArtifact(id) {
        setBuildArtifactList(buildArtifactList.filter((artifact) => artifact.id !== id));

        await artifact.deleteBuildArtifact(id);
    }

    return (
        <div>
            <Nav />
            <div className="grid-page">
                <div className="center-table table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Server</th>
                                <th scope="col">Tags</th>
                                <th scope="col">Build Number</th>
                                <th scope="col">
                                    <button type='button' className="btn btn-sm btn-primary add-button" onClick={handleOpenAddModule}>
                                        <i className="bi bi-cloud-plus"></i>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buildArtifactList.map(artifact => {
                                    return(
                                        <tr>
                                            <td scope="col">{artifact.name}</td>
                                            <td scope="col">{artifact.tags}</td>
                                            <td scope="col">{artifact.buildVersion}</td>
                                            <td scope="col" className="edit-delete">
                                                <Link to={{pathname: `/edit/${artifact.id}` }}>Edit</Link>
                                                <button onClick={(e) => {deleteBuildArtifact(artifact.id)}} type='button' className="btn btn-sm delete-button">
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {openAddModule ? <AddModal close={handleCloseAddModule} addArtifact={addArtifactToList} /> : null}

        </div>
    );
}