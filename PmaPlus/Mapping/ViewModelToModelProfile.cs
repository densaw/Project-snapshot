﻿using AutoMapper;
using PmaPlus.Model.Models;
using PmaPlus.Model.ViewModels;
using PmaPlus.Model.ViewModels.Curriculum;
using PmaPlus.Model.ViewModels.Nutrition;
using PmaPlus.Model.ViewModels.Physio;
using PmaPlus.Model.ViewModels.Skill;

namespace PmaPlus.Mapping
{
    class ViewModelToModelProfile : Profile
    {
        public override string ProfileName
        {
            get { return "ViewModelToModelProfile"; }
        }

        protected override void Configure()
        {
            Mapper.CreateMap<CurriculumTypeViewModel, CurriculumType>();
            Mapper.CreateMap<SkillLevelViewModel, SkillLevel>();
            Mapper.CreateMap<SkillVideoViewModel, SkillVideo>();

            Mapper.CreateMap<PhysioBodyPartViewModel, BodyPart>();

            Mapper.CreateMap<PhysioBodyPartViewModel, PhysiotherapyExercise>();

            Mapper.CreateMap<PhysiotherapyExerciseViewModel, PhysiotherapyExercise>();

            Mapper.CreateMap<NutritionFoodTypeViewModel, NutritionFoodType>();

            Mapper.CreateMap<NutritionAlternativeViewModel,NutritionAlternative>();

            Mapper.CreateMap<NutritionRecipeViewModel, NutritionRecipe>();

        }
    }
}
