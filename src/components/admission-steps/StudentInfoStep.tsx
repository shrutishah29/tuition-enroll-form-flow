import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { StudentData } from '../AdmissionForm';

interface StudentInfoStepProps {
  data: StudentData;
  updateData: (data: Partial<StudentData>) => void;
}

const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'History',
  'Geography',
  'Computer Science',
  'Economics',
  'Accounting'
];

const grades = [
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12'
];

export const StudentInfoStep: React.FC<StudentInfoStepProps> = ({ data, updateData }) => {
  const handleSubjectChange = (subject: string, checked: boolean) => {
    const updatedSubjects = checked
      ? [...data.subjects, subject]
      : data.subjects.filter(s => s !== subject);
    updateData({ subjects: updatedSubjects });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
            placeholder="Enter first name"
            className="transition-all duration-200 focus:shadow-step"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => updateData({ lastName: e.target.value })}
            placeholder="Enter last name"
            className="transition-all duration-200 focus:shadow-step"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => updateData({ dateOfBirth: e.target.value })}
            className="transition-all duration-200 focus:shadow-step"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="grade">Grade/Class *</Label>
          <Select value={data.grade} onValueChange={(value) => updateData({ grade: value })}>
            <SelectTrigger className="transition-all duration-200 focus:shadow-step">
              <SelectValue placeholder="Select grade" />
            </SelectTrigger>
            <SelectContent>
              {grades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  {grade}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="previousSchool">Previous School</Label>
        <Input
          id="previousSchool"
          value={data.previousSchool}
          onChange={(e) => updateData({ previousSchool: e.target.value })}
          placeholder="Enter previous school name"
          className="transition-all duration-200 focus:shadow-step"
        />
      </div>

      <div className="space-y-3">
        <Label>Subjects of Interest *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {subjects.map((subject) => (
            <div key={subject} className="flex items-center space-x-2">
              <Checkbox
                id={subject}
                checked={data.subjects.includes(subject)}
                onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                className="transition-all duration-200"
              />
              <Label htmlFor={subject} className="text-sm cursor-pointer">
                {subject}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="medicalConditions">Medical Conditions or Special Requirements</Label>
        <Textarea
          id="medicalConditions"
          value={data.medicalConditions}
          onChange={(e) => updateData({ medicalConditions: e.target.value })}
          placeholder="Please mention any medical conditions, allergies, or special requirements..."
          className="min-h-[100px] transition-all duration-200 focus:shadow-step"
        />
      </div>
    </div>
  );
};