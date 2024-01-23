using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using VersionManagementAPI.Models;
using VersionManagementAPI.Repositories.Interface;

namespace VersionManagementAPI.Repositories
{
    public class BuildArtifactRepository : IBuildArtifactRepository
    {
        private readonly ApplicationDbContext _context;

        public BuildArtifactRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<BuildArtifact> GetBuildArtifacts()
        {
            return _context.build_artifact;
        }

        public BuildArtifact GetBuildArtifactById(int id)
        {
            return _context.build_artifact.SingleOrDefault(e => e.Id == id);
        }

        public BuildArtifact CreateBuildArtifact(BuildArtifact buildArtifact)
        {
            _context.build_artifact.Add(buildArtifact);
            _context.SaveChanges();

            return buildArtifact;
        }

        public BuildArtifact UpdateBuildArtifact(BuildArtifact buildArtifact)
        {
            _context.build_artifact.Entry(buildArtifact).State = EntityState.Modified;
            _context.SaveChanges();

            return buildArtifact;
        }

        public HttpResponseMessage DeleteBuildArtifact(int id)
        {
            BuildArtifact buildArtifact = new BuildArtifact() { Id = id };

            _context.build_artifact.Attach(buildArtifact);
            _context.build_artifact.Remove(buildArtifact);
            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
