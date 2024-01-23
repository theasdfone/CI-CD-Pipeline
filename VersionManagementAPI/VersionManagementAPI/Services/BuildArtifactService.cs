using Microsoft.AspNetCore.Mvc;
using VersionManagementAPI.Models;
using VersionManagementAPI.Repositories.Interface;
using VersionManagementAPI.Services.Interface;

namespace VersionManagementAPI.Services
{
    public class BuildArtifactService : IBuildArtifactInterface
    {
        private readonly IBuildArtifactRepository _buildArtifactRepo;

        public BuildArtifactService(IBuildArtifactRepository buildArtifactRepo)
        {
            _buildArtifactRepo = buildArtifactRepo;
        }

        public IEnumerable<BuildArtifact> GetBuildArtifacts()
        {
            return _buildArtifactRepo.GetBuildArtifacts();
        }

        public BuildArtifact GetBuildArtifactById(int id)
        {
            return _buildArtifactRepo.GetBuildArtifactById(id);
        }

        public BuildArtifact CreateBuildArtifact(BuildArtifact buildArtifact)
        {
            return _buildArtifactRepo.CreateBuildArtifact(buildArtifact);
        }

        public BuildArtifact UpdateBuildArtifact(BuildArtifact buildArtifact)
        {
            return _buildArtifactRepo.UpdateBuildArtifact(buildArtifact);
        }

        public HttpResponseMessage DeleteBuildArtifact(int id)
        {
            return _buildArtifactRepo.DeleteBuildArtifact(id);
        }
    }
}
