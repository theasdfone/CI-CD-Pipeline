using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Asn1.X509;
using VersionManagementAPI.Models;

namespace VersionManagementAPI.Services.Interface
{
    public interface IBuildArtifactInterface
    {
        public IEnumerable<BuildArtifact> GetBuildArtifacts();
        public BuildArtifact GetBuildArtifactById(int id);
        public BuildArtifact CreateBuildArtifact(BuildArtifact buildArtifact);
        public BuildArtifact UpdateBuildArtifact(BuildArtifact buildArtifact);
        public HttpResponseMessage DeleteBuildArtifact(int id);
    }
}
