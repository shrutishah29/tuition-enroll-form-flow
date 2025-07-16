import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertTriangle, Phone, User } from 'lucide-react';
import { ContactData } from '../AdmissionForm';

interface ContactInfoStepProps {
  data: ContactData;
  updateData: (data: Partial<ContactData>) => void;
}

const relationships = [
  'Grandparent',
  'Uncle/Aunt',
  'Family Friend',
  'Sibling',
  'Other Relative',
  'Neighbor'
];

export const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Address Information */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            Address Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Street Address *</Label>
            <Textarea
              id="address"
              value={data.address}
              onChange={(e) => updateData({ address: e.target.value })}
              placeholder="Enter complete street address"
              className="min-h-[80px] transition-all duration-200 focus:shadow-step"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={data.city}
                onChange={(e) => updateData({ city: e.target.value })}
                placeholder="Enter city"
                className="transition-all duration-200 focus:shadow-step"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code *</Label>
              <Input
                id="postalCode"
                value={data.postalCode}
                onChange={(e) => updateData({ postalCode: e.target.value })}
                placeholder="Enter postal code"
                className="transition-all duration-200 focus:shadow-step"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="shadow-step">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Emergency Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="emergencyContactName"
                value={data.emergencyContactName}
                onChange={(e) => updateData({ emergencyContactName: e.target.value })}
                placeholder="Enter emergency contact name"
                className="pl-10 transition-all duration-200 focus:shadow-step"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="emergencyContactPhone"
                  type="tel"
                  value={data.emergencyContactPhone}
                  onChange={(e) => updateData({ emergencyContactPhone: e.target.value })}
                  placeholder="Enter phone number"
                  className="pl-10 transition-all duration-200 focus:shadow-step"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContactRelation">Relationship *</Label>
              <Select 
                value={data.emergencyContactRelation} 
                onValueChange={(value) => updateData({ emergencyContactRelation: value })}
              >
                <SelectTrigger className="transition-all duration-200 focus:shadow-step">
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  {relationships.map((relation) => (
                    <SelectItem key={relation} value={relation}>
                      {relation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 inline mr-2" />
              This person will be contacted in case of emergencies when parents/guardians are not available.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};