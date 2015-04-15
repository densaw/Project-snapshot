﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PmaPlus.Model;

namespace PmaPlus.Data.Repository
{
    class MatchRepository : RepositoryBase<Match>
    {
        public MatchRepository(IDatabaseFactory databaseFactory) : base(databaseFactory)
        {
        }
    }
}
