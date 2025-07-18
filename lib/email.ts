// lib/email.ts
import { Resend } from "resend";
import { ReferralFormData } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    const result = await resend.emails.send({
      from: "website@allnurseshomehealth.com",
      to: "referrals@allnurseshomehealth.com",
      subject: `Website Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
}

export async function sendReferralEmail(data: ReferralFormData) {
  try {
    const result = await resend.emails.send({
      from: "referrals@allnurseshomehealth.com",
      to: "referrals@allnurseshomehealth.com",
      subject: `New Patient Referral: ${data.patientName}`,
      html: `
        <h2>New Patient Referral</h2>
        
        <h3>Contact Information:</h3>
        <p><strong>Contact Person:</strong> ${data.contactPersonName}</p>
        <p><strong>Email:</strong> ${data.contactEmail}</p>
        <p><strong>Phone:</strong> ${data.contactPhone}</p>
        <p><strong>Relationship:</strong> ${data.relationship}</p>
        
        <h3>Patient Information:</h3>
        <p><strong>Patient Name:</strong> ${data.patientName}</p>
        <p><strong>Age:</strong> ${data.patientAge}</p>
        <p><strong>Gender:</strong> ${data.patientGender}</p>
        
        <h3>Address:</h3>
        <p>${data.streetAddress}<br>
        ${data.city}, ${data.state} ${data.zipCode}</p>
        
        <h3>Service Information:</h3>
        <p><strong>Services Needed:</strong><br>${data.servicesNeeded}</p>
        ${data.primaryCarePhysician ? `<p><strong>Primary Care Physician:</strong> ${data.primaryCarePhysician}</p>` : ""}
        
        <h3>Insurance Information:</h3>
        ${data.insuranceCarrier ? `<p><strong>Carrier:</strong> ${data.insuranceCarrier}</p>` : ""}
        ${data.insuranceId ? `<p><strong>ID:</strong> ${data.insuranceId}</p>` : ""}
        ${data.insuranceGroup ? `<p><strong>Group:</strong> ${data.insuranceGroup}</p>` : ""}
        
        <p><strong>Services Needed By:</strong> ${data.serviceDate}</p>
        
        ${data.additionalInfo ? `<h3>Additional Information:</h3><p>${data.additionalInfo}</p>` : ""}
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending referral email:", error);
    return { success: false, error };
  }
}
