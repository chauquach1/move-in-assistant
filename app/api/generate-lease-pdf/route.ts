/**
 * /api/generate-lease-pdf
 *
 * Generates a PDF lease agreement by filling form fields with lease data.
 * Currently disabled (commented out) and marked for authentication integration.
 *
 * TODO: Uncomment and add Supabase auth check using `requireServerUser()` to protect this endpoint.
 *
 * Expected request:
 * - POST with JSON body containing lease form data
 *
 * Response:
 * - 200: PDF file as attachment
 * - 401: Unauthorized (when auth is implemented)
 * - 500: Error generating PDF
 */

import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'

/**
 * Type for validated and normalized lease form data
 */
interface ValidatedLeaseData {
  [key: string]: string | boolean | number
}

/**
 * Validates and normalizes form data from the client.
 * Converts form fields like checkboxes to appropriate types.
 *
 * @param rawData - Raw form data from the request
 * @returns Normalized data ready for PDF generation
 */
function validateAndNormalizeFormData(rawData: Record<string, any>): ValidatedLeaseData {
  const normalized: ValidatedLeaseData = {};
  
  // Process each field from the form data
  for (const [key, value] of Object.entries(rawData)) {
    // Convert checkbox fields to booleans (they come as 'on' when checked)
    if (key.startsWith('customerOfRecord_') || key.startsWith('chargedToTenant_')) {
      normalized[key] = value === 'on';
    }
    // Keep other fields as-is (text, numbers, etc.)
    else {
      normalized[key] = value;
    }
  }
  
  return normalized;
}

// export async function POST(request: NextRequest) {
//   try {
//     // Parse the incoming JSON request body containing lease form data
//     const rawFormData = await request.json();
//
//     // TODO: Add authentication check here when Supabase Auth is implemented
//     // Example with requireServerUser:
//     // const user = await requireServerUser();
//     // if (!user) {
//     //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     // }
//
//     // Validate and normalize the form data (convert checkboxes to booleans, etc.)
//     const validatedData = validateAndNormalizeFormData(rawFormData);
//     
//     console.log('Validated data:', validatedData);
//
//     // Fill the PDF with validated data (not yet implemented)
//     // const pdfBytes = await fillLeasePDF(validatedData);
//
//     // Return the PDF as a downloadable attachment
//     // return new NextResponse(pdfBytes, {
//     //   status: 200,
//     //   headers: {
//     //     'Content-Type': 'application/pdf',
//     //     'Content-Disposition': `attachment; filename="lease-agreement-${Date.now()}.pdf"`,
//     //   },
//     // });
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error generating lease PDF:', error);
//     
//     // Return a 500 error response with details
//     return NextResponse.json(
//       { 
//         error: 'Failed to generate PDF',
//         message: error instanceof Error ? error.message : 'Unknown error'
//       },
//       { status: 500 }
//     );
//   }
// }