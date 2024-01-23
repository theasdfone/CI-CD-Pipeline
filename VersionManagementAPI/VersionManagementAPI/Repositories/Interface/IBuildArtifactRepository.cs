using Microsoft.AspNetCore.Mvc;
using VersionManagementAPI.Models;

namespace VersionManagementAPI.Repositories.Interface
{
    public interface IBuildArtifactRepository
    {
        public IEnumerable<BuildArtifact> GetBuildArtifacts();
        public BuildArtifact GetBuildArtifactById(int id);
        public BuildArtifact CreateBuildArtifact(BuildArtifact buildArtifact);
        public BuildArtifact UpdateBuildArtifact(BuildArtifact buildArtifact);
        public HttpResponseMessage DeleteBuildArtifact(int id);
    }
}
