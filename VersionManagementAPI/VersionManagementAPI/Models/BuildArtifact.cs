namespace VersionManagementAPI.Models
{
    public class BuildArtifact
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Tags { get; set; }

        public string BuildVersion { get; set; }
    }
}
