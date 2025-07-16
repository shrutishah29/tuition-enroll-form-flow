import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, MapPin, AlertTriangle, GraduationCap, Calendar, School, Heart } from 'lucide-react';
import { FormData } from '../AdmissionForm';

interface ReviewStepProps {
  formData: FormData;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  const { student, parent, contact } = formData;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Review Your Application</h3>
        <p className="text-muted-foreground">Please review all information before submitting your application</p>
      </div>

      {/* Student Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <GraduationCap className="h-5 w-5 text-primary" />
            Student Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{student.firstName} {student.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p className="font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {student.dateOfBirth || 'Not provided'}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Grade/Class</p>
              <p className="font-medium">{student.grade || 'Not selected'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Previous School</p>
              <p className="font-medium flex items-center gap-1">
                <School className="h-4 w-4" />
                {student.previousSchool || 'Not provided'}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Subjects of Interest</p>
            <div className="flex flex-wrap gap-2">
              {student.subjects.length > 0 ? (
                student.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-primary/10 text-primary">
                    {subject}
                  </Badge>
                ))
              ) : (
                <p className="text-muted-foreground">No subjects selected</p>
              )}
            </div>
          </div>

          {student.medicalConditions && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Medical Conditions/Requirements</p>
              <p className="font-medium flex items-start gap-1">
                <Heart className="h-4 w-4 mt-0.5 text-accent" />
                {student.medicalConditions}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Parent Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            Parent/Guardian Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Father's Info */}
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <User className="h-4 w-4" />
              Father's Information
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{parent.fatherName || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Occupation</p>
                <p className="font-medium">{parent.fatherOccupation || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{parent.fatherPhone || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{parent.fatherEmail || 'Not provided'}</p>
              </div>
            </div>
          </div>

          {/* Mother's Info */}
          <div className="border-l-4 border-accent pl-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <User className="h-4 w-4" />
              Mother's Information
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{parent.motherName || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Occupation</p>
                <p className="font-medium">{parent.motherOccupation || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{parent.motherPhone || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{parent.motherEmail || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            Contact & Emergency Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Address</p>
            <p className="font-medium">{contact.address || 'Not provided'}</p>
            <p className="font-medium">{contact.city && contact.postalCode ? `${contact.city}, ${contact.postalCode}` : 'City and postal code not provided'}</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-accent">
              <AlertTriangle className="h-4 w-4" />
              Emergency Contact
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{contact.emergencyContactName || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{contact.emergencyContactPhone || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Relationship</p>
                <p className="font-medium">{contact.emergencyContactRelation || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
        <h4 className="font-semibold mb-2">Next Steps</h4>
        <ul className="space-y-1 text-sm">
          <li>• We'll review your application within 2-3 business days</li>
          <li>• You'll receive a confirmation email shortly</li>
          <li>• Our team will contact you to schedule an assessment</li>
          <li>• Classes begin based on availability and assessment results</li>
        </ul>
      </div>
    </div>
  );
};