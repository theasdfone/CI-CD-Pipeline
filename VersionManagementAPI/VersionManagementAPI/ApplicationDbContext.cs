using Microsoft.EntityFrameworkCore;
using VersionManagementAPI.Models;

namespace VersionManagementAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<BuildArtifact> build_artifact { get; set; }
    }
}
