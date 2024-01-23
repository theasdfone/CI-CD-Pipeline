using Microsoft.AspNetCore.Mvc;
using VersionManagementAPI.Models;
using VersionManagementAPI.Services.Interface;

namespace VersionManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BuildArtifactController : ControllerBase
    {
        private readonly IBuildArtifactInterface _buildArtifactInterface;

        public BuildArtifactController(IBuildArtifactInterface buildArtifactInterface)
        {
            _buildArtifactInterface = buildArtifactInterface;
        }

        [HttpGet("get")]
        public IEnumerable<BuildArtifact> Get()
        {
            return _buildArtifactInterface.GetBuildArtifacts();
        }

        [HttpGet("get/{id}")]
        public BuildArtifact GetById(int id)
        {
            return _buildArtifactInterface.GetBuildArtifactById(id);
        }

        [HttpPost("add")]
        public BuildArtifact Create(BuildArtifact buildArtifact)
        {
            return _buildArtifactInterface.CreateBuildArtifact(buildArtifact);
        }

        [HttpPut("update")]
        public BuildArtifact Update(BuildArtifact buildArtifact)
        {
            return _buildArtifactInterface.UpdateBuildArtifact(buildArtifact);
        }

        [HttpDelete("delete/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            return _buildArtifactInterface.DeleteBuildArtifact(id);
        }
    }
}
