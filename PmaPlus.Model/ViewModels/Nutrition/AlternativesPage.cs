﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PmaPlus.Model.ViewModels.Nutrition
{
    public class AlternativesPage : Page
    {
        public IEnumerable<NutritionAlternativeTableViewModel> Items { get; set; }
    }
}
