// lib/validations.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const referralFormSchema = z.object({
  // Contact Person Information
  contactPersonName: z.string().min(2, "Contact person name is required"),
  contactEmail: z.string().email("Please enter a valid email address"),
  contactPhone: z.string().min(10, "Please enter a valid phone number"),
  relationship: z
    .enum(["self", "family", "friend", "other"])
    .refine((val) => val !== undefined, {
      message: "Please select your relationship to the patient",
    }),

  // Patient Information
  patientName: z.string().min(2, "Patient name is required"),
  patientAge: z
    .number()
    .min(1, "Patient age is required")
    .max(120, "Please enter a valid age"),
  patientGender: z
    .enum(["female", "male", "other", "prefer-not-to-say"])
    .refine((val) => val !== undefined, {
      message: "Please select patient gender",
    }),
  // Address Information
  streetAddress: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().default("Texas"),
  zipCode: z.string().min(5, "ZIP code is required"),

  // Service Information
  servicesNeeded: z.string().min(10, "Please describe the services needed"),
  primaryCarePhysician: z.string().optional(),
  insuranceCarrier: z.string().optional(),
  insuranceId: z.string().optional(),
  insuranceGroup: z.string().optional(),

  // Timing
  serviceDate: z.string().min(1, "Please select when services are needed"),

  // Additional Information
  additionalInfo: z.string().optional(),
});

export type ReferralFormData = z.infer<typeof referralFormSchema>;

export const careerFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(10, "Please describe your experience"),
  resume: z.any().optional(),
  coverLetter: z.string().optional(),
});

export type CareerFormData = z.infer<typeof careerFormSchema>;
