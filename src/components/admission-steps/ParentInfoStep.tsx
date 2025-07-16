import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Briefcase, Phone, Mail } from 'lucide-react';
import { ParentData } from '../AdmissionForm';

interface ParentInfoStepProps {
  data: ParentData;
  updateData: (data: Partial<ParentData>) => void;
}

export const ParentInfoStep: React.FC<ParentInfoStepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Father's Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="h-5 w-5 text-primary" />
            Father's Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fatherName">Full Name *</Label>
              <Input
                id="fatherName"
                value={data.fatherName}
                onChange={(e) => updateData({ fatherName: e.target.value })}
                placeholder="Enter father's full name"
                className="transition-all duration-200 focus:shadow-step"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fatherOccupation">Occupation</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fatherOccupation"
                  value={data.fatherOccupation}
                  onChange={(e) => updateData({ fatherOccupation: e.target.value })}
                  placeholder="Enter occupation"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fatherPhone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fatherPhone"
                  type="tel"
                  value={data.fatherPhone}
                  onChange={(e) => updateData({ fatherPhone: e.target.value })}
                  placeholder="Enter phone number"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fatherEmail">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fatherEmail"
                  type="email"
                  value={data.fatherEmail}
                  onChange={(e) => updateData({ fatherEmail: e.target.value })}
                  placeholder="Enter email address"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mother's Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="h-5 w-5 text-accent" />
            Mother's Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="motherName">Full Name *</Label>
              <Input
                id="motherName"
                value={data.motherName}
                onChange={(e) => updateData({ motherName: e.target.value })}
                placeholder="Enter mother's full name"
                className="transition-all duration-200 focus:shadow-step"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motherOccupation">Occupation</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="motherOccupation"
                  value={data.motherOccupation}
                  onChange={(e) => updateData({ motherOccupation: e.target.value })}
                  placeholder="Enter occupation"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="motherPhone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="motherPhone"
                  type="tel"
                  value={data.motherPhone}
                  onChange={(e) => updateData({ motherPhone: e.target.value })}
                  placeholder="Enter phone number"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motherEmail">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="motherEmail"
                  type="email"
                  value={data.motherEmail}
                  onChange={(e) => updateData({ motherEmail: e.target.value })}
                  placeholder="Enter email address"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};