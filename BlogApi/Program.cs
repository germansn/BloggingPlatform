using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace BlogApi 
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
/*Scaffold-DbContext "Server=tcp:germanserver.database.windows.net,1433;Database=blogDB;User ID=german;Password=%Test4876_;Encrypt=true;Connection Timeout=30;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models*/
/*Scaffold-DbContext "Server=tcp:germanserver.database.windows.net,1433;Database=blogDB;User ID=german;Password=%Test4876_;Encrypt=true;Connection Timeout=30;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models*/
