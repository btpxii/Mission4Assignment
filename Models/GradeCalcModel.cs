using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }
        public int Group_Projects { get; set; }
        public int Quizzes { get; set; }
        public int Midterm { get; set; }
        public int Final { get; set; }
        public int Intex { get; set; }

    }
}
