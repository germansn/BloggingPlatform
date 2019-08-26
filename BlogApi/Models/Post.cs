using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
    public partial class Post
    {
        public int IdPost { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdate { get; set; }
        public int IdUser { get; set; }
        public bool IsPublic { get; set; }
        public bool IdDraft { get; set; }

        public virtual User IdUserNavigation { get; set; }
    }
}
