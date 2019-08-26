using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
    public partial class User
    {
        public User()
        {
            Post = new HashSet<Post>();
        }

        public int IdUser { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime DateBirth { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Cellphone { get; set; }
        public int Gender { get; set; }

        public virtual ICollection<Post> Post { get; set; }
    }
}
