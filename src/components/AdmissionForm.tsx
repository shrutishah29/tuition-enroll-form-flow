import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { StudentInfoStep } from './admission-steps/StudentInfoStep';
import { ParentInfoStep } from './admission-steps/ParentInfoStep';
import { ContactInfoStep } from './admission-steps/ContactInfoStep';
import { ReviewStep } from './admission-steps/ReviewStep';

export interface StudentData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  grade: string;
  subjects: string[];
  previousSchool: string;
  medicalConditions: string;
}

export interface ParentData {
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  fatherEmail: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
  motherEmail: string;
}

export interface ContactData {
  address: string;
  city: string;
  postalCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
}

export interface FormData {
  student: StudentData;
  parent: ParentData;
  contact: ContactData;
}

const steps = [
  { id: 1, title: 'Student Information', description: 'Basic details about the student' },
  { id: 2, title: 'Parent Information', description: 'Guardian contact details' },
  { id: 3, title: 'Contact & Emergency', description: 'Address and emergency contacts' },
  { id: 4, title: 'Review & Submit', description: 'Verify all information' },
];

export const AdmissionForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    student: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: '',
      subjects: [],
      previousSchool: '',
      medicalConditions: '',
    },
    parent: {
      fatherName: '',
      fatherOccupation: '',
      fatherPhone: '',
      fatherEmail: '',
      motherName: '',
      motherOccupation: '',
      motherPhone: '',
      motherEmail: '',
    },
    contact: {
      address: '',
      city: '',
      postalCode: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      emergencyContactRelation: '',
    },
  });

  const updateFormData = (section: keyof FormData, data: Partial<FormData[typeof section]>) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and contact you within 2-3 business days.",
    });
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StudentInfoStep data={formData.student} updateData={(data) => updateFormData('student', data)} />;
      case 2:
        return <ParentInfoStep data={formData.parent} updateData={(data) => updateFormData('parent', data)} />;
      case 3:
        return <ContactInfoStep data={formData.contact} updateData={(data) => updateFormData('contact', data)} />;
      case 4:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  const getStepIcon = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      return <CheckCircle className="h-6 w-6 text-step-completed" />;
    } else if (stepNumber === currentStep) {
      return <div className="h-6 w-6 rounded-full bg-step-active border-2 border-step-active" />;
    } else {
      return <Circle className="h-6 w-6 text-step-pending" />;
    }
  };

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Tuition Admission Form</h1>
          </div>
          <p className="text-muted-foreground">Complete your application in just a few steps</p>
        </div>

        {/* Progress Section */}
        <Card className="mb-8 shadow-form animate-fade-in">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-foreground">
                  Step {currentStep} of {steps.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div className="flex items-center w-full">
                    <div className="flex flex-col items-center">
                      {getStepIcon(step.id)}
                      <div className="mt-2 text-center">
                        <div className="text-sm font-medium text-foreground">{step.title}</div>
                        <div className="text-xs text-muted-foreground hidden md:block">{step.description}</div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-px bg-border mx-4 mt-3" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card className="shadow-form animate-slide-in">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 animate-fade-in">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-gradient-accent hover:opacity-90"
            >
              Submit Application
              <CheckCircle className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};